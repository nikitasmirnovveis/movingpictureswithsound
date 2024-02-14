/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import axios from 'axios';
import VueAxios from 'vue-axios';

import {optionsPopular} from './services/api.js'
import App from './App.vue'
import {store} from './store'

import '@/assets/css/styles.css'
import './main.scss'; // Import global SCSS file

Vue.prototype.$http = optionsPopular; //from video guide

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios);



new Vue({
  render: h => h(App),
  store: store,
  router: routes,  
}).$mount('#app')

