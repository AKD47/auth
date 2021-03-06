import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

export default router;

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('token')) {
            next({
                path: '/login',
                query: {
                    username: Vue.prototype.$username,
                    token: Vue.prototype.$token
                }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});