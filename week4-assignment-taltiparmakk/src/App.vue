<template>
  <sideBar/>

  <pageWrapper/>
</template>

<script>

import sideBar from '@/components/sideBar.vue'
import pageWrapper from '@/components/pageWrapper.vue'

export default {
  name: 'App',
  components: {
    sideBar,
    pageWrapper

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
