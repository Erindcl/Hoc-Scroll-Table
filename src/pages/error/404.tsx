import * as React  from 'react';
import { NavLink } from "react-router-dom"; 
const tip404 =require('assets/imgs/logo.png');
//import logo from '/assets/imgs/404.jpg'
export default class Page404 extends React.Component {
  render() {
    return  <div className="content" style={{
      textAlign: 'center',background:"#fff",height:"750px"
    }}>
      <img src={tip404} alt="404"/>
      <p>访问出错，<NavLink to="/index" style={{color:"blue"}}>返回</NavLink> </p>
    </div>
  }
}
