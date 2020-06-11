import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [{
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Home,
    children: [{
        path: '/home',
        name: 'General',
        component: () => import('../views/General.vue')
    }, {
        path: '/introduce',
        name: 'Introduce',
        component: () => import('../views/Introduce.vue')
    }, {
        path: '/pageDesign',
        name: 'PageDesign',
        component: () => import('../views/PageDesign.vue')
    }, {
        path: '/microDesign',
        name: 'MicroDesign',
        component: () => import('../views/MicroDesign.vue')
    }, {
        path: '/courses',
        name: 'Courses',
        redirect: '/courses/list',
        component: () => import('../views/Courses.vue'),
        children: [{
            path: '/courses/list',
            name: 'CourseList',
            component: () => import('../views/CourseList.vue')
        }, {
            path: '/courses/create',
            name: 'CourseCreate',
            component: () => import('../views/CourseCreate.vue')
        }]
    }, {
        path: '/videos',
        name: 'Videos',
        component: () => import('../views/Videos.vue')
    }, {
        path: '/blogs',
        name: 'Blogs',
        component: () => import('../views/Blogs.vue')
    }, {
        path: '/flower',
        name: 'Flower',
        component: () => import('../views/Flower.vue')
    }, {
        path: '/cash',
        name: 'Cash',
        component: () => import('../views/Cash.vue')
    }, {
        path: '/services',
        name: 'Services',
        component: () => import('../views/Services.vue')
    }]
}, {
    path: '/design/:theme',
    name: 'Design',
    component: () => import('../views/Design.vue')
}, {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
}






    , {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}
    , {
    path: '/*',
    redirect: '/home'
}

];

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
