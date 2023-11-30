import { useModel } from "@/stores";
import React, { useEffect, useState } from "react";
// import hostMap from "../hostMap";
import WujieReact from "wujie-react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEmitSubApp, useLocationPath, useOnSubApp } from "@/utils/hooks";
// import { useModel } from "@/stores";

export default function ReactMicro() {
  const {navigate} = useModel('headerNav')
  const {addNavList} = useModel('navList')
  // console.log(1,window)
  const props = {
    addNavList,
    jump: (subApp,name) => {
      navigate(subApp,`/${subApp}/${name}`);
    },
  }
  useEffect(() => {
    console.log('1重新渲染')
  })
  return (
    // 单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由，不会导致子应用重新渲染，还是需要同eventbus来触发子应用路由
    <WujieReact
      width="100%"
      height="100%"
      name="ReactMicro"
      // url={react16Url}
      url="http://localhost:8889/master-react/"
      sync={false}
      props={props}
    ></WujieReact>
  );
}
