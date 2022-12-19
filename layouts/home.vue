<script setup lang="ts">
import clsx from "clsx";
</script>

<template>
  <main
    :class="
      clsx('min-h-screen bg-gradient-to-b', 'from-[#FFE2E2] to-[#FFC7C7]')
    "
  >
    <slot />
  </main>
</template>
