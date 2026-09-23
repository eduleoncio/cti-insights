<script setup>
defineProps({
  collapsed: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle'])
</script>

<template>
  <aside :class="[
    'fixed left-0 top-0 z-50 flex h-screen flex-col',
    'border-r border-white/[0.06]',
    'bg-[#080808]/90 backdrop-blur-2xl',
    'transition-all duration-300',
    collapsed ? 'w-20' : 'w-64'
  ]">

    <!-- LOGO -->
    <div class="
        flex h-20 items-center
        border-b border-white/[0.06]
        px-5
      ">
      <router-link to="/dashboard" class="flex items-center overflow-hidden">

        <div class="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-xl
            border border-sky-400/30
            bg-sky-400/10
            text-xs font-bold text-sky-400
            shadow-[0_0_25px_rgba(56,189,248,0.15)]
          ">
          CTI
        </div>

        <div v-if="!collapsed" class="ml-3 whitespace-nowrap">
          <p class="font-semibold text-white">
            CTI Insights
          </p>

          <p class="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            Analytics
          </p>
        </div>

      </router-link>
    </div>

    <!-- MENU -->
    <nav class="flex-1 space-y-1.5 p-3">

      <p v-if="!collapsed" class="
          mb-3 mt-3 px-3
          text-[10px] font-medium uppercase
          tracking-[0.18em]
          text-zinc-700
        ">
        Menu principal
      </p>

      <!-- Dashboard -->
      <router-link to="/dashboard" class="
          group flex items-center gap-3
          rounded-xl px-3 py-3
          text-sm text-zinc-500
          transition duration-200
          hover:bg-white/[0.04]
          hover:text-white
        " active-class="!bg-sky-400/[0.08] !text-sky-400 ring-1 ring-sky-400/10">
        <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
          <rect x="3" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="3" width="7" height="7" rx="2" />
          <rect x="3" y="14" width="7" height="7" rx="2" />
          <rect x="14" y="14" width="7" height="7" rx="2" />
        </svg>

        <span v-if="!collapsed">
          Dashboard
        </span>
      </router-link>

      <!-- Upload -->
      <router-link to="/upload" class="
          group flex items-center gap-3
          rounded-xl px-3 py-3
          text-sm text-zinc-500
          transition duration-200
          hover:bg-white/[0.04]
          hover:text-white
        " active-class="!bg-sky-400/[0.08] !text-sky-400 ring-1 ring-sky-400/10">
        <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
          <path d="M12 16V4" />
          <path d="M8 8l4-4 4 4" />
          <path d="M4 15v4a1 1 0 001 1h14a1 1 0 001-1v-4" />
        </svg>

        <span v-if="!collapsed">
          Importar dados
        </span>
      </router-link>

      <!-- Relatórios -->
      <router-link to="/relatorios" class="
          group flex items-center gap-3
          rounded-xl px-3 py-3
          text-sm text-zinc-500
          transition duration-200
          hover:bg-white/[0.04]
          hover:text-white
        " active-class="!bg-sky-400/[0.08] !text-sky-400 ring-1 ring-sky-400/10">
        <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
          <path d="M7 3h10l4 4v14H7z" />
          <path d="M17 3v5h5" />
          <path d="M10 13h7" />
          <path d="M10 17h7" />
        </svg>

        <span v-if="!collapsed">
          Relatórios
        </span>
      </router-link>

      <!-- Gráficos -->
      <router-link to="/graficos" class="
          group flex items-center gap-3
          rounded-xl px-3 py-3
          text-sm text-zinc-500
          transition duration-200
          hover:bg-white/[0.04]
          hover:text-white
        " active-class="!bg-sky-400/[0.08] !text-sky-400 ring-1 ring-sky-400/10">
        <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-7" />
          <path d="M22 20H2" />
        </svg>

        <span v-if="!collapsed">
          Gráficos
        </span>
      </router-link>

    </nav>

    <!-- USUÁRIO -->
    <div class="border-t border-white/[0.06] p-3">

      <div v-if="!collapsed" class="
          mb-2 flex items-center gap-3
          rounded-xl
          border border-white/[0.05]
          bg-white/[0.02]
          p-3
        ">
        <div class="
            flex h-9 w-9 items-center justify-center
            rounded-full
            bg-sky-400/10
            text-xs font-semibold
            text-sky-400
          ">
          ED
        </div>

        <div class="min-w-0">
          <p class="truncate text-xs font-medium text-white">
            Usuário
          </p>

          <p class="truncate text-[10px] text-zinc-600">
            administrador
          </p>
        </div>
      </div>

      <!-- Recolher -->
      <button @click="emit('toggle')" class="
          flex w-full items-center gap-3
          rounded-xl px-3 py-3
          text-sm text-zinc-600
          transition
          hover:bg-white/[0.04]
          hover:text-white
        ">
        <svg :class="[
          'h-5 w-5 transition-transform duration-300',
          collapsed ? 'rotate-180' : ''
        ]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
          <path d="M15 18l-6-6 6-6" />
        </svg>

        <span v-if="!collapsed">
          Recolher menu
        </span>
      </button>

    </div>

  </aside>
</template>