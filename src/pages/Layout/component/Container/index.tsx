import PageTabs from "@/components/PageTabs";
// import { Breadcrumb, Tabs } from "antd"
// import { Content } from "antd/es/layout/layout"

interface Proptype {
  background?: string;
  children?: any;
}

const Container = (props: Proptype) => {
  // 没有过多渲染
  const { background, children } = props;
  return (
    <>
      <PageTabs></PageTabs>
      <div style={{ overflow: "hidden" }}>{children}</div>
    </>
  );
};

export default Container;
