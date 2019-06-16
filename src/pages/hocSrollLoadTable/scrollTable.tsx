import * as React from 'react';
import { Table } from 'antd';
import HocScrollComponent from './hocScroll'

interface IProps{
  tableHeight: number,
  dataSource: Array<any>,
  [propName: string]: any
}

interface IState{
  
}

class ScrollLoadTable extends  React.Component<IProps, IState>  {
  state:IState={
    
  }

  componentDidMount () {
    
  }

  render(){
    const { tableHeight, dataSource } = this.props;
    const columns: Array<any> = [
      {
        title: '序号',
        dataIndex: 'num',
        key: 'num',
        fixed: 'left',
        width: 200
      }, {
        title: '账号',
        dataIndex: 'account',
        key: 'account',
        width: 300
      }, {
        title: '项目空间',
        dataIndex: 'prjSpace',
        key: 'prjSpace',
        width: 300
      }, {
        title: '订阅提交时间',
        dataIndex: 'subsSubmitTime',
        key: 'subsSubmitTime',
        width: 300
      }, {
        title: '订阅成功时间',
        dataIndex: 'subsSuccessTime',
        key: 'subsSuccessTime',
        width: 300
      }, {
        title: '订阅结束时间',
        dataIndex: 'subsEndingTime',
        key: 'subsEndingTime',
      }
    ]
    return (
      <Table 
        dataSource={dataSource} 
        scroll={{ y:tableHeight, x: 1800 }}
        pagination={false} 
        columns={columns} 
      />
    )
  }
}

export default HocScrollComponent(ScrollLoadTable);
