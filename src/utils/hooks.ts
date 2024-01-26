import { AppDispatch, RootStore } from "@/redux/store";
import { useModel } from "@/stores";
import { SubAppMap } from "@/stores/routePathModel";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import WujieReact from "wujie-react";
const { bus } = WujieReact;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

/**
 *
 * @returns [子应用，pathname，传给子应用的路由]
 */
export const useLocationPath = (): [string, string, any] => {
  const subApp = useRef<string>("ReactMicro");
  const path = useRef<string[]>(["home"]);

  // const [subApp, setSubApp] = useState<string>("ReactMicro");
  // const [path, setPath] = useState<string[]>(['home']);
  const pathname = useRef<string>("/ReactMicro/home");
  const location = useLocation();

  pathname.current = location.pathname;
  const [, thisSubApp, ...router] = location.pathname.split("/");
  subApp.current = thisSubApp;
  path.current = router;
  // useEffect(() => {

  //   // setSubApp(thisSubApp)
  //   // setPath(router)
  // }, [pathname.current]);

  return [subApp.current, pathname.current, path.current];
};

// const flagMap:any = {};

// // 确保所有子应用都已经挂载
// export const useOnSubApp = (subApp: string, params: string[]) => {
//   // console.log(params)

// }

export const useEmitSubApp = (subApp: string, params: string[]) => {
  const [flag, setFlag] = useState<any>({});
  const subAppMount = (subApp: string, boolean: boolean) => {
    setFlag((flag: any) => ({ ...flag, [subApp]: boolean }));
  };
  useEffect(() => {
    bus.$on("ReactMicroMount", subAppMount);
    bus.$on("ReactMicro2Mount", subAppMount);
  }, []);
  useEffect(() => {
    if (flag[subApp]) {
      bus.$emit(`${subApp}Change`, params);
    }
  }, [params, flag[subApp]]);
};

export const useLink = () => {
  const _navigate = useNavigate();
  const { setCurRoute, setCurSubAPP } =
    useModel("routePath");
  const link = (subApp: SubAppMap, route: string) => {
    // 新增tab标签页
    setCurRoute(subApp, route);
    setCurSubAPP(subApp);
    _navigate(route)
  };
  return link;
};

