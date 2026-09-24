<script setup>
import { computed, ref } from 'vue'
import { useUploadStore } from '../stores/uploadStore'

const upload = useUploadStore()

const arrastando = ref(false)

const nomeArquivo = computed(() => {
  return upload.arquivo
    ? upload.arquivo.name
    : 'Nenhum arquivo selecionado'
})


const tamanhoArquivo = computed(() => {
  if (!upload.arquivo) {
    return ''
  }

  const tamanho = upload.arquivo.size

  if (tamanho < 1024) {
    return `${tamanho} B`
  }

  if (tamanho < 1024 * 1024) {
    return `${(tamanho / 1024).toFixed(1)} KB`
  }

  return `${(tamanho / (1024 * 1024)).toFixed(1)} MB`
})

function selecionarArquivo(file) {
  if (!file) {
    return
  }

  upload.selecionarArquivo(file)
}

function arquivoSelecionado(event) {
  selecionarArquivo(
    event.target.files[0]
  )
}

function soltarArquivo(event) {
  arrastando.value = false

  const file =
    event.dataTransfer.files[0]

  selecionarArquivo(file)
}

async function processar() {
  await upload.processarPlanilha()
}
</script>

<template>
  <div
    class="
      min-h-screen
      bg-[#09090b]
      px-6
      py-7
      text-zinc-100

      lg:px-8
    "
  >
    <div class="mx-auto max-w-[1500px]">

      <!-- HEADER -->
      <header
        class="
          mb-8
          flex
          flex-col
          justify-between
          gap-5

          md:flex-row
          md:items-end
        "
      >
        <div>
          <h1
            class="
              text-2xl
              font-semibold
              tracking-tight
              text-white

              md:text-3xl
            "
          >
            Importar dados
          </h1>

          <p
            class="
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-zinc-400
            "
          >
            Envie uma planilha para organizar, padronizar
            e preparar os dados para análise.
          </p>
        </div>

        <div
          class="
            rounded-lg
            border
            border-white/[0.07]
            bg-[#111214]
            px-3
            py-2
            text-xs
            text-zinc-500
          "
        >
          XLSX, XLS ou CSV
        </div>
      </header>

      <!-- CARD PRINCIPAL -->
      <section
        class="
          rounded-xl
          border
          border-white/[0.07]
          bg-[#111214]
          p-6
        "
      >

        <!-- ÁREA DE UPLOAD -->
        <div
          @dragover.prevent="arrastando = true"
          @dragleave.prevent="arrastando = false"
          @drop.prevent="soltarArquivo"
          :class="[
            `
            flex
            min-h-[290px]
            flex-col
            items-center
            justify-center
            rounded-xl
            border
            border-dashed
            px-6
            py-10
            text-center
            transition
            `,
            arrastando
              ? `
                border-blue-500
                bg-blue-500/[0.04]
              `
              : `
                border-white/[0.09]
                bg-[#0d0e10]
                hover:border-white/[0.16]
              `
          ]"
        >

          <!-- ÍCONE -->
          <div
            class="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-lg
              bg-blue-500/10
              text-blue-400
            "
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M12 16V4" />
              <path d="M8 8l4-4 4 4" />
              <path d="M4 15v4a1 1 0 001 1h14a1 1 0 001-1v-4" />
            </svg>
          </div>

          <h2
            class="
              mt-5
              text-base
              font-semibold
              text-white
            "
          >
            Envie sua planilha
          </h2>

          <p
            class="
              mt-2
              max-w-md
              text-sm
              leading-6
              text-zinc-500
            "
          >
            Arraste um arquivo para esta área
            ou selecione manualmente no seu computador.
          </p>

          <label
            class="
              mt-6
              cursor-pointer
              rounded-lg
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition

              hover:bg-blue-500
            "
          >
            Selecionar arquivo

            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              class="hidden"
              @change="arquivoSelecionado"
            >
          </label>

          <p
            class="
              mt-4
              text-xs
              text-zinc-600
            "
          >
            Formatos suportados: XLSX, XLS e CSV
          </p>

        </div>

        <!-- ARQUIVO SELECIONADO -->
        <div
          v-if="upload.arquivo"
          class="
            mt-5
            flex
            flex-col
            gap-4
            rounded-xl
            border
            border-white/[0.07]
            bg-[#0d0e10]
            p-4

            sm:flex-row
            sm:items-center
          "
        >

          <div
            class="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-blue-500/10
              text-blue-400
            "
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M7 3h10l4 4v14H7z" />
              <path d="M17 3v5h5" />
              <path d="M10 13h7" />
              <path d="M10 17h5" />
            </svg>
          </div>

          <div class="min-w-0 flex-1">

            <p
              class="
                truncate
                text-sm
                font-medium
                text-white
              "
            >
              {{ nomeArquivo }}
            </p>

            <div
              class="
                mt-1
                flex
                flex-wrap
                items-center
                gap-2
                text-xs
                text-zinc-500
              "
            >
              <span>
                {{ tamanhoArquivo }}
              </span>

              <span>
                •
              </span>

              <span>
                pronto para processamento
              </span>
            </div>

          </div>

          <button
            @click="processar"
            :disabled="upload.carregando"
            class="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition

              hover:bg-blue-500

              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >

            <svg
              v-if="upload.carregando"
              class="
                h-4
                w-4
                animate-spin
              "
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                stroke-width="3"
                class="opacity-20"
              />

              <path
                d="M21 12a9 9 0 00-9-9"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>

            {{
              upload.carregando
                ? 'Processando...'
                : 'Processar dados'
            }}
          </button>

        </div>

        <!-- ERROS -->
        <div
          v-if="upload.erros.length"
          class="
            mt-5
            rounded-xl
            border
            border-red-500/15
            bg-red-500/[0.04]
            p-4
          "
        >

          <div
            class="
              flex
              items-start
              gap-3
            "
          >
            <div
              class="
                mt-0.5
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-red-500/10
                text-red-400
              "
            >
              <svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5" />
                <path d="M12 16h.01" />
              </svg>
            </div>

            <div>
              <p
                class="
                  text-sm
                  font-medium
                  text-red-400
                "
              >
                Não foi possível concluir a importação
              </p>

              <p
                v-for="erro in upload.erros"
                :key="erro"
                class="
                  mt-1
                  text-sm
                  text-red-300/70
                "
              >
                {{ erro }}
              </p>
            </div>
          </div>

        </div>

      </section>

      <!-- DADOS PROCESSADOS -->
      <template v-if="upload.temDados">

        <!-- RESUMO -->
        <section
          class="
            mt-6
            grid
            gap-4

            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          <!-- REGISTROS -->
          <article
            class="
              rounded-xl
              border
              border-white/[0.07]
              bg-[#111214]
              p-5
            "
          >
            <div
              class="
                flex
                items-start
                justify-between
              "
            >
              <div>
                <p class="text-sm text-zinc-500">
                  Registros processados
                </p>

                <p
                  class="
                    mt-4
                    text-3xl
                    font-semibold
                    text-white
                  "
                >
                  {{ upload.totalClientes }}
                </p>
              </div>

              <div
                class="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path d="M4 19V5" />
                  <path d="M8 19V9" />
                  <path d="M12 19V13" />
                  <path d="M16 19V7" />
                  <path d="M20 19V3" />
                </svg>
              </div>
            </div>

            <p
              class="
                mt-4
                border-t
                border-white/[0.05]
                pt-4
                text-xs
                text-zinc-600
              "
            >
              Total de linhas válidas na base
            </p>
          </article>

          <!-- NÍVEL A -->
          <article
            class="
              rounded-xl
              border
              border-white/[0.07]
              bg-[#111214]
              p-5
            "
          >
            <div
              class="
                flex
                items-start
                justify-between
              "
            >
              <div>
                <p class="text-sm text-zinc-500">
                  Clientes nível A
                </p>

                <p
                  class="
                    mt-4
                    text-3xl
                    font-semibold
                    text-white
                  "
                >
                  {{ upload.clientesNivelA }}
                </p>
              </div>

              <div
                class="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-500/10
                  text-sm
                  font-semibold
                  text-blue-400
                "
              >
                A
              </div>
            </div>

            <p
              class="
                mt-4
                border-t
                border-white/[0.05]
                pt-4
                text-xs
                text-zinc-600
              "
            >
              Clientes de maior prioridade
            </p>
          </article>

          <!-- ERROS -->
          <article
            class="
              rounded-xl
              border
              border-white/[0.07]
              bg-[#111214]
              p-5
            "
          >
            <div
              class="
                flex
                items-start
                justify-between
              "
            >
              <div>
                <p class="text-sm text-zinc-500">
                  Erros encontrados
                </p>

                <p
                  class="
                    mt-4
                    text-3xl
                    font-semibold
                    text-white
                  "
                >
                  {{ upload.totalErros }}
                </p>
              </div>

              <div
                class="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/[0.04]
                  text-zinc-500
                "
              >
                !
              </div>
            </div>

            <p
              class="
                mt-4
                border-t
                border-white/[0.05]
                pt-4
                text-xs
                text-zinc-600
              "
            >
              Problemas encontrados na importação
            </p>
          </article>

        </section>

        <!-- TABELA -->
        <section
          class="
            mt-6
            overflow-hidden
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
          "
        >

          <!-- TOPO -->
          <div
            class="
              flex
              flex-col
              justify-between
              gap-4
              border-b
              border-white/[0.06]
              p-6

              sm:flex-row
              sm:items-center
            "
          >
            <div>
              <h2
                class="
                  font-semibold
                  text-white
                "
              >
                Pré-visualização
              </h2>

              <p
                class="
                  mt-1
                  text-sm
                  text-zinc-500
                "
              >
                Dados após tratamento e padronização.
              </p>
            </div>

            <div
              class="
                flex
                items-center
                gap-2
              "
            >
              <span
                class="
                  rounded-lg
                  border
                  border-white/[0.06]
                  bg-[#0d0e10]
                  px-3
                  py-2
                  text-xs
                  text-zinc-500
                "
              >
                {{ upload.totalClientes }} registros
              </span>
            </div>
          </div>

          <!-- TABELA -->
          <div class="overflow-x-auto">

            <table
              class="
                w-full
                text-left
                text-sm
              "
            >

              <thead
                class="
                  bg-[#0d0e10]
                  text-xs
                  text-zinc-500
                "
              >
                <tr
                  class="
                    border-b
                    border-white/[0.05]
                  "
                >
                  <th class="px-6 py-4 font-medium">
                    Cliente
                  </th>

                  <th class="px-6 py-4 font-medium">
                    Consultor
                  </th>

                  <th class="px-6 py-4 font-medium">
                    Segmento
                  </th>

                  <th class="px-6 py-4 font-medium">
                    Nível
                  </th>

                  <th class="px-6 py-4 font-medium">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(cliente, index) in upload.dadosTratados.slice(0, 10)"
                  :key="index"
                  class="
                    border-b
                    border-white/[0.04]
                    transition

                    last:border-b-0
                    hover:bg-white/[0.02]
                  "
                >

                  <!-- CLIENTE -->
                  <td
                    class="
                      px-6
                      py-4
                      font-medium
                      text-zinc-200
                    "
                  >
                    {{
                      cliente.cliente ||
                      cliente.nome_cliente ||
                      cliente.nome ||
                      'Não informado'
                    }}
                  </td>

                  <!-- CONSULTOR -->
                  <td
                    class="
                      px-6
                      py-4
                      text-zinc-400
                    "
                  >
                    {{ cliente.consultor || '-' }}
                  </td>

                  <!-- SEGMENTO -->
                  <td
                    class="
                      px-6
                      py-4
                      text-zinc-400
                    "
                  >
                    {{ cliente.segmento || '-' }}
                  </td>

                  <!-- NÍVEL -->
                  <td class="px-6 py-4">

                    <span
                      :class="[
                        `
                        inline-flex
                        min-w-7
                        items-center
                        justify-center
                        rounded-md
                        px-2
                        py-1
                        text-xs
                        font-medium
                        `,
                        cliente.nivel_cliente === 'A'
                          ? `
                            bg-blue-500/10
                            text-blue-400
                          `
                          : cliente.nivel_cliente === 'B'
                            ? `
                              bg-white/[0.05]
                              text-zinc-300
                            `
                            : `
                              bg-white/[0.035]
                              text-zinc-500
                            `
                      ]"
                    >
                      {{ cliente.nivel_cliente || '-' }}
                    </span>

                  </td>

                  <!-- STATUS -->
                  <td class="px-6 py-4">

                    <div
                      class="
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        text-zinc-400
                      "
                    >
                      <span
                        class="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-blue-500
                        "
                      ></span>

                      Processado
                    </div>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- RODAPÉ DA TABELA -->
          <div
            v-if="upload.totalClientes > 10"
            class="
              border-t
              border-white/[0.05]
              px-6
              py-4
              text-xs
              text-zinc-600
            "
          >
            Exibindo os primeiros 10 de
            {{ upload.totalClientes }} registros.
          </div>

        </section>

      </template>

      <!-- ESTADO INICIAL -->
      <section
        v-else
        class="
          mt-6
          grid
          gap-4

          md:grid-cols-3
        "
      >

        <article
          class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          "
        >
          <p class="text-sm font-medium text-zinc-300">
            1. Selecione
          </p>

          <p
            class="
              mt-2
              text-sm
              leading-6
              text-zinc-500
            "
          >
            Escolha uma planilha no formato XLSX,
            XLS ou CSV.
          </p>
        </article>

        <article
          class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          "
        >
          <p class="text-sm font-medium text-zinc-300">
            2. Processe
          </p>

          <p
            class="
              mt-2
              text-sm
              leading-6
              text-zinc-500
            "
          >
            O sistema fará a leitura e padronização
            dos registros.
          </p>
        </article>

        <article
          class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          "
        >
          <p class="text-sm font-medium text-zinc-300">
            3. Analise
          </p>

          <p
            class="
              mt-2
              text-sm
              leading-6
              text-zinc-500
            "
          >
            Os dados ficarão disponíveis no dashboard
            e nos relatórios.
          </p>
        </article>

      </section>

    </div>
  </div>
</template>
