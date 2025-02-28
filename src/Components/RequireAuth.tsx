// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "./Auth";

// const RequireAuth = ({ children }) => {
//   const auth = useAuth();
//   const location = useLocation();

//   if (!auth.user) {
//     // Redirect to login page and save the location for redirecting back
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default RequireAuth;

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";
import React from "react";

// Require authentication for protected routes
const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
