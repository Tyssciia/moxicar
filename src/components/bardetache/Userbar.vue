<template lang="html">
  <div class="bar">
      <div class="ui mini image ">
          <h2>{{currentUser.displayName}}</h2>
          <img :src="currentUser.photoURL" alt="avatar">
          
      </div>

        <div class="extra">
            <button class="ui circular icon right floated button" @click="logout"><i class="icon sign out"></i></button>
        </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Userbar',
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
       logout () {
           firebase.auth().signOut()
           this.store.dispatch("setUser", null)
           this.$router.push('/login')
       }
    }

}

</script>

<style lang="css">
 .bar{
   width: 100%;
   padding : 20px;
   background-color:lightblue;

 }
</style>
