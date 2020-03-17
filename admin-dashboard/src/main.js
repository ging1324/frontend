import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueGoogleMaps, {
  load: {
    libraries: 'places'
  }
})
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
