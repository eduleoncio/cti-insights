<script setup>
import { ref } from 'vue'

import Sidebar from './Sidebar.vue'

const collapsed = ref(false)
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#0d0f10] text-white">

    <Sidebar
      :collapsed="collapsed"
      @toggle="collapsed = !collapsed"
    />

    <main
      :class="[
        'relative z-10 min-h-screen transition-all duration-300',
        collapsed ? 'ml-[76px]' : 'ml-64'
      ]"
    >
      <router-view />
    </main>

  </div>
</template>
