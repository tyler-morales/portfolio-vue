import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueGlide)
Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
