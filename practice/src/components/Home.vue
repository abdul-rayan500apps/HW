<template>
    <div>
        <h1>Home component</h1>
        <UserS />
        <ProducT />
    </div>
</template>
<script>

import  UserS from '@/components/user';
import ProducT from '@/components/Product'


export default {
    name:"HomE",
    components:{
        UserS,
        ProducT
        

    }
}
</script>
