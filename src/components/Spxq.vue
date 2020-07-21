<template>
    <div class="spxq">
        <div class="ckx1">
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"spxq",
        data() {
            return {
                list:[]
            }
        },
        mounted() {
            var id = this.$route.query.id
            console.log(id)
        },
    }
</script>

<style lang="scss" scoped>

</style>