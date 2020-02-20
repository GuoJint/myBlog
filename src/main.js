import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import ElementUI from 'element-ui';
import VueCookies from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css';


const mock = true;
if(mock){
  require('./mock/api')
}

Vue.use(VueCookies)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
