<template>
    <div>
        <button v-on:click="updatetittle()">update parent tittle</button>
    </div>
</template>
<script>


export default {
    name:"EmiT",

methods:{
updatetittle(){
   // console.warn("hello from tittle")
   this.$emit('changetittle',"parent updated")  
}
}
}
</script>
