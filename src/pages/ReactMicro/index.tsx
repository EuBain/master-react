import React, { useEffect, useState } from "react";
// import hostMap from "../hostMap";
import WujieReact from "wujie-react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEmitSubApp, useLocationPath, useOnSubApp } from "@/utils/hooks";
// import { useModel } from "@/stores";

// const SUBAPPNAME = "ReactMicro";

export default function ReactMicro() {
  // const navigation = useNavigate();
  // const [, , params] = useLocationPath();
  const [thisProps, setProps] = useState({});
  // useEffect(() => {
  //   console.log(params,'1重新渲染')
  //   setProps(res => ({...res ,params}))
  // },[params])


  // const {subAppParams}= useModel('subAppParams')
  // useEffect(() => {
  //   console.log("创建");
  //   return ()=> console.log("销毁");
  // }, []);
  return (
    // 单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由，不会导致子应用重新渲染，还是需要同eventbus来触发子应用路由
    <WujieReact
      width="100%"
      height="100%"
      name="ReactMicro"
      // url={react16Url}
      url="http://localhost:8889/master-react/"
      sync={false}
      props={thisProps}
    ></WujieReact>

    // <iframe src="https://jenkins.tayrsi.cn/" frameborder="0"></iframe>
    // <iframe src="http://chat.fancyqb.cn/" frameborder="0"></iframe>
  );
}
