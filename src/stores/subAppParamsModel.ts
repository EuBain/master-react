import { useState } from "react";

const tabMap: Record<string, any> = {
  ReactMicro: [
    {
      name: "路由1",
      path: "/ReactMicro/home",
    },
    {
      name: "路由2",
      path: "/ReactMicro/demo1",
    },
    {
      name: "路由3",
      path: "/ReactMicro/index",
    },
  ],
  ReactMicro2: [
    {
      name: "路由4",
      path: "/ReactMicro2/home",
    },
    {
      name: "路由5",
      path: "/ReactMicro2/demo1",
    },
    {
      name: "路由6",
      path: "/ReactMicro2/index",
    },
  ],
};

export const  subAppParamsModel = () => {
  const [subAppParams, setSubAppParams] = useState< Record<string, any>>(tabMap)
  return { 
    subAppParams,
    setSubAppParams 
  }
}