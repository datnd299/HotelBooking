import Vue from 'vue'
import App from './App.vue'
import store from '../store/store'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import router from './router'
Vue.config.productionTip = false
Vue.use(SuiVue);

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app')
