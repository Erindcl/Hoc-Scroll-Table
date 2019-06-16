import * as React from 'react';
import { Layout, Menu,Icon,Badge } from 'antd';
import { Link,NavLink } from "react-router-dom";
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
declare var  frontConf
import './style.scss';
interface IProps {
  topNav:any,
  location:any,
  userData:any,
  history:any
}
interface IState{
  loading:boolean
}
export default class TopBar extends React.Component<IProps,IState> {
  constructor(IProps:any) {
    super(IProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //return this.props !== nextProps;
    return true;
  }
  componentWillReceiveProps(nextProps) {
  }
  componentDidMount() {}

  logout=()=> {
     //调用推出接口，
     console.log(this.props.location,'location');
     this.props.history.push('/login');
  }


  render() {
    const { topNav, location ,userData} = this.props;
    // console.log(userData);
    let menuKeys=location.pathname.split('/');
    const topMenu=(
      <Menu  mode="horizontal"
        theme="dark"
        //openKeys={[menuKeys.join('/'),'/panoramic/department-assets','/panoramic/category-assets','/panoramic/persional-assets']}
        selectedKeys={[`/${menuKeys[1]}`,menuKeys.join('/')]}
        style={{ verticalAlign: 'middle',lineHeight: '47px'}} >
        {topNav.length?
          topNav.map((item,idx)=>(
            item.children.length?
          <SubMenu title={<span>{item.permissionName}&nbsp;<Icon type="down" /></span> }>
           { item.children.map((child,kc)=>(
              <Menu.Item key={child.permissionUrl}>  
                <NavLink to={child.permissionUrl}>{child.permissionName}</NavLink>
                testsss
              </Menu.Item>
            ))}
            </SubMenu>
            :
            <Menu.Item key={item.permissionUrl}>  
              <NavLink to={item.permissionUrl}>{item.permissionName}</NavLink>
            </Menu.Item>
          )):<Icon type="appstore" />
        }
    </Menu>
    );
    // const selfMenu=(
    //   <Menu onClick={this.logout}>
    //     <Menu.Item key="1">
    //       <NavLink to='/login'>退出</NavLink>
    //     </Menu.Item>
    //   </Menu>
    // )
    return <Header className="top-bar">
      <div className="logo">
        <Link to="/">
          <img src={ frontConf.COMPANY_LOGO } alt="logo"/>
        </Link>
      </div>
      <div className="fl top-bar-nav">
       {topMenu}
      </div>
      <div className="fr top-bar-right">
      <Badge dot offset={[-3,3]}>
         <i className="iconfont iconwarn"></i>
      </Badge>
      <span className="logout-user">{userData.name}</span>
      <span className="logout-btn" onClick={this.logout} >
         <i className="iconfont iconlogout"></i>
      </span>
        {/* <Dropdown overlay={selfMenu}>
          <div className="right user-moudle" style={{height:52}}>
            <Link to={{ pathname: '/login' }}>
              <Avatar icon="user" />
              <span className="name"> kangaroo</span>
            </Link>
          </div> 
        </Dropdown> */}
      </div>
    </Header>
  }
}
