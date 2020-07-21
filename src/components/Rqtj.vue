<template>
    <div class="rqtj">
        <div class="ckx1">
            <router-link to="/rqlb" tag="li"> 人气推荐></router-link>
           
        </div>
        <div class="ckx2">
            <ul>
                <li v-for="(item,key) in list" :key="item.id" @click="add(item.id)">
                    <img :src="item.pic" alt="">
                   <p v-html="item.name"></p>
                  <p style="color:red;">￥{{item.minBuyNumber}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"rqtj",
        data() {
            return {
                list:[]
            }
        },
        methods: {
            add(id){
                this.$router.push({path:"/xq",query:{id:id}})
            }
        },
        mounted() {
            axios.get("https://api.it120.cc/small4/shop/goods/list").then(res=>{
                console.log(res.data.data)
                
                var aa =res.data.data.slice(9,13)
                this.list = aa
                
            })
        },
    }
</script>

<style lang="scss" scoped>
.ckx1{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.3rem;
    li{
        list-style: none;
    }
}
.ckx2{
    width: 100%;
    height: 8rem;
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 48%;
            height: 4rem;
            margin-left: 0.1rem;
            p{
                font-size: 0.2rem;
            }
            img{
                width: 98%;
                text-align: center;
                height: 3.2rem;
            }
        }
    }
}
</style>