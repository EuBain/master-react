import React from "react";
// import hostMap from "../hostMap";
import WujieReact from "wujie-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Tayrsi() {
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname.replace("/react16-sub", "").replace("/react16", "").replace("/",""); ////
  // const react16Url = hostMap("//localhost:7600/") + path;
  const props = {
    jump: (name) => {
      navigation(`/${name}`);
    },
  };
  return (
    // 单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由
    <WujieReact
      width="100%"
      height="100%"
      name="tayrsi"
      // url={react16Url}
      url='https://www.tayrsi.cn/master-react/'
      sync={true}
      props={props}
    ></WujieReact>

    // <iframe src="https://jenkins.tayrsi.cn/" frameborder="0"></iframe>
    // <iframe src="http://chat.fancyqb.cn/" frameborder="0"></iframe>

  );
}