import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shop from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
var router = new VueRouter({
    routes:[
        {path:'/',redirect: '/home'},
        {path: '/home',component:home},
        {path: '/member',component:member},
        {path: '/shop',component:shop},
        {path: '/search',component:search},
    ],
    linkActiveClass : 'mui-active'
})
export default router