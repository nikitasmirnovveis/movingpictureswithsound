import Vue from 'vue'
import VueRouter from 'vue-router'
// eslint-disable-next-line no-unused-vars
import routes from './routes'
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import App from './App.vue'
import './main.scss'; // Import global SCSS file

Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
  render: h => h(App),
  router: routes,  
}).$mount('#app')

