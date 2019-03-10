<template>
    <div class="goodList">
        <div class="mui-card" v-for="(item,i) in shopList" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getShopSelected[item.id]"@change="changeSelect(item.id,$store.getters.getShopSelected[item.id])"></mt-switch>
                    <img src="../images/iphone2.jpg" alt="">
                    <div class="info" >
                        <h3>Apple 苹果 iPhone XR 手机 蓝色 全网通64G </h3>
                        <span>￥5999</span>
                        <shopBox :initcount="$store.getters.getShopCounts[item.id]" :shopid="item.id" ></shopBox>
                        <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span>{{$store.getters.getShopCountsAndPrice.count}}</span>件,总价: <span>￥{{$store.getters.getShopCountsAndPrice.allPri}}</span></p>
                    </div>
                    <mt-button type="danger" size="small">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import shopBox from '../subComponents/shopBox.vue'
export default {
    data(){
        return{
            shopList:[
                {"id":1},
                {"id":2},
                {"id":3}
            ]
        }
    },
    methods:{
        remove(id,index){
            this.shopList.splice(index,1);
            this.$store.commit("remove",id)
        },
        changeSelect(id,val){
           this.$store.commit("changeSelected",{id,selected:val})
        }
/*        getShopList(){
            var isArr=[];

            this.$store.state.car.forEach(item=>isArr.push(item.id));
            if(isArr.length<=0){
                return;
            }
            this.$http.get(''+isArr.join(",")).then(result=>{

            })
        }*/
    },
    components:{
        shopBox
    }
}
</script>
<style lang="less" scoped>

        .goodList{
            background-color: #eee;
            overflow: hidden;
            .mui-card-content-inner{
                height: 100px;
                img{
                    width: 60px;
                    height: 60px;
                }
                h3{
                    font-size: 10px;
                    margin:0;
                }
                span{
                    color: #f00;
                }
                a{
                    font-size: 10px;
                }
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
</style>