<template>
    <div class="so">

        
      <Banner></Banner>
      <Qmkj></Qmkj>
      <Jxzt></Jxzt>
      <Footer></Footer>
      <Rqtj></Rqtj>
    </div>
</template>

<script>
import Banner from '@/components/Banner'
import Qmkj from '@/components/Qmkj'
import Footer from '@/pages/Footer'
import Jxzt from '@/components/Jxzt'
import Rqtj from '@/components/Rqtj'
    export default {
        name:"so",
        components:{Banner,Qmkj,Footer,Jxzt,Rqtj},
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
.so{
    margin-bottom: 1.4rem;
}
</style>