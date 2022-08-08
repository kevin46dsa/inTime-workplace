import React from "react";
import { Routes as Switch, Route as Routing } from "react-router-dom";

// import Home from "../Components/Home/Home";
import Home from "../Components/Home/homepage";
import Login from "../Components/login/login";
import Signup from "../Components/Signup";
import AdminTable from "../Components/AdminTable/Admintable"

import Layout from "../Components/layout/layout";
// import Review from "../Components/Review/Review";
import Errors from "../Components/Errors/Errors";


const Routesr = () => {
  return (
    <>
      <Layout>
        <Switch>
          {/* Auth Routes */}
          <Routing exact path="/" element={<Home />} />
          <Routing exact path="/admintable" element={<AdminTable />} />
          <Routing exact path="/login" element={<Login />} />
          <Routing exact path="/signup" element={<Signup />} />

          {/* Private: Only logged in user can access */}
          {/*<Routing exact path="/dashboard" element={<Dashboard />} />*/}


          {/* Public: All can use */}
          <Routing exact path="*" element={<Errors />} />
        </Switch>
      </Layout>
    </>
  );
};
export default Routesr;