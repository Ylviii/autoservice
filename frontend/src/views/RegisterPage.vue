<template>
  <div>
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <input v-model="form.username" placeholder="Имя пользователя" required />
      <input v-model="form.password" type="password" placeholder="Пароль" required />
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import { registerUser } from "@/api";

export default {
  name: "RegisterPage",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        await registerUser(this.form);
        alert("Регистрация прошла успешно!");
        this.$router.push("/");
      } catch (error) {
        alert("Ошибка регистрации: " + error);
      }
    },
  },
};
</script>