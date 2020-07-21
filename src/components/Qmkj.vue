<template>
  <div class="qmkj">
    <div class="ckx1" >
        <router-link to="/kjlb" tag="li"> 全名砍价 ></router-link>
        </div>

    <div class="ckx2">
      <ul>
        <li v-for="(item,key) in list" :key="key" @click="add()">
          <img :src="item.pic" alt />
          <div>
            <h2>{{item.name}}</h2>
            <p>{{item.characteristic}}</p>

            <table border="1px">
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

    <div class="ckx3">

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "qmkj",
  data() {
    return {
      list: [],
      goods:[]
    };
  },
  methods: {
      add(){
        this.$router.push("/kjlb")
      }
  },
  mounted() {
    axios
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(res => {
        console.log(res.data.data.goodsMap);
        var arr  = res.data.data.goodsMap;

        //过滤砍价的商品
        for (let i in arr) {
          this.goods.push(arr[i]);
        }
        this.goods.filter((itme, key) => {
          if (key > 2) {
            this.list.push(itme);
          }
        });

        
      });
  }
};
</script>

<style lang="scss" scoped>
.ckx3{
    width: 100%;
    height: 0.3rem;
    background-color: gainsboro;
}
.ckx2 {
  width: 100%;
  height: 9.4rem;
  ul {
    width: 100%;
    li {
      display: flex;
      border-bottom: 1px solid gainsboro;
      margin: 0.2rem 0;
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 0.5rem;
      }
      div {
        width: 100%;
        height: 3rem;
        h2 {
          font-size: 0.3rem;
        }
        p {
          margin: 0.6rem 0;
          font-size: 0.25rem;
          color: gainsboro;
        }
       table{
           
           margin: 1rem 0;
           width: 100%;
           font-size: 0.3rem;
          color: gainsboro;
       }
      }
    }
  }
}
.ckx1 {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid gainsboro;
  font-size: 0.35rem;
  text-align: center;
  line-height: 1rem;
  li{
      color: black;
      list-style: none;
  }
}
</style>