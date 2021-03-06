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
            },
            {
                path:'/myBlog',
                name:'myBlog',
                component:()=>import('../pages/myBlog.vue'),
            },
            {
                path:'/myAttention',
                name:'myAttention',
                component:()=>import('../pages/myAttention.vue'),
            },
        ]
    },
    {
        path:'/editHome',
        name:'editHome',
        component:()=>import('../pages/editHome.vue'),
        redirect:'/articleEdit',
        children:[
            {
                path:'/articleEdit',
                name:'articleEdit',
                component:()=>import('../pages/articleEdit.vue'),
            },
        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../pages/login.vue'),
    },
    {
        path:'/register',
        name:'register',
        component:()=>import('../pages/register.vue'),
    },
    {
        path:'*',
        name:'404-NotFound',
        component:()=>import('../pages/404.vue'),
    }
]
export default routes