<template>
  <div id="app">
    <MyHeader />
    <MyServices />
    <MyInfos />
    <MyBrands />

    <MyCards />
    <MyAwards />
    <MyInfos2 />
    <MyCards2 />
    <MyFinal />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyServices from './components/MyServices.vue'
import MyInfos from './components/MyInfos.vue'
import MyBrands from './components/MyBrands.vue'

import MyCards from './components/MyCards.vue'
import MyAwards from './components/MyAwards.vue'
import MyInfos2 from './components/MyInfos2.vue'
import MyCards2 from './components/MyCards2.vue'
import MyFinal from './components/MyFinal.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyServices,
    MyInfos,
    MyBrands,

    MyCards,
    MyAwards,
    MyInfos2,
    MyCards2,
    MyFinal,
    MyFooter,
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
