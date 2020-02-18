const routes = [
    {
        path:'/',
        name:'home',
        component:()=>import('../pages/home.vue'),
        redirect:'/articleShow',
        children:[
            {
                path:'/articleShow',
                name:'articleShow',
                component:()=>import('../pages/articleListShow.vue'),
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../pages/login.vue'),
    }
]
export default routes