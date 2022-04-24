<template>
    <div>
        <h1>child component</h1>
       <h3>{{name}}</h3>
        <h3 v-for="user in users" :key="user.name"> {{user.name}}---{{user.email}}</h3>
        
    </div>
</template>
<script>


export default {
    name:"ChilD",
    props:['users'],
    
    
}
</script>
