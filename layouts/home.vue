<script setup lang="ts">
import clsx from "clsx";
</script>

<template>
  <main
    :class="
      clsx(
        'flex min-h-screen',
        'flex-col items-center',
        'justify-center bg-gradient-to-b',
        'from-[#FFE2E2] to-[#FFC7C7]'
      )
    "
  >
    <slot />
  </main>
</template>
