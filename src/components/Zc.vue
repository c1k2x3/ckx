<template>
    <div class="zc">
        <div class="ckx1">
            <van-icon name="arrow-left" class="qq" @click="aa()"/>
            <p>新用户注册</p>
        </div>
        <div class="ckx2">
            <div class="ckx21">
               <input type="text" placeholder="手机号码" v-model="tel">
               <van-icon name="phone-o" class="zz" />
           </div>
            <div class="ckx22">
               <input type="password" placeholder="密码" v-model="pwd">
               <van-icon name="closed-eye" class="zz" />
           </div>
            <div class="ckx23">
               <input type="password" placeholder="确认密码">
               <van-icon name="closed-eye" class="zz" />
           </div>
           <div class="ckx24">
               <input type="text" placeholder="用户名">
               <van-icon name="contact"  class="zz"/>
           </div>
            <div class="ckx25">
                <input type="text" v-model="pic">
                <img :src="imgcode + key" alt="" @click="updateimg">
           </div>
           <div class="ckx26">
               <input type="text" >
           </div>
            <div class="ckx27">
               <input type="text" v-model="code">
               <p @click="getCode()">获取验证码</p>
           </div>
            <input type="text" placeholder="立即注册" class="pp" @click="zhuce">
            <h2 @click="add()">立即登录</h2>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import {v4 as  uuidv4} from 'uuid';
import qs from 'qs'
    export default {
        name:"zc",
        data() {
            return {
                imgcode:"https://api.it120.cc/small4/verification/pic/get?key=" ,
                key:uuidv4(),
                tel:"",
                pic:"",
                pwd:"",
                code:""
            }
        },
        methods: {
            getCode(){
                //alert(this.tel)

                var data ={"mobile":this.tel,picCode:this.pic,key:this.key}

                axios.post("https://api.it120.cc/small4/verification/sms/get",qs.stringify(data)).then((msg)=>{
                    console.log(msg)
                })
            },
            zhuce(){
                //https://api.it120.cc/small4/user/m/register

                 var data ={"mobile":this.tel,pwd:this.pwd,code:this.code}

                axios.post("https://api.it120.cc/small4/user/m/register",qs.stringify(data)).then((msg)=>{
                    console.log(msg)
                    this.$router.push("dl")
                })
            },
            updateimg(){
                //this.imgcode="https://api.it120.cc/small4/verification/pic/get?key=" +uuidv4()

                this.key = uuidv4()
            },
            aa(){
                this.$router.push("/dl")
            },
             add(){
                this.$router.push("/dl")
            }
        },
    }
</script>

<style lang="scss" scoped>
.ckx2{
    width: 100%;
    height: 15rem;
    .pp{
        width: 4rem;
        height: 1rem;
        font-size: 0.3rem;
        text-align: center;
        border: none;
        color: white;
        font-size: 0.5rem;
        border-radius: 0.2rem;
        margin-left: 1.8rem;
        margin-top: 1rem;
        background: linear-gradient(135deg, #e570e7 0%, #79f1fc 100%);
    }
     h2{
        color: #549ff9;
        font-size: 0.4rem;
        font-weight: normal;
        text-align: center;
        margin: 0.5rem;
    }
    h2:hover{
       
        text-decoration:underline;
    }
    .ckx21 {
        border: 1px solid gainsboro;
        width: 6rem;
        height:1.2rem;
        display: flex;
        border-radius: 0.2rem;
        margin-left: 0.8rem;
       margin-top: 0.5rem;
        background-color: #F5F5F5;
        input{
            width:5rem;
            height:1rem;
            background-color: #F5F5F5;
            border: none;
            border-radius: 0.2rem;
            font-size: 0.35rem;
        }
        .zz{
            font-size: 0.5rem;
            margin-top: 0.3rem;
        }
    }
    .ckx26 {
        border: 1px solid gainsboro;
        width: 6rem;
        height:1.2rem;
        display: flex;
        border-radius: 0.2rem;
        margin-left: 0.8rem;
       margin-top: 0.5rem;
        background-color: #F5F5F5;
        input{
            width:5rem;
            height:1rem;
            background-color: #F5F5F5;
            border: none;
            border-radius: 0.2rem;
            font-size: 0.35rem;
        }
        
    }
     .ckx27 {
        border: 1px solid gainsboro;
        width: 6rem;
        height:1.2rem;
        display: flex;
        border-radius: 0.2rem;
        margin-left: 0.8rem;
       margin-top: 0.5rem;
        background-color: #F5F5F5;
        input{
            width:3rem;
            height:1.2rem;
            background-color: #F5F5F5;
            border: none;
            border-radius: 0.2rem;
            font-size: 0.35rem;
        }
        p{
            width: 5rem;
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: 0.4rem;
            text-align: center;
           border-left: 1px solid gray;
        }
        
    }
    .ckx25 {
        border: 1px solid gainsboro;
        width: 6rem;
        height:1.2rem;
        display: flex;
        border-radius: 0.2rem;
        margin-left: 0.8rem;
       margin-top: 0.5rem;
        background-color: #F5F5F5;
        input{
            width:2.4rem;
            height:1rem;
            background-color: #F5F5F5;
            border: none;
            border-radius: 0.2rem;
            font-size: 0.35rem;
        }
        img{

        }
    }
     .ckx24 {
        border: 1px solid gainsboro;
        width: 6rem;
        height:1.2rem;
        display: flex;
        border-radius: 0.2rem;
        margin-left: 0.8rem;
       margin-top: 0.5rem;
        background-color: #F5F5F5;
        input{
            width:5rem;
            height:1rem;
            background-color: #F5F5F5;
            border: none;
            border-radius: 0.2rem;
            font-size: 0.35rem;
        }
        .zz{
            font-size: 0.5rem;
            margin-top: 0.3rem;
        }
    }
    .ckx23 {
        border: 1px solid gainsboro;
        width: 6rem;
        height:1.2rem;
        display: flex;
        border-radius: 0.2rem;
        margin-left: 0.8rem;
       margin-top: 0.5rem;
        background-color: #F5F5F5;
        input{
            width:5rem;
            height:1rem;
            background-color: #F5F5F5;
            border: none;
            border-radius: 0.2rem;
            font-size: 0.35rem;
        }
        .zz{
            font-size: 0.5rem;
            margin-top: 0.3rem;
        }
    }
    .ckx22 {
        border: 1px solid gainsboro;
        width: 6rem;
        height:1.2rem;
        display: flex;
        border-radius: 0.2rem;
        margin-left: 0.8rem;
       margin-top: 0.5rem;
        background-color: #F5F5F5;
        input{
            width:5rem;
            height:1rem;
            background-color: #F5F5F5;
            border: none;
            border-radius: 0.2rem;
            font-size: 0.35rem;
        }
        .zz{
            font-size: 0.5rem;
            margin-top: 0.3rem;
        }
    }
}
.ckx1{
    width: 100%;
    height: 1rem;
    display: flex;
    border: 1px solid gainsboro;
    p{
        width: 7rem;
        height: 1rem;
        text-align: center;
        font-size: 0.4rem;
       line-height: 1rem;
    }
    .qq{
        font-size: 0.4rem;
        line-height: 1rem;
    }
}
</style>