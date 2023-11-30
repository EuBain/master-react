import { useModel } from "@/stores";
import { SubAppMap } from "@/stores/headerNavModel";
import { useLocationPath } from "@/utils/hooks";
import { Menu, MenuProps } from "antd"
import { Header } from "antd/es/layout/layout"
import { log } from "console";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const subMap = [
  {
    name:'react-micro',
    path:'ReactMicro/',
    key:'ReactMicro'
  },
  {
    name:'react-micro2',
    path:'ReactMicro2/',
    key:'ReactMicro2'
  },
]

const items1: MenuProps['items'] = subMap.map((key) => ({
  key:key.key,
  label: `${key.name}`,
}));


const MyHeader = () => {
  // const [subApp,pathname,params] = useLocationPath()
  // const [current, setCurrent] = useState('ReactMicro');
  const anavigate = useNavigate()
  const { getCurRoute,setCurRoute, curSubApp, setCurSubAPP, navigate } = useModel('headerNav')
  // console.log('头部栏重新渲染')
  // 点击时选择当前的子应用
  // console.log(curSubApp)
  const onClick: MenuProps['onClick'] = (e) => {
    const key:SubAppMap = e.key as SubAppMap
    setCurSubAPP(key)
    let route = getCurRoute(key)
    if(!route) route = `${key}/home`
    navigate(key,route)
  };
    return (
      <>
        <Header style={{ display: 'flex', alignItems: 'center',padding:0}}>
          <div className="demo-logo" />
          <Menu style={{flex:1}} onClick={onClick} theme="light" selectedKeys={[curSubApp]} mode="horizontal"  items={items1} />
          {/* <button onClick={() => anavigate(-1)}>回退</button> */}
        </Header>
      </>
    )
}

export default MyHeader;