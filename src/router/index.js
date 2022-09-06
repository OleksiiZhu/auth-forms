import {createRouter, createWebHistory} from 'vue-router'
import AuthorizationView from '@/views/AuthorizationView.vue'
import RegistrationView from "@/views/RegistrationView";

const routes = [
    {
        path: '/',
        name: 'registration',
        component: RegistrationView,
    },
    {
        path: '/login',
        name: 'authorization',
        component: AuthorizationView,
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
