<template>
    <div>
        <banLists :ban-lists="banLists" :is-full="true"></banLists>
        <!--六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
                <img src="../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photo">
                <img src="../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shopBuy">
                <img src="../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>
<script>
    import banLists from '../subComponents/swiper.vue'
    import { Toast} from 'mint-ui'
    import xi from '../images/1.jpg'
    import mi from '../images/2.jpg'
    import m from '../images/3.jpg'
    export default {
        data(){
            return{
                banLists:[
                    {id:1,img: xi},
                    {id:2,img: mi},
                    {id:3,img: m},
                ]
            }
        },
        components:{
            banLists
        },
        // created(){
        //     this.getBan()
        // },
        methods:{

           /* getBan(){
                this.$http.jsonp('http://localhost/banlist.json').then(result=>{
                    if(result.body.status===0){
                        this.banList=result.body.message;
                    }else{
                        Toast('轮播图加载失败!');
                    }
                })
            }*/
        }
    }
</script>
<style scoped lang="less">
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: 0;
        img{
            width: 60px;
            height: 60px;
        }
        .mui-media-body{
            font-size: 13px;
        }
        .mui-table-view-cell{
            border: 0
        }
    }
</style>