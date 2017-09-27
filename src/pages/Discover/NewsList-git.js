/*
 * @Author: shuaixc 
 * @Date: 2017-09-27 15:16:02 
 * @Last Modified by:   shuaixc 
 * @Last Modified time: 2017-09-27 15:16:02 
 */

'use strict';
import React, { Component } from 'react';
import {
	Dimensions,
	ActivityIndicator,
	Animated,
	FlatList, ScrollView, StyleSheet, Text, View, Image
} from 'react-native';

import API from '../../utils/api';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const per_page = 10;
let pageIndex = 0;
let keyID = 0;

// 数据容器，用来存储数据
let dataContainer = [];


/**
 * 
 * 
 * @class NewsList
 * @extends {Component}
 */
class NewsList extends Component {


	static navigationOptions = {
		title: 'NewsList',
	}

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			//网络请求状态
			error: false,
			errorInfo: '',
			dataArray: [],
		};
	}


	componentDidMount() {
		// //请求数据
		// this.fetchData();

		API.getRepositories(per_page, pageIndex)
			.then((responseData) => {
				let data = responseData.items;
				// let dataBlob = [];

				data.map(function (item) {
					dataContainer.push({
						key: keyID,
						value: item,
					});
					keyID++;
				});
				this.setState({
					//复制数据源
					dataArray: dataContainer,
					isLoading: false,
				});

				data = null;
				// dataBlob = null;

			})
			.catch((error) => {
				this.setState({
					error: true,
					errorInfo: error
				});
			})
			.done();
	}





	// 上拉加载更多
	_onEndReached = (event) => {


		// if (this.state.isLoading || !event || dataList.length < 10 || !this.state.hasMore) {
		if (this.state.isLoading || !event) {
			return;
		}
		this.setState({ isLoading: true });


		pageIndex++;
		console.log('pageIndex:', pageIndex);

		API.getRepositories(per_page, pageIndex)
			.then((responseData) => {
				let data = responseData.items;
				// let dataBlob = [];

				let newData = [];

				data.map(function (item) {
					newData.push({
						key: keyID,
						value: item,
					});
					keyID++;
				});


				// 将新数据添加到数据容器中
				dataContainer = dataContainer.concat(newData);
				// 将新数据集合赋予数据状态并更新页面
				this.setState({
					//复制数据源
					dataArray: dataContainer,
					isLoading: false,
				});
				data = null;
				// dataBlob = null;
			})
			.catch((error) => {
				this.setState({
					error: true,
					errorInfo: error
				});
			})
			.done();




		// // 以下是制造新数据
		// let newData = [];

		// for (let i = 20; i < 28; i++) {
		// 	let obj = {
		// 		id: i
		// 		, title: i + '生了只小柯基'
		// 	};

		// 	newData.push(obj);
		// }

		// // 将新数据添加到数据容器中
		// dataContainer = dataContainer.concat(newData);
		// // 将新数据集合赋予数据状态并更新页面
		// this.setState({
		// 	sourceData: dataContainer
		// });


	};

	//加载等待的view
	renderLoadingView() {
		return (
			<View style={styles.container}>
				<ActivityIndicator
					animating={true}
					style={[styles.gray, { height: 80 }]}
					color='red'
					size="large"
				/>
			</View>
		);
	}

	//加载失败view
	renderErrorView(error) {
		return (
			<View style={styles.container}>
				<Text>
					Fail: {error}
				</Text>
			</View>
		);
	}

	//返回itemView
	renderItemView({ item }) {
		return (
			<View style={styles.box}>

				<Image
					style={[
						{
							height: 64,
							width: 64,
							borderRadius: 5,
							marginRight: 8
						}
					]}
					source={{
						uri: item.value.owner.avatar_url
					}}
				/>
				<Text style={styles.title}>name: {item.value.name} ({item.value.stargazers_count}
					stars)</Text>
				<Text style={styles.content}>description: {item.value.description}</Text>
			</View>
		);
	}

	renderData() {
		return (
			<ScrollView >
				<Text >
					Data:
				</Text>
				<AnimatedFlatList
					data={this.state.dataArray}
					renderItem={this.renderItemView}


					style={{ height: Dimensions.get('window').height - 100 }}

					// 决定当距离内容最底部还有多远时触发onEndReached回调；数值范围0~1，例如：0.5表示可见布局的最底端距离content最底端等于可见布局一半高度的时候调用该回调
					onEndReachedThreshold={2}
					// 当列表被滚动到距离内容最底部不足onEndReacchedThreshold设置的距离时调用
					onEndReached={this._onEndReached}

				/>
			</ScrollView>
		);
	}

	render() {
		//第一次加载等待的view
		if (this.state.isLoading && !this.state.error) {
			return this.renderLoadingView();
		} else if (this.state.error) {
			//请求失败view
			return this.renderErrorView(this.state.errorInfo);
		}
		//加载数据
		return this.renderData();
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	title: {

		fontSize: 15,
		color: 'blue',
	},
	content: {
		fontSize: 15,
		color: 'black',
	},

	box: {
		flex: 1,
		borderBottomColor: 'red',
		borderBottomWidth: 1,
	}


});
module.exports = NewsList;