<script setup>
import { computed } from 'vue'
import { useUploadStore } from '../stores/uploadStore'
const upload = useUploadStore()
const segmentos = computed(() => Object.entries(upload.segmentos || {}).sort((a, b) => b[1] - a[1]).slice(0, 6))
const maior = computed(() => Math.max(...segmentos.value.map(([, valor]) => valor), 1))
const total = computed(() => upload.totalClientes || 1)
const niveis = computed(() => [['Nível A', upload.clientesNivelA, '#6fae55'], ['Nível B', upload.clientesNivelB, '#89a478'], ['Nível C', upload.clientesNivelC, '#56625c']])
</script>

<template>
  <main class="page-lines min-h-screen bg-[#0d0f10] px-5 py-8 text-[#e9e7df] lg:px-8"><div class="mx-auto max-w-7xl">
    <header class="mb-9 border-b border-white/[.1] pb-6"><p class="text-[10px] font-bold uppercase tracking-[.18em] text-[#b7df9c]">Leitura visual</p><h1 class="mt-2 text-3xl font-semibold tracking-[-.035em]">Indicadores da base</h1><p class="mt-2 text-sm text-[#919a95]">Distribuição dos dados importados na sessão.</p></header>
    <section class="grid gap-6 lg:grid-cols-2"><article class="border border-white/[.1] bg-[#151819] p-6"><p class="text-[10px] font-bold uppercase tracking-[.14em] text-[#b7df9c]">Segmentos</p><h2 class="mt-1 text-lg font-semibold">Participação na carteira</h2><div v-if="segmentos.length" class="mt-8 space-y-5"><div v-for="([nome, valor]) in segmentos" :key="nome"><div class="flex justify-between gap-4 text-sm"><span class="truncate text-[#c9cec6]">{{ nome }}</span><b>{{ valor }}</b></div><div class="mt-2 h-6 bg-[#101313]"><div class="flex h-full items-center bg-[#527b70] px-2 text-[10px] font-bold text-[#e8ece4]" :style="{ width: `${Math.max((valor / maior) * 100, 13)}%` }">{{ Math.round((valor / total) * 100) }}%</div></div></div></div><p v-else class="mt-8 border-l-2 border-[#6fae55] bg-white/[.03] p-4 text-sm text-[#89928d]">Sem dados: importe uma base para criar os indicadores.</p></article>
    <article class="border border-white/[.1] bg-[#151819] p-6"><p class="text-[10px] font-bold uppercase tracking-[.14em] text-[#b7df9c]">Classificação</p><h2 class="mt-1 text-lg font-semibold">Níveis de prioridade</h2><div class="mt-8 space-y-7"><div v-for="([nome, valor, cor]) in niveis" :key="nome"><div class="flex justify-between text-sm"><span class="text-[#c9cec6]">{{ nome }}</span><span><b>{{ valor }}</b><small class="ml-2 text-[#77817c]">{{ Math.round((valor / total) * 100) }}%</small></span></div><div class="mt-2 h-3 bg-[#101313]"><div class="h-full" :style="{ width: `${(valor / total) * 100}%`, background: cor }"></div></div></div></div><div class="mt-10 border-t border-white/[.08] pt-4 text-xs text-[#82908a]">Os gráficos são atualizados quando uma nova planilha é processada.</div></article></section>
  </div></main>
</template>
