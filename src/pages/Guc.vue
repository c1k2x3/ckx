<template>
    <div class="guc">
       <div class="ckx">
           <button>编辑</button>
       </div>
       <div class="ckx2">

       </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"guc",
        data() {
            return {
                list:[]
            }
        },
    }
</script>

<style lang="scss" scoped>
.ckx{
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid gainsboro;
    button{
        width: 2rem;
        height: 0.5rem;
        font-size: 0.3rem;
        border: none;
        outline: none;
        color: white;
        background-color: yellowgreen;
    }
}
</style>