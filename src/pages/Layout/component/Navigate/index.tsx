import ContextPageTab from "@/context/ContextPageTabs";
import { Menu, MenuProps } from "antd"
import Sider from "antd/es/layout/Sider"
import React, { startTransition, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeRoutes } from '@/routers/Home'
import { useModel } from "@/stores";

interface Proptype {
  background: string,
};



  // items2.push({
  //       key: '/tayrsi/212',
  //       label: `测试`,
  //     }
  //   )


const Navigate = React.memo((props: Proptype) => {
  const navigate = useNavigate()
  // const location = useLocation()
  // let {keepElement, keepalive} = useContext(ContextPageTab)
  const {subAppParams, setSubAppParams} = useModel('subAppParams')
  const  {
    curSubApp,
  } = useModel('headerNav')
  const {navList} = useModel('navList')
  // console.log(navList)

  // const item = subAppParams[curSubApp].map(
  //   (sub) => {


  //   }
  // )

  const items2: MenuProps['items'] = HomeRoutes[0].children?.map(
    (icon:any) => {
      if(icon.redirect) return
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


  // useEffect(() => {
  //   // console.log(items2)
  //   // console.log(keepElement)
  // console.log('侧边栏重新渲染了')
  // },[keepElement])


    const { background } = props;
    return (
        <>
            <Sider width={200}
             style={{ background }}
             >
            <Menu
                mode="inline"
                // selectedKeys={[location.pathname]}
                // defaultOpenKeys={['/']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
                // onClick={() => {}}
                onClick={({key}) =>{ 
                  console.log(key)
                  navigate(key)
                }}
            />
            </Sider>
        </>
    )
})

export default Navigate;