/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button';
import Flex from '../flex';
import PaginationProps from './PropsType';
import { getComponentLocale } from '../_util/getLocale';

export default class Pagination extends React.Component<PaginationProps, any> {
  static defaultProps = {
    prefixCls: 'am-pagination',
    mode: 'button',
    current: 1,
    total: 0,
    simple: false,
    onChange: () => { },
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.state.current) {
      this.setState({
        current: nextProps.current,
      });
    }
  }

  onChange(p) {
    this.setState({
      current: p,
    });
    if (this.props.onChange) {
      this.props.onChange(p);
    }
  }

  render() {
    const { prefixCls, className, style, mode, total, simple } = this.props;
    const { current } = this.state;
    const locale = getComponentLocale(this.props, this.context, 'Pagination', () => require('./locale/zh_CN'));
    const { prevText, nextText } = locale;

    let markup = (
      <Flex>
        <Flex.Item className={`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-prev`}>
          <Button inline disabled={current <= 1} onClick={() => this.onChange(current - 1)}>{prevText}</Button>
        </Flex.Item>
        {this.props.children ? (<Flex.Item>{this.props.children}</Flex.Item>) : (!simple &&
          <Flex.Item className={`${prefixCls}-wrap`} aria-live="assertive">
            <span className="active">{current}</span>/<span>{total}</span>
          </Flex.Item>)}
        <Flex.Item className={`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-next`}>
          <Button
            inline
            disabled={current >= total}
            onClick={() => this.onChange(this.state.current + 1)}
          >
            {nextText}
          </Button>
        </Flex.Item>
      </Flex>
    );
    if (mode === 'number') {
      markup = (
        <div className={`${prefixCls}-wrap`}>
          <span className="active">{current}</span>/<span>{total}</span>
        </div>
      );
    } else if (mode === 'pointer') {
      const arr: any = [];
      for (let i = 0; i < total; i++) {
        arr.push(
          <div
            key={`dot-${i}`}
            className={classNames({
              [`${prefixCls}-wrap-dot`]: true,
              [`${prefixCls}-wrap-dot-active`]: (i + 1) === current,
            })}
          >
            <span />
          </div>,
        );
      }
      markup = <div className={`${prefixCls}-wrap`}>{arr}</div>;
    }
    const cls = classNames({
      [prefixCls as string]: true,
      [className as string]: !!className,
    });
    return (
      <div
        className={cls}
        style={style}
      >
        {markup}
      </div>
    );
  }
}
