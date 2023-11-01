
import { lazy } from "react"
const BedServer = lazy(() => import('@/pages/ErrorPage/BedServer'))
const NotFind = lazy(() => import('@/pages/ErrorPage/NotFind'))
export const ErrorPageRoutes = [
    // {
    //     name: 'notfind',
    //     path: '/404',
    //     element: <NotFind/>,
    // },
    {
        name: 'bedserver',
        path: '/503',
        element:  < BedServer />,
    },
    {
        name: 'notfind',
        path: '/*',
        element: <NotFind/>,
    },
]