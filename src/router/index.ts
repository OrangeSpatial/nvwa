import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../components/Index.vue')
    },
    {
        path: '/designer',
        name: 'Designer',
        component: () => import('../components/MainContent.vue'),
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
