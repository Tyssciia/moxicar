<template>
    <div class="messages_form" >

              <div class="field">
                  <textarea name="message" id="message" v-model="message" placeholder="Message"></textarea>
              </div>

            <div class="field">
              <a class="btn" @click.prevent="envoiMessage"><i class="far fa-paper-plane"></i></a>
            </div>

          </div>

</template>

<script>
    export default {
      name: 'Messageform',
      // data () {
      //     return {
      //       message: ''
      //     }
      // },
      // methods: {
      //    envoiMessage () {
      //
      //    }
      // }

    }
</script>

<style scoped>
.messages_form{
  background-color: grey;

  min-height: 100%;
}
.field textarea{
  position: absolute;
  top:80%;
  left:45%;
  transform: translateX(-50%);
  height:50%;
  padding: 10px;
  width: 80%;
  border:1px solid black;
}
.field a{
  color: white;
  width: 70px;
  position: absolute;
  top:80%;
  left:90%;
  transform: translateX(-10%);
  padding: 10px;
}




</style>
