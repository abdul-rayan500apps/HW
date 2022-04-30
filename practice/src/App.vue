<template>
  <div id="app">
    <router-view/>
    <SlotchilD> <h2 slot="title">{{quotetitle}}</h2>
              <p slot="content">A wonderful Quote</p></SlotchilD>
              
  </div>
</template>

<script>
import SlotchilD from "@/components/props/slotchild";
export default {
  name: "App",
  data(){
    return{
      quotetitle:'The Quote'
    }
  },

  components: {
    SlotchilD,
  },
};
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