import Vue from 'vue'
import Router from 'vue-router'

import So from  '@/pages/So'
import Sho from '@/pages/Sho'
import Fen from '@/pages/Fen'
import Guc from '@/pages/Guc'
import Wd from '@/pages/Wd'
import Kjlb from '@/components/Kjlb'
import Yxzl from '@/components/Yxzl'
import Zlxq from '@/components/Zlxq'
import Rqlb from '@/components/Rqlb'
import Dl from '@/components/Dl'
import Zc from '@/components/Zc'
import Xq from '@/components/Xq'
import Flsp from '@/components/Flsp'
import Spxq from '@/components/Spxq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/sho",
      name:"Sho",
      component:Sho,
        children:[
           {
             path:"so",
             component:So
           },
           {
            path:"fen",
            component:Fen
          },
          {
            path:"guc",
            component:Guc
          },
          {
            path:"wd",
            component:Wd
          }
        ]
    },
    {
      path:"/kjlb",
      name:"Kjlb",
      component:Kjlb
    },
    {
      path:"/yxzl",
      name:"Yxzl",
      component:Yxzl
    },
    {
      path:"/zlxq",
      name:"Zlxq",
      component:Zlxq
    },
    {
      path:"/rqlb",
      name:"Rqlb",
      component:Rqlb
    },
     {
      path:"/dl",
      name:"Dl",
      component:Dl
    },
     {
      path:"/zc",
      name:"Zc",
      component:Zc
    },
    {
      path:"/xq",
      name:"Xq",
      component:Xq
    },
    {
      path:"/flsp",
      name:"Flsp",
      component:Flsp
    },
    {
      path:"/spxq",
      name:"Spxq",
      component:Spxq
    },
    {
      path:"/",
      redirect:'/sho/so'

    }
  ]
})
