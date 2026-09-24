<script setup>
const recursos = [
  {
    titulo: 'Importação simplificada',
    descricao:
      'Envie arquivos XLSX, XLS ou CSV e transforme os dados em informações organizadas para análise.'
  },
  {
    titulo: 'Indicadores claros',
    descricao:
      'Acompanhe métricas importantes da base de clientes em um painel simples e objetivo.'
  },
  {
    titulo: 'Análise estratégica',
    descricao:
      'Identifique padrões, segmentos e oportunidades para apoiar decisões comerciais.'
  }
]

const etapas = [
  {
    numero: '01',
    titulo: 'Importe',
    descricao:
      'Adicione sua planilha com os dados comerciais.'
  },
  {
    numero: '02',
    titulo: 'Organize',
    descricao:
      'O sistema padroniza e estrutura as informações.'
  },
  {
    numero: '03',
    titulo: 'Analise',
    descricao:
      'Visualize indicadores e encontre oportunidades.'
  }
]
</script>

<template>
  <main
    class="
      min-h-screen
      bg-[#09090b]
      text-zinc-100
    "
  >

    <!-- NAVBAR -->
    <header
      class="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-white/[0.06]
        bg-[#09090b]/90
        backdrop-blur-xl
      "
    >
      <nav
        class="
          mx-auto
          flex
          h-18
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >

        <!-- LOGO -->
        <router-link
          to="/"
          class="
            flex
            items-center
            gap-3
          "
        >
          <div
            class="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-blue-600
              text-xs
              font-bold
              text-white
            "
          >
            CTI
          </div>

          <div>
            <p
              class="
                text-sm
                font-semibold
                text-white
              "
            >
              CTI Insights
            </p>

            <p
              class="
                text-[11px]
                text-zinc-500
              "
            >
              Business intelligence
            </p>
          </div>
        </router-link>

        <!-- MENU -->
        <div
          class="
            hidden
            items-center
            gap-8
            text-sm
            text-zinc-400
            md:flex
          "
        >
          <a
            href="#produto"
            class="
              transition
              hover:text-white
            "
          >
            Produto
          </a>

          <a
            href="#recursos"
            class="
              transition
              hover:text-white
            "
          >
            Recursos
          </a>

          <a
            href="#como-funciona"
            class="
              transition
              hover:text-white
            "
          >
            Como funciona
          </a>
        </div>

        <!-- CTA -->
        <router-link
          to="/login"
          class="
            rounded-lg
            bg-blue-600
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition

            hover:bg-blue-500
          "
        >
          Entrar
        </router-link>

      </nav>
    </header>

    <!-- HERO -->
    <section
      class="
        relative
        overflow-hidden
        px-6
        pb-24
        pt-36
        lg:px-8
        lg:pb-32
        lg:pt-44
      "
    >

      <!-- Luz discreta -->
      <div
        class="
          pointer-events-none
          absolute
          left-1/2
          top-[-400px]
          h-[700px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/[0.08]
          blur-[150px]
        "
      ></div>

      <div
        class="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-16
          lg:grid-cols-[0.9fr_1.1fr]
        "
      >

        <!-- TEXTO -->
        <div>
          <div
            class="
              mb-6
              inline-flex
              items-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.03]
              px-3
              py-1.5
              text-xs
              text-zinc-400
            "
          >
            Plataforma de análise comercial
          </div>

          <h1
            class="
              max-w-3xl
              text-5xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              text-white

              sm:text-6xl
              lg:text-7xl
            "
          >
            Transforme dados em decisões mais claras.
          </h1>

          <p
            class="
              mt-7
              max-w-xl
              text-base
              leading-7
              text-zinc-400

              sm:text-lg
            "
          >
            O CTI Insights organiza informações comerciais,
            transforma planilhas em indicadores e ajuda sua
            equipe a visualizar oportunidades com mais facilidade.
          </p>

          <div
            class="
              mt-9
              flex
              flex-wrap
              gap-3
            "
          >
            <router-link
              to="/login"
              class="
                rounded-lg
                bg-blue-600
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition

                hover:bg-blue-500
              "
            >
              Acessar plataforma
            </router-link>

            <a
              href="#produto"
              class="
                rounded-lg
                border
                border-white/[0.1]
                bg-white/[0.02]
                px-5
                py-3
                text-sm
                font-medium
                text-zinc-300
                transition

                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              Conhecer produto
            </a>
          </div>

          <!-- MINI BENEFÍCIOS -->
          <div
            class="
              mt-10
              flex
              flex-wrap
              gap-x-6
              gap-y-3
              text-sm
              text-zinc-500
            "
          >
            <span>Planilhas XLSX, XLS e CSV</span>
            <span>Dashboard centralizado</span>
            <span>Dados organizados</span>
          </div>
        </div>

        <!-- PAINEL VISUAL -->
        <div
          id="produto"
          class="
            relative
          "
        >

          <div
            class="
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#111214]
              p-4
              shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            "
          >

            <!-- TOPO DO PAINEL -->
            <div
              class="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.06]
                pb-4
              "
            >

              <div>
                <p
                  class="
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  Dashboard
                </p>

                <p
                  class="
                    mt-1
                    text-xs
                    text-zinc-500
                  "
                >
                  Visão geral da base comercial
                </p>
              </div>

              <div
                class="
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  px-3
                  py-2
                  text-xs
                  text-zinc-400
                "
              >
                Última atualização: hoje
              </div>

            </div>

            <!-- KPI -->
            <div
              class="
                mt-4
                grid
                gap-3
                sm:grid-cols-3
              "
            >

              <div
                class="
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-[#0d0e10]
                  p-4
                "
              >
                <p
                  class="
                    text-xs
                    text-zinc-500
                  "
                >
                  Clientes
                </p>

                <p
                  class="
                    mt-3
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  1.248
                </p>

                <p
                  class="
                    mt-1
                    text-xs
                    text-blue-400
                  "
                >
                  +8,4% no período
                </p>
              </div>

              <div
                class="
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-[#0d0e10]
                  p-4
                "
              >
                <p
                  class="
                    text-xs
                    text-zinc-500
                  "
                >
                  Potencial alto
                </p>

                <p
                  class="
                    mt-3
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  186
                </p>

                <p
                  class="
                    mt-1
                    text-xs
                    text-zinc-500
                  "
                >
                  Clientes nível A
                </p>
              </div>

              <div
                class="
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-[#0d0e10]
                  p-4
                "
              >
                <p
                  class="
                    text-xs
                    text-zinc-500
                  "
                >
                  Segmentos
                </p>

                <p
                  class="
                    mt-3
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  6
                </p>

                <p
                  class="
                    mt-1
                    text-xs
                    text-zinc-500
                  "
                >
                  Categorias ativas
                </p>
              </div>

            </div>

            <!-- CONTEÚDO -->
            <div
              class="
                mt-4
                grid
                gap-4
                lg:grid-cols-[1.4fr_0.6fr]
              "
            >

              <!-- GRÁFICO -->
              <div
                class="
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-[#0d0e10]
                  p-5
                "
              >
                <div
                  class="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div>
                    <p
                      class="
                        text-sm
                        font-medium
                        text-white
                      "
                    >
                      Evolução de clientes
                    </p>

                    <p
                      class="
                        mt-1
                        text-xs
                        text-zinc-500
                      "
                    >
                      Últimos 6 meses
                    </p>
                  </div>

                  <span
                    class="
                      text-xs
                      text-zinc-500
                    "
                  >
                    Total
                  </span>
                </div>

                <div
                  class="
                    mt-8
                    flex
                    h-52
                    items-end
                    gap-3
                  "
                >
                  <div class="h-[32%] flex-1 rounded-t-md bg-blue-950"></div>
                  <div class="h-[44%] flex-1 rounded-t-md bg-blue-900"></div>
                  <div class="h-[53%] flex-1 rounded-t-md bg-blue-800"></div>
                  <div class="h-[62%] flex-1 rounded-t-md bg-blue-700"></div>
                  <div class="h-[78%] flex-1 rounded-t-md bg-blue-600"></div>
                  <div class="h-[92%] flex-1 rounded-t-md bg-blue-500"></div>
                </div>

                <div
                  class="
                    mt-3
                    flex
                    justify-between
                    text-[10px]
                    text-zinc-600
                  "
                >
                  <span>Abr</span>
                  <span>Mai</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Ago</span>
                  <span>Set</span>
                </div>
              </div>

              <!-- PRIORIDADES -->
              <div
                class="
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-[#0d0e10]
                  p-5
                "
              >
                <p
                  class="
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  Prioridades
                </p>

                <p
                  class="
                    mt-1
                    text-xs
                    text-zinc-500
                  "
                >
                  Distribuição da carteira
                </p>

                <div class="mt-6 space-y-5">

                  <div>
                    <div
                      class="
                        mb-2
                        flex
                        justify-between
                        text-xs
                      "
                    >
                      <span class="text-zinc-400">
                        Nível A
                      </span>

                      <span class="text-white">
                        186
                      </span>
                    </div>

                    <div
                      class="
                        h-1.5
                        rounded-full
                        bg-white/[0.05]
                      "
                    >
                      <div
                        class="
                          h-full
                          w-[76%]
                          rounded-full
                          bg-blue-500
                        "
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div
                      class="
                        mb-2
                        flex
                        justify-between
                        text-xs
                      "
                    >
                      <span class="text-zinc-400">
                        Nível B
                      </span>

                      <span class="text-white">
                        124
                      </span>
                    </div>

                    <div
                      class="
                        h-1.5
                        rounded-full
                        bg-white/[0.05]
                      "
                    >
                      <div
                        class="
                          h-full
                          w-[54%]
                          rounded-full
                          bg-blue-700
                        "
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div
                      class="
                        mb-2
                        flex
                        justify-between
                        text-xs
                      "
                    >
                      <span class="text-zinc-400">
                        Nível C
                      </span>

                      <span class="text-white">
                        83
                      </span>
                    </div>

                    <div
                      class="
                        h-1.5
                        rounded-full
                        bg-white/[0.05]
                      "
                    >
                      <div
                        class="
                          h-full
                          w-[36%]
                          rounded-full
                          bg-zinc-600
                        "
                      ></div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <!-- SOMBRA -->
          <div
            class="
              absolute
              -bottom-10
              left-10
              right-10
              -z-10
              h-24
              rounded-full
              bg-blue-600/[0.08]
              blur-3xl
            "
          ></div>

        </div>

      </div>

    </section>

    <!-- RECURSOS -->
    <section
      id="recursos"
      class="
        border-t
        border-white/[0.06]
        bg-[#0b0b0d]
        px-6
        py-24

        lg:px-8
        lg:py-28
      "
    >
      <div
        class="
          mx-auto
          max-w-7xl
        "
      >

        <div
          class="
            max-w-2xl
          "
        >
          <p
            class="
              text-sm
              font-medium
              text-blue-400
            "
          >
            Recursos
          </p>

          <h2
            class="
              mt-3
              text-3xl
              font-semibold
              tracking-tight
              text-white

              md:text-4xl
            "
          >
            Tudo em um só lugar para entender sua base.
          </h2>

          <p
            class="
              mt-4
              leading-7
              text-zinc-400
            "
          >
            Uma interface simples para transformar dados
            dispersos em informações úteis para o negócio.
          </p>
        </div>

        <div
          class="
            mt-12
            grid
            gap-5

            md:grid-cols-3
          "
        >

          <article
            v-for="recurso in recursos"
            :key="recurso.titulo"
            class="
              rounded-xl
              border
              border-white/[0.07]
              bg-[#111214]
              p-6
              transition

              hover:border-white/[0.12]
              hover:bg-[#131416]
            "
          >
            <div
              class="
                mb-8
                flex
                h-10
                w-10
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
                <path d="M5 12h14"/>
                <path d="M12 5l7 7-7 7"/>
              </svg>
            </div>

            <h3
              class="
                font-semibold
                text-white
              "
            >
              {{ recurso.titulo }}
            </h3>

            <p
              class="
                mt-3
                text-sm
                leading-6
                text-zinc-500
              "
            >
              {{ recurso.descricao }}
            </p>
          </article>

        </div>

      </div>
    </section>

    <!-- COMO FUNCIONA -->
    <section
      id="como-funciona"
      class="
        px-6
        py-24

        lg:px-8
        lg:py-28
      "
    >
      <div
        class="
          mx-auto
          max-w-7xl
        "
      >

        <div
          class="
            grid
            gap-14

            lg:grid-cols-[0.7fr_1.3fr]
          "
        >

          <div>
            <p
              class="
                text-sm
                font-medium
                text-blue-400
              "
            >
              Como funciona
            </p>

            <h2
              class="
                mt-3
                text-3xl
                font-semibold
                tracking-tight
                text-white

                md:text-4xl
              "
            >
              Da planilha ao insight em três etapas.
            </h2>

            <p
              class="
                mt-4
                max-w-md
                leading-7
                text-zinc-400
              "
            >
              Um processo simples pensado para reduzir
              retrabalho e facilitar a leitura das informações.
            </p>
          </div>

          <div
            class="
              grid
              gap-4

              md:grid-cols-3
            "
          >

            <article
              v-for="etapa in etapas"
              :key="etapa.numero"
              class="
                rounded-xl
                border
                border-white/[0.07]
                bg-[#111214]
                p-6
              "
            >
              <span
                class="
                  text-sm
                  font-medium
                  text-blue-400
                "
              >
                {{ etapa.numero }}
              </span>

              <h3
                class="
                  mt-8
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {{ etapa.titulo }}
              </h3>

              <p
                class="
                  mt-3
                  text-sm
                  leading-6
                  text-zinc-500
                "
              >
                {{ etapa.descricao }}
              </p>
            </article>

          </div>

        </div>

      </div>
    </section>

    <!-- CTA FINAL -->
    <section
      class="
        px-6
        pb-24

        lg:px-8
        lg:pb-28
      "
    >
      <div
        class="
          mx-auto
          max-w-7xl
          rounded-2xl
          border
          border-white/[0.07]
          bg-[#111214]
          p-8

          md:p-12
        "
      >
        <div
          class="
            flex
            flex-col
            justify-between
            gap-8

            md:flex-row
            md:items-center
          "
        >
          <div>
            <h2
              class="
                max-w-2xl
                text-3xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              Seus dados podem dizer mais.
            </h2>

            <p
              class="
                mt-3
                max-w-xl
                text-zinc-400
              "
            >
              Organize sua base e acompanhe indicadores
              importantes em um único painel.
            </p>
          </div>

          <router-link
            to="/login"
            class="
              shrink-0
              rounded-lg
              bg-blue-600
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition

              hover:bg-blue-500
            "
          >
            Entrar no CTI Insights
          </router-link>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer
      class="
        border-t
        border-white/[0.06]
        px-6
        py-8

        lg:px-8
      "
    >
      <div
        class="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-3
          text-xs
          text-zinc-600

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <span>CTI Insights © 2026</span>

        <span>
          Dados organizados para decisões melhores.
        </span>
      </div>
    </footer>

  </main>
</template>