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
  mounted() {
    console.log('git checkout 版本号  文件路径')
  },
  methods: {
    showToast() {
      this.$toast({text: '这是一个消息', offest: 200})
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
