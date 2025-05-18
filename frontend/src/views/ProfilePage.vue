<template>
  <div class="profile container">
    <h1>Профиль клиента</h1>
    <form @submit.prevent="saveProfile">
      <div>
        <label>Имя:</label>
        <input v-model="profile.name" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="profile.email" required />
      </div>
      <div>
        <label>Телефон:</label>
        <input v-model="profile.phone" required />
      </div>
      <h2>Данные автомобиля</h2>
      <div>
        <label>Марка:</label>
        <input v-model="profile.carBrand" required />
      </div>
      <div>
        <label>Модель:</label>
        <input v-model="profile.carModel" required />
      </div>
      <div>
        <label>Госномер:</label>
        <input v-model="profile.carNumber" required />
      </div>
      <button type="submit">Сохранить</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfilePage",
  data() {
    return {
      profile: {
        name: "",
        email: "",
        phone: "",
        carBrand: "",
        carModel: "",
        carNumber: ""
      },
      message: ""
    };
  },
  methods: {
    async fetchProfile() {
      try {
        const response = await axios.get("http://localhost:8000/api/profile");
        this.profile = response.data;
      } catch (error) {
        console.error("Ошибка при загрузке профиля:", error);
      }
    },
    async saveProfile() {
      try {
        await axios.put("http://localhost:8000/api/profile", this.profile);
        this.message = "Профиль успешно сохранён.";
      } catch (error) {
        console.error("Ошибка при сохранении профиля:", error);
        this.message = "Ошибка при сохранении профиля.";
      }
    }
  },
  mounted() {
    this.fetchProfile();
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
input {
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
