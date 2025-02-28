
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./Components/Auth";
// import Nav from "./Components/Nav";
// import Home from "./Components/Home";
// import QRCard from "./Components/QRCard";
// import Nomatch from "./Components/Nomatch";
// import Login from "./Components/Login";
// import SignUp from "./Components/SignUp";
// import Dashboard from "./Components/Dashboard";
// import RequireAuth from "./Components/RequireAuth";




// function App() {
//   return (
//     <AuthProvider>
//     <div>
//       <Nav /> {/* Navigation Menu */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth> } />
//         <Route path="/qr" element={<RequireAuth><QRCard /></RequireAuth> } /> 
//           <Route path="login" element={ <Login />}/>
//           <Route path="signup" element={<SignUp />}/>
//         <Route path="*" element={<Nomatch />} />
//       </Routes>
//     </div>
//     </AuthProvider>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/Auth";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import QRCard from "./Components/QRCard";
import Nomatch from "./Components/Nomatch";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import RequireAuth from "./Components/RequireAuth";
import { ThemeProvider } from "./Components/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
    <AuthProvider>
      <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-900 dark:text-white light:bg-white light:text-black">
        <Nav /> {/* Navigation Menu */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/qr" element={<RequireAuth><QRCard /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </div>
    </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
