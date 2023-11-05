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
                redirect: 'home',
            },
            {
                name: '主页3',
                path: '/home',
                element:  'Home',
                keepalive: true,
            },
            {
                name: 'demo',
                path: '/demo1',
                element:  'Demo',
                keepalive: true,
            },
            {
                name: '事件',
                path: '/index',
                element: 'Index',
                keepalive: true,
            },
            {
                name: 'bedserver',
                path: '/503',
                element: 'BadServer',
                keepalive: true,
            },
            {
                name: 'notfind',
                path: '/212',
                element: 'NotFind',
                keepalive: true,
            },
            {
                name: 'jenkins',
                path: '/jenkins',
                element: 'Jenkins',
                keepalive: true,
            },
            {
                name: 'tayrsi',
                path: '/tayrsi',
                element: 'Tayrsi',
                keepalive: true,
            },

        ]
    },
]



