import * as React from 'react';

let scrollLoading: boolean = false;

interface IProps{
  getDataFunc: Function,
  onePageData: Array<any>,
  pageNo: number,
  pageSize: number,
  total: number,
  tableHeight: number,
  children: any,
  [propName: string]: any
}

interface IState{
  allData: Array<any>,
}

class RenderPropsScrollComponent extends  React.Component<IProps, IState>  {
  refScroll: any = null;

  state:IState={
    allData: [],
  }

  componentDidMount () {
    this.setState({ allData: this.props.onePageData || [] });
    this.refScroll = document.getElementsByClassName(
      'ant-table-body',
    )[0];
    this.refScroll.addEventListener('scroll', this.onScroll);
  }

  componentWillReceiveProps (nextProps: any){
    if (JSON.stringify(this.props.onePageData) != JSON.stringify(nextProps.onePageData)) {
      const { allData } = this.state;
      scrollLoading = false;
      this.setState({ allData: [...allData, ...nextProps.onePageData] });
    }
  }

  componentWillUnmount () {
    this.refScroll.removeEventListener('scroll', this.onScroll);
    scrollLoading = false;
  }

  onScroll = () => {
    const { total, pageNo, pageSize, tableHeight } = this.props;
    if (!scrollLoading && total > (pageNo - 1) * pageSize && Math.abs(this.refScroll.scrollTop + tableHeight - this.refScroll.scrollHeight) < 20) {
      this.props.getDataFunc();
      scrollLoading = true;
    }
  }

  render(){
    const { allData } = this.state;
    const { tableHeight } = this.props;
    return (
      <div>
        {this.props.children(tableHeight,allData)}
      </div>
    )
  }
}

export default RenderPropsScrollComponent;
