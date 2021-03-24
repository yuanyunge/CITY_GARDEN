import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import 'normalize.css/normalize.css';
import '@/styles/index.scss'; // global css

import '@/libs/flexible.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { toNumber } from '@/filters/index';
Vue.use(ElementUI);
Vue.filter('toNumber', toNumber);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

