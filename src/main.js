import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import ElementUI from 'element-ui';
import VueCookies from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


//图标样式
import "./assets/icons/iconfont.css"

const mock = false;
if(mock){
  require('./mock/api')
}

Vue.use(mavonEditor)
Vue.use(VueCookies)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
