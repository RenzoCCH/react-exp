
// Reuse coee
// Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
  <div>
  <h1>Info</h1>
  <p>The info is: {props.info}</p>
  </div>
);

const widthAdminWarning = (WrappedComponent)=>{
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
}

const requireAuthentication = (WrappedComponent)=>{
  return (props) =>(
    <div>
      {props.isAuthenticated?(
        <WrappedComponent {...props}/>
      ):(
        <p>Please login to view the info</p>
      )}

    </div>
  )
}


const AuthInfo = requireAuthentication(Info);
const AdminInfo = widthAdminWarning(Info);



//ReactDOM.render(<AdminInfo isAdmin={true} info="this are the details"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="this are the details"/>,document.getElementById('app'));