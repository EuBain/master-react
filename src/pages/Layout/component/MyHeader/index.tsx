import { useModel } from "@/stores";
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
  const [subApp,pathname,params] = useLocationPath()
  const [current, setCurrent] = useState('ReactMicro');
  const navigate = useNavigate()
  const { getCurRoute, curSubApp, setCurSubAPP } = useModel('headerNav')
  console.log('头部栏重新渲染')
  // 点击时选择当前的子应用
  const onClick: MenuProps['onClick'] = (e) => {
    const key = e.key
    setCurSubAPP(key)
    const route = getCurRoute(e.key)
    console.log({key,route})
    navigate(route?route:`${e.key}/home`)
  };
    return (
      <>
        <Header style={{ display: 'flex', alignItems: 'center',padding:0}}>
          <div className="demo-logo" />
          <Menu style={{flex:1}} onClick={onClick} theme="light" selectedKeys={[curSubApp !== subApp?subApp:curSubApp]} mode="horizontal"  items={items1} />
        </Header>
      </>
    )
}

export default MyHeader;