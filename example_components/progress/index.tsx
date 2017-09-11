import React from 'react';
import classNames from 'classnames';
import ProgressProps from './PropsType';

export default class Progress extends React.Component<ProgressProps, any> {
  static defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
    unfilled: true,
    appearTransition: false,
  };
  noAppearTransition: any;
  refs: any;
  componentWillReceiveProps() {
    this.noAppearTransition = true;
  }
  componentDidMount() {
    if (this.props.appearTransition) {
      setTimeout(() => {
        this.refs.bar.style.width = `${this.props.percent}%`;
      }, 10);
    }
  }
  render() {
    const { className, prefixCls, position, unfilled, style = {}, barStyle = {} } = this.props;
    const percentStyle = {
      width: this.noAppearTransition || !this.props.appearTransition ? `${this.props.percent}%` : 0,
      height: 0,
    };

    const wrapCls = classNames({
      [className as string]: className,
      [`${prefixCls}-outer`]: true,
      [`${prefixCls}-fixed-outer`]: position === 'fixed',
      [`${prefixCls}-hide-outer`]: !unfilled,
    });

    return (
      <div
        style={style}
        className={wrapCls}
        role="progressbar"
        aria-valuenow={this.props.percent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div ref="bar" className={`${prefixCls}-bar`} style={{ ...barStyle, ...percentStyle }} />
      </div>
    );
  }
}
