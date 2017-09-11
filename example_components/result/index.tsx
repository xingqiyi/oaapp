/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import Button from '../button';
import classNames from 'classnames';
import ResultProps from './PropsType';

export default class Result extends React.Component<ResultProps, any> {
  static defaultProps = {
    prefixCls: 'am-result',
    buttonType: '',
    onButtonClick: () => {},
  };

  render() {
    const {
      prefixCls,
      className,
      img,
      imgUrl,
      title,
      message,
      buttonText,
      onButtonClick,
      buttonType,
      style,
    } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className as string]: className,
    });

    let imgContent: any = null;
    if (img) {
      imgContent = <div className={`${prefixCls}-pic`}>{img}</div>;
    } else if (imgUrl) {
      imgContent = <div className={`${prefixCls}-pic`} style={{ backgroundImage: `url(${imgUrl})` }} />;
    }

    return (
      <div className={wrapCls} style={style} role="alert">
        {imgContent}
        {title ? <div className={`${prefixCls}-title`}>{title}</div> : null}
        {message ? <div className={`${prefixCls}-message`}>{message}</div> : null}
        {buttonText ? <div className={`${prefixCls}-button`}>
          <Button type={buttonType} onClick={onButtonClick}>{buttonText}</Button>
        </div> : null}
      </div>
    );
  }
}
