import React from 'react';
import { ImagePicker, WhiteSpace } from 'antd-mobile';
import { View } from 'react-native';
export default class ImagePickerExample extends React.Component {
    constructor(props) {
        super(props);
        this.handleFileChange = (files) => {
            this.setState({
                files,
            });
        };
        this.handleFile2Change = (files2) => {
            this.setState({
                files2,
            });
        };
        this.state = {
            files: [{
                    url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                    id: '2121',
                }, {
                    url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                    id: '2122',
                }, {
                    url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                    id: '2123',
                }, {
                    url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                    id: '2124',
                }, {
                    url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                    id: '2125',
                }, {
                    url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                    id: '2126',
                }],
            files2: [],
        };
    }
    render() {
        return (<View style={{ marginTop: 20, marginLeft: 20 }}>
        <ImagePicker onChange={this.handleFileChange} files={this.state.files}/>
        <WhiteSpace />
        <ImagePicker onChange={this.handleFile2Change} files={this.state.files2}/>
      </View>);
    }
}
