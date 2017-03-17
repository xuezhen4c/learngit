import Vue from 'vue'
import App from './app'
import router from './routers'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'ASSET/img/error.png',
  loading: 'ASSET/img/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
