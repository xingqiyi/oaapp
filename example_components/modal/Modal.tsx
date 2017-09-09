import React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import Touchable from 'rc-touchable';
import { ModalProps, ModalComponent } from './PropsType';
import omit from 'omit.js';

function checkIfAndroid(platform) {
  return platform === 'android' ||
      (platform === 'cross' && typeof window !== 'undefined' && !!navigator.userAgent.match(/Android/i));
}

export default class Modal extends ModalComponent<ModalProps, any> {
  static defaultProps = {
    prefixCls: 'am-modal',
    // transparent change to transparent by yiminghe
    transparent: false,
    animated: true,
    style: {},
    onShow() {},
    footer: [],
    closable: false,
    operation: false,
    platform: 'cross',
  };
  constructor(props) {
    super(props);
    this.state = {
      // in ssr, just set isAndroid false
      // since modal normally won't show at first render, componentDidMount will do double check
      isAndroid: checkIfAndroid(props.platform),
    };
  }
  isInModal(e) {
    if (!/\biPhone\b|\biPod\b/i.test(navigator.userAgent)) {
      return;
    }
    // fix touch to scroll background page on iOS
    const prefixCls = this.props.prefixCls;
    const pNode = (node => {
      while ( node.parentNode && node.parentNode !== document.body ) {
        if ( node.classList.contains(prefixCls)) {
          return node;
        }
        node = node.parentNode;
      }
    })(e.target);
    if (!pNode) {
      e.preventDefault();
    }
    return true;
  }

  renderFooterButton(button, prefixCls, i) {
    let buttonStyle = {};
    if (button.style) {
      buttonStyle = button.style;
      if (typeof buttonStyle === 'string') {
        const styleMap = {
          cancel: {},
          default: {},
          destructive: { color: 'red' },
        };
        buttonStyle = styleMap[buttonStyle] || {};
      }
    }

    const onClickFn = function(e) {
      e.preventDefault();
      if (button.onPress) {
        button.onPress();
      }
    };

    return (
      <Touchable activeClassName={`${prefixCls}-button-active`} key={i}>
        <a className={`${prefixCls}-button`} role="button" style={buttonStyle} href="#" onClick={onClickFn}>
          {button.text || `Button`}
        </a>
      </Touchable>
    );
  }
  componentDidMount() {
    const isAndroid = checkIfAndroid(this.props.platform);
    if (isAndroid !== this.state.isAndroid) {
      this.setState({
        isAndroid,
      });
    }
  }
  render() {
    const {
      prefixCls,
      className,
      transparent,
      animated,
      transitionName,
      maskTransitionName,
      style,
      footer = [],
      closable,
      operation,
    } = this.props;

    const { isAndroid } = this.state;

    const wrapCls = classNames({
      [className as string]: !!className,
      [`${prefixCls}-transparent`]: transparent,
      [`${prefixCls}-android`]: isAndroid,
    });

    let anim = transitionName || (animated ? (transparent ? 'am-fade' : 'am-slide-up') : null);
    let maskAnim = maskTransitionName || (animated ? (transparent ? 'am-fade' : 'am-slide-up') : null);

    const btnGroupClass = `${prefixCls}-button-group-${footer.length === 2 && !operation ? 'h' : 'v'}`;
    const footerDom = footer.length ? <div className={btnGroupClass} role="group">
      {footer.map((button: any, i) => this.renderFooterButton(button, prefixCls, i))}
    </div> : null;

    // transparent 模式下, 内容默认居中
    const rootStyle = transparent ?
      {
        width: '5.4rem',
        height: 'auto',
        ...style,
      } :
      {
        width: '100%',
        height: '100%',
        ...style,
      };

    const restProps = omit(this.props, [
      'prefixCls', 'className', 'transparent', 'animated', 'transitionName', 'maskTransitionName',
      'style', 'footer', 'touchFeedback', 'wrapProps',
    ]);
    const wrapProps = { onTouchStart: e => this.isInModal(e) };

    return (
      <Dialog
        prefixCls={prefixCls}
        className={wrapCls}
        transitionName={anim}
        maskTransitionName={maskAnim}
        style={rootStyle}
        footer={footerDom}
        wrapProps={wrapProps}
        closable={closable}
        {...restProps}
      />
    );
  }
}
