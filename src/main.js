// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueSocketio from 'vue-socket.io';
import vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(vuex)
Vue.use(VueSocketio, 'http://localhost:3000', store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
