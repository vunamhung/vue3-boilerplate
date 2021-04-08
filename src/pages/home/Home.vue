<template>
  <div class="text-center">
    <img class="inline-block" alt="Vue logo" src="@/assets/images/logo.png" />

    <h1 class="my-8 text-green-500">hello</h1>

    <p class="py-12 bg-[#f5f5f5] mb-8">
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button class="border border-gray-200 px-3 py-1 rounded mb-3" @click="state.count++">count is: {{ state.count }}</button>
  </div>
</template>

<script setup>
  import { defineProps, reactive } from 'vue';

  defineProps({
    msg: String,
  });

  const state = reactive({ count: 0 });
</script>
