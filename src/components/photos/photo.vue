<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll" >
                    <a :class="['mui-control-item',item.id==0 ? 'mui-active':'']"  v-for="item in photos" :key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <ul class="phoList">
            <router-link v-for="item in list" :to="'/home/photo/'+item.id" tag="li">
                <img v-lazy="item.imgPath">
                <div class="info">
                    <h4 class="info-title">{{item.title}}</h4>
                    <div class="info-desc">{{item.desc}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    import mui from '../../../lib/mui/js/mui.min.js'
    import m1 from '../images/m1.jpg'
    import m2 from '../images/m2.jpg'
    import m3 from '../images/m3.jpg'
    import m4 from '../images/m4.jpg'
    import m5 from '../images/m5.jpg'
    import m6 from '../images/m6.jpg'
    import m7 from '../images/m7.jpg'
    import m8 from '../images/m8.jpg'
    import m9 from '../images/m9.jpg'
export default {
    data(){
        return{
            photos:[
                {"id":0,title:"全部"},
                {"id":1,title:"美女"},
                {"id":2,title:"军事"},
                {"id":3,title:"新闻"},
                {"id":4,title:"游戏"},
                {"id":5,title:"农业"},
                {"id":6,title:"科技"}
            ],
            list: [
                {"id":1,imgPath:m1,title:"印巴再次爆发空战",desc:"印度空军当天出动了一架苏30MKI战斗机，在拉贾斯坦邦上空击落了一架巴基斯坦军方的无人飞行器"},
                {"id":2,imgPath:m2,title:"亚洲一国突然出手，两艘巨轮满载军火抵达港口",desc:"印度军方向美国五角大楼递交了所谓“巴基斯坦在进攻性行动中使用F-16”的证据，证据中包括F-16战机的电子签名和前段时间印度找到的“AIM-120导弹残骸”等“物证"},
                {"id":3,imgPath:m3,title:"票房破45亿！吴京倒贴的《流浪地球》大火",desc:"《流浪地球》成了一匹不折不扣的“黑马”，但“黑马”的诞生并不容易——由于剧组经费不足，演员吴京不但“零片酬”出演，还“带资入组”，投了6000万。"},
                {"id":4,imgPath:m4,title:"何洁事件再发酵，被曝和贾乃亮同居过",desc:"最近，何洁公开宣布和刁磊生了三胎，本是一件喜事，却引来了不少人的质疑，认为她对于爱情不忠，和前夫离婚的原因就是因为爱上了刁磊"},
                {"id":4,imgPath:m5,title:"何洁事件再发酵，被曝和贾乃亮同居过",desc:"最近，何洁公开宣布和刁磊生了三胎，本是一件喜事，却引来了不少人的质疑，认为她对于爱情不忠，和前夫离婚的原因就是因为爱上了刁磊"},
                {"id":4,imgPath:m6,title:"何洁事件再发酵，被曝和贾乃亮同居过",desc:"最近，何洁公开宣布和刁磊生了三胎，本是一件喜事，却引来了不少人的质疑，认为她对于爱情不忠，和前夫离婚的原因就是因为爱上了刁磊"},
                {"id":4,imgPath:m7,title:"何洁事件再发酵，被曝和贾乃亮同居过",desc:"最近，何洁公开宣布和刁磊生了三胎，本是一件喜事，却引来了不少人的质疑，认为她对于爱情不忠，和前夫离婚的原因就是因为爱上了刁磊"},
                {"id":4,imgPath:m8,title:"何洁事件再发酵，被曝和贾乃亮同居过",desc:"最近，何洁公开宣布和刁磊生了三胎，本是一件喜事，却引来了不少人的质疑，认为她对于爱情不忠，和前夫离婚的原因就是因为爱上了刁磊"},
                {"id":4,imgPath:m9,title:"何洁事件再发酵，被曝和贾乃亮同居过",desc:"最近，何洁公开宣布和刁磊生了三胎，本是一件喜事，却引来了不少人的质疑，认为她对于爱情不忠，和前夫离婚的原因就是因为爱上了刁磊"},
            ]
        }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
 /*       getPhoto(){
            this.$http.get().then(result=>{
                if(result.body.status===0){
                    this.photos.unshift({title:"全部",id:0});
                    this.photos=result.body.message;
                }
            })
        }*/

    }
}
</script>
<style lang="less" scoped>
        .phoList{
            margin: 0;
            padding: 10px;
            list-style: none;
            li{
                position: relative;
                border-radius: 4%;
                background-color: #ccc;
                margin-bottom: 10px;
                text-align: center ;
                box-shadow: 4px 0 11px #ccc;
                .info{
                    max-height: 80px;
                    position: absolute;
                    bottom: 0;
                    color: #fff;
                    text-align: left;
                    background-color: rgba(0,0,0,0.3);
                    .info-title{
                        font-size: 14px;
                    }
                    .info-desc{
                        font-size: 13px;
                    }
                }
                img{
                    vertical-align: top;
                    width: 100%;
                    border-radius: 4%;

                }
                img[lazy=loading] {
                    width: 40px;
                    height: 300px;
                    margin: auto;
                }
            }
        }



</style>