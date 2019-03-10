import Vue from 'vue'
import app from './app.vue'
// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import moment from 'moment'
Vue.filter("dataParam",function(data,pattern='YYYY-MM-DD hh:mm:ss'){
    moment(data).format(pattern)
});
Vue.use(vueResource);
Vue.http.options.root = 'http://www.escook.cn:3000/';
Vue.use(VueRouter);
import router from './route.js'
import VuePreview from 'vue2-preview'
Vue.use(VuePreview);
import Vuex from 'vuex'
Vue.use(Vuex);
var car  =JSON.parse(localStorage.getItem("car")||"[]");
var store = new Vuex.Store(
    {
        state:{
            car:car
        },
        mutations:{
            addToCar(state,goodsInfo){
                var flag =false;
                state.car.some(item=>{
                    if (item.id == goodsInfo.id){
                        item.count+=parseInt(goodsInfo.count);
                        flag=true;
                        return true;
                    }
                });
                if(!flag){
                    state.car.push(goodsInfo);
                }
                localStorage.setItem('car',JSON.stringify(state.car));
            },
            updateShopInfo(state,goodsInfo){
                state.car.some(item=>{
                    if(item.id==goodsInfo.id){
                        item.count=parseInt(goodsInfo.count);
                        return true;
                    }
                })
                localStorage.setItem('car',JSON.stringify(state.car));
            },
            remove(state,id){
                state.car.some((item,i)=>{
                    if(item.id==id){
                        state.car.splice(i,1)
                        return true
                    }
                })
                localStorage.setItem('car',JSON.stringify(state.car));
            },
            changeSelected(state,info){
                state.car.some(item=>{
                    if(item.id==info.id){
                        item.selected=info.selected
                    }
                })
                localStorage.setItem('car',JSON.stringify(state.car));
            }
        },
        getters:{
            getAllCount(state){
                var c=0;
                state.car.forEach(item=>{
                    c+=item.count;

                })
                return c;
            },
            getShopCounts(state){
                var o ={};
                state.car.forEach(item=>{
                    o[item.id]=item.count;
                })
                return o;
            },
            getShopSelected(state){
                var o ={};
                state.car.some(item=>{
                  o[item.id]=item.selected
                })
                return o;
            },
            getShopCountsAndPrice(state){
                var o={
                    count:0,
                    allPri:0
                };
                state.car.forEach(item=>{
                    if(item.selected){
                        o.count+=item.count;
                        o.allPri+=item.count*item.price;
                    }
                })
                return o;
            }

        }
    }

);
var vm = new Vue({
    el:"#app",
    data:{},
    render:c=>c(app),
    router,
    store
})