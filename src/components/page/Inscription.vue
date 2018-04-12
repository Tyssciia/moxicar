<template>
  <main id="main" class="Formulaire">
    <form method="POST" action="./php/php_connect.php">

        <label for="Pseudo">Choisissez un pseudo </label>
        <input type="text" placeholder="Pseudo" value="" >

        <label for="Nom"> Votre nom </label>
        <input type="text" placeholder="Nom" value=""  >

        <label for="Prenom">Votre prénom </label>
        <input type="text" placeholder="Prenom" value=""  >

        <label for="Anniversaire">Votre date de naissance </label>
        <input type="date" placeholder="Anniversaire" value="" >

        <label for="mot de passe">Votre mot de passe </label>
        <input type="password" placeholder="Mot de passe" value=""  >

        <label for="Adresse">Votre lieu de résidence</label>
        <input type="text" placeholder="Adresse" value=""  >

        <label for="Mobile">Votre numéro de téléphone</label>
        <input type="tel" placeholder="Mobile" value="" >

        <div>
          <input type="radio" id="one" value="Un" name="choix"  v-model="picked">
          <label for="one">Conducteur</label>

          <input type="radio" id="two" value="Deux"  name="choix" v-model="picked">
          <label for="two">Passager</label>
        </div>
    </form>
  </main>
</template>

<script>
export default {}

</script>

<style lang="css" scoped="">

 form{
   margin-top :45px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }

 label{
   text-align: left;
   margin: 0;
 }

  input{
  width:20%;
  margin: 7px;
  border:1px solid #F5C5C5;
  padding:2px;
  border-radius:17px;
  margin-left: 20px;
  }
</style>
