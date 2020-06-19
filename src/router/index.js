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
        redirect: '/pageDesign/shopIframe',
        component: () => import('../views/PageDesign.vue'),
        children: [{
            path: '/pageDesign/shopIframe',
            name: 'ShopIframe',
            component: () => import('../views/pageDesign/ShopIframe.vue')
        }, {
            path: '/pageDesign/shopNav',
            name: 'ShopNav',
            component: () => import('../views/pageDesign/ShopNav.vue')
        }, {
            path: '/pageDesign/shopFooter',
            name: 'ShopFooter',
            component: () => import('../views/pageDesign/ShopFooter.vue')
        }]
    }, {
        path: '/microDesign',
        name: 'MicroDesign',
        component: () => import('../views/MicroDesign.vue')
    }, {
        path: '/material',
        name: 'Material',
        redirect: '/material/materialPics',
        component: () => import('../views/Material.vue'),
        children: [{
            path: '/material/materialPics',
            name: 'Pics',
            component: () => import('../views/material/Pics')
        }, {
            path: '/material/materialVideos',
            name: 'Videos',
            component: () => import('../views/material/Videos')
        }, {
            path: '/material/materialAudios',
            name: 'Audios',
            component: () => import('../views/material/Audios')
        }, {
            path: '/material/materialEbook',
            name: 'Ebook',
            component: () => import('../views/material/Ebook')
        }]
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
        redirect: '/videos/list',
        component: () => import('../views/Videos.vue'),
        children: [{
            path: '/videos/list',
            name: 'VideoList',
            component: () => import('../views/VideoList.vue')
        }, {
            path: '/videos/create',
            name: 'VideoCreate',
            component: () => import('../views/VideoCreate.vue')
        }]
    }, {
        path: '/blogs',
        name: 'Blogs',
        redirect: '/blogs/list',
        component: () => import('../views/Blogs.vue'),
        children: [{
            path: '/blogs/list',
            name: 'BlogList',
            component: () => import('../views/BlogList.vue')
        }, {
            path: '/blogs/create',
            name: 'BlogCreate',
            component: () => import('../views/BlogCreate.vue')
        }]
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
}, {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
}, {
    path: '/reset',
    name: 'Reset',
    component: () => import('../views/Reset')
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
