<template>
  <div class="request-form">
    <h2>Оформление заявки</h2>
    <form @submit.prevent="submitRequest">
      <div class="form-group">
        <label>Услуга:</label>
        <select v-model="form.service_id" required>
          <option v-for="service in services" :key="service.id" :value="service.id">
            {{ service.name }} ({{ service.price }} руб.)
          </option>
        </select>
      </div>
      
      <div class="form-group">
        <label>Дата и время:</label>
        <input type="datetime-local" v-model="form.request_date" required>
      </div>
      
      <button type="submit">Отправить заявку</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const services = ref([])
const form = ref({
  service_id: '',
  request_date: ''
})

onMounted(async () => {
  const response = await axios.get('http://localhost:8000/api/services')
  services.value = response.data
})

const submitRequest = async () => {
  try {
    await axios.post('http://localhost:8000/api/requests', form.value)
    alert('Заявка успешно создана!')
  } catch (error) {
    console.error('Ошибка при создании заявки:', error)
  }
}
</script>

<style scoped>
.request-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
select, input {
  width: 100%;
  padding: 8px;
}
button {
  background: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>