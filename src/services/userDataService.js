import axios from 'axios';
import authHeader from './auth-header';
import config from '../Config/Config';
const API_URL = `${config.Server_url}/users`;
//const Public_URL = `${config.Server_url}/public`;

const getUserData = () => {
	return axios
		.get(API_URL + '/specificUserData')
		.then((response) => {
			return response.data;
		});
};

/* Code from Original user service to get user data
const getUserData = () => {
	return axios
		.get(API_URL + '/alltransactions', { headers: authHeader() })
		.then((response) => {
			return response.data;
		});
};

*/

const getIsUserInOrOut = () => {
	return axios
		.get(API_URL + '/getIsUserInOrOut')
		.then((response) => {
			return response.data;
		});
};

const postTimeINOUT = (Value, date, time) => {
    
	return axios   
		.post(API_URL + '/postintime', {Value,date,time})
		.then((response) => {
			return response.data;
		});
}

const getUserIncome = (TransactionID) => {
	return axios
		.get(API_URL + '/getIncome', {
			headers: authHeader(),
			params: { id: TransactionID },
		})
		.then((response) => {
			return response.data.data[0];
		});
};

const getUserExpense = (TransactionID) => {
	return axios
		.get(API_URL + '/getExpense', {
			headers: authHeader(),
			params: { id: TransactionID },
		})
		.then((response) => {
			return response.data.data[0];
		});
};

const postUserIncome = (body) => {
	return axios
		.post(API_URL + '/addIncome', { body: body }, { headers: authHeader() })
		.then((response) => {
			return response.data;
		});
};

const postUserExpense = (body) => {
	return axios
		.post(API_URL + '/addExpense', { body: body }, { headers: authHeader() })
		.then((response) => {
			return response.data;
		});
};

const deleteUserIncome = (TransactionID) => {
	return axios
		.delete(API_URL + '/deleteIncome', {
			headers: authHeader(),
			data: { TransactionID: TransactionID },
		})
		.then((response) => {
			return response.data;
		});
};

const deleteUserExpense = (TransactionID) => {
	return axios
		.delete(API_URL + '/deleteExpense', {
			headers: authHeader(),
			data: { TransactionID: TransactionID },
		})
		.then((response) => {
			return response.data;
		});
};

const updateUserExpense = (TransactionID) => {
	return axios
		.put(API_URL + '/updateExpense', {
			headers: authHeader(),
			TransactionID: TransactionID,
		})
		.then((response) => {
			return response.data;
		});
};

const updateUserIncome = (TransactionID) => {
	return axios
		.put(API_URL + '/updateIncome', {
			headers: authHeader(),
			TransactionID: TransactionID,
		})
		.then((response) => {
			return response.data;
		});
};

const createSetAside = (body) => {
	return axios
		.post(API_URL + '/addSetAside', { body: body }, { headers: authHeader() })
		.then((response) => {
			return response.data;
		});
};

const deleteSetAside = (TransactionID) => {
	return axios
		.delete(API_URL + '/removeSetAside', {
			headers: authHeader(),
			data: { TransactionID: TransactionID },
		})
		.then((response) => {
			return response.data;
		});
};

const getSetAside = ()=> {
  return axios
    .get(API_URL + "/getSetAside", {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const userDataService = {
	getUserIncome,
	getUserExpense,
	postUserIncome,
	postUserExpense,
	deleteUserIncome,
	deleteUserExpense,
	updateUserIncome,
	updateUserExpense,
	createSetAside,
	deleteSetAside,
	getSetAside,
	getUserData,
	postTimeINOUT,
	getIsUserInOrOut,
};
export default userDataService;
