/* eslint-disable */
import { HomeRoutes } from './Home'
import { Navigate } from "react-router-dom"
import { component } from './routesMap'

export interface RoutesType {
    name: string,
    path: string,
    element?: string,
    children?: RoutesType[],
    redirect?: string,
}

export function handlerRoutes (routes:RoutesType[]):any {
    const route = routes.map((index:RoutesType) => {
        let Components
        if(index.element){
            Components = component[index.element]
        }
        return {
            name: index.name,
            path: index.path,
            element: index.redirect ? <Navigate to={`/${index.redirect}`} /> : <Components />,
            children: index.children ? handlerRoutes(index.children) : null,
        }
    })
    return route;
}

export function flatRoutes (routes: RoutesType[]) {
    const object: Record<string, string> = {}
    flatChildrenRoutes(routes)
    function flatChildrenRoutes (routes:RoutesType[], parentPath?: string) {
        routes.forEach((l:RoutesType) => {
            const thisPath = l.redirect ? l.redirect : l.path
            const path = ((parentPath|| '' )+ thisPath).replace(/^\/*(\/.*)\/$/, '$1')
            object[path] = l.name
            if ( l.children) {
                flatChildrenRoutes(l.children, path)
            }
        })
    }
    return object
}

const route = [
    ...HomeRoutes,

    // ...DemoRoutes,
]

export const routes = handlerRoutes(route)
// export const routes = [
//      ...ErrorPageRoutes,
// ]

export const list = flatRoutes(route)
