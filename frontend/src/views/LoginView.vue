<template>
  <div class="login">
    <h2>Вход в систему</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Пароль" required>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const email = ref('')
const password = ref('')
const userStore = useUserStore()

const login = async () => {
  try {
    await userStore.login({
      email: email.value,
      password: password.value
    })
  } catch (error) {
    alert(error.message)
  }
}
</script>