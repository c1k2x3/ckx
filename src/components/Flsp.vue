<template>
    <div class="flsp">
        <div class="ckx1">
            <van-icon name="arrow-left" class="qq"   @click="add()"/>
            <p>分类商品</p>
        </div>
        <div class="ckx2">
            <ul>
                <li v-for="(item,key) in list" :key="key" @click="aa(item.id)">
                    <img :src="item.pic" alt="">
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"flsp",
        data() {
            return {
                list:[]
            }
        },
        mounted() {
            var id = this.$route.query.id
            console.log(id)

            axios.get("https://api.it120.cc/small4/shop/goods/list?id=" +id).then((msg)=>{
                console.log(msg.data.data)
                this.list=msg.data.data
            })
        },
        methods: {
            aa(){
                this.$router.push({path:"/spxq",query:{id:id}})
            },
            add(){
                this.$router.go(-1)
            }
        },
       
    }
</script>

<style lang="scss" scoped>
.ckx2{
    width: 100%;
    ul{
        width:100%;
        display:flex ;
        flex-wrap: wrap;
        li{
            
            width:48%;
            p{

                background-color: #F0EDD4;
                font-size: 0.3rem;
                text-align: center;
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
        font-size: 0.4rem;
         line-height: 1rem;
    }

    p{ text-align: center;
        width: 7rem;
        line-height: 1rem;

        height:1rem;
        font-size: 0.4rem;
    }
}
</style>