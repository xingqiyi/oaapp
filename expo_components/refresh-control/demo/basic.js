import React from 'react';
import createReactClass from 'create-react-class';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { RefreshControl } from 'antd-mobile';
const styles = StyleSheet.create({
    row: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    scrollview: {
        flex: 1,
    },
});
class Row extends React.Component {
    constructor() {
        super(...arguments);
        this.onClick = () => {
            this.props.onClick(this.props.data);
        };
    }
    render() {
        return (<TouchableWithoutFeedback onPress={this.onClick}>
        <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>
        </View>
      </TouchableWithoutFeedback>);
    }
}
export default createReactClass({
    getInitialState() {
        return {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map((_val, i) => ({ text: 'Initial row ' + i, clicks: 0 })),
        };
    },
    onClick(row) {
        row.clicks++;
        this.setState({
            rowData: this.state.rowData,
        });
    },
    render() {
        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} onClick={this.onClick}/>;
        });
        const rcEl = (<RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.onRefresh} tintColor="#ff0000" title="Loading..." titleColor="#00ff00" colors={['#ff0000', '#00ff00', '#0000ff']} progressBackgroundColor="#ffff00"/>);
        return (<ScrollView style={styles.scrollview} refreshControl={rcEl}>
        {rows}
      </ScrollView>);
    },
    onRefresh() {
        this.setState({ isRefreshing: true });
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(10))
                .map((_val, i) => ({
                text: 'Loaded row ' + (+this.state.loaded + i),
                clicks: 0,
            }))
                .concat(this.state.rowData);
            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 1000);
    },
});
export const title = 'RefreshControl';
export const description = 'RefreshControl example';
