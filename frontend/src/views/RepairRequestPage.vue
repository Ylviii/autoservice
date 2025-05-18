<template>
  <div>
    <ClientNavbar />
    <div class="repair-request container">
      <h1>Оформление заявки на ремонт</h1>
      <form @submit.prevent="submitRequest">
        <div>
          <label>Услуга:</label>
          <select v-model="request.service" required>
            <option disabled value="">Выберите услугу</option>
            <option v-for="service in services" :key="service.id" :value="service.name">
              {{ service.name }}
            </option>
          </select>
        </div>
        <div>
          <label>Дата:</label>
          <input type="date" v-model="request.date" required />
        </div>
        <div>
          <label>Время:</label>
          <input type="time" v-model="request.time" required />
        </div>
        <button type="submit">Отправить заявку</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClientNavbar from "@/components/ClientNavbar.vue";

export default {
  name: "RepairRequestPage",
  components: {
    ClientNavbar
  },
  data() {
    return {
      services: [],
      request: {
        service: "",
        date: "",
        time: ""
      },
      message: ""
    };
  },
  methods: {
    async fetchServices() {
      try {
        const response = await axios.get("http://localhost:8000/api/services");
        this.services = response.data;
      } catch (error) {
        console.error("Ошибка при получении списка услуг:", error);
      }
    },
    async submitRequest() {
      try {
        await axios.post("http://localhost:8000/api/requests", this.request);
        this.message = "Заявка успешно отправлена.";
      } catch (error) {
        console.error("Ошибка при отправке заявки:", error);
        this.message = "Ошибка при отправке заявки.";
      }
    }
  },
  mounted() {
    this.fetchServices();
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}
input,
select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
button {
  margin-top: 15px;
  padding: 10px 15px;
}
p {
  margin-top: 10px;
  color: green;
}
</style>