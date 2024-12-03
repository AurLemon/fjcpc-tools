import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/module',
            name: 'module',
            component: () => import('../views/ModuleView.vue')
        },
        {
            path: '/module/lab-test',
            name: 'module',
            component: () => import('../features/modules/LabTest.vue')
        }
    ]
})

export default router