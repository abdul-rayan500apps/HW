<template>
    <div>
        <p v-html="rowHTML"></p>
        <h2 v-once>{{name}}</h2>
        <h2>{{name}}</h2>
        <h2>{{10+20}}</h2>
        <h2>{{a*b}}</h2>
        <h2>{{ok?"yes":"no"}}</h2>
        <button v-bind:disabled="disablebtn" v-on:click="updatetext">update text</button>
    </div>
</template>
<script>

export default {
    name:"TemplatE",
    data(){
        return{
            name:"abdul",
            a:4,
            b:6,
            ok:false,
            rowHTML:"<h1>Template in vue js/  //9th video</h1>", ////this is html propertie,
            disablebtn:true
        }
    },
    methods:{
updatetext(){
    this.name="rayan"   //this is for changing name
    this.ok=!this.ok   //t=this is for toggle
}
    }
}
</script>
