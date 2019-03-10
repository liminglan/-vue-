<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in banLists" :key="item.id">
                <img :src='item.img' alt="" :class="{'full':isFull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:["banLists","isFull"]
}
</script>
<style lang="less" scoped>
    .mint-swipe{
        height: 200px;
    .mint-swipe-item{
        text-align: center;
    img{
        /*width: 100%;*/
        height: 100%;
    }
    }
    }
    .full{
        width: 100%;
    }
</style>