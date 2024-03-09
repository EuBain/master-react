import { tabMap } from "@/utils/common";
import { useLocationPath } from "@/utils/hooks";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export type SubAppMap = "ReactMicro" | "ReactMicro2";

// 各个子应用当前的路由
const curRoute = new Map();

export const routePathModel = () => {
  // const [curRoute, setCurRoute] = useState('ReactMicro/home')
  // const [, setFlag] = useState([])
 
  // 展示的tabs
  const [subAppParams, setSubAppParams] = useState<Record<string, any>>(tabMap);

  const [subApp, pathname, params] = useLocationPath();
  const [curSubApp, setCurSubAPP] = useState<SubAppMap>("ReactMicro");

  useEffect(() => {
    if (!curSubApp || curSubApp !== subApp) {
      setCurSubAPP(subApp as SubAppMap);
    }
  }, [subApp]);

  // url跳转时记录当前的路径
  useEffect(() => {
    setCurSubAPP(() => {
      setCurRoute(subApp as SubAppMap, pathname);
      return subApp as SubAppMap;
    });
  }, []);

  const setCurRoute = (app: SubAppMap, route: string) => {
    // setFlag([])
    curRoute.set(app, route);
  };
  const getCurRoute = (app: SubAppMap) => {
    // setFlag([])
    return curRoute.get(app);
  };

  return {
    getCurRoute,
    setCurRoute,
    // curSubApp:_curSubApp.current,
    curSubApp,
    setCurSubAPP,
    subAppParams,
    setSubAppParams,
  };
};
