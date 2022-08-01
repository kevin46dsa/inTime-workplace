import axios from 'axios';
const API_URL = `https://intimeapi.herokuapp.com/`;

//axios call to server
//this is changes
//signup post to server

const signup = (firstName, lastName, email, password) => {
	return axios
		.post(API_URL + '/newuser', {
			firstName,
			lastName,
			email,
			password,
		})
		.catch((e) => {
			throw e.response.data.Error;
		});
};

//login post to server
const login = (email, password) => {
	return axios
		.post(API_URL + '/auth', {
			email,
			password,
		})
		.then((response) => {
			if (response.data.accessToken) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}
			return response.data;
		});
};

// logout removes token from localstorage
const logout = () => {
	localStorage.removeItem('user');
};

// gets current user data from local storage
const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};

const postTimeINOUT = (Value) => {
    return axios   
		.post(API_URL + '/users/postintime', { body: Value })
		.then((response) => {
			return response.data;
		});
}

const AuthService = {
	signup,
	login,
	logout,
	getCurrentUser,
    postTimeINOUT,
};

export default AuthService;