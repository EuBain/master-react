import { Layout, Spin, theme } from "antd";
import MyHeader from "./component/MyHeader";
import Navigate from "./component/Navigate";
import Container from "./component/Container";
import { useOnSubApp } from "@/utils/hooks";
import { Suspense } from "react";
import { useOutlet } from "react-router-dom";

const MyLayout = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const element = useOutlet();
  return (
    <>
      <Layout u-h="100vh" u-min-w="xl">
        <MyHeader />
        <Layout>
          <Navigate />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Container>
              <Suspense fallback={<h2>🌀 Loading... </h2>}>
                {/* 这里渲染的一个子应用的窗口 */}
                {/* {Object.entries(keepElement).map(([pathname, element]: any) => (
          <div key={pathname} hidden={pathname !== pathname}>
              {element}
          </div>
        ))} */}
                {element}
              </Suspense>
            </Container>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default MyLayout;
