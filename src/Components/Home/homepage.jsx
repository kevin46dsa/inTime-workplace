import React, { useState, useEffect } from 'react';

import Switch from "./Switch";
import moment from 'moment'
import AuthService from '../../services/AuthService';
import transactionService from '../../services/userDataService';
import { useNavigate } from 'react-router-dom';

//Test out if use State and Use Effect work


function home() {
  let navigate = useNavigate();
  const [isIN, setIsIN] = useState(false);
	const [accessToken, setAccessToken] = useState(undefined);
	const [reloader, updateReloader] = useState(1);
  /* use this function to get user data
  useEffect(() => {
		var data = transactionService.getUserData(); // IMPLEMENT SERVICE TO GET IF USER IS CURRENTLY IN OR OUT
		if (data = 'IN') {
			setIsIN(true)
		} else if(data = 'OUT'){
			setIsIN(false)
		}
	},[]);
  
  
 
useEffect(() => {
		var data = transactionService.getIsUserInOrOut(); // IMPLEMENT SERVICE TO GET IF USER IS CURRENTLY IN OR OUT
		if (data = 'IN') {
			setIsIN(true)
		} else if(data = 'OUT'){
			setIsIN(false)
		}
	},[]);
	*/
  
	
	useEffect(() => {
		var data = AuthService.getCurrentUser();
		if (data) {
			// setContent(data.user.userName);
			setAccessToken(data.accessToken);
		} else {
			// setContent("");
			setAccessToken(undefined);
		}
	}, []);

	const updatePieState = () => {
		updateReloader(reloader + 1);
		console.log('update reloader function', reloader);
	};

	useEffect(() => {
		console.log('in reloader useEffect');
	}, [reloader]);
	
  const handleSubmit = async (e) => {
		setIsIN(!isIN);
    let date = moment().format('L'); 
    let time = moment().format('LT');
    let isPosted = transactionService.postTimeINOUT(!isIN, date, time); //Negation sets it in the correct value
    
    if(isPosted) console.log(isIN ? "Posted Out time" : "Posted In time")
    
  }

  const navigateToAdminPage = async (e) => {
    navigate('/admintable');
  }

  // isOn={isIN}

  return (

    <div>
      <h1>inTIME</h1>
			{accessToken !== undefined ? (
				<React.Fragment>

    <div className="app">
      
      
      <Switch
        isOn={isIN}
        onColor="#EF476F"
        handleToggle={handleSubmit}
      />
      <h2>OUT &nbsp;&nbsp;IN</h2>
    

      <form action="/createNewUser" method="POST"> 
      <button>Create New User</button> 
      </form> 
      <form action="/gettotalhours" method="GET"> 
      <button>Get total hours</button> 
      </form> 
      
      <button onClick={navigateToAdminPage}>Admin Table</button>    
    </div>
    </React.Fragment>
			) : (
				<React.Fragment>
<div className="card posD">
						<h1>Restricted area</h1>
						<h2>
							<a href="/login" className="a12">
								Sign In
							</a>{' '}
							to Access DashBoard
						</h2>
					</div>
        </React.Fragment>
        )}
        </div>
 
  );
}

export default home;
