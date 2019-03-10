import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shop from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newList from './components/news/newList.vue'
import newsinfo from './components/news/newsinfo.vue'
import photo from './components/photos/photo.vue'
import photoInfo from './components/photos/photoInfo.vue';
import shopInfo from './components/shopBuy/shopInfo.vue'
import goodLists from './components/shopBuy/goodLists.vue'
import goodDesc from './components/shopBuy/goodDesc.vue'
import goodComment from './components/shopBuy/goodComment.vue'
var router = new VueRouter({
    routes:[
        {path:'/',redirect: '/home'},
        {path: '/home', component:home},
        {path: '/member',component:member},
        {path: '/shop',component:shop},
        {path: '/search',component:search},
        {path: '/home/newList', component:newList},
        {path: '/home/newList/newInfo/:id', component:newsinfo},
        {path: '/home/photo', component:photo},
        {path: '/home/photo/:id', component:photoInfo},
        {path: '/home/shopBuy', component:shopInfo},
        {path: '/home/shopBuy/goodLists/:id', component:goodLists,name:'shopLists'},
        {path: '/home/goodDesc/:id', component:goodDesc,name:'goodDesc'},
        {path: '/home/goodComment/:id', component:goodComment,name:'goodComment'},
    ],
    linkActiveClass : 'mui-active'
})
export default router