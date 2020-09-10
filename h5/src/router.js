import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import index from './view/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: index
    }
]
const router = new VueRouter({
    routes
})
export default router