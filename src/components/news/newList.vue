<template>
    <div >
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
                <router-link :to="'/home/newList/newInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" src="../images/xiaoxin.jpg">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{item.time}}</span>
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            newList:[
                {id:1,title:"马来西亚交通部长：只要得到可行建议或可信线索，愿意重启MH370搜索行动",time:"2019-03-04 19:03:34",click:10},
                {id:2,title:"检察机关回应“涞源反杀案”：不起诉有利于弘扬正气",time:"2019-03-04 19:59:00",click:20},
                {id:3,title:"共享单车退押金难、保健品欺诈老年人……他说，这些事检察机关要管上！",time:"2019-03-04 19:59:00",click:9},
                {id:4,title:"共享单车退押金难、保健品欺诈老年人……他说，这些事检察机关要管上！",time:"2019-03-04 19:59:00",click:10},
                {id:5,title:"共享单车退押金难、保健品欺诈老年人……他说，这些事检察机关要管上！",time:"2019-03-04 19:59:00",click:100},
                {id:6,title:"阿根廷向中国渔船开火 中方：如违规不袒护，但请阿提供边界坐标",time:"2019-03-04 19:59:00",click:50},
                {id:7,title:"疑似王思聪开车接机周洁琼 此前女方否认日本同游",time:"2019-03-04 19:59:00",click:0},
                {id:8,title:"过去6年全国两会习近平36次下团组，一张长图共同回顾",time:"2019-03-04 19:59:00",click:60},
                {id:9,title:"过去6年全国两会习近平36次下团组，一张长图共同回顾",time:"2019-03-04 19:59:00",click:60},
                {id:10,title:"过去6年全国两会习近平36次下团组，一张长图共同回顾",time:"2019-03-04 19:59:00",click:60},
                {id:11,title:"过去6年全国两会习近平36次下团组，一张长图共同回顾",time:"2019-03-04 19:59:00",click:60},
            ]
        }
    },
/*    created(){
        this.getNewList();
    },*/
    methods:{
/*        getNewList(){
            this.$http.jsonp('https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html').then(result=>{
                if(result.body.status===0){
                    this.newList=result.message
                }else{
                    Toast("加载失败")
                }
            })
        }*/
    }
}
</script>
<style lang="less" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 16px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow:ellipsis;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #0099ff;
                display: flex;
                justify-content: space-between;
            }
        }


    }

</style>