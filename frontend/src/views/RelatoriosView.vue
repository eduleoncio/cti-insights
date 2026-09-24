<script setup>
import { computed } from 'vue'
import { useUploadStore } from '../stores/uploadStore'

const upload = useUploadStore()

const registros = computed(() => {
  return upload.dadosTratados || []
})

function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(valor || 0))
}
</script>

<template>
  <main class="
      min-h-screen
      bg-[#09090b]
      px-6
      py-7
      text-zinc-100

      lg:px-8
    ">
    <div class="mx-auto max-w-[1500px]">

      <!-- HEADER -->
      <header class="
          mb-8
          flex
          flex-col
          justify-between
          gap-5

          md:flex-row
          md:items-end
        ">
        <div>
          <h1 class="
              text-2xl
              font-semibold
              tracking-tight
              text-white

              md:text-3xl
            ">
            Relatórios
          </h1>

          <p class="
              mt-2
              text-sm
              text-zinc-400
            ">
            Consulte os dados detalhados dos clientes processados.
          </p>
        </div>

        <button class="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-white/[0.08]
            bg-[#111214]
            px-4
            py-2.5
            text-sm
            font-medium
            text-zinc-300
            transition

            hover:bg-white/[0.05]
            hover:text-white
          ">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M12 3v12" />
            <path d="M8 11l4 4 4-4" />
            <path d="M5 21h14" />
          </svg>

          Exportar
        </button>
      </header>

      <!-- RESUMO -->
      <section class="
          mb-6
          grid
          gap-4

          sm:grid-cols-2
          lg:grid-cols-4
        ">

        <!-- TOTAL -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          ">
          <p class="text-sm text-zinc-500">
            Total de registros
          </p>

          <p class="
              mt-4
              text-3xl
              font-semibold
              text-white
            ">
            {{ upload.totalClientes }}
          </p>

          <p class="
              mt-4
              border-t
              border-white/[0.05]
              pt-4
              text-xs
              text-zinc-600
            ">
            Clientes processados
          </p>
        </article>

        <!-- NIVEL A -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          ">
          <p class="text-sm text-zinc-500">
            Clientes nível A
          </p>

          <p class="
              mt-4
              text-3xl
              font-semibold
              text-white
            ">
            {{ upload.clientesNivelA }}
          </p>

          <p class="
              mt-4
              border-t
              border-white/[0.05]
              pt-4
              text-xs
              text-zinc-600
            ">
            Alta prioridade
          </p>
        </article>

        <!-- NIVEL B -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          ">
          <p class="text-sm text-zinc-500">
            Clientes nível B
          </p>

          <p class="
              mt-4
              text-3xl
              font-semibold
              text-white
            ">
            {{ upload.clientesNivelB }}
          </p>

          <p class="
              mt-4
              border-t
              border-white/[0.05]
              pt-4
              text-xs
              text-zinc-600
            ">
            Média prioridade
          </p>
        </article>

        <!-- NIVEL C -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          ">
          <p class="text-sm text-zinc-500">
            Clientes nível C
          </p>

          <p class="
              mt-4
              text-3xl
              font-semibold
              text-white
            ">
            {{ upload.clientesNivelC }}
          </p>

          <p class="
              mt-4
              border-t
              border-white/[0.05]
              pt-4
              text-xs
              text-zinc-600
            ">
            Baixa prioridade
          </p>
        </article>

      </section>

      <!-- TABELA -->
      <section class="
          overflow-hidden
          rounded-xl
          border
          border-white/[0.07]
          bg-[#111214]
        ">

        <!-- TOPO DA TABELA -->
        <div class="
            flex
            flex-col
            justify-between
            gap-4
            border-b
            border-white/[0.06]
            p-6

            sm:flex-row
            sm:items-center
          ">
          <div>
            <h2 class="font-semibold text-white">
              Base de clientes
            </h2>

            <p class="
                mt-1
                text-sm
                text-zinc-500
              ">
              Informações processadas da planilha atual.
            </p>
          </div>

          <span class="
              rounded-lg
              border
              border-white/[0.06]
              bg-[#0d0e10]
              px-3
              py-2
              text-xs
              text-zinc-500
            ">
            {{ registros.length }} registros
          </span>
        </div>

        <!-- TABELA COM DADOS -->
        <div v-if="registros.length" class="overflow-x-auto">
          <table class="
              w-full
              text-left
              text-sm
            ">

            <thead class="
                border-b
                border-white/[0.05]
                bg-[#0d0e10]
                text-xs
                text-zinc-500
              ">
              <tr>
                <th class="px-6 py-4 font-medium">
                  ID
                </th>

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
                  Faturamento
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

              <tr v-for="(cliente, index) in registros" :key="index" class="
                  border-b
                  border-white/[0.04]
                  transition

                  last:border-b-0
                  hover:bg-white/[0.02]
                ">

                <!-- ID -->
                <td class="
                    px-6
                    py-4
                    text-zinc-600
                  ">
                  {{ index + 1 }}
                </td>

                <!-- CLIENTE -->
                <td class="
                    px-6
                    py-4
                    font-medium
                    text-zinc-200
                  ">
                  {{
                    cliente.cliente ||
                    cliente.nome_cliente ||
                    cliente.nome ||
                    'Não informado'
                  }}
                </td>

                <!-- CONSULTOR -->
                <td class="
                    px-6
                    py-4
                    text-zinc-400
                  ">
                  {{ cliente.consultor || '-' }}
                </td>

                <!-- SEGMENTO -->
                <td class="
                    px-6
                    py-4
                    text-zinc-400
                  ">
                  {{ cliente.segmento || '-' }}
                </td>

                <!-- FATURAMENTO -->
                <td class="
                    px-6
                    py-4
                    text-zinc-300
                  ">
                  {{ formatarMoeda(cliente.faturamento) }}
                </td>

                <!-- NIVEL -->
                <td class="px-6 py-4">

                  <span :class="[
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
                  ]">
                    {{ cliente.nivel_cliente || '-' }}
                  </span>

                </td>

                <!-- STATUS -->
                <td class="px-6 py-4">

                  <div class="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      text-zinc-400
                    ">
                    <span class="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-blue-500
                      "></span>

                    Processado
                  </div>

                </td>

              </tr>

            </tbody>

          </table>
        </div>

        <!-- SEM DADOS -->
        <div v-else class="
            flex
            min-h-72
            items-center
            justify-center
            p-8
          ">
          <div class="text-center">

            <div class="
                mx-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-lg
                bg-white/[0.04]
                text-zinc-600
              ">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                <path d="M7 3h10l4 4v14H7z" />
                <path d="M17 3v5h5" />
                <path d="M10 13h7" />
                <path d="M10 17h5" />
              </svg>
            </div>

            <p class="
                mt-4
                text-sm
                text-zinc-400
              ">
              Nenhum dado carregado.
            </p>

            <p class="
                mt-1
                text-xs
                text-zinc-600
              ">
              Importe uma planilha para gerar o relatório.
            </p>

            <router-link to="/upload" class="
                mt-5
                inline-flex
                rounded-lg
                bg-blue-600
                px-4
                py-2.5
                text-sm
                font-medium
                text-white
                transition

                hover:bg-blue-500
              ">
              Importar dados
            </router-link>

          </div>
        </div>

      </section>

    </div>
  </main>
</template>
