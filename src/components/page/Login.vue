<template>
  <main id="main" class="Login">
    <div class="connection-inscription">
      <form class="form-conect" action="index.html" method="post">
        <h3 class="title">{{ title }}</h3>
          <hr>
          <div class="input-co">
            <label for="">Entrez votre adresse-mail:</label>
            <input type="E-mail" name="" value="" placeholder="Adresse E-mail">
            <label for="">Tapez votre mot de passe :</label>
            <input type="password" name="" value="" placeholder="Mot de Passe">
          </div>
        <div class="buttons">
          <button class="btn-co" type="submit" name="button">Connexion</button>
          <component :is="activeComponent" @set-page-title="setPageTitle($event)"
          class="form"></component>
          <button id="switch_component" @click="setActiveComponent()" class="btn">
            <span>{{ msg }}</span>
          </button>
        </div>
    </form>
  </div>
  </main>
</template>

<script>

// import FormLogin from "./../forms/Login.vue";
// import FormRegister from "./../forms/Register.vue";

export default {
  // components:{
  //   FormLogin,
  //   FormRegister,
  // },
  created(){
    this.setActiveMessage();
  },
  data(){
    return {
      title: "Se Connecter",
      activeComponent:"FormRegister",
    }
  },
  methods:{
    setActiveComponent(){
      this.activeComponent = (this.activeComponent === "FormLogin") ? "FormRegister" : "FormLogin";
      this.setActiveMessage();
    },
    setActiveMessage(){
      this.msg = (this.activeComponent === "FormLogin") ? "Deja Inscris?" : "S'inscrire ?";
    },
    setPageTitle(title){
      this.title = title;
    }
  }
}
</script>

<style lang="css" scoped="">
 #main{
    height: 500px;
    background-image: url('../../assets/img/mox.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 1px 1px 5px 2px dimgrey;
 }

 .connection-inscription{
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
.btn{

  margin-top:20px;
  background-color:darkgreen;
  color: white;
  padding: 10px;
  width: 120px;
  border: 1px solid white;
  border-radius: 70px;
  cursor: pointer;
}

</style>
