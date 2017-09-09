import React from 'react';
import PropTypes from 'prop-types';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import tsPropsType from './PropsType';
import { getComponentLocale } from '../_util/getLocale';

function getDefaultDate(props) {
  const { defaultDate, minDate, maxDate } = props;
  if (defaultDate) {
    return defaultDate;
  }
  const now = new Date();
  if (minDate && now < minDate) {
    return minDate;
  }
  if (maxDate && maxDate < now) {
    return minDate;
  }
  return now;
}

export default class DatePickerView extends React.Component<tsPropsType, any> {
  static defaultProps = {
    mode: 'datetime',
    extra: '请选择',
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    minuteStep: 1,
    use12Hours: false,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  render() {
    const { props, context } = this;
    const locale = getComponentLocale(props, context, 'DatePickerView', () => require('./locale/zh_CN'));

    // DatePicker use `defaultDate`, maybe because there are PopupDatePicker inside? @yiminghe
    // Here Use `date` instead of `defaultDate`, make it controlled fully.
    return (
      <RCDatePicker
        {...props}
        locale={locale}
        date={props.value || getDefaultDate(this.props)}
        onDateChange={props.onChange}
        onValueChange={props.onValueChange}
      />
    );
  }
}
