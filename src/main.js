import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './store'
import Cube from 'cube-ui'

Vue.use(Cube)

Vue.prototype.$http = Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
