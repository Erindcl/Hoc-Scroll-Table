import * as React from 'react';
import ScrollTable from './scrollTable'

interface IProps{
  
}

interface IState{
  tableHeight: number,
  onePageData: Array<any>,
  pageNo: number,
  pageSize: number,
  total: number,
}

export default class ScrollLoadTable extends  React.Component<IProps, IState>  {
  state:IState={
    tableHeight: 300,
    onePageData: [],
    pageNo: 1,
    pageSize: 10,
    total: 0,
  }

  componentDidMount () {
    this.getTableData();
  }

  getTableData = () => { // 模拟数据请求
    const { pageNo } = this.state;
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
    const timer: any = setTimeout(() => {
      this.setState({ 
        onePageData: newDataSource, 
        pageNo: pageNo + 1, 
        total: total
      });
      clearTimeout(timer);
    }, 2000)
  }

  render(){
    const { tableHeight, onePageData, pageNo, pageSize, total } = this.state;

    return (
      <ScrollTable 
        onePageData={onePageData} 
        tableHeight={tableHeight}
        getDataFunc={this.getTableData}
        pageNo={pageNo}
        pageSize={pageSize}
        total={total}
      />
    )
  }
}
