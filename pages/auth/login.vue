<script lang="ts" setup>
// For layout purposes
definePageMeta({
  layout: "home",
});

// For SEO purposes
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
  title: "Login",
});

// Login Button
const { data, signIn } = useSession();

async function LoginButtonHandler() {
  await signIn("google", {
    callbackUrl: "/auth/dashboard",
  });
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="bg-white-border rounded-lg bg-[#F6F6F6] p-12 shadow-lg">
      <nuxt-img
        alt="Background Image"
        class="mb-4 h-[200px]"
        src="/auth/login.svg"
      />
      <h5 class="mb-5 text-center text-3xl font-bold tracking-tight">Login</h5>
      <button
        :click="LoginButtonHandler"
        class="flex mx-auto rounded bg-[#EAEAEA] p-2 text-black hover:bg-[#8785A2] hover:text-white"
      >
        <span class="font-semibold">Continue with Google</span>
      </button>
    </div>
  </div>
</template>
