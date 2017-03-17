import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app';
import pages from './pages'
Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/home',
}, ...eachRoutes(pages)]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

new Vue({
    el: '#app',
    ...App,
    router
})

function eachRoutes(_routeList) {
    let _routes = [];
    for (let key in _routeList) {
        _routes.push({
            ..._routeList[key].route,
            component: _routeList[key]
        });
    }
    return _routes;
}

console.log(VERSION)