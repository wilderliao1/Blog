<template>
  <div class="blog">
    <div class="slide_div">
      <label>文章分类</label>
      <ul>
        <li><router-link :to="{name: 'Blog'}">Object-A</router-link></li>
        <li><router-link :to="{name: 'Msg'}">Object-B</router-link></li>
        <li><router-link :to="{name: 'About'}">Object-C</router-link></li>
        <li><router-link :to="{name: 'About'}">Object-D</router-link></li>
        <li><router-link :to="{name: 'About'}">Object-E</router-link></li>
        <li><router-link :to="{name: 'About'}">Object-F</router-link></li>
      </ul>
    </div>>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      msg: 'Welcome to Blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.slide_div {
  float: left;
}

.slide_div label {
  background-color: #CCC;
}

.slide_div ul {
  background-color: #CCC;
}

.slide_div ul li {
  width:100px;
  background:#FFF;
  line-height:30px;
  display:inline;
}

.slide_div ul a {
  display:block;
  text-align:left;
  height:30px;
  background-color: #999;
}
</style>
