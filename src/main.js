import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import firebase from 'firebase'
import store from './store'

import SuiVue from 'semantic-ui-vue';

Vue.use(SuiVue);


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

// J'initialise Firebase
let config = {
  apiKey: "AIzaSyAA7-_KiZY0o_OaHVDyVq7B0rASS5d4EiA",
   authDomain: "moxicar-l.firebaseapp.com",
   databaseURL: "https://moxicar-l.firebaseio.com",
   projectId: "moxicar-l",
   storageBucket: "moxicar-l.appspot.com",
   messagingSenderId: "817337120375"
 };

firebase.initializeApp(config);

window.firebase = firebase

//permet d'écouter si l'utilisateur est connecter ou non
//on initialise notre instance principale dans notre methode
const unsuscribe = firebase.auth().onAuthStateChanged(user => {

// on recupere le store , pour etre sur que firebase est bien initialisé
  store.dispatch('setUser', user)

  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)

  })

//
   unsuscribe()
})
