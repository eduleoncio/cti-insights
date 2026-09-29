<script setup>
import { computed } from 'vue'
import { useUploadStore } from '../stores/uploadStore'

const upload = useUploadStore()
const faturamento = computed(() => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(upload.faturamentoMedio || 0))
const segmentos = computed(() => Object.entries(upload.segmentos || {}).sort((a, b) => b[1] - a[1]).slice(0, 5))
const maiorValor = computed(() => Math.max(...segmentos.value.map(([, total]) => total), 1))
const total = computed(() => upload.totalClientes || 1)
</script>

<template>
  <main class="page-lines min-h-screen bg-[#0d0f10] px-5 py-8 text-[#e9e7df] lg:px-8">
    <div class="mx-auto max-w-7xl">
      <header class="mb-9 flex flex-col justify-between gap-5 border-b border-white/[.1] pb-6 md:flex-row md:items-end">
        <div><p class="text-[10px] font-bold uppercase tracking-[.18em] text-[#b7df9c]">Central de análise</p><h1 class="mt-2 text-3xl font-semibold tracking-[-.035em] text-[#f4f1e9]">Visão da carteira</h1><p class="mt-2 text-sm text-[#919a95]">Leitura dos dados importados na sessão atual.</p></div>
        <router-link to="/upload" class="border border-[#6fae55] px-4 py-2.5 text-sm font-bold text-[#b7df9c] transition hover:bg-[#6fae55] hover:text-[#101411]">+ Importar planilha</router-link>
      </header>

      <section class="grid gap-px border border-white/[.1] bg-white/[.1] sm:grid-cols-2 xl:grid-cols-4">
        <article class="bg-[#151819] p-5"><p class="text-[10px] font-bold uppercase tracking-[.14em] text-[#77817c]">Registros</p><p class="mt-4 text-3xl font-semibold text-[#f1eee6]">{{ upload.totalClientes }}</p><p class="mt-5 border-t border-white/[.08] pt-3 text-xs text-[#8d9691]">Linhas da base atual</p></article>
        <article class="bg-[#151819] p-5"><p class="text-[10px] font-bold uppercase tracking-[.14em] text-[#77817c]">Faturamento médio</p><p class="mt-4 text-2xl font-semibold text-[#b7df9c]">{{ faturamento }}</p><p class="mt-5 border-t border-white/[.08] pt-3 text-xs text-[#8d9691]">Por cliente importado</p></article>
        <article class="bg-[#151819] p-5"><p class="text-[10px] font-bold uppercase tracking-[.14em] text-[#77817c]">Nível A</p><p class="mt-4 text-3xl font-semibold text-[#f1eee6]">{{ upload.clientesNivelA }}</p><p class="mt-5 border-t border-white/[.08] pt-3 text-xs text-[#8d9691]">Clientes prioritários</p></article>
        <router-link to="/relatorios" class="bg-[#151819] p-5 transition hover:bg-[#19201a]"><p class="text-[10px] font-bold uppercase tracking-[.14em] text-[#77817c]">Pendências</p><p class="mt-4 text-3xl font-semibold text-[#91c773]">{{ upload.totalErros }}</p><p class="mt-5 border-t border-white/[.08] pt-3 text-xs text-[#9dcf87]">Ver detalhes no relatório →</p></router-link>
      </section>

      <section class="mt-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <article class="border border-white/[.1] bg-[#151819] p-6"><div class="flex items-end justify-between border-b border-white/[.08] pb-4"><div><p class="text-[10px] font-bold uppercase tracking-[.14em] text-[#b7df9c]">Composição</p><h2 class="mt-1 text-lg font-semibold">Clientes por segmento</h2></div><router-link to="/graficos" class="text-xs font-bold text-[#9dcf87]">Ver indicadores →</router-link></div>
          <div v-if="segmentos.length" class="mt-7 space-y-5"><div v-for="([segmento, quantidade]) in segmentos" :key="segmento"><div class="flex justify-between text-sm"><span class="text-[#d7dbd2]">{{ segmento }}</span><span class="font-bold text-[#b7df9c]">{{ quantidade }}</span></div><div class="mt-2 h-1.5 bg-white/[.07]"><div class="h-full bg-[#6fae55]" :style="{ width: `${(quantidade / maiorValor) * 100}%` }"></div></div></div></div>
          <div v-else class="mt-7 border-l-2 border-[#6fae55] bg-white/[.025] p-4 text-sm text-[#89928d]">Importe uma planilha para visualizar a distribuição dos segmentos.</div>
        </article>
        <article class="border border-white/[.1] bg-[#151819] p-6"><p class="text-[10px] font-bold uppercase tracking-[.14em] text-[#b7df9c]">Classificação</p><h2 class="mt-1 text-lg font-semibold">Prioridade da carteira</h2><div class="mt-8 space-y-6"><div v-for="([nivel, quantidade, cor]) in [['A', upload.clientesNivelA, '#6fae55'], ['B', upload.clientesNivelB, '#89a478'], ['C', upload.clientesNivelC, '#5c6762']]" :key="nivel"><div class="flex items-center justify-between text-sm"><span class="flex items-center gap-3"><b :style="{ color }" class="text-base">{{ nivel }}</b><span class="text-[#a7ada9]">Nível {{ nivel }}</span></span><strong>{{ quantidade }}</strong></div><div class="mt-2 h-1.5 bg-white/[.07]"><div class="h-full" :style="{ width: `${(quantidade / total) * 100}%`, background: cor }"></div></div></div></div><router-link to="/relatorios" class="mt-9 block border-t border-white/[.08] pt-4 text-xs font-bold uppercase tracking-[.12em] text-[#9dcf87]">Abrir relatório de validação →</router-link></article>
      </section>
    </div>
  </main>
</template>
