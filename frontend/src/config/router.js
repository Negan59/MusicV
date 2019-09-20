import vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import AdminPages from '../components/admin/AdminPages'
import AdminMusics from '../components/music/AdminMusics'
import Auth from '../components/auth/Auth'

vue.use(VueRouter)

const routes =[{
    name:'home',
    path: '/',
    component: Home
}, {
    name:'adminPages',
    path: '/admin',
    component: AdminPages

}, {
    name:'AdminMusics',
    path: '/music',
    component:AdminMusics
},{
    name: 'auth',
    path: '/auth',
    component: Auth
}

]


export default new VueRouter({
    mode: 'history',
    routes
})

