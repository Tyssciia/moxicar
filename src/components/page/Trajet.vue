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
    <h4>Tout les covoiturages en direction de Val d'Europe</h4>
  </div>
  <div class="billet">
      <span>
         <i id="icon" class="fas fa-user-circle"></i>
          User 1
      </span>
      <span>
         <i id="icon" class="fas fa-user-circle"></i>
         User 2
      </span>

  </div>
</div>
</template>

<script>

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
     }
}
</script>

<style lang="css" scoped>

.main-trajet{
  background: white;
  margin:auto;
  width: 70%;
}
 .billet{
   width: 100%;
   height: 240px;
   background: #3d758e;
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
  span{
   display: block;
  }



</style>
