/*
 * @Author: shuaixc 
 * @Date: 2017-09-12 17:14:06 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-20 11:49:07
 */
const API = {
	getRepos: function () {
		var url = 'https://API.github.com/users/xx';
		return fetch(url).then((res) => res.json());

	}
};

export default API;