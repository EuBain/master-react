import { useEffect, useState } from "react";

type Route = {
  name: string;
  path: string;
  element: string;
  keepalive?: boolean;
  redirect?: string;
};

type ModelConfig = {
  groupName: string;
  route: Route[];
};

type Model = {
  model: string;
  modelConfig: ModelConfig[];
};
export type SubModel = {
  subApp: string;
  model: Model[];
};

export const navListModel = () => {
  const [navList, setNavList] = useState<SubModel[] | []>([]);
  const [flatNavList, setFlatNavList] = useState([]);
  const addNavList = (params: SubModel) => {
    setNavList((list: SubModel[]): SubModel[] => {
      const newList = Array.from(new Set([...list, params]));
      return newList;
    });
  };
  useEffect(() => {
    const dd: {
      name: string;
      path: string;
      groupName: string;
      model: string;
      subApp: string;
    }[] = [];
    navList.forEach((l) => {
      l.model?.forEach((m) => {
        m.modelConfig?.forEach((i) => {
          i.route?.forEach((j) => {
            dd.push({
              name: j.name,
              path: `/${l.subApp}/${j.path}`,
              groupName: i.groupName,
              model: m.model,
              subApp: l.subApp,
            });
          });
        });
      });
    });
    setFlatNavList(dd);
  }, [navList]);
  // console.log(flatNavList)
  return { navList, addNavList, flatNavList };
};
