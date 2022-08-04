import React, { useState, useEffect } from 'react';
import Table from './Table';
import Switch from "./Switch";
import moment from 'moment'
import AuthService from '../../services/AuthService';
import transactionService from '../../services/userDataService';

//Test out if use State and Use Effect work


function home() {
  const [isIN, setIsIN] = useState(false);
	//const [reloader, updateReloader] = useState(1);	
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
   /*
	const updatePieState = () => {
		updateReloader(reloader + 1);
		console.log('update reloader function', reloader);
	};

	useEffect(() => {
		console.log('in reloader useEffect');
	}, [reloader]);
	*/
	
  const handleSubmit = async (e) => {
		setIsIN(!isIN);
    let date = moment().format('L'); 
    let time = moment().format('LT');
    let isPosted = transactionService.postTimeINOUT(!isIN, date, time); //Negation sets it in the correct value
    
    if(isPosted) console.log(isIN ? "Posted Out time" : "Posted In time")
    
  }

  //this is the table add to render once Done
  //<Table updatePieState={updatePieState} />

  // isOn={isIN}

  return (
    <div className="app">
      <h1>inTIME</h1>
      
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
      <form action="/generateReport" method="GET"> 
      <button>Generate Report</button> 
      </form> 
      

    </div>
  );
}

export default home;
