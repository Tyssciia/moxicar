<template>
  <main id="main" class="Inscription">
    <div class="inscription">

      <form class="form-conect" :class="{ 'error' : hasErrors }">
        <h3 class="title">Inscription</h3>

          <div class="input-co">
            <label for="">Choissiez votre pseudo:</label>
            <input type="text" id="pseudo" v-model="pseudo">

            <label for="email">Entrez votre adresse-mail:</label>
            <input type="text" id="email" v-model="email">

            <label for="password">Tapez votre mot de passe :</label>
            <input type="password"  id="password" v-model="password">

            <label for="password">Confirmez le mot de passe :</label>
            <input type="password"  id="password_confirmation" v-model="password_confirmation">
          </div>

          <div class="danger-block" v-if="hasErrors">
            <p v-for="error in errors">{{ error }}</p>
          </div>

        <div class="buttons">
          <button @click.prevent="inscription" class="btn-co" name="button" :class="{'loading' : isLoading}">S'inscrire</button>
        </div>
    </form>

  </div>
  </main>
</template>

<script>
import md5 from "md5"

export default {
    name: 'inscription',
    data () {
      return {
          pseudo:'',
          email: '',
          password:'',
          password_confirmation:'',
          errors: [],
          usersRef: firebase.database().ref('users'),
          isLoading: false
        }
    },
    computed:{
       hasErrors () {
          return this.errors.length > 0
        }
    },
      methods: {
        inscription () {

           this.errors = [];
           // Ici je crée un compte utilisateur avec comme ref son email et son mot de Passe
           if(this.isFormValid()){
             this.isLoading = true
             firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( user => {
                console.log("Utilisateur inscrit" + user.email)

                user.updateProfile({
                  displayName: this.pseudo,
                  photoURL:"http://www.gravatar.com/avatar/"+md5(user.email)+"?d=identicon"
                }).then ( () => {

                  // j'enregistre l'utilisateur dans la base de donnée
                  this.saveUserToUsersRef(user).then( () => {
                      this.$store.dispatch("setUser", user)
                      this.$router.push('./trajet')
                  })


                }, error => {
                    console.log(error)
                    this.errors.push(error.message)
                    this.isLoading = false
                })

                }).catch( error => {
                  console.log(error)
                  this.errors.push(error.message)
                  this.isLoading = false
                })
           }

        },
        saveUserToUsersRef(user){
            return this.usersRef.child(user.uid).set({
                 pseudo: user.displayName,
                 avatar: user.photoURL
              })
        },
        // Ici je crée mes conditions en cas d'erreur dans le formulaire
        isEmpty () {
          if(this.pseudo.length == 0 || this.email.length == 0 || this.password.length == 0 || this.password_confirmation.length == 0){
            return true;
          }
          return false;
        },
        // je sécurise la connexion avec un mot de passe au minimum de 6 caractère , si il n'y a pas 6 caractère alors l'inscription na pas lieu
        passwordValid () {
          if(this.password.length < 6 || this.password_confirmation.length < 6){
            return false;
          }
          if(this.password !== this.password_confirmation){
            return false;
          }
          return true;
        },
        // Si jamais le formulaire n'est pas correctement remplis et que les mot de passe ne corresponde pas je renvoie une erreur les indiquant avec push
        isFormValid(){
          if(this.isEmpty()){
              this.errors.push('Veuillez remplir tous les champs')
              return false
          }
          if(!this.passwordValid()){
              this.errors.push('Les mots de passe ne correspondent pas')
            return false
          }
          return true
        },
      }
    }

</script>

<style lang="css" scoped="">
 #main{
   font-size: 12px;
    height: 500px;
    background-image: url('../../assets/img/printemp.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 1px 1px 5px 2px dimgrey;
 }
 .inscription{
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
 margin-top: 5px;
 font-family: 'Open Sans', sans-serif;
}
.input-co{
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

label{
  font-weight: bolder;
  margin-top: 5px;
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
  background-color:#3d758e;
  color: white;
  padding: 10px;
  width: 120px;
  border: 1px solid white;
  border-radius: 70px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
}


</style>
