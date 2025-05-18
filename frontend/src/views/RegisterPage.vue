<script setup>
import api from "../api.js";

const registerUser = async () => {
  try {
    const response = await api.post("/register", {
      username: "demo",
      password: "123456",
    });
    console.log(response.data);
  } catch (error) {
    console.error("Ошибка регистрации:", error);
  }
};
</script>
