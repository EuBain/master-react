import { RoutesType } from "."
export const HomeRoutes: RoutesType[] =[
    {
        name: '主页1',
        path: '/',
        element:  'MyLayout',
        children: [
            {
                name: '主页2',
                path: '/',
                redirect: 'ReactMicro',
            },
            {
                name: '主页3',
                path: 'home',
                element:  'Home',
                keepalive: true,
            },
            {
                name: 'demo',
                path: 'demo1',
                element:  'Demo',
                keepalive: true,
            },
            {
                name: '事件',
                path: 'index',
                element: 'Index',
                keepalive: true,
            },
            {
                name: 'bedserver',
                path: '503',
                element: 'BadServer',
                keepalive: true,
            },
            {
                name: 'notfind',
                path: '212',
                element: 'NotFind',
                keepalive: true,
            },
            {
                name: 'ReactMicro',
                path: 'ReactMicro',
                // element: 'ReactMicro',
                // keepalive: true,
                redirect: '/ReactMicro/home'
            },
            {
                name: 'ReactMicroPath',
                path: 'ReactMicro/:path',
                element: 'ReactMicro',
                keepalive: true,
            },
            {
                name: 'ReactMicro2',
                path: 'ReactMicro2',
                // element: 'ReactMicro2',
                // keepalive: true,
                redirect: '/ReactMicro2/home'
            },
            {
                name: 'ReactMicro2Path',
                path: 'ReactMicro2/:path',
                element: 'ReactMicro2',
                keepalive: true,
            },

        ]
    },
]



