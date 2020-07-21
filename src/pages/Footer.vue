<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="/so/sho"  tag="li">首页</router-link>
            </li>
             <li>
                <router-link to="/so/fen"  tag="li">分类</router-link>
            </li>
             <li>
                <router-link to="/so/guc"  tag="li">购物车</router-link>
            </li>
             <li>
                <router-link to="/so/wd" tag="li">我的</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"footer",
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid gainsboro;
    height: 1rem;
    background-color: ghostwhite;
    ul{
        display: flex;
        width: 100%;
        li{
            text-align: center;
          width: 100%;
          height: 1rem;
            font-size: 0.3rem;
            line-height: 1rem;
        }
    }
}
</style>