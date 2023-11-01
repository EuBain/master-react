import { RoutesType, handlerRoutes } from "."
export const HomeRoutes: RoutesType[] =[
    {
        name: '主页',
        path: '/',
        element:  'MyLayout',
        children: [
            {
                name: '主页',
                path: '/home',
                element: 'demo1',
                redirect: true,
            },
            {
                name: 'demo',
                path: 'demo1',
                element:  'Demo',
            },
            {
                name: 'bedserver',
                path: '503',
                element:  'BedServer',
            },
            {
                name: 'notfind',
                path: '212',
                element: 'NotFind',
            },
        ]
    },
]
