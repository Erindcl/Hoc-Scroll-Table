import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { Table } from 'antd';

let scrollLoading: boolean = true;

interface IProps{
  
}

interface IState{
  tableHeight: number,
  allData: Array<any>,
  // currentData: Array<any>,
  pageNo: number,
  pageSize: number,
  total: number,
}

export default class ScrollLoadTable extends  React.Component<IProps, IState>  {
  constructor(props:any) {
    super(props);
  }

  refScroll: any = null;
  // tabelRef: any

  state:IState={
    tableHeight: 300,
    allData: [],
    // currentData: [],
    pageNo: 1,
    pageSize: 10,
    total: 0,
  }

  componentDidMount () {
    this.getTableData();
    this.refScroll = findDOMNode(document.getElementsByClassName(
      'ant-table-body',
    )[0]); // 获取ant-table-body真实节点
    // console.log(findDOMNode(this.tabelRef))
    console.log(document.getElementsByClassName(
      'ant-table-body',
      )[0])
    this.refScroll.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount () {
    this.refScroll.removeEventListener('scroll', this.onScroll);
    
  }

  getTableData = () => { // 模拟数据请求
    const { pageNo, allData } = this.state;
    const total: number = 50;
    const newDataSource: Array<any> = [
      {
        num: `${pageNo}-1`, account: 'account1', prjSpace: 'prjSpace1', subsSubmitTime: 'subsSubmitTime1', subsSuccessTime: 'subsSuccessTime1', subsEndingTime: 'subsEndingTime1',
      },{
        num: `${pageNo}-2`, account: 'account2', prjSpace: 'prjSpace2', subsSubmitTime: 'subsSubmitTime2', subsSuccessTime: 'subsSuccessTime2', subsEndingTime: 'subsEndingTime2',
      },{
        num: `${pageNo}-3`, account: 'account3', prjSpace: 'prjSpace3', subsSubmitTime: 'subsSubmitTime3', subsSuccessTime: 'subsSuccessTime3', subsEndingTime: 'subsEndingTime3',
      },{
        num: `${pageNo}-4`, account: 'account4', prjSpace: 'prjSpace4', subsSubmitTime: 'subsSubmitTime4', subsSuccessTime: 'subsSuccessTime4', subsEndingTime: 'subsEndingTime4',
      },{
        num: `${pageNo}-5`, account: 'account5', prjSpace: 'prjSpace5', subsSubmitTime: 'subsSubmitTime5', subsSuccessTime: 'subsSuccessTime5', subsEndingTime: 'subsEndingTime5',
      },{
        num: `${pageNo}-6`, account: 'account6', prjSpace: 'prjSpace6', subsSubmitTime: 'subsSubmitTime6', subsSuccessTime: 'subsSuccessTime6', subsEndingTime: 'subsEndingTime6',
      },{
        num: `${pageNo}-7`, account: 'account7', prjSpace: 'prjSpace7', subsSubmitTime: 'subsSubmitTime7', subsSuccessTime: 'subsSuccessTime7', subsEndingTime: 'subsEndingTime7',
      },{
        num: `${pageNo}-8`, account: 'account8', prjSpace: 'prjSpace8', subsSubmitTime: 'subsSubmitTime8', subsSuccessTime: 'subsSuccessTime8', subsEndingTime: 'subsEndingTime8',
      },{
        num: `${pageNo}-9`, account: 'account9', prjSpace: 'prjSpace9', subsSubmitTime: 'subsSubmitTime9', subsSuccessTime: 'subsSuccessTime9', subsEndingTime: 'subsEndingTime9',
      },{
        num: `${pageNo}-10`, account: 'account10', prjSpace: 'prjSpace10', subsSubmitTime: 'subsSubmitTime10', subsSuccessTime: 'subsSuccessTime10', subsEndingTime: 'subsEndingTime10',
      }
    ];
    if (pageNo == 1) {
      this.setState({ 
        // currentData: newDataSource, 
        allData: newDataSource, 
        pageNo: pageNo + 1, 
        total: total
      }, () => {
        scrollLoading = false;
      });
    } else {
      this.setState({
        allData: [ ...allData, ...newDataSource ],
        // currentData: newDataSource,
        pageNo: pageNo + 1, 
        total: total
      }, () => {
        scrollLoading = false;
      })
    }
  }

  onScroll = () => {
    const { total, pageNo, pageSize, tableHeight } = this.state;
    if (total >= pageNo * pageSize) {
      console.log(scrollLoading)
      if (Math.abs(this.refScroll.scrollTop + tableHeight - this.refScroll.scrollHeight) < 20) {
        scrollLoading = true;
        this.getTableData();
        console.log(111)
      }
    }
  }

  render(){
    const { tableHeight, allData } = this.state;
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
        // ref={(ref: any) => { this.tabelRef = ref; }}
        dataSource={allData} 
        scroll={{ y:tableHeight, x: 1800 }} 
        style={{ border: '1px solid #e8e8e8' }} 
        pagination={false} 
        columns={columns} 
      />
    )
  }
}
