import * as React from 'react';
// import {  } from 'antd';
import  './style.scss';

interface IProps{

}

interface IState{
  
}

export default class UserManage extends  React.Component<IProps, IState>  {
  constructor(props:any) {
    super(props);
  }

  state:IState={
    
  }

  componentDidMount () {
    
  }

  render(){
    return (
      <div className="user-manage">
        用户管理
      </div>
    )
  }
}
