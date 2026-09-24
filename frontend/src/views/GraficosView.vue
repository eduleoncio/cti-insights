<script setup>
import { computed } from 'vue'
import { useUploadStore } from '../stores/uploadStore'

const upload = useUploadStore()

const segmentosOrdenados = computed(() => {
  return Object.entries(upload.segmentos || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
})

const totalClassificados = computed(() => {
  return upload.totalClientes
})

function percentual(valor) {
  if (!totalClassificados.value) {
    return 0
  }

  return Math.round(
    (valor / totalClassificados.value) * 100
  )
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
            Gráficos
          </h1>

          <p class="
              mt-2
              text-sm
              text-zinc-400
            ">
            Visualize padrões, distribuições e indicadores da base.
          </p>
        </div>

        <div class="
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
        </div>
      </header>

      <!-- PRIMEIRA LINHA -->
      <section class="
          grid
          gap-6

          xl:grid-cols-2
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
              Clientes por segmento
            </h2>

            <p class="
                mt-1
                text-sm
                text-zinc-500
              ">
              Participação de cada segmento na base importada.
            </p>
          </div>

          <div v-if="segmentosOrdenados.length" class="mt-8 space-y-5">
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
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-white/[0.05]
                ">
                <div class="
                    h-full
                    rounded-full
                    bg-blue-600
                    transition-all
                    duration-300
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
              min-h-72
              items-center
              justify-center
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
                  <path d="M4 20V10" />
                  <path d="M10 20V4" />
                  <path d="M16 20v-7" />
                  <path d="M22 20H2" />
                </svg>
              </div>

              <p class="
                  mt-4
                  text-sm
                  text-zinc-400
                ">
                Nenhum dado disponível.
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

        <!-- CLASSIFICAÇÃO -->
        <article class="
            rounded-xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-6
          ">
          <div>
            <h2 class="font-semibold text-white">
              Classificação dos clientes
            </h2>

            <p class="
                mt-1
                text-sm
                text-zinc-500
              ">
              Distribuição entre os níveis A, B e C.
            </p>
          </div>

          <div class="mt-8 space-y-7">

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

                  <span class="text-sm text-zinc-300">
                    Alta prioridade
                  </span>

                </div>

                <div class="text-right">
                  <p class="
                      text-sm
                      font-medium
                      text-white
                    ">
                    {{ upload.clientesNivelA }}
                  </p>

                  <p class="text-[11px] text-zinc-600">
                    {{ percentual(upload.clientesNivelA) }}%
                  </p>
                </div>
              </div>

              <div class="
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-white/[0.05]
                ">
                <div class="
                    h-full
                    rounded-full
                    bg-blue-500
                    transition-all
                  " :style="{
                    width: `${percentual(upload.clientesNivelA)}%`
                  }"></div>
              </div>
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

                <div class="text-right">
                  <p class="
                      text-sm
                      font-medium
                      text-white
                    ">
                    {{ upload.clientesNivelB }}
                  </p>

                  <p class="text-[11px] text-zinc-600">
                    {{ percentual(upload.clientesNivelB) }}%
                  </p>
                </div>
              </div>

              <div class="
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-white/[0.05]
                ">
                <div class="
                    h-full
                    rounded-full
                    bg-blue-700
                    transition-all
                  " :style="{
                    width: `${percentual(upload.clientesNivelB)}%`
                  }"></div>
              </div>
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

                <div class="text-right">
                  <p class="
                      text-sm
                      font-medium
                      text-white
                    ">
                    {{ upload.clientesNivelC }}
                  </p>

                  <p class="text-[11px] text-zinc-600">
                    {{ percentual(upload.clientesNivelC) }}%
                  </p>
                </div>
              </div>

              <div class="
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-white/[0.05]
                ">
                <div class="
                    h-full
                    rounded-full
                    bg-zinc-600
                    transition-all
                  " :style="{
                    width: `${percentual(upload.clientesNivelC)}%`
                  }"></div>
              </div>
            </div>

          </div>

        </article>

      </section>

      <!-- EVOLUÇÃO -->
      <section class="
          mt-6
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
            <h2 class="font-semibold text-white">
              Evolução mensal
            </h2>

            <p class="
                mt-1
                text-sm
                text-zinc-500
              ">
              Crescimento da base ao longo do tempo.
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

        <div class="
            relative
            mt-8
            h-[320px]
            overflow-hidden
            rounded-xl
            border
            border-white/[0.05]
            bg-[#0d0e10]
            p-5
          ">

          <!-- LINHAS -->
          <div class="
              absolute
              inset-x-5
              top-[25%]
              border-t
              border-white/[0.04]
            "></div>

          <div class="
              absolute
              inset-x-5
              top-[50%]
              border-t
              border-white/[0.04]
            "></div>

          <div class="
              absolute
              inset-x-5
              top-[75%]
              border-t
              border-white/[0.04]
            "></div>

          <!-- BARRAS -->
          <div class="
              relative
              flex
              h-full
              items-end
              justify-between
              gap-4
              pb-3
            ">

            <div class="flex h-full flex-1 flex-col items-center justify-end gap-3">
              <div class="h-[30%] w-full max-w-[64px] rounded-t-md bg-blue-950"></div>
              <span class="text-[11px] text-zinc-600">Abr</span>
            </div>

            <div class="flex h-full flex-1 flex-col items-center justify-end gap-3">
              <div class="h-[44%] w-full max-w-[64px] rounded-t-md bg-blue-900"></div>
              <span class="text-[11px] text-zinc-600">Mai</span>
            </div>

            <div class="flex h-full flex-1 flex-col items-center justify-end gap-3">
              <div class="h-[51%] w-full max-w-[64px] rounded-t-md bg-blue-800"></div>
              <span class="text-[11px] text-zinc-600">Jun</span>
            </div>

            <div class="flex h-full flex-1 flex-col items-center justify-end gap-3">
              <div class="h-[61%] w-full max-w-[64px] rounded-t-md bg-blue-700"></div>
              <span class="text-[11px] text-zinc-600">Jul</span>
            </div>

            <div class="flex h-full flex-1 flex-col items-center justify-end gap-3">
              <div class="h-[76%] w-full max-w-[64px] rounded-t-md bg-blue-600"></div>
              <span class="text-[11px] text-zinc-600">Ago</span>
            </div>

            <div class="flex h-full flex-1 flex-col items-center justify-end gap-3">
              <div class="h-[89%] w-full max-w-[64px] rounded-t-md bg-blue-500"></div>
              <span class="text-[11px] text-zinc-600">Set</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  </main>
</template>
