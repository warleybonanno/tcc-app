import Vue from 'vue';
import Vuelidate from 'vuelidate';
import {
  MazPhoneNumberInput, MazInput, MazSelect,
} from 'maz-ui';

import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';

Vue.use(Vuelidate);
Vue.use(MazPhoneNumberInput);
Vue.use(MazInput);
Vue.use(MazSelect);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
