<template>
   <div>
       <img class="logo" src="../../assets/img/moxicar_png.png" alt="logo MoxiCar">
     <div id="nav-main" class="ui secondary menu">
       <router-link :to="{name :'Home'}">
       </router-link>
      <router-link v-for="(page,nth) in page" :key="nth" :to="{ name: page }" tag="li"
      class="item" active-class="is-active" exact>
       <span>{{ page }}</span>
      </router-link>
  <div class="right menu">
    <div class="item">
    </div>
    <a class="ui item">Déconnexion </a>
  </div>
</div>

   </div>
</template>

<script>

export default {
  data() {
    return {
      page:[
        "Home",
        "Login",
        "Inscription",
        "Trajet",
        "Profil",

        // "Inscription"
      ]
    }
  },
  name: 'App'
}
</script>

<style lang="css" scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  .logo{
    float:left;
    height: 35px;
    margin-top: 3px;
  }

  #nav-main{
    border-bottom : 1px solid lightblue;
  }


 li {
    border-bottom: 1px solid red;
    display:none;

 }

  li:hover{
    border-bottom: 1px solid red ;
    cursor:pointer;


 }

</style>
