<template>
  <nav class="navbar">
    <router-link to="/" class="logo">Автосервис</router-link>
    <div class="nav-links">
      <router-link to="/">Главная</router-link>
      <router-link to="/request">Оформить заявку</router-link>
      <router-link to="/profile">Профиль</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ClientNavbar"
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d6efd;
  padding: 10px 20px;
  color: white;
}
.logo {
  font-weight: bold;
  font-size: 1.2em;
  color: white;
  text-decoration: none;
}
.nav-links a {
  margin-left: 20px;
  color: white;
  text-decoration: none;
}
.nav-links a.router-link-active {
  text-decoration: underline;
}
</style>
