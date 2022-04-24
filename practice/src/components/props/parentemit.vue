<template>
  <div id="app">
   <!-- <h1>send props child to parent</h1>-->
  <h2> --video 13 --></h2>
    <h2>{{tittle}}</h2> 
    <EmiT v-on:changetittle="updatetittle($event)"/>
  </div>
</template>

<script>
import EmiT from '@/components/props/emit'
export default {
  name: 'App',
  components: {EmiT},
  data(){
      return{tittle:"props tutorial"}
  },
  methods:{
updatetittle(tittle){
    this.tittle=tittle
}
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