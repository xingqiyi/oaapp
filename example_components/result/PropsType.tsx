import React from 'react';

interface ResultProps {
  style?: any;
  imgUrl?: string;
  img?: React.ReactNode;
  title?: React.ReactNode;
  message?: React.ReactNode;
  buttonText?: string;
  buttonType?: 'primary' | 'ghost';
  onButtonClick?: () => void;
  /** below web only */
  prefixCls?: string;
  className?: string;
  /** below rn only */
  styles?: any;
}

export default ResultProps;
