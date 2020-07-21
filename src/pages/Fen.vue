<template>
  <div class="fen">
    <div class="ckx">
      <input type="text" placeholder="回车收索商品" />
    </div>
    <div class="ss">
      <div class="ckx1">
        <ul >
          <li>所有分类</li>
          <li>居家</li>
          <li>配件</li>
          <li>服装</li>
          <li>电器</li>
        </ul>
      </div>
      <div class="ckx2">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img
              src="http://39.105.231.166:7002/static/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191013185236.a853d34.jpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="http://39.105.231.166:7002/static/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191013183855.c78e2c4.jpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="http://39.105.231.166:7002/static/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191013185236.a853d34.jpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="http://39.105.231.166:7002/static/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191013185233.2dd6c9c.jpg"
              alt
            />
          </van-swipe-item>
        </van-swipe>

        <ul>
          <li v-for="(item,key) in list" :key="key" @click="add(item.id)" >
            <img :src="item.icon" alt />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "fen",
  data() {
    return {
      list: [],
     
    };
  },
  methods: {
    add(id){
        this.$router.push({path:"/flsp",query:{id:id}})
    }
  },
  mounted() {
    axios.get("https://api.it120.cc/small4/shop/goods/category/all").then(res => {
        console.log(res.data.data);
        this.list = res.data.data;
        //this.itmn()
      });
  }
};
</script>

<style lang="scss" scoped>
.ss {
  width: 100%;
  display: flex;
}
.ckx2 {
  width: 5.5rem;
  height: 2rem;
  border-right: 0.2rem;
  ul {
    flex-wrap: wrap;
    display: flex;
    li {
      width: 30%;
      height: 2rem;
      margin: 0.3rem 0;
      p {
        font-size: 0.2rem;
        text-align: center;
      }
      img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
  img {
    width: 5.2rem;
    height: 2rem;
    border-right: 0.2rem;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 1rem;
  text-align: center;
  border-right: 0.5rem;
}
.ckx {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid gainsboro;
  input {
    width: 5.8rem;
    height: 0.6rem;
    font-size: 0.2rem;
    border-radius: 0.3rem;
    margin: 0 0.2rem;
    border: none;
    padding-left: 0.2rem;
    background-color: gainsboro;
  }
}
.ckx1 {
  width: 2rem;
  height: 15rem;
  font-size: 0.4rem;
  border-right: 1px solid gainsboro;
  ul {
    width: 2rem;
    height: 10rem;
    li {
      width: 2rem;
      height: 1rem;
      margin: 0.2rem 0;
      text-align: center;
      line-height: 1rem;
    }
    li:hover {
      border-left: 2px solid red;
    }
  }
}
</style>