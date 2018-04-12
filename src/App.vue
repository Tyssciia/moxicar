<template>
  <div id="app">
    <nav-main></nav-main>
     <data></data>
     <router-view></router-view>
     <entete></entete>
  </div>
</template>
<script>

import axios from 'axios'
import NavMain from './components/NavMain/nav-main'
import entete from './components/Footer/footer-main'

export default {
  components:{
      NavMain,
      entete
  },
  name: 'app',
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
