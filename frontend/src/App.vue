<template>
  <div id="app">
    <ClientNavbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/ClientNavbar.vue";
export default {
  components: { ClientNavbar },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>

