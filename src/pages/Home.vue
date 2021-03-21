<template>
  <div class="text-center">
    <img class="inline-block" alt="Vue logo" src="../assets/images/logo.png" />

    <h1 class="my-8">{{ msg }}</h1>

    <p class="py-12 bg-[#f5f5f5] mb-8">
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button @click="state.count++">count is: {{ state.count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue';

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
