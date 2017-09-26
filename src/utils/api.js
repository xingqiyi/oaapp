/*
 * @Author: shuaixc 
 * @Date: 2017-09-12 17:14:06 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-26 10:23:40
 */
const API = {
	getRepos: function () {
		var url = 'https://API.github.com/users/xx';
		return fetch(url).then((res) => res.json());
	},

	getRepositories: (per_page = 10, pageIndex = 0) => {
		// https://api.github.com/search/repositories?q=javascript&sort=stars&per_page=5&page=0
		const url = `https://api.github.com/search/repositories?q=javascript&sort=stars&per_page=${per_page}&page=${pageIndex}`;
		return fetch(url).then((res) => res.json());
	}


};

export default API;