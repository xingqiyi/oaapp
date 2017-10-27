import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,

	Dimensions,
	Platform
} from 'react-native';

import Echarts from 'native-echarts';
// import Dimensions from 'Dimensions';
const { width } = Dimensions.get('window');
export default class Chart extends Component {
	static navigationOptions = {
		title: 'echarts 图表'
	};

	constructor(props) {
		super(props);
		this.state = {
			apple: [2, 4, 7, 2, 2, 7, 13, 16],
			organ: [6, 9, 9, 2, 8, 7, 17, 18],
		};
	}

	render() {
		const option = {
			//点击某一个点的数据的时候，显示出悬浮窗
			tooltip: {
				trigger: 'axis'
			},
			//可以手动选择现实几个图标
			legend: {
				data: ['商品', '网费']
			},
			//各种表格
			toolbox: {
				//改变icon的布局朝向
				//orient: 'vertical',
				show: true,
				showTitle: true,
				feature: {
					//show是否显示表格，readOnly是否只读
					dataView: { show: true, readOnly: false },
					magicType: {
						//折线图  柱形图    总数统计 分开平铺
						type: ['line', 'bar', 'stack', 'tiled'],
					},

				}
			},
			xAxis: [
				{
					//就是一月份这个显示为一个线段，而不是数轴那种一个点点
					boundaryGap: true,
					type: 'category',
					name: '时间',
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月']
				}
			],
			yAxis: [
				{
					type: 'value',
					// name: '销量(kg)'
					name: '元'
				}
			],
			//图形的颜色组
			color: ['rgb(249,159,94)', 'rgb(67,205,126)'],
			//需要显示的图形名称，类型，以及数据设置
			series: [
				{
					name: '商品',
					//默认显
					type: 'bar',
					data: this.state.apple
				},
				{
					name: '网费',
					type: 'bar',
					data: this.state.organ
				}
			]
		};
		return (
			<View style={styles.container}>
				<View style={styles.titleView}>
					<Text style={styles.title}>收入分析</Text>
				</View>

				<Echarts option={option} height={300} width={width} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	titleView: {
		height: Platform.OS == 'ios' ? 64 : 44,
		paddingTop: Platform.OS == 'ios' ? 14 : 0,
		backgroundColor: '#58a',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	},
});