<template lang="html">
  <div id="main-profil">
    <div class="back-profil">
      <div class="photo" @click="uploadAvatar()">
        <input type="file" id="input_file">
        <span v-if="!hasAvatar">
       <i id="icon" class="fas fa-user-circle"></i>
       <br>
       <p>{{currentUser.displayName}}</p>
        </span>
        <img v-else src="avatar.src" :alt="'avatar de' + user.mail" class="img">
      </div>
      <div class="menu-profil">
         <router-link :to="{name :'Messages'}">
        <a href="#"><i class="far fa-envelope"></i>Messages</a></router-link>
        <a href="#"><i class="fas fa-wrench"></i>Parametre Profil</a>
        <br>
        <a href="#"><i class="fas fa-times"></i> Se désinscrire ?</a>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

import { mapGetters } from 'vuex';

export default {
  data(){
     return {
       hasAvatar:false,
       user: null,
       input:null
     }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods:{
    checkMimeType(type){
      const isAuthorized= [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
      ].find(mime =>{
         return mime === type;
      });
      return Boolean(isAuthorized);
   },
   getImageFile(clbk){
      return new Promise((resolve,reject) =>{ //cette fonction retourne une promesse
        // une promesse peut être tenur (resolved) ou non (rejected) ...
       this.input.click(); // fair un click sur l'input file (hidden par CSS)

       this.input.onchange = (e) => { // à chaque event change sur l'input
         const file = e.target.files["0"]; //on récupère le fichier sélectionné ...
         const checked = this.checkMimeType(file.type);//si c'est une image...
         if (checked) resolve(file);//on la retourne via le callback de succès
         else reject("je ne veux pas de ton fichier");// sinon callback d'erreur -> msg
       };
    });
   },
   sendToServer(img){},
   uploadAvatar() {
     //getImageFile retourne uen Promise (introduire de l'asynchronicité)
    // ici, la promesse est d'obtenir une image valide
      this.getImageFile().then(img => {
        // si la promesse est tenue ...
        console.log("file type ok, let's continue");
        console.log(img);
        EventBus.$emit("message-from-app", null);
      }).catch(err => {
         //Sinon ... On utilise notre bus d'Event ppour communiquer
         // avec le composant AppMessage !
         alert('ici')
         EventBus.$emit("message-from-app", {
           txt:err,
           status:"warning"
         }); // envoi du message d'erreur
         console.log(err)
      }); //envoi msg erreur
      // EventBus.$emit("message-from-app", err); //envoi
    }
  }
}
</script>

<style lang="css">


#input_file{
 visibility: hidden;
}

#main-profil{
   height:100vh;
   background-image:url('../../assets/img/car2.jpg');
   background-repeat: no-repeat;
   background-size: 100%;
   box-shadow: 1px 1px 5px 2px dimgrey;
}

.back-profil{
 background-color: white;
 position: absolute;
 top:15%;
 left:50%;
 transform: translateX(-50%);
 width: 60%;
 min-width: 300px;
 height:520px;
 padding: 10px;
}

.photo{
  margin:auto;
  width:100px;
  height:100px;
  cursor: pointer;
  margin-bottom: 100px;
}
.photo p{
   text-align: center;
}
#icon{
  width:100px;
  height:100px;
  cursor: pointer;
}
.menu-profil{
  margin:auto;

}

.menu-profil a{
  border-bottom:1px solid lightgrey;
  display: block;
  text-transform: uppercase;
  color: crimson;
  padding: 10px;
  min-width: 200px;
  text-align: center;
  text-decoration: none;


}
</style>
