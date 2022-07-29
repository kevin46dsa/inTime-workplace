import React, { useState } from 'react';
import './App.css';
import Switch from "./Switch";
import AuthService from './AuthService';

//Test out if use State and Use Effect work


function App() {
  const [isIN, setIsIN] = useState(false);
	
	
useEffect(() => {
		var data = AuthService.getCurrentUser(); // IMPLEMENT SERVICE TO GET IF USER IS CURRENTLY IN OR OUT
		if (data = 'IN') {
			useState(false)
		} else {
			useState(true)
		}
	}, []);
	
	
  const handleSubmit = async (e) => {
		setValue(!isIN);
    AuthService.postTimeINOUT(isIN);
    console.log(isIN ? "Posted In time" : "Posted Out time")
    
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

export default App;
