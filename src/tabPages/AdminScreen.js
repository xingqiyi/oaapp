
import React from 'react';
import { Button } from 'react-native';


export default class AdminScreen extends React.Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="管理页面"
      />
    );
  }
}
