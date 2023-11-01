import { ErrorPageRoutes } from './ErrorPage'
import  HomeRoutes from './Home'
import { DemoRoutes } from './Demo'
import { LazyExoticComponent, lazy } from 'react'
import { Navigate } from "react-router-dom"


const Home = lazy(() => import('@/pages/Home'))
const MyLayout = lazy(() => import('@/pages/Layout'))
const Demo = lazy(() => import('@/pages/demo'))
const BadServer = lazy(() => import('@/pages/ErrorPage/BedServer'))
const NotFind = lazy(() => import('@/pages/ErrorPage/NotFind'))

export const component:Record<string, LazyExoticComponent<() => JSX.Element>> = {
        Home,
        MyLayout,
        Demo,
        BadServer,
        NotFind,
}