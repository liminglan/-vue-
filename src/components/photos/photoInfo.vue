<template>
    <div class="infoContent" >
        <h3>{{photoInfo.title}}</h3>
        <p class="subTile">
            <span>发表时间:{{photoInfo.time}}</span>
            <span>点击：{{photoInfo.click}}次</span>
        </p>
        <hr>
        <vue-preview
                :list="list"
                :thumbImageStyle="{width: '100px', height: '80px', margin: '8px',boxShadow: 'rgb(150,150,150) 5px 0 10px'}"
                :previewBoxStyle="{border: '1px solid #eee'}"
                :tapToClose="true"
                @close="closeHandler"
                @destroy="destroyHandler"
        ></vue-preview>
        <div class="content">{{photoInfo .desc}}</div>
        <comment :id="this.id"></comment>
    </div>
</template>
<script>
    import comment from '../subComponents/comment.vue'
    import m1 from '../images/m1.jpg';
    import m5 from '../images/m5.jpg';
    import m6 from '../images/m6.jpg';
    import m9 from '../images/m9.jpg';
    import m7 from '../images/m7.jpg';
export default {
    data(){
        return{
            id: this.$route.params.id,
            photoInfo: {title:'辞掉那个月薪5W的工作，我用5000的月薪养你',time:'2019-03-05 16:51:00',click:15,desc:"这是盐的味道。山的味道，风的味道，阳光的味道，也是时间的味道，人情的味道。这些味道，已经在漫长的时光中和故土、乡亲、念旧、勤俭、坚忍等等情感和信念混合在一起，才下舌尖，又上心间，让我们几乎分不清哪一个是滋味，哪一种是情怀"},
            list: [
                {
                    src: m1,
                    w: 1200,
                    h:900
                },
                {
                    src: m6,
                    w: 1200,
                    h: 900
                },
                {
                    src: m5,
                    w: 1200,
                    h: 900
                },
                {
                    src: m9,
                    w: 1200,
                    h: 900
                },
                {
                    src: m7,
                    w: 1200,
                    h: 900
                },
            ]
        }
    },
    methods: {
        closeHandler() {
            console.log('closeHandler')
        },
        destroyHandler() {
            console.log('destroyHandler')
        }
    },
    components: {
        comment
    }
}
</script>
<style lang="less" scoped>
    .infoContent{
        padding: 10px;
        h3{
            font-size: 16px;
            text-align: center;
            color: #0062cc;
        }
        .subTile{
            display: flex;
            justify-content: space-between;
        }
    }
</style>