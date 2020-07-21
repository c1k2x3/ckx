<template>
    <div class="yxzl">
        <div class="ckx1">
            <van-icon name="arrow-left" class="qq" @click="aa" /><h2>严选专栏</h2>
        </div>
        <div class="ckx2">
            <ul>
                <li v-for="(item,key) in list" :key="key" @click="add(item.id)">
                    <p v-html="item.title"></p>
                     <p v-html="item.descript"></p>
                     
                    <img :src="item.pic" alt="">

                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:"yxzl",
        data() {
            return {
                list:[]
            }
        },
        methods: {
            aa(){
                this.$router.push("/sho/so")
            },
            add(id){
                 this.$router.push({path:"/zlxq",query:{id:id}})
            }
        },
        mounted() {
            axios.get("https://api.it120.cc/small4/cms/news/list").then(res=>{
                console.log(res.data.data)
                this.list=res.data.data
            })
        },
    }
</script>

<style lang="scss" scoped>
.ckx2{
    width:100%;
    height:10rem;
    ul{
        width:100%;
        li{
            p{
                width: 100%;
                margin: 0.5rem 0;
                position: absolute;
               text-align: center;
                font-size: 0.4rem;
                color: white;
            }
            p:nth-child(2){
                text-align: center;
                overflow: hidden;
                margin: 1.5rem 0;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            
            img{
                width:100%;
                height:4rem;
            }
        }
    }

}
.ckx1{
    width:100%;
    height:1rem;
    display: flex;
    .qq{
        font-size: 0.5rem;
        line-height: 1rem;
    }
    h2{
        width: 7rem;
        height: 1rem;
        font-size: 0.3rem;
        line-height:1rem ;
        text-align: center;
    }

}
</style>