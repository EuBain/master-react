import { RoutesType } from "."
export const HomeRoutes: RoutesType[] =[
    {
        name: '主页',
        path: '/',
        element:  'MyLayout',
        children: [
            {
                name: '主页',
                path: '/',
                redirect: 'demo1',
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



