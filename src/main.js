/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import api from './services/api.js';
import App from './App.vue'

import '@/assets/css/styles.css'
import './main.scss'; // Import global SCSS file

Vue.prototype.$http = api;
Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
  render: h => h(App),
  router: routes,  
}).$mount('#app')

