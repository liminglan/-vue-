<template>
    <div>
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
                <span class="ball" v-show="ball" ref="ball"></span>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <banLists :ban-lists="banLists" :is-full="false"></banLists>
                </div>
            </div>
        </div>
        <div class="mui-card-header">荣耀8X 千元屏霸 91%屏占比 2000万AI双摄 4GB+64GB 幻夜黑 移动联通电信4G</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p class="price">
                   市场价：<span>￥2699.00</span>&nbsp&nbsp
                    销售价：<span>￥{{shopInfo.sellPrice}}</span>
                </p>
                购买数量:<numbox @getcount="getCount" :max="50"></numbox>
                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShopCar" :disabled='disabled'>加入购物车</mt-button>
                </p>
            </div>
        </div>
        <div class="mui-card-footer">商品参数</div>
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p>商品货号:LML001</p>
                <p>库存情况:1000件</p>
                <p>上架时间:2019-03-07</p>
            </div>
        </div>
        <div class="mui-card-footer">
            <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
            <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
        </div>
        </div>
    </div>
</template>
<script>
    import banLists from '../subComponents/swiper.vue'
    import huawei1 from '../images/huawei1.jpg'
    import huawei2 from '../images/huawei2.jpg'
    import huawei3 from '../images/huawei3.jpg'
    import numbox from '../subComponents/number.vue'
export default {
    data(){
        return {
            banLists:[

                {"id":1,"img":huawei1},
                {"id":2,"img":huawei2},
                {"id":3,"img":huawei3}
            ],
            shopInfo:
                {sellPrice: '2300.00'}
            ,
            id:this.$route.params.id,
            ball:false,
            countNumber: 1,
            disabled:false
            // id:this.$route.params.id
        }
    },
    methods:{
        goDesc(id){
            this.$router.push({name:"goodDesc",params:{id}})
        },
        goComment(id){
            this.$router.push({name:"goodComment",params:{id}})
        },
        addToShopCar(){
            this.ball=!this.ball;
            var goodsInfo ={
                id:this.id,
                count: this.countNumber,
                price: this.shopInfo.sellPrice,
                selected:true

            };
            this.$store.commit("addToCar",goodsInfo);
            this.disabled=true;
            setTimeout(()=>{
                this.disabled =false
            },1500)
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)";
        },
        enter(el,done){
            el.offsetHeight;
            const ballPosition= this.$refs.ball.getBoundingClientRect();
            const iconPosition =document.getElementById("icon").getBoundingClientRect();
            const x = iconPosition.left-ballPosition.left;
            const y = iconPosition.top-ballPosition.top;
            // el.style.transform="translate(50px, -50px)";
            el.style.transform=`translate(${x}px, ${y}px)`;
            el.style.transition="all 0.3s ease";
            done()
        },
        afterEnter(el){
            this.ball=!this.ball
        },
        getCount(count){
            this.countNumber=count;
        }
 /*       getBanLists(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status===0){
                    result.body.message.forEach(item=>{
                        item.img=item.src;
                    })
                    this.banLists=result.body.message;
                }
            })
        }*/
    },
    components:{
        banLists,
        numbox
    }
}
</script>
<style lang="less" scoped>
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #f00;
        position: absolute;
        top: 420px;
        left: 133px;
        z-index: 99;
    }
    .mui-card-footer{
        button{
            margin: 15px 0;
        }
        display: block;
    }
    .price{
        span:last-child{
            font-weight: 700;
            font-size: 18px;
            color: #f00;
        }
        span:first-child{
            font-weight: 700;
            text-decoration: line-through;
        }

    }
    .mui-card-footer{
        font-weight: 700;
        color: #000;
    }
</style>