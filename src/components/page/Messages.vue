<template>

    <div class="messages_container">
       <userbar></userbar>
       <messageform></messageform>
    </div>

</template>

<script>
  import Userbar from '../bardetache/Userbar'
  import Messageform from '../bardetache/Messageform'

  export default {

      components : { Userbar, Messageform  }
  }

</script>

<style scoped>
    .messages_container{
      position: absolute;
      top:15%;
      left:50%;
      transform: translateX(-50%);
      width: 60%;
      height:50%;
      padding: 10px;
    }
</style>
