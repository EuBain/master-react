import { Menu, MenuProps } from "antd"
import Sider from "antd/es/layout/Sider"
import { useNavigate } from "react-router-dom";


interface Proptype {
  background: string,
};

const items2: MenuProps['items'] = ['a', 'b', 'c'].map(
    (icon, index) => {
      const key = String(index + 1);
  
      return {
        key: `sub${key}`,
        icon: icon,
        label: `subnav ${key}`,
  
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
  );

const Navigate = (props: Proptype) => {
  const navigate = useNavigate()
    const { background } = props;
    return (
        <>
            <Sider width={200} style={{ background }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
                onClick={() => navigate('demo1')}
            />
            </Sider>
        </>
    )
}

export default Navigate;