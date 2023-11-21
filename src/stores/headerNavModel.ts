import { useLocationPath } from "@/utils/hooks";
import { useEffect, useRef, useState } from "react"

// 各个子应用当前的路由
const curRoute = new Map();

export const headerNavModel = () => {
  // const [curRoute, setCurRoute] = useState('ReactMicro/home')
  const [subApp] = useLocationPath()
  // const [curSubApp, setCurSubAPP] = useState<string>()
  // useEffect(() => {
  //   if(!curSubApp) {
  //     setCurSubAPP(subApp)
  //   }
  // },[])
  const _curSubApp = useRef<string>();
  if(!_curSubApp.current) {
      _curSubApp.current = subApp
    }


  const setCurSubAPP = (params) => {
    _curSubApp.current = params
  }

  const setCurRoute = (app, route) => {
    curRoute.set(app, route)
  }

  const getCurRoute = (app) => curRoute.get(app)


  return {
    getCurRoute,
    setCurRoute,
    curSubApp:_curSubApp.current,
    setCurSubAPP,
  }
}