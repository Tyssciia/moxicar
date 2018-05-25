import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Formulaire from "./components/page/Inscription";
import Trajet from "./components/page/Trajet";
import Profil from "./components/page/Profil";
import Messages from "./components/page/Messages";


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
      },
      {
        path:"/messages",
         name:"Messages",
        component: Messages,
        beforeEnter: (to, from, next) => {
          if(!firebase.auth().currentUser){
            next('/login')
          }else{
            next()
     }
    }
  },

];
