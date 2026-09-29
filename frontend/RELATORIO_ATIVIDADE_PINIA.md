# Atividade Individual — Validador de Planilha com Pinia

## Objetivo

O sistema importa uma planilha Excel (`.xlsx`, `.xls` ou `.csv`), armazena os dados temporariamente no Pinia, realiza validações e exibe um relatório de erros.

## Fluxo da aplicação

`Excel → tela de Upload → store Pinia → tela de Relatórios`

## Store Pinia

Arquivo: `src/stores/uploadStore.js`.

### State

- `arquivo`: arquivo escolhido pelo usuário.
- `dadosOriginais`: linhas lidas da planilha, com o número da linha.
- `dadosTratados`: dados normalizados para uso na aplicação.
- `erros`: lista estruturada com linha, campo, tipo e descrição.
- `carregando` e `processado`: controlam o processamento e a exibição do relatório.

### Getters

- Totais de registros, registros válidos e registros com erro.
- Total de ocorrências de erro.
- Agrupamento de erros por tipo.
- Contagem de clientes por nível.

### Actions

- Seleção e validação do arquivo.
- Leitura da primeira aba com a biblioteca XLSX.
- Validação, tratamento e identificação de duplicidades.

## Validações implementadas

- Campos obrigatórios vazios.
- Espaços desnecessários no início e no fim dos valores.
- Código de cliente e e-mail duplicados.
- E-mails em formato inválido.
- Código do cliente, nível e faturamento fora do padrão.
- Textos com espaçamentos internos que precisam de padronização.
- Formato de arquivo, planilha vazia e colunas obrigatórias ausentes.

## Relatório

A tela `Relatórios` exibe o nome do arquivo, quantidade total de registros, válidos, com erro, quantidade por tipo de erro e o detalhamento com linha, campo, tipo e descrição.
