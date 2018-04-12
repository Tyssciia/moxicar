import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//GoogleMaps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBViYqx8qEtT7dtEioW2sM3pS6tvUpt3aI',
  }
})
  // 'key': 'AIzaSyBViYqx8qEtT7dtEioW2sM3pS6tvUpt3aI',


//fontAwesome
import fontawesome from "@fortawesome/fontawesome";
import regular from "@fortawesome/fontawesome-free-regular";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(regular,brands,solid);

Vue.use(VueRouter)

const router = new VueRouter({
  mode:"history",
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)

})
