<script setup>
import { ref } from 'vue'
const mostrarSenha = ref(false)
const lembrar = ref(false)
</script>

<template>
  <main class="page-lines min-h-screen bg-[#0d0f10] px-5 text-[#e9e7df] lg:px-8">
    <header class="mx-auto flex h-20 max-w-7xl items-center justify-between border-b border-white/[.09]">
      <router-link to="/" class="flex items-center gap-3"><img src="/xinsight-logo.jpg" alt="xInsight" class="h-10 w-10 border border-[#6fae55]/60 object-cover" /><span><strong class="block text-sm tracking-[.1em]">xInsight</strong><small class="text-[9px] uppercase tracking-[.16em] text-[#7f8984]">Data analytics</small></span></router-link>
      <router-link to="/" class="text-xs font-bold uppercase tracking-[.12em] text-[#9aa29d] hover:text-[#b7df9c]">← Voltar</router-link>
    </header>

    <section class="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 py-12 lg:grid-cols-[1fr_430px]">
      <div class="hidden lg:block">
        <p class="text-[11px] font-bold uppercase tracking-[.18em] text-[#b7df9c]">Acesso ao ambiente</p>
        <h1 class="mt-5 max-w-xl text-5xl font-semibold leading-[1.03] tracking-[-.045em] text-[#f4f1e9]">Retome a leitura da sua base.</h1>
        <p class="mt-6 max-w-lg text-base leading-7 text-[#9aa29d]">Dados organizados, pendências visíveis e uma visão direta para apoiar a rotina comercial.</p>
        <div class="mt-12 max-w-xl border border-white/[.1] bg-[#151819]/80 p-5">
          <div class="flex items-center justify-between border-b border-white/[.08] pb-4"><span class="text-sm font-bold">Situação da base</span><span class="text-[10px] font-bold uppercase tracking-wider text-[#b7df9c]">Atualizada</span></div>
          <div class="mt-5 grid grid-cols-3 gap-3"><div><p class="text-[10px] uppercase tracking-wide text-[#75807b]">Registros</p><p class="mt-1 text-2xl font-bold">248</p></div><div><p class="text-[10px] uppercase tracking-wide text-[#75807b]">Válidos</p><p class="mt-1 text-2xl font-bold text-[#b7df9c]">236</p></div><div><p class="text-[10px] uppercase tracking-wide text-[#75807b]">Revisar</p><p class="mt-1 text-2xl font-bold text-[#91c773]">12</p></div></div>
        </div>
      </div>

      <section class="border border-white/[.12] bg-[#151819]/90 p-7 shadow-2xl sm:p-8">
        <p class="text-[10px] font-bold uppercase tracking-[.18em] text-[#b7df9c]">Identificação</p>
        <h2 class="mt-3 text-2xl font-semibold tracking-tight text-[#f4f1e9]">Entrar no xInsight</h2>
        <p class="mt-2 text-sm leading-6 text-[#929a96]">Use suas credenciais para abrir o painel.</p>
        <form class="mt-8 space-y-5">
          <label class="block text-sm font-semibold text-[#d7dbd2]">E-mail<input type="email" placeholder="seu@email.com" class="mt-2 w-full border border-white/[.12] bg-[#101313] px-4 py-3 text-sm outline-none placeholder:text-[#65706b] focus:border-[#6fae55]" /></label>
          <label class="block text-sm font-semibold text-[#d7dbd2]">Senha<div class="relative mt-2"><input :type="mostrarSenha ? 'text' : 'password'" placeholder="Digite sua senha" class="w-full border border-white/[.12] bg-[#101313] px-4 py-3 pr-12 text-sm outline-none placeholder:text-[#65706b] focus:border-[#6fae55]" /><button type="button" @click="mostrarSenha = !mostrarSenha" class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#93a098]">{{ mostrarSenha ? 'Ocultar' : 'Mostrar' }}</button></div></label>
          <label class="flex items-center gap-2 text-xs text-[#929a96]"><input v-model="lembrar" type="checkbox" class="accent-[#6fae55]" /> Manter conectado</label>
          <router-link to="/dashboard" class="block bg-[#6fae55] px-5 py-3 text-center text-sm font-bold text-[#101411] transition hover:bg-[#91c773]">Entrar no painel →</router-link>
        </form>
        <p class="mt-7 border-t border-white/[.08] pt-5 text-center text-xs leading-5 text-[#6f7974]">Plataforma para organização e análise de dados comerciais.</p>
      </section>
    </section>
  </main>
</template>
