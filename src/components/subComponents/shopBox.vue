<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount"
              ref="numbox" readonly @change="getCounts"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
    </div>
</template>
<script>
    import mui from '../../../lib/mui/js/mui.min.js'
    export default {
        data(){
            return{

            }
        },
        methods:{
            getNum(){
                console.log(this.$refs.numbox.value);
            },
            getCounts(){
                this.$store.commit("updateShopInfo",{
                    id:this.shopid,
                    count:this.$refs.numbox.value
                })
            }
        },
        mounted(){
            mui(".mui-numbox").numbox();
        },
        props:["initcount","shopid"]
    }
</script>
<style lang="less" scoped>
    .mui-numbox{
        height: 30px;
        margin: 15px 5px;
    }
</style>