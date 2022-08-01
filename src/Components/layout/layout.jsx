import React from "react";

// import Content from "../Content/Content";




const Layout =(props)=> {
    return (      
      <>
        
        <div className="row">
          <div className="col-md-1">{/* Azure Bot */}</div>
          <div className="col-md-10">{props.children}</div>
          <div className="col-md-1">
            {/* Google DialogFlow Bot*/}
          </div>
        </div>
      </>
    );
  }


export default Layout;