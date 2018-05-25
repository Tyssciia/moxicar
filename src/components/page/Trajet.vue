<template lang="html">
<div class="main-trajet">
  <gmap-map v-bind:center="center" v-bind:zoom="7"
   style="width:100%; height:300px">
   <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position"
     v-bind:clickable="true"
     v-bind:draggable="true"
     @click="center=m.position"
   ></gmap-marker>
 </gmap-map>
  <div class="direction">
    <div id="Search-bar">
     <div class="back-input">
      <select class="inputHome" type="search"  v-model="destination">
        <option value="" selected disabled hidden>Ex: Meaux</option>
        <option value="Meaux">Meaux</option>
        <option value="Val d'europe">Val d'Europe</option>
        <option value="Torcy">Torcy</option>
        <option value="La Ferté-sous-Jouarre">La Ferté-sous-Jouarre</option>
      </select>
       <br>
      <select class="inputHome" type="search" v-model="destination">
        <option value="" selected disabled hidden>Ex: Torcy</option>
        <option value="Meaux">Meaux</option>
        <option value="Val d'europe">Val d'Europe</option>
        <option value="Torcy">Torcy</option>
        <option value="La Ferté-sous-Jouarre">La Ferté-sous-Jouarre</option>
      </select>
      <br>
      <button v-on:click="action()" >recherche</button>
       </div>
     </div>
    <h4>Tout les covoiturages en direction de : </h4>
  </div>
  <div class="billet">
         <i id="icon" class="fas fa-user-circle">user</i>
         <p>{{ currentUser.displayName }}</p>
  </div>
  <div class="billet">
         <i id="icon" class="fas fa-user-circle">user</i>
         <p>{{ currentUser.displayName }}</p>
  </div>
</div>
</template>

<script>

import { mapGetters } from 'vuex';


export default {
  data () {
       return {
         center: {lat: 48.8499, lng: 2.637},
         markers: [{
           position: {lat: 48.9577, lng: 2.8739}
         }, {
           position: {lat: 48.855, lng: 2.78}
         }]
       }
     },
     computed: {
       ...mapGetters(['currentUser'])
     },
}
</script>

<style lang="css" scoped>

label{
  font-weight: bolder;
  margin-left: 20px;
}
#Search-bar{
  width: 100%;
  height:80px;
  background-position: center;
  background-size: cover;
}

.back-input{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:60%;
  left:50%;
  transform: translateX(-50%);
}
.inputHome{
  color:black;
  width: 200px;
  padding:4px;
  border-radius:17px;
  margin: 5px;

}
.submit-search{
background-color: #3d758e;
color: white;
padding: 10px;
width: 100px;
border: 1px solid #3d758e;
border-radius: 70px;
cursor: pointer;
}

button{
  margin-left: 20px;
   color:white;
}

.main-trajet{
  background: white;
  margin:auto;
  width: 70%;
}
 .billet{
   width: 100%;
   height: 100px;
   background: #3d758e;
   margin-bottom: 10px;
  }

  h4{
    padding: 10px;
  }

  #icon{
    color: white;
    margin:15px;
    width: 50px;
    height: 50px;
  }




</style>
