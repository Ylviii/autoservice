<template>
  <nav class="navbar">
    <router-link to="/">Главная</router-link>
    <router-link v-if="userStore.isAuthenticated" to="/profile">Профиль</router-link>
    <router-link v-if="userStore.isAuthenticated" to="/request">Заявка</router-link>
    <router-link v-if="!userStore.isAuthenticated" to="/login">Вход</router-link>
    <router-link v-if="!userStore.isAuthenticated" to="/register">Регистрация</router-link>
    <button v-if="userStore.isAuthenticated" @click="logout">Выйти</button>
  </nav>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const logout = async () => {
  await userStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #2c3e50;
}
.navbar a, .navbar button {
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
}
</style>