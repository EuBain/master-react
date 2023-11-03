import ContextPageTab from "@/context/ContextPageTabs";
import { Menu, MenuProps } from "antd"
import Sider from "antd/es/layout/Sider"
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeRoutes } from '@/routers/Home'

interface Proptype {
  background: string,
};

const items2: MenuProps['items'] = HomeRoutes.map(
    (icon:any) => {
      return {
        key: `${icon.path}`,
        label: ` ${icon.name}`,
        children: icon.children?.map((_) => {
          if(_.redirect) return
          const subKey = _.path;
          return {
            key: subKey,
            label: `${_.name}`,
          };
        }),
      };
    },
  );

const Navigate = React.memo((props: Proptype) => {
  const navigate = useNavigate()
  let {keepElement, keepalive} = useContext(ContextPageTab)
 
  useEffect(() => {
    // console.log(items2)
    // console.log(keepElement)
    console.log('侧边栏重新渲染了')
  },[keepElement])
    const { background } = props;
    return (
        <>
            <Sider width={200} style={{ background }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['/home']}
                defaultOpenKeys={['/']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
                // onClick={() => {}}
                onClick={({key}) =>{ 
                  console.log(key)
                  navigate(key)}}
            />
            </Sider>
        </>
    )
})

export default Navigate;