/**
 * Created by peach on 16-3-16.
 */
import './style.less';
import React from 'react';
import { Menu, Icon, Tooltip} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'mail'
    };
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  }
  componentUnmount(){
    super.componentUnmount();

  }
  render() {
    return (
      <header className="header">
        <div className="logo" ><a href="http://www.baidu.com">我是Brand</a></div>
        <Tooltip placement="bottom" title="切换菜单状态">
          <a className="sidebar-toggle"><Icon type="bars" /></a>
        </Tooltip>
        <Menu onClick={this.handleClick}
              style={{float:'right'}}
              selectedKeys={[this.state.current]}
              theme={this.state.theme}
              mode="horizontal">

          <Menu.Item key="mail">
            <Icon type="mail" />导航一
          </Menu.Item>
          <Menu.Item key="app" disabled>
            <Icon type="appstore" />导航二
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />导航 - 子菜单</span>}>
            <MenuItemGroup title="分组1">
              <Menu.Item key="setting:1">选项1</Menu.Item>
              <Menu.Item key="setting:2">选项2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="分组2">
              <Menu.Item key="setting:3">选项3</Menu.Item>
              <Menu.Item key="setting:4">选项4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a>
          </Menu.Item>
        </Menu>
      </header>
    );
  }
}
export default Header;
