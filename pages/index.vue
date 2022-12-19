<script lang="ts" setup>
// Use the custom home layout for the application
definePageMeta({
  layout: "home",
});

// Set up the header for the application
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: `
      A simple companion app for people to manage their daily lives. 
      It comes with note taking, email reminders and many much more!
      `,
    },
  ],
  title: "The Cat And Owner",
});
</script>

<template>
  <div class="flex flex-col w-5/6 mx-auto">
    <!-- Image Section -->
    <div class="flex mx-auto h-[300px] mt-4">
      <nuxt-img alt="home-cat" src="/welcome_cat.svg" />
    </div>
    <!-- Image Section -->

    <!-- Introduction Section -->
    <div class="flex flex-col md:flex-row">
      <div class="mt-4 w-full text-center">
        <h3 class="text-5xl font-mono font-bold">The Cat And Owner</h3>
        <h5 class="text-2xl md:text-3xl text-gray-700 mt-4">
          A simple note taking app for students
        </h5>
      </div>
    </div>
    <!-- Introduction Section -->

    <!-- Button Section -->
    <div>
      <NuxtLink
        class="mt-4 rounded-lg py-2 px-6 text-black shadow-lg hover:bg-[#8785A2] hover:text-white flex items-center justify-center bg-[#EAEAEA] hover:cursor-pointer w-[300px] mx-auto font-bold"
        href="/auth/login"
        :prefetch="false"
      >
        Get Started Now
      </NuxtLink>
    </div>
    <!-- Button Section -->
  </div>
</template>
