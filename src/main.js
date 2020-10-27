import Vue from 'vue'
import App from './App.vue'
import 'boxicons';
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
