<template>
    <div class="banner">
         <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
             <van-swipe-item><img src="https://cdn.it120.cc/apifactory/2018/11/07/ad7e06f98e8910ff789b6e577b36c20b.jpg"></van-swipe-item>
             <van-swipe-item><img src="https://cdn.it120.cc/apifactory/2018/11/06/1a6dc56d16dcec64639d9ea624ebdd46.jpg"></van-swipe-item>
             <van-swipe-item><img src="https://cdn.it120.cc/apifactory/2018/11/07/76d9a2c2bd56c4ac0497b5d360c6bc06.png"></van-swipe-item>
         </van-swipe>
         
         <div class="ckx">
             <ul>
                 <li>
                    <van-icon name="gem" />
                    <p>专栏</p>
                 </li>
                 <li>
                    <van-icon name="gem" />
                    <p>专栏</p>
                 </li>
                 <li>
                    <van-icon name="gem" />
                    <p>专栏</p>
                 </li>
                 <li>
                    <van-icon name="gem" />
                    <p>专栏</p>
                 </li>
             </ul>
         </div>
         <div class="ckx2"></div>
      
      


    </div>
</template>

<script>
    export default {
        name:"banner",
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
.ckx2{
    width:100%;
    height:0.4rem;
    background-color: gainsboro;

}
.ckx{
    position: absolute;
    top:5.1rem;
    width: 100%;
    height:2rem;
    background-color: #fff;
    border-top-right-radius:0.8rem ;
            border-top-left-radius: 0.8rem;
    ul{
        display:flex;
        width: 100%;
        li{
            width:25%;
            height:2rem;
            text-align: center;
            
            p{
                font-size: 0.4rem;
            }
        }
    }
}

.my-swipe .van-swipe-item {
    width:100%;
    height:7rem;
    color: #fff;
    font-size: 20px;
    line-height: 200px;
    text-align: center;
    img{
        width:100%;
    }
  }
</style>