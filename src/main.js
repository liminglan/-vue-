import Vue from 'vue'
import app from './app.vue'
import { Header,Swipe, SwipeItem  } from 'mint-ui';
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.use(VueRouter);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import router from './route.js'
Vue.component(Header.name, Header);
var vm = new Vue({
    el:"#app",
    data:{},
    render:c=>c(app),
    router
})