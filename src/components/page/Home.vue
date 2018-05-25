<template>
  <main id="main" class="home">
      <div class="title">
        <h1>MoxiCar</h1>
        <p>La proximité pour tous !</p>
      </div>
      <div id="background">

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
#background{
  width: 100%;
  height:500px;
  background-image: url('../../assets/img/voiture.jpg');
  background-position: center;
  background-size: cover;
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
