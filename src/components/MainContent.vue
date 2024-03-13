<script setup lang="ts">
import WujieVue from "wujie-vue3";
import pages from "../config"
console.log(pages);
</script>

<template>
  <WujieVue
  v-for="page in pages"
  :key="page.name"
  width="100%"
  height="100%"
  :name="page.name"
  :url="page.url"
></WujieVue>
</template>

<style scoped>
</style>
