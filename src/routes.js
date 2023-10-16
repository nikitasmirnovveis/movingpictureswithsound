/* eslint-disable no-undef */
import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import PopularMovies from './components/PopularMovies.vue';
import TopRatedMovies from './components/TopRatedMovies.vue';

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
        },
        {
            path:'/popular',
            name:'popularmovies',
            component:PopularMovies,
        },
        {
            path:'/toprated',
            name:'topratedmovies',
            component:TopRatedMovies,
        },
        // {
        //     path:'/profile',
        //     name:'profile',
        //     component:Profile,
        // }
    ]
})

export default router