import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import AbouT from '@/components/About'


vue.use (Router)

const routes = [
    {
        path:'/',
        name:"Home",
        component:HelloWorld
    },
    {path:'/about',name:"AbouT",component:AbouT}
]





let router = new Router({ routes })

export default router