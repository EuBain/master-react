// import { changeKeepElement } from "@/redux/slice/pageTabSlice";
// import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { Tabs } from "antd";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
// import { keepalive } from "@/routers";
import ContextPageTab from "@/context/ContextPageTabs";
import WujieReact from "wujie-react";
import { useEmitSubApp, useLocationPath, useOnSubApp } from "@/utils/hooks";
import { useModel } from "@/stores";
const { bus } = WujieReact;

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const PageTabs = () => {
  const [subApp, pathname,params] = useLocationPath();
  const navigate = useNavigate();
  const element = useOutlet();
  const {subAppParams} = useModel('subAppParams')
  const  {
    getCurRoute,
    setCurRoute,
    curSubApp,
    setCurSubAPP,
  } = useModel('headerNav')
  // const [curSubApp,SetCurSubAPP] = useState('')
  const [curPathname, setCurPathname] = useState('')

  useEmitSubApp(curSubApp, params);
  // const { keepElement, addElement, keepalive } = useContext(ContextPageTab);
  // useEffect(() => {
  //   addElement(pathname, element);
  // }, [pathname]);
  useEffect(() => {
    setCurRoute(curSubApp, pathname)
  },[])
  const onChange = (key: string) => {
    // 跳转路由，再获取路由信息发送给子应用
    setCurRoute(curSubApp, key)
    navigate(key);
  };
  // const add = () => {
  //   const newActiveKey = `newTab${newTabIndex.current++}`;
  //   setItems([...items, { label: 'New Tab', children: 'New Tab Pane', key: newActiveKey }]);
  //   setActiveKey(newActiveKey);
  // };

  // const remove = (targetKey: TargetKey) => {
  //   const targetIndex = items.findIndex((pane) => pane.key === targetKey);
  //   const newPanes = items.filter((pane) => pane.key !== targetKey);
  //   if (newPanes.length && targetKey === activeKey) {
  //     const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
  //     setActiveKey(key);
  //   }
  //   setItems(newPanes);
  // };

  // const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
  //   if (action === 'add') {
  //     add();
  //   } else {
  //     remove(targetKey);
  //   }
  // };
  return (
    <>
      {!!subApp &&
        Object.keys(subAppParams).map((key) => {
          return (
            <div hidden={key !== subApp} key={key}>
              {/*  tab的作用是展示子应用的保存的页面，以及子应用跳转，由子应用通知父应用需要展示及高亮的tab */}
              <Tabs
                hideAdd
                onChange={onChange}
                activeKey={pathname}
                type="editable-card"
                // onEdit={onEdit}
                items={subAppParams[key].map(({ name, path }: any) => {
                  return {
                    label: `${name}`,
                    key: path,
                  };
                })}
              ></Tabs>
            </div>
          );
        })}
      <Suspense fallback={<h2>🌀 Loading... </h2>}>
        {/* 这里渲染的一个子应用的窗口 */}
        {/* {Object.entries(keepElement).map(([pathname, element]: any) => (
          <div key={pathname} hidden={pathname !== pathname}>
              {element}
          </div>
        ))} */}
        {element}
      </Suspense>
    </>
  );
};

export default PageTabs;
