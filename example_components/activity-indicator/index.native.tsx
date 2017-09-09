import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import indicatorStyle, { IActivityIndicatorStyle } from './style/index.native';
import PropTypes from './PropsType';

export interface IActivityIndicatorNativeProps extends PropTypes {
  styles?: IActivityIndicatorStyle;
}

const indicatorStyles = StyleSheet.create<any>(indicatorStyle);

export default class RNActivityIndicator extends React.Component<IActivityIndicatorNativeProps, any> {
  static defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    toast: false,
    styles: indicatorStyles,
  };

  _renderToast() {
    const styles = this.props.styles!;
    return (
      <View style={[styles.container]}>
        <View style={[styles.innerContainer, { height: 89 }]}>
          <View style={[styles.wrapper]}>
            <ActivityIndicator
              color="white"
              size="large"
            />
            {this.props.text && (<Text style={[styles.toast]}>{this.props.text}</Text>)}
          </View>
        </View>
      </View>
    );
  }

  _renderSpinner() {
    const { styles, color, size, text } = this.props;
    const { spinner, tip } = styles!;
    return (
      <View style={spinner} >
        <ActivityIndicator
          color={color}
          size={size}
        />
        {text && (<Text style={[tip]}>{text}</Text>)}
      </View>
    );
  }

  render() {
    if (this.props.animating) {
      return (
        this.props.toast ? this._renderToast() : this._renderSpinner()
      );
    }
    return null;
  }
}
