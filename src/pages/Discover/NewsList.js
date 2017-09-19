/*
 * @Author: shuaixc 
 * @Date: 2017-09-13 10:53:51 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-19 17:58:31
 */
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { ListView } from 'antd-mobile';

import PropTypes from 'prop-types';


const propTypes = {
	news: PropTypes.object,
	newsActions: PropTypes.object,
};



let data;

// data = [
// 	{
// 		img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
// 		title: 'Meet hotel',
// 		des: '不是所有的兼职汪都需要风吹日晒'
// 	}, {
// 		img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
// 		title: 'McDonald\'s invites you',
// 		des: '不是所有的兼职汪都需要风吹日晒'
// 	}, {
// 		img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
// 		title: 'Eat the week',
// 		des: '不是所有的兼职汪都需要风吹日晒'
// 	}
// ];


data = [
	// { 'date': '2017-09-19 13:11:19', 'ct': '2017-09-19 16:02:10.407', 'weixinNum': 'nvshengu', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505808004&ver=401&signature=n2UGVCXA15E51nrSDmaNhF818wCGbjBO8bZWEIl3GPc2D*gRE-txUXn-N33ZLWXG7-IIjP9PqvRaIsSVXYvMNqiM1dUBn0dZYx5yT60fgFYv6Y8PKuniIX*2W-IGL1nN&new=1', 'id': 'a0e5cbe9b925a1b4b2b28de6e81841b2', 'typeName': '段子手', 'title': '厕所贴的对联，差点没把我笑死！', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz/5XFlTUibQYoLZug8bUDEgD3UAWR9ibJ9CDyZQXBoeLHrdZbm9oCc9QKUNlXXFm2JD9kDzCiaaa3lcbDanI28zrZow/640', '_id': '59c0cf026e360bb005fad092', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/gBJLhicQA6iaRa6Uo3Zp7OKCERKWJQkZ8I8BPGicibkaicXH7AE1N0oTlkbiarSKvNOwPC2KJVpAt3lMia6fY5PEwZQLQ/0', 'userName': '女生学院', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=nvshengu' },
	// { 'date': '2017-09-19 10:00:00', 'ct': '2017-09-19 15:02:07.297', 'weixinNum': 'hscbxjzt', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505804404&ver=401&signature=5UmXVOrFcEd2rBi*gffzJMvI3ZACAms*uyw8jUi4*tmYcbiXg6dgyvm3dAPvw2qa*BNp7bb36M3Tb9yPjE-ZiH2125LdgWEf6j0F6gLhElYKElmT*j*Dk2iCTdxMI9hu&new=1', 'id': '48adfa8f7f2658763585e7d6ecab8e51', 'typeName': '段子手', 'title': '搞笑·宝爸给双胞胎取了这样一对名字，长大后才发现不妥，被迫改名！', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/GGZdg2orRql3bLzjTBrgkFHMicynNXB0TAjK8QtnO1qDpxUN1BWWiambJBh6qXolKkfl5TPlmBlMnqf6vH9qG9aA/0?wx_fmt=jpeg', '_id': '59c0c0ef6e360bb005fac9e5', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz_png/GGZdg2orRqkpqPZzDFhviakd7yUjGTEoVJ4gibY4icWZZfJb5RFchMbsicHnk9qwM41iaZ3xNvCnnwS3qx7XQTbAibaQ/0?wx_fmt=png', 'userName': '华商晨报小记者团', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=hscbxjzt' },
	// { 'date': '2017-09-19 11:41:34', 'ct': '2017-09-19 15:02:07.114', 'weixinNum': 'bxty88', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505804404&ver=401&signature=yDQsbS-zc7Y8Gipu16W7irVW1m5MzlWLivGrkXbSfTNyFo2*rpx7N36WYv1K7LpOjzyUmPJM4-VQNNZJ6I6jsl*elxYd-60842WxeMA7pOfoj8Z85P*ozIPHuNnT4wa9&new=1', 'id': '789553109e69cf7f4f287e35c6f63925', 'typeName': '段子手', 'title': '搞笑内涵：谁要敢跳进鳄鱼池并活着上岸，奖励100万！', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/icrZkS5cH5f7mhc6oRvZxLToCcuGO8n9FZicP5FKQ29icmm2axtr4xpibEic2hnicnbJTu6LDIeohAlb8iaKczic7kPxSA/0?wx_fmt=jpeg', '_id': '59c0c0ef6e360bb005fac9d9', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/icrZkS5cH5f4PCFfpHxjOOkhibmF8WXjibzLmf9UszMuC0Cq81QytHYk9Z8k58DURho0jYiaugB9Jv7kfPnyj3vp5A/0?wx_fmt=png', 'userName': '爆笑天涯', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=bxty88' },
	// { 'date': '2017-09-19 13:21:41', 'ct': '2017-09-19 15:02:07.085', 'weixinNum': 'wojiaomt2libao', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505804404&ver=401&signature=zUpDb0N-lxQVEgRY9mF8Pwo5ukD6ahQ6R3gzFz1u7Tl6LCugv3gOEDhC-AT09gH8yIbkfjqfgnF5e6W*skRmzq9x5SNe-1Vq2gyfqfNkrbRkKX4DtQ1TIKVlFD6NrDyH&new=1', 'id': '37cfa06f81b1dd25a0865357ba45f247', 'typeName': '段子手', 'title': '幽默：天呐！真是惨绝人寰啊', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/xOmpiajHyCIBRGiab4YjebtVqDdd8YxKqGicNXD769Pf3vibO8AtE52co8aaOZTb27NUK7IhGiaaOth6icBvO2xFsg7g/0?wx_fmt=jpeg', '_id': '59c0c0ef6e360bb005fac9d6', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz_png/xOmpiajHyCIBtKWeX6J99Twu8CnpUmakbxnHEzmz6qibXgR42AdQqob3zuqyOvE5BYjCYtibkcMKlKA4Cr4kjLhNg/0?wx_fmt=png', 'userName': '幽默与段子集锦', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=wojiaomt2libao' },
	// { 'date': '2017-09-19 11:41:34', 'ct': '2017-09-19 14:02:01.634', 'weixinNum': 'bxty88', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505800804&ver=401&signature=yDQsbS-zc7Y8Gipu16W7irVW1m5MzlWLivGrkXbSfTN-DmtA9jleQ91kloo69D3CKuRsz5vTjYvzhGG5XBlgJDs9br*vbqct5ien-G*K8vjEJcPWpw4T0TJ07FPx0PJj&new=1', 'id': 'b2e6142feb4bcec7f7759fffdfb884ef', 'typeName': '段子手', 'title': '搞笑内涵：这是谁家的老公，能不能过户？', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/icrZkS5cH5f7mhc6oRvZxLToCcuGO8n9F2KW6ofpziaKgeGqlwzibft3m1peEvulTCUzw4bR10ia4XHMYbSm1F7tNg/0?wx_fmt=jpeg', '_id': '59c0b2d96e360bb005fac3af', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/icrZkS5cH5f4PCFfpHxjOOkhibmF8WXjibzLmf9UszMuC0Cq81QytHYk9Z8k58DURho0jYiaugB9Jv7kfPnyj3vp5A/0?wx_fmt=png', 'userName': '爆笑天涯', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=bxty88' },
	// { 'date': '2017-09-19 11:41:34', 'ct': '2017-09-19 13:02:06.464', 'weixinNum': 'bxty88', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505797204&ver=401&signature=yDQsbS-zc7Y8Gipu16W7irVW1m5MzlWLivGrkXbSfTNiFrRZUx-vkjMKMU3nplPp2vOuiFAuveIc*vxbfC6qI7TCs2AbQs9pDa777SKs4zSiUOC5SIvSje7jPv9YeHtX&new=1', 'id': '1f4dd99bb0cd729c561890ab7288e516', 'typeName': '段子手', 'title': '搞笑内涵：老公，你先尝尝过期没有？', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/icrZkS5cH5f7mhc6oRvZxLToCcuGO8n9FUMlR3qU2yXdDNmhWYXpDvWTRTjGqMgAtPbTCTJYu0eIfwsVw2diaZicA/0?wx_fmt=jpeg', '_id': '59c0a4ce6e360bb005fabe75', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/icrZkS5cH5f4PCFfpHxjOOkhibmF8WXjibzLmf9UszMuC0Cq81QytHYk9Z8k58DURho0jYiaugB9Jv7kfPnyj3vp5A/0?wx_fmt=png', 'userName': '爆笑天涯', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=bxty88' },
	// { 'date': '2017-09-19 09:09:00', 'ct': '2017-09-19 12:05:57.470', 'weixinNum': 'jianshenxunlianying', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505793603&ver=401&signature=QqOOgUBo6Ak8m0uvCLlStPjjhL3Xli4Li*FVSc5prGSju3mYa1wiJpC3696M9*SyfaslhrRKqr97TpD-8MQfSpQ2Nh37zjEyfkOXOe*6QDcUARjSvAyPKh-OBHZ5QUO8&new=1', 'id': 'c6174480b31f191ba3d8f108991a354d', 'typeName': '段子手', 'title': '知乎上那些让你无言以对的段子，噗哈哈哈哈哈哈哈哈', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/aI62CsbAodmc0UgLL3RdHO2jerJDrkEnl1P02Uj1p5icYCuIZvhd6HOBDH43ic0q5ye39Wwiav3CRGd5UtgiaAicwNQ/0?wx_fmt=jpeg', '_id': '59c097a56e360bb005faba6b', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/aI62CsbAodkcPXRsib6jVVuhpRlMYBzYzrF6w7JqN2khy9XNMPoaBVSWJ823G2h6NfPY7OL0icEdJqNw56zQWQWQ/0?wx_fmt=png', 'userName': '健身训练营', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=jianshenxunlianying' },
	// { 'date': '2017-09-19 08:42:56', 'ct': '2017-09-19 11:02:05.169', 'weixinNum': 'gougoubond', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505790004&ver=401&signature=2CkzDIAarsNutitl7Q9bm92X8sBa8LM*0JflHtYuxNhXAYUo1brLMWRxbcP3*tFEIhTWt28eQzs6DDyzIXYlRIv23swSIkp8bCB1whcABVOrlHuoCi36PulNNabZn-8v&new=1', 'id': '8d23b12fee7055b03cd0db846797daa5', 'typeName': '段子手', 'title': '你家狗破坏过最贵的东西是什么……看到第十个笑抽了！', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/MULzpxwiawFh7lvQDvoaicVymegyKsNDtUTFQjOOGZmb0E6gGr27ITWTKqNWyvg2XMA0bFbibIsVIahqWww6wczrA/0?wx_fmt=jpeg', '_id': '59c088ad6e360bb005fab25b', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/MULzpxwiawFghf2k0VsK6qA4ibSIRcYptiahG3NV6m11kUwibMcfy0WVTiceQZMRhKNoiaWYIHxUSVC13QUpyIib9W9YA/0', 'userName': '狗狗帮gougoubond', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=gougoubond' },
	// { 'date': '2017-09-18 12:38:14', 'ct': '2017-09-19 10:02:03.218', 'weixinNum': 'bxty88', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505786403&ver=401&signature=yDQsbS-zc7Y8Gipu16W7irVW1m5MzlWLivGrkXbSfTMGbTb-kprfevLPVvqeqzQZIg0Cu-cdKVX6K9woIicQTfMYtOLGVmwp5YHwm728cqDiawHQG6ygRAdsX4AeDlDy&new=1', 'id': 'e0de06e08eacda69dc1f11076c827dd4', 'typeName': '段子手', 'title': '搞笑内涵：这不晒嘛，你的影子比较大！', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/icrZkS5cH5f66zJ6VYX5SFlnThibrspA2l2ha9wh7ia8iarc3aXqnuAuNiaFb7ticq1A7ibAXR5Fsn8eDUj5fwyYTibn7w/0?wx_fmt=jpeg', '_id': '59c07a9b6e360bb005faab84', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/icrZkS5cH5f4PCFfpHxjOOkhibmF8WXjibzLmf9UszMuC0Cq81QytHYk9Z8k58DURho0jYiaugB9Jv7kfPnyj3vp5A/0?wx_fmt=png', 'userName': '爆笑天涯', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=bxty88' },
	// { 'date': '2017-09-18 22:32:06', 'ct': '2017-09-19 09:05:15.104', 'weixinNum': 'dayday9527', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505782804&ver=401&signature=JJpACn7KK-BWx6mk4guZJovXPNJIcpREGR0PlyEsmk2O2JVMT4YwUFaQpcDAlxcA3Dc1udVQl-i9WT5UoYZXhdltsuEWofSuXk4yCSxi8NjH4oBWhd81siJzRPB62clu&new=1', 'id': 'f9628420368b0af0c67799e59513a37f', 'typeName': '段子手', 'title': '搞笑段子||捡了美女的手机，损失两千块钱', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/n6qoyPGeo9KIItEjndbmhlukJTW740D3gMCL0MO699D8a7rIBsYc7fOibRHnadtHoJjR8MBicaq6ia4yWTEMhAuJw/0?wx_fmt=jpeg', '_id': '59c06d4b6e360bb005faa6b2', 'userLogo': 'http://mmsns.qpic.cn/mmsns/h7kTfnhUqCZ9kLlx35HutahFbYoPgDC2iawFQPHE3KEw/0', 'userName': '经典幽默天天见', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=dayday9527' },
	// { 'date': '2017-09-18 20:58:00', 'ct': '2017-09-19 08:02:03.230', 'weixinNum': 'wyxzglys', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505779203&ver=401&signature=-3gAbpFrhnp9n7bNAJ2mhquvquB64h98QyNdcJpeUM4eXECDRQ5CdEwOTDIbFN9R7XA84yy0oQNorx6k87VyrcHW*EgOJzWhxO9Be14OE1auc0j1OZoyn7-4iJ*AB-kF&new=1', 'id': 'a1f68b3b0a04ce4b66ed5b24a8760870', 'typeName': '段子手', 'title': '爸爸和儿子的幽默对话！佩服！值得存五十年！', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/iaNicaQPLlyXNfSnGDd4SBgjJGia9Cf0ReaIXJtGpmd9tHgJoQ8P6eVFqBuQbSDeFpOoq2KvBCZnmP38FoLbJtXMw/0?wx_fmt=jpeg', '_id': '59c05e7b6e360bb005fa9426', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/iaNicaQPLlyXMkdoOZibiaWBVV4x2IPANwr7J3HkWTf8QJTASEB1TfBZkNrTCLkGzYjk3DNZ4V5GAibOGQeHPxsR0Lw/0?wx_fmt=png', 'userName': '无忧小猪管理艺术', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=wyxzglys' },
	// { 'date': '2017-09-18 21:00:01', 'ct': '2017-09-19 08:02:03.131', 'weixinNum': 'AGKPL2000', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505779203&ver=401&signature=JLLscVR3vdzWFWFb2Uw9JS8hyevZjwtQcIxvE26bY3Lie6eyWQbSmxF9bE26uGEvuABgnammKF9XlU6oggq2dB*HiRNqNI3ouoBP8PtlaemDaU3lu9ZinBsJ5IzouTN2&new=1', 'id': 'e1187000933fcdd2d27bb34f29d4ad4b', 'typeName': '段子手', 'title': '王者荣耀英雄们用重庆话说台词，我已经不知道普通话怎么说了，笑死', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/AODpD82VGCNgf2rNX93nREuozeyzka1FBCO2rw7qicHCHGOo4WMJR5Rmuib3ecc9NvRLmqnewYVVtYIB4qI66I2A/0?wx_fmt=jpeg', '_id': '59c05e7b6e360bb005fa941f', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz_png/AODpD82VGCP5z3VdBd8KeLiacWO4PcNAoXor0kXoBeeVJVb2pRGeH5hurNY7PibtqCJ85SRM9XnNvgNxamiaNx5ug/0?wx_fmt=png', 'userName': '王者KPL主战区', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=AGKPL2000' },
	// { 'date': '2017-09-18 21:08:09', 'ct': '2017-09-19 08:02:03.033', 'weixinNum': 'qgsdhw', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505779203&ver=401&signature=E2a2NOGWaxo7Hf-w31n0M2TAmpJ3TN4u2SZDI2292GbKfjJw52Ymvn48EMrK0xjVL0-mggpdtvKxT23KRQ2WEnOuodWudnRcr7hJ6JGdyoEprpF*kTbKE6JmQoikMuSI&new=1', 'id': 'a5c08db313bd3df464f77ab3d86440b7', 'typeName': '段子手', 'title': '段子：心肝！把腿分开呢?', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/PWckicpfDNh0cY3ibwfIF6XztIWku8tuQianDWOmvwKpg4dlCW0lFnHbzvr6r03IK6s4O2SZbsnpWjtT2nEV0a7cg/0?wx_fmt=jpeg', '_id': '59c05e7b6e360bb005fa941a', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/PWckicpfDNh2GlkwIVFTO7vNRucO4BRZYscvbRjuQ7qfiarCia2lAMrYYlRV3UJia9gSUUYiazXlGswRTd029VEPXKA/0?wx_fmt=png', 'userName': '享阅故事', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=qgsdhw' },
	// { 'date': '2017-09-18 21:10:49', 'ct': '2017-09-19 08:02:03.027', 'weixinNum': 'xiaohua8864', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505779203&ver=401&signature=5YIRyuGWzLC8tNSMr63A8Ay8Wngg8VMYzQmLqdfTPCM-E1bKHD7GSw19pjLBA0Chsvr-IygqWiAJ5lcRlPo-Tg7OoWu-tm14Ghc0MzYWssrrD6aPKQYN9IVcC1iygbLg&new=1', 'id': '6ceac49d8d6949a26ad59b957c45d179', 'typeName': '段子手', 'title': '爆笑图片：上课无聊，画个东西玩玩！', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/etWpWW8tLJ8ibdV1RLFImGcicznIEcnnL4hQfT9icQAKw1nNeRRfUoh7ubSRPD12hObcGdicXW2Hib52iagSt5hp2RcQ/0?wx_fmt=jpeg', '_id': '59c05e7b6e360bb005fa9419', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/etWpWW8tLJicj5IAqnV5KyGOCjIPjMWUBJmhMF2byJ7k786kZXxXaN0ia0LYILn8lgSxKCYyF7yWFma8iarbPNnYg/0?wx_fmt=png', 'userName': '爆笑笑话大王', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=xiaohua8864' },
	// { 'date': '2017-09-18 23:03:12', 'ct': '2017-09-19 08:02:03.008', 'weixinNum': 'haiyi945', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505779203&ver=401&signature=Szk4Wji1Iam45cZFSZzjgrDurNf2yXpYE6AFOPQrcfhwuEQesNazFMhCpsSe0nVs3yWbwlsDOE0C1C0NjRiBzCLaUybG0N6s6KrknIVUfxL45zxzLoTailoHbWJ3RyYF&new=1', 'id': '014c6a7257892ef3f8879bc906c97371', 'typeName': '段子手', 'title': '[奇闻搞笑]：今天收了个大件！', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/0bpGh4iaBDwWoeI5DyLU6uOfStmFaswKtTVEjB2rCb9j3SdmJTEfoicUAPd4oxib1Jo6AKnsOK9BQwSQ4U1IImicgA/0?wx_fmt=jpeg', '_id': '59c05e7b6e360bb005fa9416', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz_png/0bpGh4iaBDwUfFJcCYHRwD9eXZgxJ9uR0ntdGibeVRicFiaNUxQyQQibYS52q788p7Oicts9hXpbjpz7Yh4VzSbia85yA/0?wx_fmt=png', 'userName': '艺姐特搞队', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=haiyi945' },
	// { 'date': '2017-09-18 19:00:00', 'ct': '2017-09-19 08:02:02.961', 'weixinNum': 'indienova', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505779203&ver=401&signature=-L3hf4TQjU8YSPq6pcUKubMUjaacQT2GYxPZf998arBbq3peqGV*jDqykKc5XL3Idp9WzOY9ZSIc0xwzF-Fw0*F3XfY123ZNPME-4x2TjI6HflC3pM8o9e5Uz3iwlk*h&new=1', 'id': '25e93d1efa897b2a1f3e0d095a6b2d1f', 'typeName': '段子手', 'title': '【独游推荐】站上Comedy Night的舞台，来一场段子表演吧', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/VZ8kwNia656nicOMfnAZF7ax46ghGdb6lTZlQC6icUhL2k25bL7vz2luByZibyun2Jpvz1yiac7RhkXGM3CLtSUcpdQ/0?wx_fmt=jpeg', '_id': '59c05e7a6e360bb005fa9415', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz_png/VZ8kwNia656kqqvslTdIibjiaGb737IUzer4qT4lsgpwFlibdm8v5KISjbMPBpxzicfUNfSAeianASjmC6ewCCUDf2gg/0?wx_fmt=png', 'userName': 'indienova', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=indienova' },
	// { 'date': '2017-09-18 20:00:00', 'ct': '2017-09-19 08:02:02.927', 'weixinNum': 'douhaodouqu', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505779203&ver=401&signature=28deuTFazWC85AGug3LAoDrnGMdBz5FUicvdi36OFdJzKBcCljP3JFRrvZRUCoDsiXb2nAACP89ScK8FzF2sRpq3Fp3CJsJocUy14GN15f9r9b4bQUCMIN05OCk4FRcT&new=1', 'id': '31b946250f92b4a2fa5b1a2386ec02e5', 'typeName': '段子手', 'title': '段子帖 | 来欣赏某岛国的逗逼整人节目，体验分分钟切腹自尽的节奏。。', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/SsWL4E6eibtz0KZiaL7NJ51NSI8OFbDh3KpSBYP30u8iaXJkGOBkyiblJtkia2HODDqC6rkzKF1Ky6YS6WkAzu0ygNw/0?wx_fmt=jpeg', '_id': '59c05e7a6e360bb005fa9414', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz_png/ib6hQVkyS06tXBIeDibonv9icnAYJdDiaf18vZASOCSIibE7BBCN8nHO3E5LapkGMGc3tJz2E73PibzdvKBXClZEMjGg/0?wx_fmt=png', 'userName': '逗号逗趣', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=douhaodouqu' },
	// { 'date': '2017-09-18 21:00:03', 'ct': '2017-09-19 08:02:02.889', 'weixinNum': 'js19982', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505779203&ver=401&signature=h-H9WMYWqh1lHbEjqR-izI5Y-HD9cqpDOIE2JdZZX4JL0E-7oqBKsSHmuW2ri44e6m70SEcQ7qut8wGqTtMtVOBJW0tvEO7DMXjHibC7sPYL29ZoMRbdcXzRfXrBeIPQ&new=1', 'id': '9beb5ad06016b4b724e90e0d460811f3', 'typeName': '段子手', 'title': '健身房失误集锦，心疼又爆笑', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/9y9hHheg8eTQV4bDmT3hbskKKrAId9Dg0dX4Nvye1jCMpMoiahGAx3yLeerzhmo9Mkb8yJlQJMr35TpsS6XaMGw/0?wx_fmt=jpeg', '_id': '59c05e7a6e360bb005fa9413', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/9y9hHheg8eQzOc6WwtkyVQLAria2VFsdibKbjYfSaiabhAMg7Bh9Yls2gOkPicFrOSjm8DWicNiakI23TF7ja418O0ibg/0?wx_fmt=png', 'userName': '健身女王的日常', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=js19982' },
	{ 'date': '2017-09-19 06:52:28', 'ct': '2017-09-19 08:02:02.861', 'weixinNum': 'gwrs06', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505779203&ver=401&signature=OHyay9RUd-aYe5n8aktgB0HPZsqWLtJbdrKWQY46mhHR1tD*pNpjOJzbaPueSweu3sX8-i4Nsk1ZfzD*Ujl2*JHpI36WOfOVjx*PvM5kOTDHt5kh-JhMuuIrnBIDNot9&new=1', 'id': 'c3497696f93413c4883480805315328e', 'typeName': '段子手', 'title': '幽默笑话：老公，我把人家车刮了！', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/sg3qdUu6gM7NxfUDZ3uF7uoukVYicyvImItdibnCZeFIJYteibueSb1PH4iaB1UMT10AP9bPSiat1C963AlRBDe1PJA/0?wx_fmt=jpeg', '_id': '59c05e7a6e360bb005fa9412', 'userLogo': 'http://mmbiz.qpic.cn/mmbiz/sg3qdUu6gM4MB3O6twRtUA81DgAsIUVs3yrur6JkHk2ZJdPSEpkGRgpPTQu1xQOB0LE5repBvEIic4BQLKcSdzQ/0', 'userName': '感悟人生', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=gwrs06' },
	{ 'date': '2017-09-18 20:30:00', 'ct': '2017-09-19 08:02:02.858', 'weixinNum': 'ruijing100', 'url': 'http://mp.weixin.qq.com/s?src=11&timestamp=1505779203&ver=401&signature=RO4*GGglnpvX6oTcU5D9kL39DmQ09MBrQ3aWwa3Op2zsfoTyWJJAtl3zJ*qAPm9kQC87oNl0fIuk4oMKKoDT7RJGpRDyTJ8OUJ46ACn67BWX0U2YCOMaOycnQd8m*-W*&new=1', 'id': 'd6845302acd345cc720fc6eddc91b358', 'typeName': '段子手', 'title': '女人眼中男人最帅气的五个瞬间！好搞笑，看不下去了哈哈哈', 'contentImg': 'http://mmbiz.qpic.cn/mmbiz_jpg/B1KgYwrOPgfZoicSwaIw0D3gmibUNJauuCiaW84znc29SJjaOb8VA97brwLN9fOkGMC6GbL3QFXicUnVfqBZLJUEKQ/0?wx_fmt=jpeg', '_id': '59c05e7a6e360bb005fa9411', 'userLogo': 'http://mmsns.qpic.cn/mmsns/4fBDBzTKdYLKUcHCCb6XSTGIO0Zg0ic2edMJM0fY3hrs/0', 'userName': '全球笑话club', 'read_num': 0, 'like_num': 0, 'typeId': '2', 'userLogo_code': 'http://open.weixin.qq.com/qr/code/?username=ruijing100' }
];


let index = data.length - 1;
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;





/**
 * 
 * 
 * @export
 * @class ListViewExample
 * @extends {React.Component}
 */
class NewsList extends React.Component {
	constructor(props) {
		super(props);
		this._genData = (pIndex = 0) => {
			for (let i = 0; i < NUM_SECTIONS; i++) {
				let ii = pIndex * NUM_SECTIONS + i;
				const sectionName = `Section ${ii}`;
				this
					.sectionIDs
					.push(sectionName);
				this.dataBlob[sectionName] = sectionName;
				this.rowIDs[ii] = [];
				for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
					const rowName = `S${ii}, R${jj}`;
					this
						.rowIDs[ii]
						.push(rowName);
					this.dataBlob[rowName] = rowName;
				}
			}
			// new object ref
			this.sectionIDs = [].concat(this.sectionIDs);
			this.rowIDs = [].concat(this.rowIDs);
		};
		this.onEndReached = (_event) => {
			// load new data
			this.setState({ isLoading: true });

			setTimeout(() => {
				this._genData(++pageIndex);
				this.setState({
					dataSource: this
						.state
						.dataSource
						.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
					isLoading: false
				});
			}, 1000);
		};
		this.renderSectionHeader = (sectionData) => {
			return (
				<Text
					style={[{
						padding: 10,
						backgroundColor: 'rgba(255,255,255,0.8)'
					}
					]}>
					{`Task ${sectionData.split(' ')[1]}`}
				</Text>
			);
		};
		const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
		const getRowData = (dataBlob, _sectionID, rowID) => dataBlob[rowID];
		const dataSource = new ListView.DataSource({
			getRowData,
			getSectionHeaderData: getSectionData,
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2
		});
		this.dataBlob = {};
		this.sectionIDs = [];
		this.rowIDs = [];
		this._genData();
		this.state = {
			dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
			headerPressCount: 0
		};
	}


	componentDidMount() {
		const { newsActions } = this.props;
		console.info('newsList,newsAction:', newsActions);

		newsActions.requestNewsList(false, true, 2);
	}

	onRefresh = () => {
		const { newsActions } = this.props;
		newsActions.requestNewsList(false, true, 2);
	};



	render() {

		const { news } = this.props;
		console.info(news);

		if (Object.keys(news.newsList).length > 0) {
			data = news.newsList[2];
		}



		const separator = (sectionID, rowID) => (<View
			key={`${sectionID}-${rowID}`}
			style={{
				backgroundColor: '#F5F5F9',
				height: 8,
				borderStyle: 'solid',
				borderTopWidth: 1,
				borderTopColor: '#ECECED',
				borderBottomWidth: 1,
				borderBottomColor: '#ECECED'
			}} />);
		const row = (_rowData, sectionID, rowID, highlightRow = (_sId, _rId) => { }) => {
			if (index < 0) {
				index = data.length - 1;
			}
			const obj = data[index--];
			return (
				<View key={rowID}>
					<TouchableHighlight
						underlayColor={'rgba(100,100,100,0.2)'}
						style={[{
							padding: 8,
							backgroundColor: 'white'
						}
						]}
						onPress={() => {
							highlightRow(sectionID, rowID);
						}}>
						<View>
							<View
								style={[{
									marginBottom: 8,
									borderStyle: 'solid',
									borderBottomWidth: 1,
									borderBottomColor: '#F6F6F6'
								}
								]}>
								<Text
									style={{
										fontSize: 18,
										fontWeight: '500',
										padding: 2
									}}>{obj.title}</Text>
							</View>
							<View
								style={[{
									flexDirection: 'row'
								}
								]}>
								<Image
									style={[{
										height: 64,
										width: 64,
										marginRight: 8
									}
									]}
									source={{
										uri: obj.contentImg
									}} />
								<View>
									<Text>{obj.userName}
										- {rowID}</Text>
									<Text>{this.props.highlightRow}</Text>
									<Text>
										<Text
											style={[{
												fontSize: 24,
												color: '#FF6E27'
											}
											]}>35</Text>¥</Text>
								</View>
							</View>
						</View>
					</TouchableHighlight>
				</View>
			);
		};
		const loadingTxt = this.state.isLoading
			? 'Loading...'
			: 'Loaded';
		return (<ListView
			dataSource={this.state.dataSource}
			renderHeader={() => <Text style={[{
				padding: 8
			}
			]}>header</Text>}
			renderFooter={() => <Text style={[{
				padding: 30,
				textAlign: 'center'
			}
			]}>
				{loadingTxt}
			</Text>}
			renderSectionHeader={this.renderSectionHeader}
			renderRow={row}
			renderSeparator={separator}
			pageSize={4}
			onEndReached={this.onEndReached}
			onEndReachedThreshold={10} />);
	}
}
export const title = 'ListView';
export const description = 'ListView example';



export default NewsList;

NewsList.propTypes = propTypes;