<template>
    <div class="newsContain">
        <div class="head" v-for="item in newsInfoList">
            <h3 class="title">{{item.title}}</h3>
            <p class="subTitle">
                <span>发布时间:{{item.time}}</span>
                <span>点击：{{item.click}}次</span>
            </p>
        </div>
        <div class="content">
            <comment :id="this.id"></comment>
        </div>
    </div>
</template>
<script>
    import comment from '../subComponents/comment.vue'
    import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            id: this.$route.params.id,
            newsInfoList:[
                {title:"马来西亚交通部长",time: '2019-03-04 19:03:34',click:8},
                {title:"马来西亚交通部长",time: '2019-03-04 19:03:34',click:8},
                {title:"马来西亚交通部长",time: '2019-03-04 19:03:34',click:8},
                {title:"马来西亚交通部长",time: '2019-03-04 19:03:34',click:8}
            ]
        }
    },
    methods:{
  /*      getNewsInfo(){
            this.$http.get().then(result=>{
                if(result.body.status===0){
                    return result.message;
                }else{
                    Toast("新闻详情加载失败");
                }
            })
        }*/
    },
    components:{
        comment
    }
}
</script>
<style lang="less" scoped>
    .newsContain{
        .content{
            padding: 5px;
        }
        .head{
            margin-bottom: 5px;
            border-bottom: 2px solid #ccc;
        }
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: #f99;
        }
        .subTitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: #09f;
        }
    }
</style>