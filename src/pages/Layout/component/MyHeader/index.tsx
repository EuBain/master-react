import { Menu, MenuProps } from "antd"
import { Header } from "antd/es/layout/layout"


const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


const MyHeader = () => {

    return (
      <>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
      </>
    )
}

export default MyHeader;