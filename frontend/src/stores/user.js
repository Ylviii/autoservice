import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const router = useRouter()

  const isAuthenticated = computed(() => !!user.value)
  
  const login = async (credentials) => {
    try {
      // Замените на ваш реальный API endpoint
      const response = await axios.post('http://localhost:8000/auth/login', credentials)
      user.value = response.data.user
      localStorage.setItem('token', response.data.token)
      router.push('/')
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const register = async (userData) => {
    try {
      // Замените на ваш реальный API endpoint
      const response = await axios.post('http://localhost:8000/auth/register', userData)
      user.value = response.data.user
      localStorage.setItem('token', response.data.token)
      router.push('/')
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('token')
    router.push('/login')
  }

  return { user, isAuthenticated, login, register, logout }
})