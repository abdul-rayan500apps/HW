import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import AbouT from '@/components/About'
import EvenT from '@/components/Event'
import RenderinG from'@/components/Rendering'
import ForLoop from "@/components/ForLoop"
import HomE from '@/components/Home'
import TemplatE from '@/components/Templates'
import ParenT from '@/components/props/parent'
import ParentemiT from '@/components/props/parentemit'
//import QuotE from '@/components/slotparent'

vue.use (Router)

const routes = [
    { path:'/',name:"Home",component:HelloWorld},

    {path:'/about',name:"AbouT",component:AbouT},

    {path:'/event',name:"EvenT",component:EvenT},

    {path:'/rendering',name:"RenderinG",component:RenderinG},

    {path:'/forloop',name:"ForLoop",component:ForLoop},

    {path:'/home',name:"HomE",component:HomE},

    {path:'/template',name:"TemplatE",component:TemplatE},

    {path:'/parent',name:"ParenT",component:ParenT},

    {path:'/emit',name:"ParentemiT",component:ParentemiT},

    //{path:'/quote',name:"QuotE",component:QuotE},
]





let router = new Router({ routes })

export default router