<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const paginaRolada = ref(false)

function verificarRolagem() {
  paginaRolada.value = window.scrollY > 12
}

onMounted(() => {
  verificarRolagem()
  window.addEventListener('scroll', verificarRolagem, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', verificarRolagem)
})

const etapas = [
  ['01', 'Importe a planilha', 'Envie a base que sua equipe já utiliza no dia a dia.'],
  ['02', 'Analise os dados', 'Confira inconsistências e informações relevantes da base.'],
  ['03', 'Gere resultados', 'Transforme os dados obtidos em uma visão para decidir melhor.']
]

const beneficios = [
  ['PLANILHAS', 'Importação direta'],
  ['ANÁLISE', 'Erros localizados'],
  ['RESULTADOS', 'Informações organizadas']
]
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-[#0d0f10] text-[#e9e7df]">
    <header :class="[
      'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
      paginaRolada
        ? 'border-white/[0.12] bg-[#0d0f10]/72 shadow-[0_8px_30px_rgba(0,0,0,.18)] backdrop-blur-xl'
        : 'border-white/[0.09] bg-[#0d0f10]'
    ]">
      <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <router-link to="/" class="flex items-center gap-3">
          <img src="/xinsight-logo.jpg" alt="Logo xInsight" class="h-10 w-10 border border-[#6fae55] object-cover object-center" />
          <span class="leading-none">
            <strong class="block text-sm tracking-[0.1em] text-[#f3f0e8]">xInsight</strong>
            <small class="mt-1 block text-[10px] uppercase tracking-[0.16em] text-[#7f8885]">Base comercial</small>
          </span>
        </router-link>

        <div class="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.14em] text-[#9da39f] md:flex">
          <a href="#plataforma" class="transition hover:text-[#b7df9c]">Plataforma</a>
          <a href="#processo" class="transition hover:text-[#b7df9c]">Processo</a>
        </div>

        <router-link to="/login" class="border border-[#6fae55] px-4 py-2 text-sm font-bold text-[#b7df9c] transition hover:bg-[#6fae55] hover:text-[#171a1b]">
          Entrar
        </router-link>
      </nav>
    </header>

    <section class="page-lines relative border-b border-white/[0.09] px-5 pb-16 pt-36 lg:px-8 lg:pb-24 lg:pt-44">
      <div class="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <div class="relative z-10">
          <p class="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b7df9c]">
            <span class="h-px w-8 bg-[#6fae55]"></span>
            Organização de dados comerciais
          </p>
          <h1 class="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#f4f1e9] sm:text-6xl">
            Uma base mais clara para decisões menos improvisadas.
          </h1>
          <p class="mt-7 max-w-xl text-base leading-7 text-[#a5aaa6] sm:text-lg">
            O xInsight recebe sua planilha, identifica o que precisa de atenção e entrega uma leitura organizada da carteira comercial.
          </p>
          <div class="mt-9 flex flex-wrap gap-4">
            <router-link to="/login" class="bg-[#6fae55] px-5 py-3 text-sm font-bold text-[#101411] transition hover:bg-[#91c773]">
              Acessar o painel
            </router-link>
            <a href="#processo" class="border border-white/[0.14] px-5 py-3 text-sm font-bold text-[#d5d7d0] transition hover:border-[#6fae55] hover:text-[#b7df9c]">Conhecer o fluxo</a>
          </div>
        </div>

        <div id="plataforma" class="relative mx-auto w-full max-w-3xl pt-8 lg:pt-0">
          <div class="float-card float-card-one absolute -left-2 top-2 z-20 hidden border border-[#6fae55]/45 bg-[#191c1d] px-4 py-3 shadow-xl sm:block lg:-left-12">
            <p class="text-[10px] font-bold uppercase tracking-[.14em] text-[#8f9792]">Conferência</p>
            <p class="mt-1 text-sm font-bold text-[#b7df9c]">12 ajustes encontrados</p>
          </div>

          <div class="float-card float-card-two absolute -right-1 bottom-14 z-20 hidden border border-white/[0.13] bg-[#191c1d] px-4 py-3 shadow-xl sm:block lg:-right-10">
            <p class="text-[10px] font-bold uppercase tracking-[.14em] text-[#8f9792]">Base analisada</p>
            <p class="mt-1 text-sm font-bold text-[#dfe5db]">236 registros aprovados</p>
          </div>

          <div class="relative rounded-t-xl border-[7px] border-[#292d2e] bg-[#292d2e] p-2 shadow-[0_30px_70px_rgba(0,0,0,.48)]">
            <div class="absolute left-1/2 top-[2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#0c0d0e]"></div>
            <div class="overflow-hidden rounded-[3px] border border-black/50 bg-[#111314]">
              <div class="flex h-8 items-center gap-1.5 border-b border-white/[0.08] bg-[#181b1c] px-3">
                <i class="h-1.5 w-1.5 rounded-full bg-[#527b70]"></i><i class="h-1.5 w-1.5 rounded-full bg-[#82a76d]"></i><i class="h-1.5 w-1.5 rounded-full bg-[#b7df9c]"></i>
                <span class="ml-3 text-[9px] font-semibold tracking-wide text-[#838a86]">XINSIGHT / DASHBOARD</span>
              </div>
              <div class="grid min-h-[300px] grid-cols-[104px_1fr] sm:min-h-[360px] sm:grid-cols-[126px_1fr]">
                <aside class="border-r border-white/[0.07] bg-[#151819] p-3">
                  <div class="mb-7 text-[9px] font-bold tracking-[.15em] text-[#91c773]">XI</div>
                  <div class="space-y-3 text-[9px] text-[#7f8984]">
                    <p class="border-l-2 border-[#6fae55] pl-2 text-[#ece8de]">Visão geral</p>
                    <p class="pl-2">Importações</p><p class="pl-2">Relatórios</p><p class="pl-2">Gráficos</p>
                  </div>
                </aside>
                <div class="p-4 sm:p-5">
                  <div class="flex items-start justify-between">
                    <div><p class="text-[9px] uppercase tracking-[.15em] text-[#77807c]">Carteira comercial</p><h2 class="mt-1 text-sm font-bold text-[#f2eee6] sm:text-base">Visão geral</h2></div>
                    <span class="border border-white/[0.1] px-2 py-1 text-[8px] text-[#9ba29d]">Setembro 2026</span>
                  </div>
                  <div class="mt-5 grid grid-cols-3 gap-2">
                    <div class="border border-white/[0.08] bg-[#181b1c] p-2.5"><p class="text-[8px] text-[#818984]">CLIENTES</p><p class="mt-1 text-lg font-bold text-[#f2eee6]">248</p><p class="text-[8px] text-[#829e86]">+ 8 este mês</p></div>
                    <div class="border border-white/[0.08] bg-[#181b1c] p-2.5"><p class="text-[8px] text-[#818984]">NÍVEL A</p><p class="mt-1 text-lg font-bold text-[#b7df9c]">64</p><p class="text-[8px] text-[#818984]">prioritários</p></div>
                    <div class="border border-white/[0.08] bg-[#181b1c] p-2.5"><p class="text-[8px] text-[#818984]">PENDÊNCIAS</p><p class="mt-1 text-lg font-bold text-[#91c773]">12</p><p class="text-[8px] text-[#818984]">para revisar</p></div>
                  </div>
                  <div class="mt-4 grid gap-3 sm:grid-cols-[1.3fr_.7fr]">
                    <div class="border border-white/[0.08] bg-[#181b1c] p-3"><p class="text-[9px] font-bold text-[#dfe5db]">Entradas por segmento</p><div class="mt-8 flex h-20 items-end gap-2"><span class="h-[35%] flex-1 bg-[#426a63]"></span><span class="h-[52%] flex-1 bg-[#527b70]"></span><span class="h-[44%] flex-1 bg-[#668b7d]"></span><span class="h-[75%] flex-1 bg-[#6fae55]"></span><span class="h-[61%] flex-1 bg-[#7c9b89]"></span></div></div>
                    <div class="border border-white/[0.08] bg-[#181b1c] p-3"><p class="text-[9px] font-bold text-[#dfe5db]">Status</p><div class="mt-5 space-y-3 text-[8px]"><div><p class="flex justify-between text-[#9ba29d]"><span>Válidos</span><span>95%</span></p><i class="mt-1 block h-1 bg-[#527b70]"></i></div><div><p class="flex justify-between text-[#9ba29d]"><span>Revisar</span><span>5%</span></p><i class="mt-1 block h-1 w-[18%] bg-[#6fae55]"></i></div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto h-5 w-[88%] rounded-b-[50%] border-x-[7px] border-b-[7px] border-[#292d2e] bg-[#1b1e1f]"></div>
          <div class="mx-auto h-8 w-[18%] border-x-[5px] border-[#292d2e] bg-[#25292a]"></div>
          <div class="mx-auto h-2 w-[45%] rounded-t-md bg-[#303536]"></div>
        </div>
      </div>
    </section>

    <section class="border-b border-white/[0.09] px-5 py-8 lg:px-8">
      <div class="mx-auto grid max-w-7xl divide-y divide-white/[0.09] border-y border-white/[0.09] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div v-for="([valor, texto]) in beneficios" :key="valor" class="px-0 py-4 sm:px-5 sm:first:pl-0">
          <p class="text-xs font-bold tracking-[.13em] text-[#b7df9c]">{{ valor }}</p><p class="mt-1 text-xs text-[#818984]">{{ texto }}</p>
        </div>
      </div>
    </section>

    <section id="processo" class="page-lines px-5 py-16 lg:px-8 lg:py-20">
      <div class="relative mx-auto max-w-7xl">
        <div class="max-w-xl"><p class="text-[11px] font-bold uppercase tracking-[.18em] text-[#b7df9c]">Como funciona</p><h2 class="mt-3 text-3xl font-semibold tracking-[-.03em] text-[#f4f1e9] sm:text-4xl">Três etapas, sem complicar sua rotina.</h2></div>
        <div class="mt-12 grid border-y border-white/[0.1] md:grid-cols-3 md:divide-x md:divide-white/[0.1]">
          <article v-for="([numero, titulo, descricao]) in etapas" :key="numero" class="border-b border-white/[0.1] py-7 md:border-b-0 md:px-7 md:first:pl-0">
            <p class="text-[11px] font-bold tracking-[.16em] text-[#91c773]">{{ numero }}</p><h3 class="mt-9 text-lg font-bold text-[#e9e7df]">{{ titulo }}</h3><p class="mt-3 max-w-xs text-sm leading-6 text-[#929a96]">{{ descricao }}</p>
          </article>
        </div>
      </div>
    </section>

    <footer class="border-t border-white/[0.09] px-5 py-7 text-xs text-[#737b77] lg:px-8"><div class="mx-auto flex max-w-7xl flex-col justify-between gap-2 sm:flex-row"><span>xInsight · 2026</span><span>Dados organizados para decisões reais.</span></div></footer>
  </main>
</template>

<style scoped>
.page-lines {
  background-image: linear-gradient(90deg, transparent calc(50% - 1px), rgba(255, 255, 255, .055) calc(50% - 1px), rgba(255, 255, 255, .055) 50%, transparent 50%);
}

.float-card {
  animation: deslocar 5s ease-in-out infinite;
}

.float-card-two {
  animation-delay: -2.5s;
}

@keyframes deslocar {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@media (prefers-reduced-motion: reduce) {
  .float-card { animation: none; }
}
</style>
