import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import AbouT from '@/components/About'
import EvenT from '@/components/Event'
import RenderinG from'@/components/Rendering'


vue.use (Router)

const routes = [
    { path:'/',name:"Home",component:HelloWorld},

    {path:'/about',name:"AbouT",component:AbouT},

    {path:'/event',name:"EvenT",component:EvenT},

    {path:'/rendering',name:"RenderinG",component:RenderinG}
]





let router = new Router({ routes })

export default router