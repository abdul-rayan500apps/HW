<template>
    <div>
        <h1 v-if="show">conditional rendering in vuejs</h1>
        <h1 v-else>conditional rendeing else block in vuejs</h1>
        <button v-on:click="display">Toggle</button>
    </div>
</template>
<script>


export default {
    name:"RenderinG",


    data()
    {
        return{show:true}
    },
    methods:
    {
        display()
        {
            this.show=!this.show
        }
        
    }
    
}
</script>
