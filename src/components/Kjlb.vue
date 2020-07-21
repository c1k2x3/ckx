<template>
    <div class="kjlb">
       <div class="ckx1">
           <van-icon name="arrow-left" class="qq" @click="aa" /><h2>砍价列表</h2>
       </div>
       <div class="ckx2">
           <ul>
               <li v-for="(item,key) in list" :key="key">
                   <img :src="item.pic" alt="">
                   <div>
                       <p v-html="item.name"></p>
                       <table>
                           <tr>
                               <td style="color:red;">￥{{item.minPrice}}</td>
                               <td>￥{{item.originalPrice}}</td>
                               <td>{{item.stores}}件</td>
                           </tr>
                            <tr>
                               <td style="color:black;">低价</td>
                               <td>原价</td>
                               <td>限量</td>
                           </tr>
                           
                           </table>     
                   </div>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"kjlb",
        data() {
            return {
                list:[]
            }
        },
        methods: {
            aa(){
                this.$router.push("/sho/so")
            }
        },
        mounted() {
            axios.get("https://api.it120.cc/small4/shop/goods/kanjia/list").then(res=>{
                console.log(res.data.data.goodsMap)
                this.list=res.data.data.goodsMap
            })
        },
    }
</script>

<style lang="scss" scoped>
.ckx2{
    width: 100%;
    height: 10rem;
    ul{
        width: 100%;
        li{
            display: flex;
            width: 100%;
            height: 3rem;
            border-bottom: 1px solid gainsboro;
            img{
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 0.2rem;
                margin: 0.25rem 0;
            }
        }
        div{
            width: 100%;
            height:3rem ;
            p{
                font-size: 0.3rem;
                margin: 0.25rem 0.2rem;
            }
            table{
                margin: 0.8rem 0.2rem;
                width: 100%;
                height: 1.5rem;
                font-size: 0.3rem;
                color: gainsboro;
            }
        }
    }
}
.ckx1{
    width: 100%;
    height: 1rem;
    display: flex;
    border-bottom: 1px solid gainsboro;
    line-height: 1rem;
   .qq{
       font-size: 0.7rem;
       line-height: 1rem;
   }
    h2{
        width: 7rem;
         text-align: center;
        font-size: 0.3rem;
    }
    

}
</style>