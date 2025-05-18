<template>
  <div id="app">
    <h1 v-if="!isRouterViewLoaded">AutoService Application</h1>
    <RouterView v-else />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const isRouterViewLoaded = ref(false)

onMounted(() => {
  isRouterViewLoaded.value = true
  console.log('App mounted')
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>