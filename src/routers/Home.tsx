
import { lazy } from "react"
import { Navigate } from "react-router-dom"
const Home = lazy(() => import('@/pages/Home'))
export const HomeRoutes = [
    {
        name: '主页',
        path: '/',
        element: <Navigate to='/home'/>,
    },
    {
        name: '主页',
        path: '/home',
        element:  < Home />,
    },
]