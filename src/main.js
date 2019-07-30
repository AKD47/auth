import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import ElementUI from 'element-ui';
import { Notification } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const TOKEN = process.env.FRONT_END_TOKEN || 'qwerty';
Vue.prototype.$token = TOKEN;

const USERNAME = process.env.FRONT_END_TOKEN || 'leman';
Vue.prototype.$username = USERNAME;

Vue.use(store);
Vue.use(BootstrapVue);
Vue.use(ElementUI, Notification);

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common['Content-Type'] = 'application/json';
Vue.prototype.$http = axios;
// set language to EN
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
