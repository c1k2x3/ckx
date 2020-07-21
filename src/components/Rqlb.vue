<template>
    <div class="rqlb">
        <div class="ckx1">
            <van-icon name="arrow-left"  class="qq" @click="add()"/><p>人气推荐</p>
        </div>
        <div class="ckx2">
            <ul>
                <li v-for="(item,key) in list" :key="key">
                    <img :src="item.pic" alt="">
                    <p v-html="item.name"></p>
                    <p style="color:red;">￥{{item.stores}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axos from 'axios'
    export default {
        name:"rqlb",
        data() {
            return {
                list:[]
            }
        },
        methods: {
            add(){
                this.$router.push("/sho/so")
            }
        },
        mounted() {
            axos.get("https://api.it120.cc/small4/shop/goods/list").then((res)=>{
                console.log(res.data.data)
                this.list=res.data.data
            })
        },
    }
</script>

<style lang="scss" scoped>
.ckx2{
    width: 100%;
    height: 10rem;
    ul{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        li{
            width: 50%;
            height: 4.5rem;
            p{
                font-size: 0.3rem;
            }
            img{
                width: 3.5rem;
                height: 3.5rem;
            }
        }
    }
}
.ckx1{
    width: 100%;
    height: 1rem;
    display: flex;
    border-bottom: 1px solid gainsboro;
    .qq{
        font-size: 0.5rem;
        line-height: 1rem;
    }
    p{
        width: 7rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: 0.3rem;
    }
}
</style>