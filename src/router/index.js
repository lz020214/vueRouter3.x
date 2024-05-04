import VueRouter from "vue-router";
import Vue from "vue";
import Discover from "@/components/Discover.vue";
import My from "@/components/My.vue";
import Friends from "@/components/Friends.vue";
import Recommend from "@/components/Recommend.vue";
import SongList from "@/components/SongList.vue";
import ShowProduct from "@/components/ShowProduct.vue";
import Product from "@/components/Product.vue";

// 将VueRouter 设置为Vue 的插件
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // 重定向
        {path:'/',redirect:"/discover"},
        {
            path: '/discover',
            component:Discover,
            // 通过children属性，嵌套声明子路由
            children:[       
                //  这里的path 不能加/
                {path:"recommend",component:Recommend},
                {path:"songlist",component:SongList},
]
        },
        {path: '/friend',component:Friends},
        {path: '/my',component:My},
        {
            path: '/showproduct',
            component:ShowProduct,
            children:[       
                //  这里的path 不能加/
                {path:":id",component:Product,
                // props:true
            },
            ]
        },
    ]
}) 

export default router