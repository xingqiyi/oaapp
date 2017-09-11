const API = {
	getRepos:function(username){
		var url = 'https://API.github.com/users/tylermcginnis';
		return fetch(url).then((res)=>res.json());
	}
};

export default API;