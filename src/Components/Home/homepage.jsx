import React, { useState, useEffect } from 'react';

import Switch from "./Switch";

import AuthService from '../../services/AuthService';

//Test out if use State and Use Effect work


function home() {
  const [isIN, setIsIN] = useState(true);
	
	
useEffect(() => {
		var data = AuthService.getCurrentUser(); // IMPLEMENT SERVICE TO GET IF USER IS CURRENTLY IN OR OUT
		if (data = 'IN') {
			setIsIN(false)
		} else {
			setIsIN(true)
		}
	}, []);
	
	
  const handleSubmit = async (e) => {
		setIsIN(!isIN);
    AuthService.postTimeINOUT(!isIN); //Negation sets it in the correct value
    console.log(isIN ? "Posted Out time" : "Posted In time")
    
  }


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
