import React from 'react';
import MListView from 'rmc-list-view';
import tsPropsType from './PropsType';
import handleProps from './handleProps';
import IndexedList from './Indexed';

export default class ListView extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-list-view',
    listPrefixCls: 'am-list',
  };
  static DataSource = MListView.DataSource;
  static IndexedList = IndexedList;

  scrollTo = (...args) => (this.refs.listview as any).scrollTo(...args);
  getInnerViewNode = () => (this.refs.listview as any).getInnerViewNode();

  render() {
    const { restProps, extraProps } = handleProps(this.props, false);
    let { useZscroller, refreshControl } = this.props;
    if (refreshControl) {
      useZscroller = true;
    }
    return <MListView ref="listview" {...restProps} {...extraProps} useZscroller={useZscroller} />;
  }
}
