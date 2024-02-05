// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const auth = localStorage.getItem("userInfo");
//     setIsAuthenticated(!!auth);
//   }, []);

//   return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
// };

// export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const auth = localStorage.getItem("userInfo");
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default PrivateRoute;
