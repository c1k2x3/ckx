<template>
    <div class="jxzt">
        <div class="ckx1" >
        <router-link to="/yxzl" tag="li">精选专题  ></router-link>
            
        </div>
        <div class="ckx2">
            <ul>
                <li  v-for="(item,key) in list" :key="key" @click="add(item.id)" >
                    <img :src="item.pic" alt="">
                    <p>{{item.title}}</p>
                    <p class="qq">{{item.descript}}</p>
                </li>
            </ul>
        </div>
        <div class="ckx3"></div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"jxzt",
        data() {
            return {
                list:[]
            }
        },
        mounted() {
            axios.get("https://api.it120.cc/small4/cms/news/list").then(res=>{
                console.log(res.data.data)
                this.list=res.data.data
            })
        },
        methods: {
           add(id){
            //    this.$router.push("/zlxq"+id)
            //路由传参
            this.$router.push({path:"/zlxq",query:{id:id}})
           }
        },
    }
</script>

<style lang="scss" scoped>
.ckx3{
    width: 100%;
    height: 0.2rem;
    background-color: gainsboro;
}
.ckx1{
    width: 100%;
    height: 1rem;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1rem;
    li{
        list-style: none; 
    }
}
.ckx2{
    width: 100%;
    height: 3.7rem;
     overflow: auto;
    ul{
        display: flex;
        width: 27.7rem;
        height: 3.7rem;
        
        li{
            width: 5.42;
            height: 2.84rem;
           margin-left: 0.2rem;
            //display: flex;
            img{
                width: 100%;
                height: 2.84rem;
                border-radius: 0.5rem;
                margin: 0 0;
            }
            p{
                font-size: 0.2rem;
            }
        }
    }
}
.qq{
    width: 3.2rem;
    color: gainsboro;
    margin:0.2rem  0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>