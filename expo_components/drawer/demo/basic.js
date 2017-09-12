import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Drawer, List, Button, WhiteSpace } from 'antd-mobile';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default class DrawerExample extends React.Component {
    constructor() {
        super(...arguments);
        this.onOpenChange = (isOpen) => {
            /* tslint:disable: no-console */
            console.log('是否打开了 Drawer', (isOpen).toString());
        };
    }
    render() {
        const itemArr = Array.apply(null, Array(20)).map(function (_, i) { return i; }).map((_i, index) => {
            if (index === 0) {
                return (<List.Item key={index} thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png" multipleLine>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text>分类 - {index}</Text>
              <Button type="primary" size="small" onClick={() => this.drawer.closeDrawer()}>
                关闭 drawer
              </Button>
            </View>
          </List.Item>);
            }
            return (<List.Item key={index} thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png">
          <Text>分类 - {index}</Text>
        </List.Item>);
        });
        const sidebar = (<ScrollView style={[styles.container]}>
          <List>{itemArr}</List>
        </ScrollView>);
        return (<Drawer sidebar={sidebar} position="left" open={false} drawerRef={(el) => this.drawer = el} onOpenChange={this.onOpenChange} drawerBackgroundColor="#ccc">
          <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
            <Button onClick={() => {
              this.drawer && this.drawer.openDrawer();
            }}>打开 drawer(from version 1.1.4)</Button>
            <WhiteSpace />
          </View>
        </Drawer>);
    }
}
