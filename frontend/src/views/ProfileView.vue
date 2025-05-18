<template>
  <div class="profile">
    <h2>Профиль пользователя</h2>
    <div v-if="userStore.user">
      <p>Имя: {{ userStore.user.name }}</p>
      <p>Email: {{ userStore.user.email }}</p>
      <p>Роль: {{ userStore.user.role }}</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>