<script setup>
import { ref } from 'vue'

import Sidebar from './Sidebar.vue'
import GlowBackground from './GlowBackground.vue'

const collapsed = ref(false)
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#050505] text-white">

    <GlowBackground />

    <Sidebar
      :collapsed="collapsed"
      @toggle="collapsed = !collapsed"
    />

    <main
      :class="[
        'relative z-10 min-h-screen transition-all duration-300',
        collapsed ? 'ml-20' : 'ml-64'
      ]"
    >
      <router-view />
    </main>

  </div>
</template>