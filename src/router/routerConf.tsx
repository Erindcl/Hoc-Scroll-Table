
import MainLayout  from 'layout/mainLayout';
import SideLayout  from 'layout/sideLayout';
import Page404 from 'pages/error/404';
import Login from 'pages/auth/login/index';

import BusinessManage from 'pages/industryIndex/businessManage';
import IndustryManage from 'pages/industryIndex/industryManage';
import UserManage from 'pages/systemManage/userManage';

import SrollLoadTable from 'pages/srollLoadTable';
import HocSrollLoadTable from 'pages/hocSrollLoadTable';

const routerConf = [
  {
    path:'/',
    redirect:'/industry-index/business-manage'
  },
  {
    path:'/industry-index',
    redirect:'/industry-index/business-manage'
  },
  {
    path:'/industry-index/business-manage',
    layout: SideLayout,
    component: BusinessManage,
    children:[]
  },
  {
    path:'/industry-index/industry-manage',
    layout: SideLayout,
    component: IndustryManage,
    children:[]
  },
  {
    path:'/system-manage/user-manage',
    layout: MainLayout,
    component: UserManage,
    children:[]
  },
  {
   path:'/scroll-load-table',
   layout: null,
   component: SrollLoadTable,
  },
  {
   path:'/hoc-scroll-load-table',
   layout: null,
   component: HocSrollLoadTable,
  },
  {
   path:'/login',
   layout: null,
   component: Login,
  },
  {
		path: '*',
    layout: MainLayout,
    component: Page404,
  }
];

export default routerConf;
