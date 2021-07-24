import Vue from 'vue';
import Router from 'vue-router';

/* eslint-disable */
const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: () => import('@/pages/Home'),
    }, {
        path: '/message',
        component: () => import('@/pages/Message'),
    }, {
        path: '/user',
        component: () => import('@/pages/User'),
    }],
})

router.beforeEach((to, from, next) => {
    let authAble = false;
    if (authAble && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});

Vue.use(Router);

export default router;