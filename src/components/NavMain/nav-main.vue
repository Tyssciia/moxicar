<template>
   <div>
       <nav id="nav-main">
        <img class="logo" src="../../assets/img/moxicar_png.png" alt="logo MoxiCar">
       <ul class="navi">
        <router-link :to="{name :'Home'}">
        </router-link>
       <router-link v-for="(page,nth) in page" :key="nth" :to="{ name: page }" tag="li"
       class="item" active-class="is-active" exact>
        <span>{{ page }}</span>
       </router-link>
     </ul>
    </nav>
   </div>
</template>

<script>

export default {
  data() {
    return {
      page:[
        "Home",
        "Login",
        "Trajet",
        "Profil"
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
    height: 45px;
    margin-top: 3px;
  }

  #nav-main{
    border-bottom : 1px solid lightblue;
  }
  .navi{
    color:Dimgrey;
    font-weight: bolder;
    font-size: 15px;
    height:20px;
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-end;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    cursor: pointer;
    list-style: none;
 }

 li {
   margin: 15px;
 }

  li:hover{
   height:30px;
   background-color: #3d758e;
   border:2px solid #3d758e;
   color: white;

 }

</style>
