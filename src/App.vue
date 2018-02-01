<template>
  <div id="app">
    <div class="nav">
      <img src="./assets/logo.png">
      <label>{{ name }}</label>
      <ul>
        <li>
          <router-link :to="{name: 'Blog'}">博客</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Msg'}">留言</router-link>
        </li>
        <li>
          <router-link :to="{name: 'About'}">关于</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      name: 'wilder'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  background: #CCC;
  width:100%;
  height: 80px;
  line-height: 80px;
}
.nav img {
  float:left;
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
.nav label {
  float:left;
  height: 20px;
  text-align: center;;
  vertical-align: middle;
  display: inline-block;
}
.nav ul {
    list-style:none;
}

.nav ul li {
  float:right;
  width:100px;
  background:#CCC;
  margin-left:3px;
  line-height:30px;
}
.nav ul a {
  display:block;
  text-align:center;
  height:30px;
}
</style>
