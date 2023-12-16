import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainView,
    },
    {
        path: '/friends',
        name: 'friends',
        component: () => import('../views/FriendsView.vue'),
    },
    {
        path: '/gifts',
        name: 'gifts',
        component: () => import('../views/GiftsView.vue'),
    },
    {
        path: '/asignments',
        name: 'asignments',
        component: () => import('../views/AsignmentView'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
