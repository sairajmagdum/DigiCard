// import React,{useState}from 'react';
// import { useAuth } from './Auth';
// import { useNavigate,useLocation } from 'react-router-dom';


// function Login() {
//   const [user, setUser] = useState("");
//   const auth = useAuth();
// const navigate=useNavigate();
// const location = useLocation();
// const from = location.state?.from?.pathname || "/";

// const handleLogin = () => {
//   auth.login(user);
//   navigate(from, { replace: true });
// };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img className=" h-13 " src="/src/assets/2.png" alt="logo" />
//           HealthSync  
//         </a>
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Sign in to your account
//             </h1>
//             <form className="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                 <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
//                   </div>
//                 </div>
//                 <a href="#" className="text-sm font-medium text-primary-600 hover:underline text-white">Forgot password?</a>
//               </div>
//               <button type="submit" className="cursor-pointer w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border">Sign in</button>
//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Don’t have an account yet? <span onClick={() => navigate("/signup")} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</span>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { useAuth } from "./Auth"; // Custom auth context hook
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "./ThemeContext";

// Define type for location state
interface LocationState {
  from?: {
    pathname: string;
  };
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // State for email input
  const [password, setPassword] = useState<string>(""); // State for password input

  const auth = useAuth(); // Get login method from AuthContext
  const navigate = useNavigate(); // Navigation hook
  const location = useLocation(); // Get previous location
  const { theme } = useTheme(); // Get current theme
  const from = (location.state as LocationState)?.from?.pathname || "/"; // Default redirect path

  // Handle form submission
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter an email");
      return;
    }

    // Create a user object that matches the User type
    const userData = {
      id: uuidv4(), // Generate a unique ID
      email,
    };

    auth.login(userData); // Now userData includes id

    navigate(from, { replace: true });
  };

  return (
    <section className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold">
          <img className="h-13" src="/src/assets/2.png" alt="logo" />
          HealthSync
        </a>
        <div className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"} w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0`}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className={`${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"} border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"} border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className={`${theme === "dark" ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"} w-4 h-4 border rounded focus:ring-3 focus:ring-blue-300`}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className={`${theme === "dark" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-blue-300 hover:bg-blue-400 text-gray-900"} w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
              >
                Sign in
              </button>
              <p className="text-sm font-light">
                Don’t have an account yet?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="cursor-pointer font-medium text-blue-500 hover:underline"
                >
                  Sign up
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

