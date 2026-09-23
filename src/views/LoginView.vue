<script setup>
import { ref } from 'vue'

const mostrarSenha = ref(false)
const lembrar = ref(false)
</script>

<template>
  <main class="
      min-h-screen
      bg-[#09090b]
      text-zinc-100
    ">

    <!-- HEADER -->
    <header class="
        border-b
        border-white/[0.06]
        bg-[#09090b]
      ">
      <div class="
          mx-auto
          flex
          h-18
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        ">

        <!-- LOGO -->
        <router-link to="/" class="
            flex
            items-center
            gap-3
          ">
          <div class="
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
            ">
            CTI
          </div>

          <div>
            <p class="
                text-sm
                font-semibold
                text-white
              ">
              CTI Insights
            </p>

            <p class="
                text-[11px]
                text-zinc-500
              ">
              Business intelligence
            </p>
          </div>
        </router-link>

        <!-- VOLTAR -->
        <router-link to="/" class="
            inline-flex
            items-center
            gap-2
            rounded-lg
            border
            border-white/[0.08]
            bg-white/[0.02]
            px-4
            py-2.5
            text-sm
            text-zinc-400
            transition

            hover:bg-white/[0.05]
            hover:text-white
          ">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>

          Voltar
        </router-link>

      </div>
    </header>

    <!-- CONTEÚDO -->
    <section class="
        mx-auto
        grid
        min-h-[calc(100vh-72px)]
        max-w-7xl
        items-center
        gap-16
        px-6
        py-14

        lg:grid-cols-[1fr_0.9fr]
        lg:px-8
      ">

      <!-- LADO ESQUERDO -->
      <div class="
          hidden
          lg:block
        ">

        <div class="
            max-w-xl
          ">

          <p class="
              text-sm
              font-medium
              text-blue-400
            ">
            Acesso ao painel
          </p>

          <h1 class="
              mt-4
              text-5xl
              font-semibold
              leading-[1.08]
              tracking-[-0.04em]
              text-white
            ">
            Continue de onde sua análise parou.
          </h1>

          <p class="
              mt-6
              max-w-lg
              text-base
              leading-7
              text-zinc-400
            ">
            Acesse seus dados, indicadores e relatórios
            em um ambiente centralizado e simples de usar.
          </p>

        </div>

        <!-- PAINEL VISUAL -->
        <div class="
            mt-12
            max-w-xl
            rounded-2xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-5
          ">

          <!-- Cabeçalho -->
          <div class="
              flex
              items-center
              justify-between
              border-b
              border-white/[0.06]
              pb-4
            ">

            <div>
              <p class="
                  text-sm
                  font-medium
                  text-white
                ">
                Resumo da carteira
              </p>

              <p class="
                  mt-1
                  text-xs
                  text-zinc-500
                ">
                Visão geral dos principais indicadores
              </p>
            </div>

            <div class="
                rounded-lg
                bg-blue-500/10
                px-3
                py-1.5
                text-xs
                text-blue-400
              ">
              Atualizado
            </div>

          </div>

          <!-- KPIs -->
          <div class="
              mt-4
              grid
              gap-3
              sm:grid-cols-3
            ">

            <div class="
                rounded-xl
                border
                border-white/[0.06]
                bg-[#0d0e10]
                p-4
              ">
              <p class="text-xs text-zinc-500">
                Clientes
              </p>

              <p class="
                  mt-3
                  text-2xl
                  font-semibold
                  text-white
                ">
                1.248
              </p>

              <p class="
                  mt-1
                  text-xs
                  text-blue-400
                ">
                +8,4%
              </p>
            </div>

            <div class="
                rounded-xl
                border
                border-white/[0.06]
                bg-[#0d0e10]
                p-4
              ">
              <p class="text-xs text-zinc-500">
                Nível A
              </p>

              <p class="
                  mt-3
                  text-2xl
                  font-semibold
                  text-white
                ">
                186
              </p>

              <p class="
                  mt-1
                  text-xs
                  text-zinc-500
                ">
                prioridade alta
              </p>
            </div>

            <div class="
                rounded-xl
                border
                border-white/[0.06]
                bg-[#0d0e10]
                p-4
              ">
              <p class="text-xs text-zinc-500">
                Segmentos
              </p>

              <p class="
                  mt-3
                  text-2xl
                  font-semibold
                  text-white
                ">
                6
              </p>

              <p class="
                  mt-1
                  text-xs
                  text-zinc-500
                ">
                categorias
              </p>
            </div>

          </div>

          <!-- Barra -->
          <div class="
              mt-4
              rounded-xl
              border
              border-white/[0.06]
              bg-[#0d0e10]
              p-4
            ">

            <div class="
                flex
                items-center
                justify-between
              ">
              <p class="
                  text-xs
                  text-zinc-400
                ">
                Base processada
              </p>

              <p class="
                  text-xs
                  text-zinc-500
                ">
                72%
              </p>
            </div>

            <div class="
                mt-3
                h-1.5
                overflow-hidden
                rounded-full
                bg-white/[0.05]
              ">
              <div class="
                  h-full
                  w-[72%]
                  rounded-full
                  bg-blue-600
                "></div>
            </div>

          </div>

        </div>

      </div>

      <!-- LOGIN -->
      <div class="
          mx-auto
          w-full
          max-w-md
        ">

        <section class="
            rounded-2xl
            border
            border-white/[0.07]
            bg-[#111214]
            p-7

            sm:p-8
          ">

          <div class="mb-8">

            <h2 class="
                text-2xl
                font-semibold
                tracking-tight
                text-white
              ">
              Entrar na sua conta
            </h2>

            <p class="
                mt-2
                text-sm
                leading-6
                text-zinc-400
              ">
              Use suas credenciais para acessar o CTI Insights.
            </p>

          </div>

          <form class="space-y-5">

            <!-- EMAIL -->
            <div>

              <label for="email" class="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-zinc-300
                ">
                E-mail
              </label>

              <input id="email" type="email" autocomplete="email" placeholder="seu@email.com" class="
                  w-full
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-[#0d0e10]
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  transition

                  placeholder:text-zinc-600

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/10
                ">

            </div>

            <!-- SENHA -->
            <div>

              <div class="
                  mb-2
                  flex
                  items-center
                  justify-between
                ">

                <label for="senha" class="
                    text-sm
                    font-medium
                    text-zinc-300
                  ">
                  Senha
                </label>

                <a href="#" class="
                    text-xs
                    font-medium
                    text-blue-400
                    transition

                    hover:text-blue-300
                  ">
                  Esqueci minha senha
                </a>

              </div>

              <div class="relative">

                <input id="senha" :type="mostrarSenha ? 'text' : 'password'" autocomplete="current-password"
                  placeholder="Digite sua senha" class="
                    w-full
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-[#0d0e10]
                    px-4
                    py-3
                    pr-12
                    text-sm
                    text-white
                    outline-none
                    transition

                    placeholder:text-zinc-600

                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                  ">

                <button type="button" @click="mostrarSenha = !mostrarSenha" class="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    rounded-md
                    p-1
                    text-zinc-500
                    transition

                    hover:text-zinc-300
                  " :aria-label="mostrarSenha
                      ? 'Ocultar senha'
                      : 'Mostrar senha'
                    ">

                  <!-- olho -->
                  <svg v-if="!mostrarSenha" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.8">
                    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>

                  <!-- olho fechado -->
                  <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 002.8 2.8" />
                    <path d="M9.9 4.2A10.4 10.4 0 0112 4c6.5 0 10 8 10 8a16.5 16.5 0 01-2.1 3.1" />
                    <path d="M6.6 6.6C3.7 8.4 2 12 2 12s3.5 8 10 8a10.6 10.6 0 004.1-.8" />
                  </svg>

                </button>

              </div>

            </div>

            <!-- LEMBRAR -->
            <div class="
                flex
                items-center
                justify-between
              ">

              <label class="
                  flex
                  cursor-pointer
                  items-center
                  gap-2.5
                  text-sm
                  text-zinc-400
                ">

                <input v-model="lembrar" type="checkbox" class="
                    h-4
                    w-4
                    rounded
                    border-white/[0.12]
                    bg-[#0d0e10]
                    accent-blue-600
                  ">

                Manter conectado

              </label>

              <span class="
                  text-xs
                  text-zinc-600
                ">
                Acesso seguro
              </span>

            </div>

            <!-- BOTÃO -->
            <router-link to="/dashboard" class="
                flex
                w-full
                items-center
                justify-center
                rounded-lg
                bg-blue-600
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition

                hover:bg-blue-500
              ">
              Entrar
            </router-link>

          </form>

          <!-- DIVISOR -->
          <div class="
              my-7
              flex
              items-center
              gap-3
            ">
            <div class="
                h-px
                flex-1
                bg-white/[0.06]
              "></div>

            <span class="
                text-xs
                text-zinc-600
              ">
              CTI Insights
            </span>

            <div class="
                h-px
                flex-1
                bg-white/[0.06]
              "></div>
          </div>

          <!-- FOOTER LOGIN -->
          <p class="
              text-center
              text-xs
              leading-5
              text-zinc-600
            ">
            Plataforma destinada ao gerenciamento
            e análise das informações comerciais.
          </p>

        </section>

      </div>

    </section>

  </main>
</template>