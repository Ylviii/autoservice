<template>
  <div class="home container">
    <h1>Добро пожаловать в автосервис!</h1>
    <p>
      Здесь вы можете оформить заявку на ремонт, обновить данные своего профиля и автомобиля,
      а также следить за историей ваших заявок.
    </p>
    <router-link to="/request">
      <button>Оформить заявку</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>