<template>
    <div>
        <h1>
            For Loop in vuejs
        </h1>
        <table border="1px" align="center">
            <tr>
                <td>id</td>
                <td>name</td>
                <td>Email</td>
            </tr>
            <tr v-for="user in users" :key="user">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.Email}}</td>
            </tr>
        </table>
    </div>
</template>
<script>


export default {
    name:"ForLoop",


    data()
    {
        return{
            users:[
                {id:1,name:'abdul',Email:'abdul.500'},
                {id:2,name:'mohd',Email:'mohd.500'},
                {id:3,name:'ahmed',Email:'ahmed.500'}
            ]
        }
    }
}
</script>
