import { tabMap } from "@/utils/common";
import { useLocationPath } from "@/utils/hooks";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";


export type SubAppMap = 
| 'ReactMicro' 
| 'ReactMicro2' 


// 各个子应用当前的路由
const curRoute = new Map();

export const routePathModel = () => {
  // const [curRoute, setCurRoute] = useState('ReactMicro/home')
  const [, setFlag] = useState([])
  const [subAppParams, setSubAppParams] = useState< Record<string, any>>(tabMap)

  const [subApp, pathname, params ] = useLocationPath()
  const [curSubApp, setCurSubAPP] = useState<SubAppMap>('ReactMicro')
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
        setFlag([])
    curRoute.set(app, route)
  }
  const getCurRoute = (app: SubAppMap) => {
    // setFlag([])
    return curRoute.get(app)
}

  return {
    getCurRoute,
    setCurRoute,
    // curSubApp:_curSubApp.current,
    curSubApp,
    setCurSubAPP,
    subAppParams,
    setSubAppParams,
  }
}