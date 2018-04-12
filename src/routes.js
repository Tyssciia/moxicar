import Home from "./components/page/Home.vue";
import Login from "./components/page/Login.vue";
import Formulaire from "./components/page/Inscription.vue";
import Trajet from "./components/page/Trajet.vue";
import Profil from "./components/user/Profil.vue";

export const routes = [
  {
    path:"/",
    name:"Home",
    component: Home
  },
  {
    path:"/login",
    name:"Login",
    component: Login
  },
  {
    path:"/inscription",
    name:"Inscription",
    component: Formulaire
  },
  {
    path:"/trajet",
    name:"Trajet",
    component: Trajet
  },
  {
    path:"/profil",
    name:"Profil",
    component: Profil
  }
];
