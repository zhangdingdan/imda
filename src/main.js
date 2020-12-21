import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

const socketHost = window.location.protocol + '//' + window.location.hostname + ':5021';
Vue.use(new VueSocketIO({
  connection: socketHost
}));

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default new Vue ({
  icons: {
    iconfont: 'mdi'
  }
})