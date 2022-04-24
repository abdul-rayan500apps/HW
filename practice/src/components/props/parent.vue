<template>
    <div>
        <h1>here we sending parent yo child</h1>
        <h1>props in vuejs ///video 12th</h1>
        <child v-bind:username="username"/>
       <child v-bind:users="users"/>

    </div>
</template>
<script>


import Child from './Child.vue'
export default {
  components: { Child },
    name:"ParenT",
    data(){
        return{
            username:'rehan',
            users:[{name:"rehan" ,email:"rehan@"},{name:"rayan" ,email:"rayan@"},{name:"rizwan" ,email:"rizwan@"}]
            
            }
    }
   
}
</script>
