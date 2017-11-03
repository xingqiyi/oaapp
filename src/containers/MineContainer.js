/*
 * @Author: shuaixc 
 * @Date: 2017-09-13 15:33:33 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-11-03 17:32:36
 */

import React from 'react';
import { Image, ScrollView, View ,Linking} from 'react-native';
import { List } from 'antd-mobile';

import Icon from 'react-native-vector-icons/Ionicons';


const Item = List.Item;
const Brief = Item.Brief;


const msgIcon = require('../image/koubei.png');


const READING_REPO = 'https://cnodejs.org/';

/**
 * 
 * 
 * @export
 * @class MineScreen
 * @extends {React.Component}
 */
export default class MineScreen extends React.Component {
	// static navigationOptions = {
	//   title: '我的',
	//   // Note: By default the icon is only shown on iOS. Search the showIcon option below.
	//   tabBarIcon: ({ tintColor }) =>
	//     (<Image
	//       source={bookIcon}
	//       style={[styles.icon, { tintColor }]}
	//     />)
	// };

	static navigationOptions = {
		title: '关于',
		tabBarIcon: ({ tintColor }) =>
			<Icon name="md-information-circle" size={25} color='#aaa' />,
		headerRight: (
			<Icon.Button
				name="logo-github"
				//backgroundColor="transparent"
				//underlayColor="transparent"
				activeOpacity={0.4}
				onPress={() => Linking.openURL(READING_REPO)}
			/>
		)
		
	  };
	 

	render() {
		return (
			<ScrollView
				style={{ flex: 1, backgroundColor: '#f5f5f9' }}
				automaticallyAdjustContentInsets={false}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			>

				<List renderHeader={() => '带缩略图'}>

					<Item
						thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
						arrow="horizontal"
						onClick={() => { }}
					>My wallet</Item>

					<Item thumb={
						<Image
							source={{ uri: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png' }}
							style={{ width: 29, height: 29 }}
						/>
					}

					>
						thumb
					</Item>
					<Item
						thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
						arrow="horizontal"
					>
						thumb
					</Item>
					<Item
						extra={
							<Image
								source={{
									uri:
									'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png'
								}}
								style={{ width: 29, height: 29 }}
							/>
						}
						arrow="horizontal"
					>
						extra为Image
					</Item>
				</List>

				<List renderHeader={() => '无缩略图'}>
					<Item data-seed="logId">标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏</Item>
					<Item wrap>文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行</Item>
					<Item disabled extra="箭头向右" arrow="horizontal" onClick={() => { }}>
						标题文字
					</Item>
					<Item extra="箭头向下" arrow="down" onClick={() => { }}>
						标题文字
					</Item>
					<Item extra="箭头向上" arrow="up" onClick={() => { }}>
						标题文字
					</Item>
					<Item extra="没有箭头" arrow="empty">
						标题文字
					</Item>
					<Item
						extra={
							<View>
								内容内容
								<Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
							</View>
						}
						multipleLine
					>
						垂直居中对齐
					</Item>
					<Item extra="内容内容" multipleLine>
						垂直居中对齐<Brief>辅助文字内容</Brief>
					</Item>
					<Item
						wrap
						extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
						multipleLine
						align="top"
						arrow="horizontal"
					>
						顶部对齐
						<Brief>辅助文字内容辅助文字内容辅助文字内容辅助文字内容</Brief>
						<Brief>辅助文字内容</Brief>
					</Item>
					<Item
						extra={
							<View>
								内容内容
								<Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
							</View>
						}
						multipleLine
						align="bottom"
					>
						底部对齐
					</Item>
				</List>

			</ScrollView>
		);
	}
}


export const title = 'List';
export const description = 'List Example';
