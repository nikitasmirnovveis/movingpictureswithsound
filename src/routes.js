/* eslint-disable no-undef */
import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import Movie from './components/Movie.vue';

let router = new VueRouter ({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'home',
            component:Home,
        },
        {
            path:'/movie/:id',
            name:'movie',
            component:Movie,
        }
    ]
})

export default router