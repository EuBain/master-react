import React, { useEffect } from "react";
// import hostMap from "../hostMap";
import WujieReact from "wujie-react";
// import { useNavigate, useLocation } from "react-router-dom";
import { useModel } from "@/stores";
import { matchHost } from "@/utils/common";
import { useLink } from "@/utils/hooks";

export default function ReactMicro2() {
  // const navigation = useNavigate();
  // const location = useLocation();
  // const react16Url = hostMap("//localhost:7600/") + path;
  // console.log(2,window)
  useEffect(() => {
    console.log('2重新渲染')
  })
  // useEffect(() => {
  //   console.log(location.pathname)
  //   const [,childApp,...router] = location.pathname.split('/')
  //   // console.log({childApp,router})
  // },[location.pathname])
  // const {navigate} = useModel('routePath')
  const link = useLink()
  const {addNavList} = useModel('navList')
  const props = {
    addNavList,
    jump: (subApp,name) => {
      link(subApp,`/${subApp}/${name}`);
    },
  }
  return (
    // 单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由
    <WujieReact
      width="100%"
      height="100%"
      name="ReactMicro2"
      url={matchHost("8890")}
      sync={false}
      props={props}
    ></WujieReact>
  );
}