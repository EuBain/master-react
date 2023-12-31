import { Layout, Spin, theme } from "antd";
import MyHeader from "./component/MyHeader";
import Navigate from "./component/Navigate";
import Container from "./component/Container";
import { useOnSubApp } from "@/utils/hooks";


const MyLayout = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <>
      <Layout u-h="100vh" u-min-w="xl">
        <MyHeader />
        <Layout>
          <Navigate />
          <Layout style={{ padding: "0 24px 24px" }}>
              <Container />
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default MyLayout;
