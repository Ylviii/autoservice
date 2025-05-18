<template>
  <div>
    <h2>Оформление заявки</h2>
    <form @submit.prevent="submitRequest">
      <input v-model="description" placeholder="Описание проблемы" />
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const description = ref("");

const submitRequest = async () => {
  await axios.post("http://localhost:8000/api/requests", {
    description: description.value,
  });
};
</script>
