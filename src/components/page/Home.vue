<template>
  <main id="main" class="home">
      <div class="title">
        <h1>MoxiCar</h1>
        <p>La proximité pour tous !</p>
      </div>
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
       <select class="inputHome" type="search" placeholder="">
         <option value="" selected disabled hidden>Ex: Torcy</option>
         <option value="Meaux">Meaux</option>
         <option value="Val d'europe">Val d'Europe</option>
         <option value="Torcy">Torcy</option>
         <option value="La Ferté-sous-Jouarre">La Ferté-sous-Jouarre</option>
       </select>
       <br>
       <button v-on:click="action()" class="submit-search" type="submit"> s'inscrire !</button>
        </div>
      </div>
     <div id="about">
           <img class="voyageuse" src="../../assets/img/images.jpg" alt="voyageuse attendant son train">
        <article class="article-1">
           <p class="text">Moxicar est une Web App de covoiturage  qui permet aux habitants de Meaux et voisins de trouver une alternative en cas de retard ou de suppression de transports en communs</p>
        </article>
        <article class="article-2">
           <p class="text">Nous avons constaté que nous faisons face à un problème important ( retard , suppression , surcharges des trains en heures pleines)
           </p>
        </article>
     </div>
     <div id="about2">
           <img class="fleur" src="../../assets/img/printemp.jpg" alt="voyageuse attendant son train">
        <article class="article-1">
           <p class="text">Moxicar est une Web App de covoiturage  qui permet aux habitants de Meaux et voisins de trouver une alternative en cas de retard ou de suppression de transports en communs</p>
        </article>
        <article class="article-2">
           <p class="text">Nous avons constaté que nous faisons face à un problème important ( retard , suppression , surcharges des trains en heures pleines)
           </p>
        </article>
     </div>
  </main>
</template>

<script>
export default {
   data: {

  },
  methods: {
 action(){
   alert( "On a cliqué !" );
 }
},
}
</script>

<style lang="css" scoped="">

.title{
  text-shadow: 2px 2px 2px black;
  font-size: 20px;
  color: white;
  position: absolute;
  top:15%;
  left:50%;
  transform: translateX(-50%);
}

h1{
  margin-top:40px;
  font-weight: bolder;
  text-align: center;
}

label{
  font-weight: bolder;
  margin-left: 20px;
}
#Search-bar{
  width: 100%;
  height:500px;
  background-image: url('../../assets/img/voiture.jpg');
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

#about{
  font-size: 20px;
  margin: 100px;

}

.text{
  font-size: 20px;
  text-align: left;
}

.voyageuse{
  float: right;
  width: 400px;
  height: 230px;
  margin: 10px;
}

#about2{
  font-size: 20px;
  margin: 100px;

}

.text{
  font-size: 20px;
  text-align: left;

}

.fleur{
  float: left;
  width: 400px;
  height: 230px;
  margin: 10px;
}


</style>
