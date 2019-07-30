import Vue from 'vue';
import App from './App.vue';
import router from './router'
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import ElementUI from 'element-ui';
import { Loading } from 'element-ui';
import { Notification } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const TOKEN = process.env.FRONT_END_TOKEN || 'qwerty';
Vue.prototype.$token = TOKEN;

const USERNAME = process.env.FRONT_END_TOKEN || 'leman';
Vue.prototype.$username = USERNAME;

Vue.use(BootstrapVue);
Vue.use(ElementUI, Loading, Notification);

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
  render: function (h) { return h(App) }
}).$mount('#app');
