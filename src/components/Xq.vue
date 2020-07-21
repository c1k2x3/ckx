<template>
  <div class="xq">
    <div class="ckx">
      <el-carousel height="7.5rem">
        <el-carousel-item v-for="(item,key) in list" :key="key">
          <img :src="item.pic" alt />
        </el-carousel-item>
      </el-carousel>

      <p v-html="lisr.name"></p>
      <p style="color:gainsboro;">{{lisr.characteristic}}</p>
      <span>
        <h2 style="color:red;">低价￥{{lisr.maxCoupons}}</h2>
        <h3>原价￥{{lisr.originalPrice}}</h3>
        <h4>库存{{lisr.kanjiaPrice}}</h4>
      </span>
    </div>
    <div class="ckx1"></div>
    <van-tabs v-model="active">
      <van-tab title="商品介绍">
        <div v-html="counttitle" id="ckx"></div>
      </van-tab>
      <van-tab title="商品评价">
        <ul>
          <li v-for="(item,key) in lise" :key="key"></li>
        </ul>
      </van-tab>
    </van-tabs>

    <div class="ckx2">
      <ul>
        <li>
          <van-icon name="service-o" />
        </li>
        <li>
          <van-icon name="shopping-cart-o" />
        </li>
        <li>
          <van-icon name="star-o" />
        </li>
        <li style="font-size:0.35rem;">立即购买</li>
        <li style="font-size:0.3rem; background-color:#b7282e;color:white;">
          <van-cell
            @click="showPopup(lise)"
            style="font-size:0.3rem; background-color:#b7282e;color:white;"
          >加入购物车</van-cell>
        </li>
      </ul>
    </div>
    <van-popup v-model="show" closeable position="bottom" :style="{ height: '30%' }" >
        <div class="qq">
            <img :src="lisr.pic" alt="">
            <div>
                <p>{{lisr.name}}</p>
                <b>￥{{lisr.minBuyNumber}}</b>
            </div>
        </div>
        <div class="ww">
          <ul>
             <li >
                
             </li>
          </ul>
        </div>
        <div class="ee">
          <p>购买数量 </p>
          
          <div >
              <button @click="jian(key)">-</button>
              {{lisr.maxCoupons}}
              <button @click="jien(key)">+</button>
          </div>
        </div>
        <button class="oo" @click="add()">加入购物车</button>

    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "xq",
  data() {
    return {
      list: [],
      lisr: [],
      lise: [],
      counttitle: "",
      show: false,
      active: "",
      lisy:[]
    };
  },
  methods: {
    add(){
      this.$router.push("/sho/guc")
    },
    showPopup(aa) {
      this.show = true;
      //console.log(aa);
    },
    jien(){
      this.lisr.maxCoupons++
    },
     jian(){
      this.lisr.maxCoupons--
    },
    
  },
  updated() {
    let obj = document.getElementById("ckx");
    let imgs = obj.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.width = "100%";
      imgs[i].style.height = "100%";
    }
    let li = obj.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      li[i].style.display = "flex";
      li[i].style.padding = ".2rem";
    }
  },
  created() {
    var id = this.$route.query.id;
    //console.log(id);

    axios
      .get("https://api.it120.cc/small4/shop/goods/detail?id=" + id)
      .then(res => {
        //console.log(res);
        this.list = res.data.data.pics;
        this.lisr = res.data.data.basicInfo;
        this.counttitle = res.data.data.content;
        // this.lise=res.data.data.properties
         var arr = res.data.data.properties
         var ckx=[]
         arr.forEach((msg,k)=>{
           ckx.push(msg)
         })
      });

    axios
      .get("https://api.it120.cc/small4/shop/goods/reputation?goodsid=" + id)
      .then(msg => {
        //console.log(msg);
        this.lise = msg;
      });
  }
};
</script>

<style lang="scss" scoped>
.oo{
  width:100%;
  height:1rem;
  border:none;
  font-size:0.3rem;
  background-color:#b7282e;
  color:white;
}
.ee{
  width: 100%;
  height: 2rem;
  font-size: 0.3rem;
  line-height: 2rem;
  display: flex;
  border:1px solid gainsboro;
  p{
    width:3rem;
  }
  div{
    width: 4rem;
    height: 2rem;
    text-align: center;
    margin-left: 3rem;
   
      button{
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        border: none;
        background-color:antiquewhite;
      }
     
  }
}
.ww{
  width: 100%;
  height: 2rem;
  border: 1px solid gainsboro;
}
.qq{
  width: 100%;
  height:2rem ;
  display: flex;
  border: 1px solid gainsboro;
  img{
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.2rem 0.2rem;
  }
  p{
    font-size: 0.3rem;
    margin: 0.3rem 0;
  }
  b{
    font-size:0.3rem;
    color:red;
  }
}
.ckx2 {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  background-color: white;
  border-top: 1px solid gainsboro;
  ul {
    width: 100%;
    display: flex;
    line-height: 1rem;
    li {
      width: 20%;
      height: 1rem;
      border-right: 1px solid gainsboro;
      text-align: center;
      line-height: 1rem;
      font-size: 0.6rem;
    }
  }
}
#ckx {
  font-size: 0.3rem;
}
.ckx1 {
  width: 100%;
  height: 0.2rem;
  background-color: gainsboro;
}
.ckx {
  width: 100%;
  height: 10rem;
  p {
    font-size: 0.3rem;
    margin: 0.4rem 0.2rem;
  }
  span {
    display: flex;
    font-size: 0.3rem;
    color: gainsboro;
    h2 {
      margin: 0 0.2rem;
    }
    h3 {
      margin: 0 0.5rem;
    }
    h4 {
      margin-left: 2rem;
    }
  }
}
.el-carousel__item {
  //color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  img {
    width: 100%;
  }
}

//   .el-carousel__item:nth-child(2n) {
//      background-color: #99a9bf;
//   }

//   .el-carousel__item:nth-child(2n+1) {
//      background-color: #d3dce6;
//   }
</style>