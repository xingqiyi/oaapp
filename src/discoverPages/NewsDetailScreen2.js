import React from 'react';

// import { View, Text } from "react-native";

import { ScrollView, View, Text } from 'react-native';

export default class NewsDetailScreen2 extends React.Component {
  static navigationOptions = {
    title: '新闻详情2'
  };
  render() {
    const { params } = this.props.navigation.state;

    return (
      <ScrollView>

        <View style={[{ margin: 10 }]}>
          <Text>Grid 示例</Text>
          <Text>
            Chat with {params.user}
          </Text>
        </View>

      </ScrollView>
    );
  }
}
