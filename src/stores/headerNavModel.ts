import { useLocationPath } from "@/utils/hooks";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export type SubAppMap = 
| 'ReactMicro' 
| 'ReactMicro2' 
// 各个子应用当前的路由
const curRoute = new Map();

export const headerNavModel = () => {
  // const [curRoute, setCurRoute] = useState('ReactMicro/home')
  const a = useNavigate()
  const [subApp ] = useLocationPath()
  const [curSubApp, setCurSubAPP] = useState<SubAppMap | undefined>()
  useEffect(() => {
    if(!curSubApp ||  curSubApp !== subApp) {
      setCurSubAPP(subApp as SubAppMap)
    }
  },[subApp])
  // console.log(subApp)
  // const _curSubApp = useRef<SubAppMap>();
  // if(!_curSubApp.current &&  _curSubApp.current !== subApp) {
  //     _curSubApp.current = subApp 
  //   }
  // const setCurSubAPP = (params: SubAppMap) => {
  //   _curSubApp.current = params
  // }

  const setCurRoute = (app: SubAppMap, route: string) => {
    curRoute.set(app, route)
  }

  const getCurRoute = (app: SubAppMap) => curRoute.get(app)

  const navigate = (subApp: SubAppMap,route: string) => {
    setCurRoute(subApp, route)
    setCurSubAPP(subApp)
    a(route)
  }

  return {
    navigate,
    getCurRoute,
    setCurRoute,
    // curSubApp:_curSubApp.current,
    curSubApp,
    setCurSubAPP,
  }
}