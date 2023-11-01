/* eslint-disable */
import { ErrorPageRoutes } from './ErrorPage'
import { HomeRoutes } from './Home'
import { DemoRoutes } from './Demo'
import { Navigate } from "react-router-dom"
import { component } from './routesMap'


export interface RoutesType {
    name: string,
    path: string,
    element: string,
    children?: RoutesType[],
    redirect?: boolean,
}

export function handlerRoutes (routes:RoutesType[]): any {
    const route = routes.map((index:RoutesType) => {
        const Components =  component[index.element] 
        return {
            name: index.name,
            path: index.path,
            element: index.redirect ? <Navigate to={`/${index.element}`} /> : <Components />,
            children: index.children ? handlerRoutes(index.children) : null,
        }
    })
    return route
}

export const routes = handlerRoutes([
    ...HomeRoutes,
    // ...ErrorPageRoutes,
    // ...DemoRoutes,
])