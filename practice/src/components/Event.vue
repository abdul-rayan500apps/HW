<template>
    <div>
        <h1>How to use click event</h1>
        <button v-on:click="hello('hello this is Abdul')">Hello call function</button>
        <button v-on:mouseover="hello('hello this is Abdul')">Hello call function</button>
    </div>
</template>
<script>


export default {
    name:"EvenT",



    methods:{
        hello(data)
        {
            console.log("Hello console called")
            alert(data)
        }
    }
}
</script>
