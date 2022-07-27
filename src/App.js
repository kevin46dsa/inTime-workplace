import React, { useState } from 'react';
import './App.css';
import Switch from "./Switch";
import AuthService from './AuthService';

function App() {
  const [value, setValue] = useState(false);
  const handleSubmit = async (e) => {
		setValue(!value);
    AuthService.postTimeINOUT(value);
    console.log(value ? "Posted In time" : "Posted Out time")
    
  }


  return (
    <div className="app">
      <h1>inTIME</h1>
      <Switch
        isOn={value}
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