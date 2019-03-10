<template>
    <div class="headTop">
        <mt-header fixed title="朗哥哥的vue网页" class="mtHead" >
            <span slot="left" @click="goBack" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-ml" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-ml" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-ml" to="/shop">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="icon" >{{this.$store.getters.getAllCount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-ml" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
        <transition mode="out-in">
            <router-view></router-view>
        </transition>

    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:false
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    },
   created(){
        if('$route.path'==="/home"){
            this.flag=false;
        }else{
            this.flag=true;
        }
   },
    watch:{
        "$route.path":function(newVal){
            if (newVal==='/home'){
                this.flag=false;
            }else{
                this.flag=true;
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .headTop {
        padding: 40px 0 50px 0;
     .mtHead{
        z-index:99;
        }
    }


    .v-enter {
        opacity: 0;
        transform: translateX(100%);

    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        /*position: absolute;*/
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }

    .mui-bar-tab .mui-tab-item-ml.mui-active {
        color: #007aff;
    }

    .mui-bar-tab .mui-tab-item-ml {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }

    .mui-bar-tab .mui-tab-item-ml .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item-ml .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>