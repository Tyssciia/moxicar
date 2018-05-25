<template>
  <main id="main" class="Login">
    <div class="login">
      <form class="form-conect" :class="{ 'error' : hasErrors }">
        <h3 class="title">Connection</h3>
          <hr>
          <div class="input-co">
            <label for="">Entrez votre adresse-mail:</label>
            <input type="E-mail" id="email" v-model.trim="email"  placeholder="Adresse E-mail" require>
            <label for="">Tapez votre mot de passe :</label>
            <input type="password" id="password" v-model.trim="password" placeholder="Mot de Passe" require>
          </div>

          <div class="danger-block" v-if="hasErrors">
            <p v-for="error in errors">{{ error }}</p>
          </div>

        <div class="buttons">
          <button class="btn-co" @click.prevent="login" name="button" :class="{'loading' : isLoading }">Connexion</button>
        </div>
          <router-link class="btn-ins" to="./inscription">Pas encore inscris ?</router-link>
    </form>
  </div>
  </main>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
       email:'',
       password:'',
       errors: [],
       isLoading:false

    }
  },
      computed:{
         hasErrors () {
            return this.errors.length > 0
          }
      },

    methods:{
       login () {
         console.log("login")
         this.errors = []

            if(this.isFormValid()){
              this.isLoading = true

              firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {

                this.$store.dispatch('setUser', user)
                this.$router.push('./profil')

              }).catch(error => {
                  this.errors.push(error.message)
                  this.isLoading = false
                })
            }
       },
       // Ici je crée mes conditions en cas d'erreur dans le formulaire

       isFormValid(){
         if (this.email.length > 0 && this.password.length > 0){
           return true;
         }
         return false;
       },
    }
};
</script>

<style lang="css" scoped="">
 #main{
    font-size: 12px;
    height: 500px;
    background-image: url('../../assets/img/mox.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 1px 1px 5px 2px dimgrey;
 }

 .login{
  background-color: white;
  position: absolute;
  top:15%;
  left:50%;
  transform: translateX(-50%);
  width: 350px;
  height:450px;
  padding: 10px;

}

 .form-conect{
  margin:auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

 .form-conect h3{
 text-align: center;
 color: crimson;
 margin-top: 10px;
 margin-bottom: 0px;
 font-family: 'Open Sans', sans-serif;
}
.input-co{
  margin-top:20px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

label{
  font-weight: bolder;
  margin-top: 15px;
}
.input-co input{
  width: 240px;
  border: 1px solid darkgrey;
  border-radius: 70px;
  padding:8px;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
}

.buttons{
display: flex;
justify-content: space-around;
margin-top: 25px;

}


.danger-block{
  margin-top: 10px;
  text-align: center;
  color: #D8000C;
  background-color: #FFBABA;
  background-position: 30px center;
}

 .btn-co {
  margin-top:20px;
  background-color:#3d758e;
  color: white;
  padding: 10px;
  width: 120px;
  border: 1px solid white;
  border-radius: 70px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
}
.btn-ins{
  color:green;
  margin-top:20px;
  text-align: center;
  border-radius: 70px;
  cursor: pointer;
}

</style>
