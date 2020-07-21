<template>
    <div class="zlxq">
        <div class="ckx1">
            <van-icon name="arrow-left" class="qq"  @click="qq"/> <h2>专栏详情</h2>
        </div>
        <div class="ckx2">
           <p v-html="list.title"></p>
           <img :src="list.pic" alt="">
           <p v-html="list.content"></p>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"zlxq",
        data() {
            return {
                list:[]
            }
        },
        methods: {
            qq(){
                this.$router.push("/sho/so")
            }
        },
        mounted() {
            //接受id
            var id = this.$route.query.id 
            console.log(id)

             axios.get("https://api.it120.cc/small4/cms/news/detail?id="+id).then((res)=>{
                console.log(res.data.data)
                this.list=res.data.data
                //consoel.log(this.list)
            })
        },
    }
</script>

<style lang="scss" scoped>
.ckx2{
    width: 100%;
    height: 10rem;
    p{
        font-size: 0.4rem;
        text-align: center;
        margin: 0.5rem 0;
    }
    img{
        width: 100%;
        height: 4rem;
    }
}
.ckx1{
    width: 100%;
    height: 1rem;
    display: flex;
    border: 1px solid gainsboro;
    h2{
        font-size: 0.3rem;
        width: 7rem;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
    }
    .qq{
        width: 1rem;
        height: 1rem;
        font-size: 0.5rem;
        line-height: 1rem;
    }
}
</style>