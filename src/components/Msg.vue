<template>
  <div class="msg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Msg',
  data () {
    return {
      msg: 'Welcome to Message'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
