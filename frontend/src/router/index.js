import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import RepairRequestPage from "@/views/RepairRequestPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import RegisterPage from "@/views/RegisterPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/request", name: "RepairRequest", component: RepairRequestPage },
  { path: "/profile", name: "Profile", component: ProfilePage },
  { path: "/register", name: "Register", component: RegisterPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
