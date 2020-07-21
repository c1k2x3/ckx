<template>
    <div class="wd">
        <div class="ckx1">
            <router-link to="/dl" tag="li"><p>立即登录</p></router-link>
            
            <div>
                积分：0
            </div>
        </div>
        
     
    </div>
</template>

<script>
    export default {
        name:"wd",
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
.ckx1{
    width: 100%;
    height: 3rem;
    background-color: #C1B18F;
    p{
        color: white;
        font-size: 0.45rem;
        position: absolute;
        left: 1.8rem;
        top: 1rem;
    }
    li{
        list-style:none;
    }
    div{
        width: 2.5rem;
        height: 0.6rem;
        border-radius: 0.2rem;
        font-size: 0.3rem;
        //text-align:center ;
        line-height: 0.6rem;
        background-color: #b3a078;
        color: white;
        position: absolute;
        left: 1.8rem;
        
        top:1.8rem ;
    }
}
</style>