<template>
  <div class="home">
    <h1>Добро пожаловать в AutoService</h1>
    <div v-if="!userStore.isAuthenticated">
      <router-link to="/login" class="btn">Войти</router-link>
      <router-link to="/register" class="btn">Регистрация</router-link>
    </div>
    <div v-else>
      <p>Ваш статус: {{ userStore.user.role }}</p>
      <router-link to="/request" class="btn">Оформить заявку</router-link>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
.btn {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}
</style>