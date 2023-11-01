// import { changeKeepElement } from "@/redux/slice/pageTabSlice";
// import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { Tabs } from "antd"
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
import { usePageTabs } from "@/utils/hooks";


type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id = String(index + 1);
  return { label: `Tab ${id}`, children: `Content of Tab Pane ${index + 1}`, key: id };
});

const PageTabs = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const element = useOutlet()
    const {keepElement, keepalive} = usePageTabs()
    keepElement[location.pathname] = element
    console.log(keepElement)
    const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
    const [items, setItems] = useState(defaultPanes);
    const newTabIndex = useRef(0);
    const onChange = (key: string) => {
        // setActiveKey(key);
        navigate(key)
      };
      const add = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        setItems([...items, { label: 'New Tab', children: 'New Tab Pane', key: newActiveKey }]);
        setActiveKey(newActiveKey);
      };

      const remove = (targetKey: TargetKey) => {
        const targetIndex = items.findIndex((pane) => pane.key === targetKey);
        const newPanes = items.filter((pane) => pane.key !== targetKey);
        if (newPanes.length && targetKey === activeKey) {
          const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
          setActiveKey(key);
        }
        setItems(newPanes);
      };
    
      const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
        if (action === 'add') {
          add();
        } else {
          remove(targetKey);
        }
      };
    return (
      <>
        <Tabs
        hideAdd
        onChange={onChange}
        activeKey={location.pathname}
        type="editable-card"
        onEdit={onEdit}
        items={Object.entries(keepElement).map(([pathname, element]: any) => {
            return { 
                label: `${pathname}`, 
                // children: element, 
                key: pathname 
            }
        })}
        > 
        </Tabs>
        { Object.entries(keepElement).map(([pathname, element]: any) => 
                <div key ={pathname} hidden={location.pathname !== pathname} >
                    {element}
                </div>
            )
        }
         </>
    )
}

export default PageTabs;