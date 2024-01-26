import ContextPageTab from "@/context/ContextPageTabs";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { startTransition, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeRoutes } from "@/routers/Home";
import { useModel } from "@/stores";
import "./index.scss";
import { useLink } from "@/utils/hooks";
import { LocalNavigate, handleNavList } from "@/utils/common";


interface Proptype {
  background: string;
}

// items2.push({
//       key: '/tayrsi/212',
//       label: `测试`,
//     }
//   )

const Navigate = React.memo((props: Proptype) => {
  // const navigate = useNavigate()
  // const location = useLocation();
  // let {keepElement, keepalive} = useContext(ContextPageTab)
  const link = useLink();
  const { navList } = useModel("navList");
  // console.log(navList)
  const { curSubApp, getCurRoute } = useModel("routePath");

  const curPath = getCurRoute(curSubApp);


  const items = handleNavList(navList, curSubApp) ?? LocalNavigate;

  const { background } = props;
  return (
    <>
      <Sider width={200} style={{ background }}>
        <Menu
          mode="vertical"
          items={items}
          selectedKeys={[curPath]}
          // defaultOpenKeys={[curPath]}
          style={{ height: "100%", borderRight: 0 }}
          // onClick={() => {}}
          onClick={({ key, keyPath }) => {
            link(curSubApp, key);
          }}
        />
      </Sider>
    </>
  );
});

export default Navigate;
