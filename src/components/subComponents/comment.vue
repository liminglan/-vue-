<template>
    <div class="comment">
        <h4>发表评论</h4>
        <hr>
        <textarea name=""  cols="30" rows="5" placeholder="请输入要装B的内容(最多吐槽200个字符)" maxlength="200" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment()">发表评论</mt-button>
        <div class="item">
            <div class="list">
                <div class="user">
                    用户:匿名用户&nbsp&nbsp发表时间:2019/3/5 09:41
                </div>
                <div class="context">
                    剑外忽传收蓟北，初闻涕泪满衣裳。
                </div>
            </div>
        </div>
        <div class="item">
            <div class="list">
                <div class="user">
                    用户:匿名用户&nbsp&nbsp发表时间:2019/3/5 09:41
                </div>
                <div class="context">
                    剑外忽传收蓟北，初闻涕泪满衣裳。
                </div>
            </div>
        </div>
        <div class="item">
            <div class="list">
                <div class="user">
                    用户:匿名用户&nbsp&nbsp发表时间:2019/3/5 09:41
                </div>
                <div class="context">
                    剑外忽传收蓟北，初闻涕泪满衣裳。
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            commentList:[],
            msg:""
        }
    },
/*    created(){
        this.getComment()
    },*/
    methods:{
        getId(){
            console.log(this.id)
        },
        getComment(){
            this.$http.get(''+this.id+'').then(result=>{
                if(result.body.status===0){
                    this.commentList=this.commentList.concat(result.body.message)
                }else{
                    Toast("评论未加载")
                }
            })
        },
        postComment(){
            if(this.msg.trim().length===0){
                return Toast("输入的内容不能为空");
            }
            this.$http.post(''+this.$route.params.id,{content:this.msg.trim()}).then(result=>{
                if(result.body.status===0){
                    var cmt = {
                        user: '匿名用户',
                        data: new Date(),
                        content:this.msg.trim(),
                    }
                    this.commentList.unshift(cmt);
                    this.mgs="";
                }else{
                    Toast("内容提交失败");
                }
            })
        }
       // props: ["id"]

    }
}
</script>
<style lang="less" scoped>
    .comment{
        h4{
            font-size: 16px;
        }
        textarea{
            margin: 0;
            padding: 0;
            font-size: 13px;
            height: 85px;
        }
        .item{
            margin:10px 0;
           .list{
               font-size: 13px;
               .user{
                   background-color: #ccc;
                   height: 30px;
                   line-height: 30px;
               }
               .context{
                  text-indent: 2em;
                   height: 35px;
                   line-height: 35px;
               }
           }
        }
    }
</style>