<template>
    <div class="dl">
        <div class="ckx1">
            <van-icon name="arrow-left" class="qq" @click="aa()" />
            <p>登录账号</p>
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
           <input type="text" placeholder="登录" class="pp" @click="login()">
           <p>忘记密码</p>
           <h2 @click="add()">立即注册</h2>
        </div>

    </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
    export default {
        name:"dl",
        data() {
            return {
                tel:"",
                pwd:""
            }
        },
        methods: {
            aa(){
                this.$router.push("/sho/wd")
            },
            add(){
                this.$router.push("/zc")
            },
            login(){
                //alert(this.tel)

                var data = {
                    "mobile" :this.tel,
                    "pwd" :this.pwd
                }

                axios.post("https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",qs.stringify(data)).then((msg)=>{
                    console.log(msg)

                    if(msg.data.msg == "success"){
                        localStorage.setItem("token",msg.data.data.token)
                        this.$router.push("/sho/wd")
                    }else{
                        alert("用户名或密码不对")
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.ckx2{
    width: 100%;
    height: 5rem;
    p{
        font-size: 0.3rem;
        text-align: center;
        color:gainsboro;
        margin: 0.2rem 0;
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
    .qq{
        font-size: 0.4rem;
        line-height: 1rem;
    }
    p{
        width: 7rem;
        height:1rem;
        text-align: center;
        line-height: 1rem;
        font-size: 0.4rem;
    }
}
</style>