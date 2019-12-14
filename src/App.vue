<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Toast></Toast> -->
    <button @click="showToast()">点我</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Toast from './../packages/toast/toast'

export default {
  name: 'app',
  components: {
    // HelloWorld
    // Toast
  },
  methods: {
    showToast() {
      this.$toast('我是一个ttttt')
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
  margin-top: 60px;
}
</style>
