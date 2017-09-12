import React from 'react';
import { View } from 'react-native';
import { Pagination, LocaleProvider, List, DatePicker, WhiteSpace, Button } from 'antd-mobile';
import moment from 'moment';
// import enUS from '../en_US';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const Page = () => (<View>
  <Pagination total={5} current={1}/>
  <WhiteSpace />
  <List style={{ backgroundColor: 'white' }}>
    <DatePicker mode="date" title="选择日期" extra="点击查看国际化" minDate={minDate} maxDate={maxDate}>
      <List.Item arrow="horizontal">日期</List.Item>
      </DatePicker>
    </List>
  </View>);
export default class LocaleProviderExample extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            this.setState({
                isEnglish: !this.state.isEnglish,
            });
        };
        this.state = {
            isEnglish: true,
        };
    }
    render() {
        const locale = this.state.isEnglish ? enUS : undefined;
        return (<View style={{ marginTop: 30 }}>
        <Button type="primary" onClick={this.handleClick}>
          {this.state.isEnglish ? 'change to chinese' : '切换到英文'}
        </Button>
        <WhiteSpace />
        <LocaleProvider locale={locale}>
          <Page />
        </LocaleProvider>
      </View>);
    }
}
