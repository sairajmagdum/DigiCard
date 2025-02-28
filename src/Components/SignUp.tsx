// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function SignUp() {
//   const navigate=useNavigate();
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
//               Create an account
//             </h1>
//             <form className="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
//                 <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your username" required="" />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                 <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
//               </div>
//               <button type="submit" className=" cursor-pointer w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Already have an account? <span onClick={() => navigate("/login")} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"> Log in</span>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SignUp;
// import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./Auth"; // Import useAuth hook
// import { v4 as uuidv4 } from "uuid"; // Import UUID for unique user IDs

// const SignUp: React.FC = () => {
//   const navigate = useNavigate();
//   const auth=useAuth();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!username || !email || !password) {
//       alert("All fields are required.");
//       return;
//     }

//     // Mock user registration (Replace with real backend logic)
//     const newUser = {
//       id: uuidv4(), // Generate unique ID
//       email,
//       name: username,
//     };

//     auth.login(newUser); // Log in the user
//     navigate("/dashboard"); // Redirect to dashboard after sign-up
//   };


  
//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img className="h-13" src="/src/assets/2.png" alt="logo" />
//           HealthSync
//         </a>
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Create an account
//             </h1>
//             <form
//               className="space-y-4 md:space-y-6"
//               action="#"
//               onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
//             >
//               <div>
//                 <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   name="username"
//                   id="username"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Your username"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="name@company.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="cursor-pointer w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//               >
//                 Sign Up
//               </button>
//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => navigate("/login")}
//                   className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   Log in
//                 </span>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth"; // Import useAuth hook
import { v4 as uuidv4 } from "uuid"; // Generate unique user IDs
import { useTheme } from "./ThemeContext";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAuth(); // Get authentication context
  const { theme } = useTheme(); // Get current theme

  // Controlled form states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Sign Up Submission
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("All fields are required.");
      return;
    }

    // Mock user registration (Replace with real backend logic)
    const newUser = {
      id: uuidv4(), // Generate a unique ID
      email,
      name: username,
    };

    auth.login(newUser); // Log in the user
    navigate("/dashboard"); // Redirect to the dashboard after sign-up
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
              Create an account
            </h1>
            <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"} border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                  placeholder="Your username"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"} border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                  required
                />
              </div>
              <button
                type="submit"
                className={`${theme === "dark" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-blue-300 hover:bg-blue-400 text-gray-900"} w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
              >
                Sign Up
              </button>
              <p className="text-sm font-light">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="cursor-pointer font-medium text-blue-500 hover:underline"
                >
                  Log in
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
