import React from 'react';
import classNames from 'classnames';
import { SearchBarProps, SearchBarState, defaultProps } from './PropsType';
import getDataAttr from '../_util/getDataAttr';

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static defaultProps = defaultProps;
  refs: any;
  rightBtnInitMarginleft: any;
  firstFocus: any;
  scrollIntoViewTimeout: any;

  constructor(props) {
    super(props);
    let value;
    if ('value' in props) {
      value = props.value || '';
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      value = '';
    }
    this.state = {
      value,
      focus: false,
      focused: props.focused || false,
    };
  }

  componentDidMount() {
    const initBtn = window.getComputedStyle(this.refs.rightBtn);
    this.rightBtnInitMarginleft = initBtn['margin-left'];
    if ((this.props.autoFocus || this.state.focused) && navigator.userAgent.indexOf('AlipayClient') > 0) {
      (this.refs as any).searchInput.focus();
    }
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    // 检测是否包含名为 ${this.props.prefixCls}-start 样式，生成动画
    // offsetWidth 某些时候是向上取整，某些时候是向下取整，不能用
    const realWidth = this.refs.syntheticPhContainer.getBoundingClientRect().width; // 包含小数
    if (this.refs.searchInputContainer.className.indexOf(`${this.props.prefixCls}-start`) > -1) {
      this.refs.syntheticPh.style.width = `${Math.ceil(realWidth)}px`;
      if (!this.props.showCancelButton) {
        this.refs.rightBtn.style.marginRight = 0;
      }
    } else {
      this.refs.syntheticPh.style.width = '100%';
      if (!this.props.showCancelButton) {
        this.refs.rightBtn.style.marginRight =
          `-${this.refs.rightBtn.offsetWidth + parseInt(this.rightBtnInitMarginleft, 10)}px`;
      }
    }
    if (this.state.focused) {
      (this.refs as any).searchInput.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
    if ('focused' in nextProps) {
      this.setState({
        focused: nextProps.focused,
      });
    }
  }

  componentWillUnmount() {
    if (this.scrollIntoViewTimeout) {
      clearTimeout(this.scrollIntoViewTimeout);
      this.scrollIntoViewTimeout = null;
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value);
    }
    (this.refs as any).searchInput.blur();
  }

  onChange = (e) => {
    if (!this.state.focus) {
      this.setState({
        focus: true,
      });
    }
    const value = e.target.value;
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  onFocus = () => {
    this.setState({
      focus: true,
    });
    this.firstFocus = true;

    if (!('focused' in this.props)) {
      this.setState({
        focused: true,
      });
    }

    if (this.props.onFocus) {
      this.props.onFocus();
    }

    if (document.activeElement.tagName.toLowerCase() === 'input') {
      this.scrollIntoViewTimeout = setTimeout(() => {
        try {
          (document.activeElement as any).scrollIntoViewIfNeeded();
        } catch (e) { }
      }, 100);
    }
  }

  onBlur = () => {
    setTimeout(() => {
      this.setState({
        focus: false,
      });
    }, 0);
    if (!('focused' in this.props)) {
      this.setState({
        focused: false,
      });
    }
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onClear = () => {
    if (!('value' in this.props)) {
      this.setState({ value: '' });
    }
    if (this.props.onClear) {
      this.props.onClear('');
    }
    if (this.props.onChange) {
      this.props.onChange('');
    }
    // 加上setTimeout 为了解决Android的兼容性问题。
    // https://github.com/ant-design/ant-design-mobile/issues/1341
    // 只有支付宝系客户端才完美支持
    const ua = navigator.userAgent;
    if (ua.indexOf('AlipayClient') > 0 && (ua.match(/Android/i) || ua.indexOf('AliApp(AM') < 0)) {
      // 口碑掌柜iOS 只有5.2以上版本才支持
      setTimeout(() => {
        (this.refs as any).searchInput.focus();
        this.componentDidUpdate();
      }, 300);
    }
  }

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value);
    } else {
      this.onClear();
    }
  }

  render() {
    const {
      prefixCls, showCancelButton, disabled, placeholder,
      cancelText, className, style,
    } = this.props;

    const { value, focus } = this.state;

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-start`]: focus || value && value.length > 0,
      [className as string]: className,
    });

    const clearCls = classNames({
      [`${prefixCls}-clear`]: true,
      [`${prefixCls}-clear-show`]: focus && value && value.length > 0,
    });

    const cancelCls = classNames({
      [`${prefixCls}-cancel`]: true,
      [`${prefixCls}-cancel-show`]: showCancelButton || focus || value && value.length > 0,
      [`${prefixCls}-cancel-anim`]: this.firstFocus,
    });

    return (
      <form onSubmit={this.onSubmit} className={wrapCls} ref="searchInputContainer" action="#">
        <div className={`${prefixCls}-input`}>
          <div className={`${prefixCls}-synthetic-ph`} ref="syntheticPh">
            <span className={`${prefixCls}-synthetic-ph-container`} ref="syntheticPhContainer">
              <i className={`${prefixCls}-synthetic-ph-icon`}/>
              <span
                className={`${prefixCls}-synthetic-ph-placeholder`}
                style={{ visibility: placeholder && !value ? 'visible' : 'hidden' }}
              >
                {placeholder}
              </span>
            </span>
          </div>
          <input
            type="search"
            className={`${prefixCls}-value`}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            ref="searchInput"
            style={style}
            {...getDataAttr(this.props)}
          />
          <a onClick={this.onClear} className={clearCls} />
        </div>
        <div className={cancelCls} onClick={this.onCancel} ref="rightBtn">
          {cancelText}
        </div>
      </form>
    );
  }
}
