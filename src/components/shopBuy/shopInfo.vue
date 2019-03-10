<template>
    <div class="shopList">
        <div class="shopItem" v-for="item in shopList" :key="item.id" @click="goTo(item.id)">
            <div class="shopImg">
                <img :src="item.img_Src" alt="">
            </div>
            <h3>{{item.title}}</h3>
            <div class="shopPrice">
                <p>
                    <span class="newPri">￥{{item.newPri}}</span>
                    <span class="oldPri">￥{{item.oldPri}}</span>
                </p>
                <p class="txt">
                    <span>热卖中</span>
                    <span>剩{{item.surplus}}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button>
    </div>
</template>
<script>
    import mi from '../images/mi.jpg'
    import iphone from '../images/iphone.jpg'
    import huawei from '../images/huawei.jpg'
    import ry from '../images/ry.jpg'
    import sx from '../images/sx.jpg'
    import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            pageIndex: 1,
            shopList:[
                {id:1,title:'小米9 SE 4800万超广角三摄 骁龙712 水滴全面屏 游戏智能拍照手机 6GB+64GB 全息幻彩蓝 全网通4G双卡双待',
                    newPri:'1999.00',oldPri:'2500.00',surplus:60,img_Src:mi},
                {id:2,title:'Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机',newPri:'6319.00',oldPri:'6000.00',surplus:'1000',img_Src:iphone},
                {id:3,title:'荣耀9i 4GB+64GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待',newPri:'1199.00',oldPri:'1000.00',surplus:'2566',img_Src:ry},
                {id:4,title:'魅族 X8 准旗舰游戏拍照手机 4GB+64GB 亮黑 全网通移动联通电信4G手机 双卡双',newPri:'2398.00',oldPri:'2010.00',surplus:'90',img_Src:sx},
                {id:5,title:'三星 Galaxy Note8（SM-N9500）6GB+256GB 谜夜黑 移动联通电信4G 游',newPri:'4799.00',oldPri:'4000.00',surplus:'105',img_Src:huawei},
            ]
        }
    },
    // created(){
    //     this.getShopList()
    // },
    methods:{
        goTo(id){
            this.$router.push({ name: 'shopLists', params: { id }})
        },
        // getShopList(){
        //     this.$http.get(''+this.pageIndex).then(result=>{
        //         if(result.body.status===0){
        //             this.shopList.concat(this.body.message);
        //         }
        //     })
        // },
        getMore(){
            Toast("没有更多啦")
        }
    }
}
</script>
<style lang="less" scoped>
    .shopList{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 7px;
        .shopItem{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2px;
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 9px #ccc;
            margin-bottom: 6px;
            img{
                width: 100%;
            }
            h3{
                padding: 5px;
                font-size: 12px;
            }
         .shopPrice{
             background-color: #eee;
             .txt{
                 display: flex;
                 justify-content: space-between;
             }
             p{
                 margin: 0;
                 padding: 5px;
                 .newPri{
                     color: #f00;
                     font-weight: 700;
                     font-size: 16px;
                 }
                 .oldPri{
                     text-decoration: line-through;
                     margin-left: 10px;
                 }
                 span{
                     font-size: 12px;
                 }

             }
         }
        }
    }

</style>