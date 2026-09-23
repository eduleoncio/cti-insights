<script setup>
import { computed } from 'vue'
import { useUploadStore } from '../stores/uploadStore'

const upload = useUploadStore()

const faturamentoFormatado = computed(() => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(upload.faturamentoMedio || 0)
})

const segmentosOrdenados = computed(() => {
  return Object.entries(upload.segmentos || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
})

const maiorSegmento = computed(() => {
  if (!segmentosOrdenados.value.length) {
    return 'Sem dados'
  }

  return segmentosOrdenados.value[0][0]
})

const totalClassificados = computed(() => {
  return upload.totalClientes
})

function percentualNivel(valor) {
  if (!totalClassificados.value) {
    return 0
  }

  return Math.round(
    (valor / totalClassificados.value) * 100
  )
}
</script>

<template>
  <div class="
      min-h-screen
      bg-[#09090b]
      px-6
      py-7
      text-zinc-100

      lg:px-8
    ">
    <div class="mx-auto max-w-[1500px]">

      <!-- CABEÇALHO -->
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
            Dashboard
          </h1>

          <p class="
              mt-2
              text-sm
              text-zinc-400
            ">
            Acompanhe os principais indicadores da sua base comercial.
          </p>
        </div>

        <div class="
            flex
            flex-wrap
            items-center
            gap-3
          ">
          <span class="
              rounded-lg
              border
              border-white/[0.07]
              bg-[#111214]
              px-3
              py-2
              text-xs
              text-zinc-500
            ">
            Dados da sessão atual
          </span>

          <router-link to="/upload" class="
              inline-flex
              items-center
              justify-center
              gap-2
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
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 16V4" />
              <path d="M8 8l4-4 4 4" />
              <path d="M4 15v4a1 1 0 001 1h14a1 1 0 001-1v-4" />
            </svg>

            Importar dados
          </router-link>
        </div>
      </header>

      <!-- KPIs -->
      <section class="
          grid
          gap-4

          sm:grid-cols-2
          xl:grid-cols-4
        ">

        <!-- TOTAL DE CLIENTES -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          ">
          <div class="
              flex
              items-start
              justify-between
              gap-4
            ">
            <div>
              <p class="
                  text-sm
                  text-zinc-500
                ">
                Total de clientes
              </p>

              <p class="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white
                ">
                {{ upload.totalClientes }}
              </p>
            </div>

            <div class="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-blue-500/10
                text-blue-400
              ">
              <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
          </div>

          <div class="
              mt-5
              border-t
              border-white/[0.05]
              pt-4
            ">
            <p class="text-xs text-zinc-600">
              Registros processados na base atual
            </p>
          </div>
        </article>

        <!-- FATURAMENTO -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          ">
          <div class="
              flex
              items-start
              justify-between
              gap-4
            ">
            <div>
              <p class="text-sm text-zinc-500">
                Faturamento médio
              </p>

              <p class="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white
                ">
                {{ faturamentoFormatado }}
              </p>
            </div>

            <div class="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-blue-500/10
                text-blue-400
              ">
              <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7H14a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
          </div>

          <div class="
              mt-5
              border-t
              border-white/[0.05]
              pt-4
            ">
            <p class="text-xs text-zinc-600">
              Média calculada com os dados importados
            </p>
          </div>
        </article>

        <!-- NIVEL A -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          ">
          <div class="
              flex
              items-start
              justify-between
              gap-4
            ">
            <div>
              <p class="text-sm text-zinc-500">
                Clientes nível A
              </p>

              <p class="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white
                ">
                {{ upload.clientesNivelA }}
              </p>
            </div>

            <div class="
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
              ">
              A
            </div>
          </div>

          <div class="
              mt-5
              border-t
              border-white/[0.05]
              pt-4
            ">
            <p class="text-xs text-zinc-600">
              Clientes de maior prioridade comercial
            </p>
          </div>
        </article>

        <!-- SEGMENTO -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          ">
          <div class="
              flex
              items-start
              justify-between
              gap-4
            ">
            <div class="min-w-0">
              <p class="text-sm text-zinc-500">
                Maior segmento
              </p>

              <p class="
                  mt-4
                  truncate
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                ">
                {{ maiorSegmento }}
              </p>
            </div>

            <div class="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-blue-500/10
                text-blue-400
              ">
              <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M3 3v18h18" />
                <path d="M7 15l4-4 3 3 5-7" />
              </svg>
            </div>
          </div>

          <div class="
              mt-5
              border-t
              border-white/[0.05]
              pt-4
            ">
            <p class="text-xs text-zinc-600">
              Segmento com maior participação
            </p>
          </div>
        </article>

      </section>

      <!-- ÁREA PRINCIPAL -->
      <section class="
          mt-6
          grid
          gap-6

          xl:grid-cols-[1.45fr_0.55fr]
        ">

        <!-- EVOLUÇÃO -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-6
          ">

          <div class="
              flex
              flex-col
              justify-between
              gap-4

              sm:flex-row
              sm:items-center
            ">
            <div>
              <h2 class="
                  font-semibold
                  text-white
                ">
                Evolução da base
              </h2>

              <p class="
                  mt-1
                  text-sm
                  text-zinc-500
                ">
                Crescimento dos clientes ao longo dos últimos meses.
              </p>
            </div>

            <select class="
                rounded-lg
                border
                border-white/[0.07]
                bg-[#0d0e10]
                px-3
                py-2
                text-xs
                text-zinc-400
                outline-none
              ">
              <option>Últimos 6 meses</option>
              <option>Últimos 12 meses</option>
            </select>
          </div>

          <!-- GRÁFICO VISUAL -->
          <div class="
              relative
              mt-8
              h-[300px]
              overflow-hidden
            ">

            <!-- Linhas horizontais -->
            <div class="
                absolute
                inset-x-0
                top-0
                border-t
                border-white/[0.04]
              "></div>

            <div class="
                absolute
                inset-x-0
                top-1/4
                border-t
                border-white/[0.04]
              "></div>

            <div class="
                absolute
                inset-x-0
                top-2/4
                border-t
                border-white/[0.04]
              "></div>

            <div class="
                absolute
                inset-x-0
                top-3/4
                border-t
                border-white/[0.04]
              "></div>

            <div class="
                absolute
                inset-x-0
                bottom-0
                border-t
                border-white/[0.04]
              "></div>

            <!-- BARRAS -->
            <div class="
                absolute
                inset-0
                flex
                items-end
                justify-between
                gap-4
                px-4
                pb-7
                pt-5
              ">

              <div class="
                  flex
                  h-full
                  flex-1
                  flex-col
                  items-center
                  justify-end
                  gap-3
                ">
                <div class="
                    h-[36%]
                    w-full
                    max-w-[58px]
                    rounded-t-md
                    bg-blue-950
                  "></div>

                <span class="text-[11px] text-zinc-600">
                  Abr
                </span>
              </div>

              <div class="
                  flex
                  h-full
                  flex-1
                  flex-col
                  items-center
                  justify-end
                  gap-3
                ">
                <div class="
                    h-[48%]
                    w-full
                    max-w-[58px]
                    rounded-t-md
                    bg-blue-900
                  "></div>

                <span class="text-[11px] text-zinc-600">
                  Mai
                </span>
              </div>

              <div class="
                  flex
                  h-full
                  flex-1
                  flex-col
                  items-center
                  justify-end
                  gap-3
                ">
                <div class="
                    h-[43%]
                    w-full
                    max-w-[58px]
                    rounded-t-md
                    bg-blue-800
                  "></div>

                <span class="text-[11px] text-zinc-600">
                  Jun
                </span>
              </div>

              <div class="
                  flex
                  h-full
                  flex-1
                  flex-col
                  items-center
                  justify-end
                  gap-3
                ">
                <div class="
                    h-[62%]
                    w-full
                    max-w-[58px]
                    rounded-t-md
                    bg-blue-700
                  "></div>

                <span class="text-[11px] text-zinc-600">
                  Jul
                </span>
              </div>

              <div class="
                  flex
                  h-full
                  flex-1
                  flex-col
                  items-center
                  justify-end
                  gap-3
                ">
                <div class="
                    h-[74%]
                    w-full
                    max-w-[58px]
                    rounded-t-md
                    bg-blue-600
                  "></div>

                <span class="text-[11px] text-zinc-600">
                  Ago
                </span>
              </div>

              <div class="
                  flex
                  h-full
                  flex-1
                  flex-col
                  items-center
                  justify-end
                  gap-3
                ">
                <div class="
                    h-[88%]
                    w-full
                    max-w-[58px]
                    rounded-t-md
                    bg-blue-500
                  "></div>

                <span class="text-[11px] text-zinc-600">
                  Set
                </span>
              </div>

            </div>

          </div>

        </article>

        <!-- CLASSIFICAÇÃO -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-6
          ">

          <h2 class="font-semibold text-white">
            Classificação
          </h2>

          <p class="
              mt-1
              text-sm
              text-zinc-500
            ">
            Distribuição por nível.
          </p>

          <div class="mt-8 space-y-6">

            <!-- A -->
            <div>
              <div class="
                  mb-2
                  flex
                  items-center
                  justify-between
                ">
                <div class="flex items-center gap-3">

                  <span class="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-md
                      bg-blue-500/10
                      text-xs
                      font-medium
                      text-blue-400
                    ">
                    A
                  </span>

                  <span class="
                      text-sm
                      text-zinc-300
                    ">
                    Alta prioridade
                  </span>

                </div>

                <span class="
                    text-sm
                    font-medium
                    text-white
                  ">
                  {{ upload.clientesNivelA }}
                </span>
              </div>

              <div class="
                  h-1.5
                  overflow-hidden
                  rounded-full
                  bg-white/[0.05]
                ">
                <div class="
                    h-full
                    rounded-full
                    bg-blue-500
                  " :style="{
                    width: `${percentualNivel(upload.clientesNivelA)}%`
                  }"></div>
              </div>

              <p class="
                  mt-2
                  text-right
                  text-[11px]
                  text-zinc-600
                ">
                {{ percentualNivel(upload.clientesNivelA) }}%
              </p>
            </div>

            <!-- B -->
            <div>
              <div class="
                  mb-2
                  flex
                  items-center
                  justify-between
                ">
                <div class="flex items-center gap-3">

                  <span class="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-md
                      bg-white/[0.05]
                      text-xs
                      font-medium
                      text-zinc-400
                    ">
                    B
                  </span>

                  <span class="text-sm text-zinc-300">
                    Média prioridade
                  </span>

                </div>

                <span class="
                    text-sm
                    font-medium
                    text-white
                  ">
                  {{ upload.clientesNivelB }}
                </span>
              </div>

              <div class="
                  h-1.5
                  overflow-hidden
                  rounded-full
                  bg-white/[0.05]
                ">
                <div class="
                    h-full
                    rounded-full
                    bg-blue-700
                  " :style="{
                    width: `${percentualNivel(upload.clientesNivelB)}%`
                  }"></div>
              </div>

              <p class="
                  mt-2
                  text-right
                  text-[11px]
                  text-zinc-600
                ">
                {{ percentualNivel(upload.clientesNivelB) }}%
              </p>
            </div>

            <!-- C -->
            <div>
              <div class="
                  mb-2
                  flex
                  items-center
                  justify-between
                ">
                <div class="flex items-center gap-3">

                  <span class="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-md
                      bg-white/[0.05]
                      text-xs
                      font-medium
                      text-zinc-400
                    ">
                    C
                  </span>

                  <span class="text-sm text-zinc-300">
                    Baixa prioridade
                  </span>

                </div>

                <span class="
                    text-sm
                    font-medium
                    text-white
                  ">
                  {{ upload.clientesNivelC }}
                </span>
              </div>

              <div class="
                  h-1.5
                  overflow-hidden
                  rounded-full
                  bg-white/[0.05]
                ">
                <div class="
                    h-full
                    rounded-full
                    bg-zinc-600
                  " :style="{
                    width: `${percentualNivel(upload.clientesNivelC)}%`
                  }"></div>
              </div>

              <p class="
                  mt-2
                  text-right
                  text-[11px]
                  text-zinc-600
                ">
                {{ percentualNivel(upload.clientesNivelC) }}%
              </p>
            </div>

          </div>

        </article>

      </section>

      <!-- LINHA INFERIOR -->
      <section class="
          mt-6
          grid
          gap-6

          xl:grid-cols-[0.75fr_1.25fr]
        ">

        <!-- SEGMENTOS -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-6
          ">

          <div>
            <h2 class="font-semibold text-white">
              Segmentos
            </h2>

            <p class="
                mt-1
                text-sm
                text-zinc-500
              ">
              Participação na base de clientes.
            </p>
          </div>

          <div v-if="segmentosOrdenados.length" class="
              mt-7
              space-y-5
            ">

            <div v-for="([segmento, quantidade]) in segmentosOrdenados" :key="segmento">
              <div class="
                  mb-2
                  flex
                  items-center
                  justify-between
                  gap-4
                ">
                <span class="
                    truncate
                    text-sm
                    text-zinc-300
                  ">
                  {{ segmento }}
                </span>

                <span class="
                    text-xs
                    text-zinc-500
                  ">
                  {{ quantidade }}
                </span>
              </div>

              <div class="
                  h-1.5
                  overflow-hidden
                  rounded-full
                  bg-white/[0.05]
                ">
                <div class="
                    h-full
                    rounded-full
                    bg-blue-600
                  " :style="{
                    width: upload.totalClientes
                      ? `${(quantidade / upload.totalClientes) * 100}%`
                      : '0%'
                  }"></div>
              </div>
            </div>

          </div>

          <div v-else class="
              flex
              min-h-56
              items-center
              justify-center
            ">
            <div class="text-center">

              <svg class="
                  mx-auto
                  h-8
                  w-8
                  text-zinc-700
                " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 3v18h18" />
                <path d="M7 15l4-4 3 3 5-7" />
              </svg>

              <p class="
                  mt-3
                  text-sm
                  text-zinc-500
                ">
                Nenhum segmento disponível.
              </p>

              <p class="
                  mt-1
                  text-xs
                  text-zinc-600
                ">
                Importe uma planilha para visualizar.
              </p>

            </div>
          </div>

        </article>

        <!-- DADOS RECENTES -->
        <article class="
            overflow-hidden
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
          ">

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
                Dados recentes
              </h2>

              <p class="
                  mt-1
                  text-sm
                  text-zinc-500
                ">
                Últimos registros processados.
              </p>
            </div>

            <router-link to="/upload" class="
                text-sm
                font-medium
                text-blue-400
                transition

                hover:text-blue-300
              ">
              Ver importação
            </router-link>

          </div>

          <div v-if="upload.temDados" class="overflow-x-auto">
            <table class="
                w-full
                text-left
                text-sm
              ">
              <thead>
                <tr class="
                    border-b
                    border-white/[0.05]
                    bg-[#0d0e10]
                    text-xs
                    text-zinc-500
                  ">
                  <th class="px-6 py-4 font-medium">
                    Cliente
                  </th>

                  <th class="px-6 py-4 font-medium">
                    Segmento
                  </th>

                  <th class="px-6 py-4 font-medium">
                    Consultor
                  </th>

                  <th class="px-6 py-4 font-medium">
                    Nível
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr v-for="(cliente, index) in upload.dadosTratados.slice(0, 5)" :key="index" class="
                    border-b
                    border-white/[0.04]
                    transition

                    last:border-b-0
                    hover:bg-white/[0.02]
                  ">
                  <td class="
                      px-6
                      py-4
                      font-medium
                      text-zinc-200
                    ">
                    {{ cliente.cliente || cliente.nome_cliente || '-' }}
                  </td>

                  <td class="
                      px-6
                      py-4
                      text-zinc-400
                    ">
                    {{ cliente.segmento || '-' }}
                  </td>

                  <td class="
                      px-6
                      py-4
                      text-zinc-400
                    ">
                    {{ cliente.consultor || '-' }}
                  </td>

                  <td class="px-6 py-4">

                    <span :class="[
                      'inline-flex min-w-7 items-center justify-center rounded-md px-2 py-1 text-xs font-medium',

                      cliente.nivel_cliente === 'A'
                        ? 'bg-blue-500/10 text-blue-400'
                        : cliente.nivel_cliente === 'B'
                          ? 'bg-white/[0.05] text-zinc-300'
                          : 'bg-white/[0.035] text-zinc-500'
                    ]">
                      {{ cliente.nivel_cliente || '-' }}
                    </span>

                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- VAZIO -->
          <div v-else class="
              flex
              min-h-64
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
                Ainda não existem dados importados.
              </p>

              <p class="
                  mt-1
                  text-xs
                  text-zinc-600
                ">
                Envie sua primeira planilha para começar.
              </p>

              <router-link to="/upload" class="
                  mt-5
                  inline-flex
                  rounded-lg
                  border
                  border-white/[0.08]
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-zinc-300
                  transition

                  hover:bg-white/[0.05]
                  hover:text-white
                ">
                Importar dados
              </router-link>

            </div>
          </div>

        </article>

      </section>

    </div>
  </div>
</template>
