<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUploadStore } from '../stores/uploadStore'
const upload = useUploadStore()
const router = useRouter()
const arrastando = ref(false)
const nomeArquivo = computed(() => upload.arquivo?.name || 'Nenhum arquivo selecionado')
const tamanhoArquivo = computed(() => upload.arquivo ? `${(upload.arquivo.size / 1024).toFixed(1)} KB` : '')
function selecionar(file) { if (file) upload.selecionarArquivo(file) }
function soltar(event) { arrastando.value = false; selecionar(event.dataTransfer.files[0]) }
async function processar() { await upload.processarPlanilha(); if (upload.temResultado) router.push('/relatorios') }
</script>

<template>
  <main class="page-lines min-h-screen bg-[#0d0f10] px-5 py-8 text-[#e9e7df] lg:px-8"><div class="mx-auto max-w-5xl">
    <header class="border-b border-white/[.1] pb-6"><p class="text-[10px] font-bold uppercase tracking-[.18em] text-[#b7df9c]">Entrada de dados</p><h1 class="mt-2 text-3xl font-semibold tracking-[-.035em]">Importar uma base</h1><p class="mt-2 max-w-xl text-sm leading-6 text-[#919a95]">Envie a planilha para analisar os dados, identificar pendências e gerar resultados organizados.</p></header>
    <section class="mt-8 border border-white/[.1] bg-[#151819] p-5 sm:p-7">
      <div :class="['flex min-h-72 flex-col items-center justify-center border border-dashed px-6 text-center transition', arrastando ? 'border-[#6fae55] bg-[#6fae55]/[.08]' : 'border-white/[.14] bg-[#101313] hover:border-[#6fae55]/70']" @dragover.prevent="arrastando = true" @dragleave.prevent="arrastando = false" @drop.prevent="soltar">
        <span class="grid h-11 w-11 place-items-center border border-[#6fae55]/60 text-[#b7df9c]"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 16V4m-4 4 4-4 4 4M5 15v4h14v-4" /></svg></span>
        <h2 class="mt-5 text-base font-bold">Selecione a sua planilha</h2><p class="mt-2 max-w-md text-sm leading-6 text-[#87908b]">Arraste um arquivo aqui ou procure no computador. Aceitamos XLSX, XLS e CSV.</p>
        <label class="mt-6 cursor-pointer border border-[#6fae55] px-4 py-2.5 text-sm font-bold text-[#b7df9c] transition hover:bg-[#6fae55] hover:text-[#101411]">Escolher arquivo<input type="file" accept=".xlsx,.xls,.csv" class="hidden" @change="selecionar($event.target.files[0])" /></label>
      </div>
      <div v-if="upload.arquivo" class="mt-5 flex flex-col justify-between gap-4 border-l-2 border-[#6fae55] bg-white/[.03] p-4 sm:flex-row sm:items-center"><div><p class="text-sm font-bold">{{ nomeArquivo }}</p><p class="mt-1 text-xs text-[#89928d]">{{ tamanhoArquivo }} · pronto para validação</p></div><button :disabled="upload.carregando" @click="processar" class="bg-[#6fae55] px-5 py-2.5 text-sm font-bold text-[#101411] disabled:opacity-60">{{ upload.carregando ? 'Lendo arquivo...' : 'Processar e gerar relatório' }}</button></div>
      <div v-if="upload.erros.length && !upload.temResultado" class="mt-5 border-l-2 border-[#91c773] bg-[#91c773]/[.08] p-4 text-sm"><p v-for="erro in upload.erros" :key="erro.id">{{ erro.descricao }}</p></div>
    </section>
    <section class="mt-6 grid gap-px border border-white/[.1] bg-white/[.1] md:grid-cols-3"><article class="bg-[#151819] p-5"><b class="text-[#b7df9c]">01</b><p class="mt-7 text-sm font-bold">Importar planilha</p><p class="mt-2 text-sm leading-6 text-[#84908a]">Envie a sua base de dados em um formato compatível.</p></article><article class="bg-[#151819] p-5"><b class="text-[#b7df9c]">02</b><p class="mt-7 text-sm font-bold">Analisar dados</p><p class="mt-2 text-sm leading-6 text-[#84908a]">A base é conferida linha por linha para identificar pendências.</p></article><article class="bg-[#151819] p-5"><b class="text-[#b7df9c]">03</b><p class="mt-7 text-sm font-bold">Gerar resultados</p><p class="mt-2 text-sm leading-6 text-[#84908a]">Veja os dados organizados e as correções necessárias.</p></article></section>
  </div></main>
</template>
