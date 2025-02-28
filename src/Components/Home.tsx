// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {

// const navigate=useNavigate();
// const handleSignupClick = () => {
//     navigate('signup');
//   };

// const handleGetStarted=()=>{
//     navigate('/dashboard')
// }


//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-lg">
//       <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img className=" h-13 " src="/src/assets/2.png" alt="logo" />
//           HealthSync    
//         </a>
//       </nav>

//       {/* Hero Section */}
//       <header className="text-center py-20 px-6">
//         <h2 className="text-4xl font-extrabold">A Smarter Way to Store & Share Your Health Data</h2>
//         <p className="mt-4 text-gray-400">Secure & accessible medical records with QR code sharing.</p>
//         <div className="mt-6">
//           <button className="bg-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-600" onClick={handleGetStarted}>Get Started</button>
//         </div>
//       </header>

//       {/* Background Image Section */}
//       {/* <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h3 className="text-3xl font-bold text-white mb-65">How It Works</h3>
//         </div>
//       </div> */}
//        {/* Flowchart Section */}
//        <section id="how-it-works" className="py-20 px-6 bg-gray-900">
//         <h3 className="text-3xl text-center font-semibold mb-8">How It Works</h3>
//         <div className="flex flex-wrap justify-center items-center gap-6 text-center">
//           {["User Registers/Login", "Fills Medical Data", "Generates QR Code", "Saves & Shares QR Code", "Doctor Scans QR Code", "Accesses Medical Data", "User Updates Data"].map((step, index, arr) => (
//             <div key={index} className="relative flex flex-col items-center">
//               <div className="p-6 bg-gray-800 rounded-lg transition duration-300 transform hover:scale-110 hover:bg-blue-500">
//                 <p className="text-lg font-semibold">{step}</p>
//               </div>
//               {index < arr.length - 1 && (
//                 <div className="w-0.5 h-8 bg-gray-400 mx-auto md:w-8 md:h-0.5 md:my-3 transform rotate-90 md:rotate-0"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 px-6">
//         <h3 className="text-3xl text-center font-semibold">Why Choose Our Health Card?</h3>
//         <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
//           <div className="p-6 bg-gray-800 rounded-lg">
//             <h4 className="text-xl font-bold">🔒 Secure Data</h4>
//             <p className="text-gray-400 mt-2">Your medical data is encrypted and safe.</p>
//           </div>
//           <div className="p-6 bg-gray-800 rounded-lg">
//             <h4 className="text-xl font-bold">📱 Instant Access</h4>
//             <p className="text-gray-400 mt-2">Scan the QR code to view medical records anytime.</p>
//           </div>
//           <div className="p-6 bg-gray-800 rounded-lg">
//             <h4 className="text-xl font-bold">⚡ Easy Sharing</h4>
//             <p className="text-gray-400 mt-2">Share your health details securely with doctors.</p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section id="cta" className="text-center py-20 bg-gray-800">
//         <h3 className="text-2xl font-semibold">Get Your Digital Health Card Today!</h3>
//         <p className="text-gray-400 mt-2">Sign up and generate your unique health QR code now.</p>
//         <button className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-600" onClick={handleSignupClick}>Sign Up</button>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-4 bg-gray-800 text-gray-400">
//         &copy; 2025 HealthSync | Privacy Policy
//       </footer>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "./ThemeContext"; // Import Theme Context

// const Home: React.FC = () => {
//   const navigate = useNavigate();
//   const { theme } = useTheme(); // Get current theme

//   // Handle Sign-up Button Click
//   const handleSignupClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     navigate("/signup");
//   };

//   // Handle Get Started Button Click
//   const handleGetStarted = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     navigate("/dashboard");
//   };

//   return (
//     <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`}>
//       {/* Navbar */}
//       <nav className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"} flex justify-between items-center px-6 py-4 shadow-lg`}>
//         <a href="#" className="flex items-center mb-6 text-2xl font-semibold">
//           <img className="h-13" src="/src/assets/2.png" alt="logo" />
//           HealthSync
//         </a>
//       </nav>

//       {/* Hero Section */}
//       <header className="text-center py-20 px-6">
//         <h2 className="text-4xl font-extrabold">A Smarter Way to Store & Share Your Health Data</h2>
//         <p className={`mt-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//           Secure & accessible medical records with QR code sharing.
//         </p>
//         <div className="mt-6">
//           <button className={`${theme === "dark" ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-300 hover:bg-blue-400"} px-6 py-3 rounded-lg text-lg`} onClick={handleGetStarted}>
//             Get Started
//           </button>
//         </div>
//       </header>

      

//       {/* Flowchart Section */}
//       <section id="how-it-works" className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} py-20 px-6`}>
//         <h3 className="text-3xl text-center font-semibold mb-8">How It Works</h3>
//         <div className="flex flex-wrap justify-center items-center gap-6 text-center">
//           {["User Registers/Login", "Fills Medical Data", "Generates QR Code", "Saves & Shares QR Code", "Doctor Scans QR Code", "Accesses Medical Data", "User Updates Data"].map((step, index, arr) => (
//             <div key={index} className="relative flex flex-col items-center">
//               <div className={`${theme === "dark" ? "bg-gray-800 hover:bg-blue-500" : "bg-gray-200 hover:bg-blue-300"} p-6 rounded-lg transition duration-300 transform hover:scale-110`}>
//                 <p className="text-lg font-semibold">{step}</p>
//               </div>
//               {index < arr.length - 1 && (
//                 <div className="w-0.5 h-8 bg-gray-400 mx-auto md:w-8 md:h-0.5 md:my-3 transform rotate-90 md:rotate-0"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 px-6">
//         <h3 className="text-3xl text-center font-semibold">Why Choose Our Health Card?</h3>
//         <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
//           {["Secure Data", "Instant Access", "Easy Sharing"].map((title, index) => (
//             <div key={index} className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} p-6 rounded-lg`}>
//               <h4 className="text-xl font-bold">{title === "Secure Data" ? "🔒 Secure Data" : title === "Instant Access" ? "📱 Instant Access" : "⚡ Easy Sharing"}</h4>
//               <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mt-2`}>
//                 {title === "Secure Data" ? "Your medical data is encrypted and safe." :
//                  title === "Instant Access" ? "Scan the QR code to view medical records anytime." :
//                  "Share your health details securely with doctors."}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section id="cta" className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-300"} text-center py-20`}>
//         <h3 className="text-2xl font-semibold">Get Your Digital Health Card Today!</h3>
//         <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-700"} mt-2`}>
//           Sign up and generate your unique health QR code now.
//         </p>
//         <button className={`${theme === "dark" ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-300 hover:bg-blue-400"} mt-6 px-6 py-3 rounded-lg text-lg`} onClick={handleSignupClick}>
//           Sign Up
//         </button>
//       </section>

//       {/* Footer */}
//       <footer className={`${theme === "dark" ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-700"} text-center py-4`}>
//         &copy; 2025 HealthSync | Privacy Policy
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext"; // Import Theme Context

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme(); // Get current theme

  // Handle Sign-up Button Click
  const handleSignupClick = () => {
    navigate("/signup");
  };

  // Handle Get Started Button Click
  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`}>
      {/* Navbar */}
      <nav className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"} flex justify-between items-center px-6 py-4 shadow-lg`}>
        <a href="#" className="flex items-center text-2xl font-semibold">
          <img className="h-10" src="/src/assets/2.png" alt="logo" />
          HealthSync
        </a>
      </nav>

      {/* Hero Section - Text on Left, Image on Right */}
      <header className="flex flex-col md:flex-row items-center justify-between text-left px-8 md:px-16 py-20">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold">
            A Smarter Way <span className="text-blue-500">to Store & Share</span> Your Health Data
          </h1>
          <p className={`mt-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Secure & accessible medical records with QR code sharing.
          </p>
          <button
            className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-lg text-white hover:bg-blue-600"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/src/assets/undraw_medicine_hqqg.svg" alt="Real Estate" className="w-96 md:w-[450px]" />
        </div>
      </header>

      {/* Flowchart Section */}
      <section id="how-it-works" className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} py-20 px-6`}>
        <h3 className="text-3xl text-center font-semibold mb-8">How It Works</h3>
        <div className="flex flex-wrap justify-center items-center gap-6 text-center">
          {["User Registers/Login", "Fills Medical Data", "Generates QR Code", "Saves & Shares QR Code", "Doctor Scans QR Code", "Accesses Medical Data", "User Updates Data"].map((step, index, arr) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className={`${theme === "dark" ? "bg-gray-800 hover:bg-blue-500" : "bg-gray-200 hover:bg-blue-300"} p-6 rounded-lg transition duration-300 transform hover:scale-110`}>
                <p className="text-lg font-semibold">{step}</p>
              </div>
              {index < arr.length - 1 && (
                <div className="w-0.5 h-8 bg-gray-400 mx-auto md:w-8 md:h-0.5 md:my-3 transform rotate-90 md:rotate-0"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <h3 className="text-3xl text-center font-semibold">Why Choose Our Health Card?</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
          {["Secure Data", "Instant Access", "Easy Sharing"].map((title, index) => (
            <div key={index} className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} p-6 rounded-lg`}>
              <h4 className="text-xl font-bold">{title === "Secure Data" ? "🔒 Secure Data" : title === "Instant Access" ? "📱 Instant Access" : "⚡ Easy Sharing"}</h4>
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mt-2`}>
                {title === "Secure Data" ? "Your medical data is encrypted and safe." :
                 title === "Instant Access" ? "Scan the QR code to view medical records anytime." :
                 "Share your health details securely with doctors."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-300"} text-center py-20`}>
        <h3 className="text-2xl font-semibold">Get Your Digital Health Card Today!</h3>
        <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-700"} mt-2`}>
          Sign up and generate your unique health QR code now.
        </p>
        <button className={`${theme === "dark" ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-300 hover:bg-blue-400"} mt-6 px-6 py-3 rounded-lg text-lg`} onClick={handleSignupClick}>
          Sign Up
        </button>
      </section>

      {/* Footer */}
      <footer className={`${theme === "dark" ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-700"} text-center py-4`}>
        &copy; 2025 HealthSync | Privacy Policy
      </footer>
    </div>
  );
};

export default Home;
