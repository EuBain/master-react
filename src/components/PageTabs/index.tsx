import { Tabs } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WujieReact from "wujie-react";
import { useEmitSubApp, useLocationPath, useLink } from "@/utils/hooks";
import { useModel } from "@/stores";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const PageTabs = () => {
  const { getCurRoute, setCurRoute, curSubApp, subAppParams, setSubAppParams } =
    useModel("routePath");
  const { navList, flatNavList } = useModel("navList");

  const [subApp, pathname, params] = useLocationPath();
  const link = useLink();
  const _navigate = useNavigate();

  useEmitSubApp(subApp, params);

  const addTabs = (
    navList: any[],
    flatNavList: any[],
    subAppParams: { [x: string]: any[] },
    subApp: string | number,
    pathname: string,
    setSubAppParams: (arg0: (item: any) => any) => void
  ) => {
    if (
      navList.find((item) => item.subApp === subApp) &&
      // flatNavList?.length &&
      subAppParams[subApp] &&
      !subAppParams[subApp].find(
        (item: { path: string }) => item.path === pathname
      )
    ) {
      let newPanes = subAppParams[subApp];
      newPanes.push({
        name: flatNavList.find((i) => i.path === pathname)?.name ?? pathname,
        path: pathname,
      });
      setSubAppParams((item) => ({ ...item, [subApp]: newPanes }));
    }
  };

  // const add = () => {
  //   const newActiveKey = `newTab${newTabIndex.current++}`;
  //   setItems([...items, { label: 'New Tab', children: 'New Tab Pane', key: newActiveKey }]);
  //   setActiveKey(newActiveKey);
  // };
  const onChange = (key: string) => {
    // 跳转路由，再获取路由信息发送给子应用
    link(curSubApp, key);
  };

  const remove = (targetKey: TargetKey) => {
    const targetIndex = subAppParams[curSubApp].findIndex(
      (pane) => pane.path === targetKey
    );
    const newPanes = subAppParams[curSubApp].filter(
      (pane) => pane.path !== targetKey
    );
    if (newPanes.length && targetKey === pathname) {
      const { path } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      setCurRoute(curSubApp, path);
      link(curSubApp, path);
    }
    setSubAppParams((tabMap) => ({ ...tabMap, [curSubApp]: newPanes }));
  };

  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "remove") {
      remove(targetKey);
    }
  };

  useEffect(() => {
    // 处理路由不存在的情况
    if (
      navList.find((item) => item.subApp === subApp) &&
      !flatNavList.find((item) => item.path === pathname)
    ) {
      _navigate("/503");
    }
    // 新增tab标签页
    addTabs(
      navList,
      subAppParams,
      subApp,
      pathname,
      flatNavList,
      setSubAppParams
    );
  }, [pathname, flatNavList]);

  return (
    <>
      {!!curSubApp &&
        Object.keys(subAppParams).map((key) => {
          return (
            <div hidden={key !== curSubApp} key={key}>
              {/* // <div  key={key}> */}
              {/*  tab的作用是展示子应用的保存的页面，以及子应用跳转，由子应用通知父应用需要展示及高亮的tab */}
              <Tabs
                hideAdd
                onChange={onChange}
                onEdit={onEdit}
                activeKey={getCurRoute(curSubApp)}
                type={subAppParams[key].length > 1 ? "editable-card" : "card"}
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
    </>
  );
};

export default PageTabs;
