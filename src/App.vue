<template>
  <div id="app">
    <MyHeader />
    <MyServices />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyServices from './components/MyServices.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyServices,
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

}
*{
  margin: 0;
  padding: 0;
}
</style>
