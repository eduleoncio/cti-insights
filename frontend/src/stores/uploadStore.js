import { defineStore } from 'pinia'
import * as XLSX from 'xlsx'

const CAMPOS_OBRIGATORIOS = [
  'codigo_cliente', 'nome_cliente', 'consultor', 'segmento', 'nivel_cliente', 'faturamento_anual'
]

const normalizarChave = (valor) => String(valor || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .trim()
  .toUpperCase()

const numeroValido = (valor) => {
  if (typeof valor === 'number') return Number.isFinite(valor)
  const texto = String(valor || '').trim().replace(/R\$/g, '').replace(/\./g, '').replace(',', '.')
  return texto !== '' && Number.isFinite(Number(texto))
}

const converterNumero = (valor) => {
  if (typeof valor === 'number') return valor
  return Number(String(valor || '').trim().replace(/R\$/g, '').replace(/\./g, '').replace(',', '.'))
}

export const useUploadStore = defineStore('upload', {
  state: () => ({
    arquivo: null,
    dadosOriginais: [],
    dadosTratados: [],
    erros: [],
    carregando: false
  }),

  getters: {
    totalClientes: (state) => state.dadosTratados.length,
    totalErros: (state) => state.erros.length,
    clientesNivelA: (state) => state.dadosTratados.filter((cliente) => cliente.nivel_cliente === 'A').length,
    clientesNivelB: (state) => state.dadosTratados.filter((cliente) => cliente.nivel_cliente === 'B').length,
    clientesNivelC: (state) => state.dadosTratados.filter((cliente) => cliente.nivel_cliente === 'C').length,
    faturamentoMedio: (state) => {
      if (!state.dadosTratados.length) return 0
      return state.dadosTratados.reduce((soma, cliente) => soma + cliente.faturamento, 0) / state.dadosTratados.length
    },
    segmentos: (state) => state.dadosTratados.reduce((resultado, cliente) => {
      const segmento = cliente.segmento || 'Não informado'
      resultado[segmento] = (resultado[segmento] || 0) + 1
      return resultado
    }, {}),
    temDados: (state) => state.dadosTratados.length > 0
  },

  actions: {
    selecionarArquivo(file) {
      this.arquivo = file
      this.erros = []
      this.dadosOriginais = []
      this.dadosTratados = []
    },

    validarArquivo() {
      if (!this.arquivo) {
        this.erros.push('Selecione um arquivo.')
        return false
      }

      const extensoesPermitidas = ['.xlsx', '.xls', '.csv']
      const extensaoValida = extensoesPermitidas.some((extensao) => this.arquivo.name.toLowerCase().endsWith(extensao))
      if (!extensaoValida) {
        this.erros.push('Formato inválido. Use .xlsx, .xls ou .csv.')
        return false
      }
      return true
    },

    async processarPlanilha() {
      if (!this.validarArquivo()) return

      this.carregando = true
      this.erros = []
      this.dadosOriginais = []
      this.dadosTratados = []

      try {
        const buffer = await this.arquivo.arrayBuffer()
        const workbook = XLSX.read(buffer, { cellDates: true })
        const primeiraAba = workbook.SheetNames[0]
        if (!primeiraAba) {
          this.erros.push('A planilha não possui abas para importar.')
          return
        }

        const linhas = XLSX.utils.sheet_to_json(workbook.Sheets[primeiraAba], { defval: '' })
        if (!linhas.length) {
          this.erros.push('A primeira aba da planilha está vazia.')
          return
        }

        const colunas = Object.keys(linhas[0])
        const camposAusentes = CAMPOS_OBRIGATORIOS.filter((campo) => !colunas.includes(campo))
        if (camposAusentes.length) {
          this.erros.push(`Colunas obrigatórias ausentes: ${camposAusentes.join(', ')}.`)
          return
        }

        this.dadosOriginais = linhas
        const dadosValidos = []
        linhas.forEach((linha, indice) => {
          const erro = this.validarLinha(linha, indice + 2)
          if (erro) this.erros.push(erro)
          else dadosValidos.push(this.tratarLinha(linha))
        })
        this.dadosTratados = dadosValidos

        if (!dadosValidos.length && !this.erros.length) {
          this.erros.push('Nenhum registro válido foi encontrado na planilha.')
        }
      } catch (erro) {
        console.error(erro)
        this.erros.push('Não foi possível processar a planilha.')
      } finally {
        this.carregando = false
      }
    },

    validarLinha(linha, numeroLinha) {
      const camposVazios = CAMPOS_OBRIGATORIOS.filter((campo) => String(linha[campo] ?? '').trim() === '')
      if (camposVazios.length) return `Linha ${numeroLinha}: preencha ${camposVazios.join(', ')}.`
      if (!numeroValido(linha.faturamento_anual)) return `Linha ${numeroLinha}: faturamento_anual deve ser numérico.`
      return null
    },

    tratarLinha(linha) {
      const segmentoOriginal = String(linha.segmento || '').trim()
      const mapaSegmentos = {
        IND: 'Indústria', INDUSTRIA: 'Indústria', COMERCIO: 'Comércio', SERVICOS: 'Serviços',
        EDUCACAO: 'Educação', SAUDE: 'Saúde', TECNOLOGIA: 'Tecnologia'
      }
      const segmento = mapaSegmentos[normalizarChave(segmentoOriginal).replace(/\.$/, '')] || segmentoOriginal
      const faturamento = converterNumero(linha.faturamento_anual)

      return {
        ...linha,
        codigo_cliente: String(linha.codigo_cliente).trim(),
        nome_cliente: String(linha.nome_cliente).trim(),
        cliente: String(linha.nome_cliente).trim(),
        consultor: String(linha.consultor).trim(),
        segmento,
        nivel_cliente: String(linha.nivel_cliente).trim().toUpperCase(),
        faturamento_anual: faturamento,
        faturamento
      }
    }
  }
})
