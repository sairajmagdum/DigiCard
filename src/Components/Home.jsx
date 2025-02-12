import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

const navigate=useNavigate();
const handleSignupClick = () => {
    navigate('signup');
  };

const handleGetStarted=()=>{
    navigate('/dashboard')
}


  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-lg">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className=" h-13 " src="/src/assets/2.png" alt="logo" />
          HealthSync    
        </a>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold">A Smarter Way to Store & Share Your Health Data</h2>
        <p className="mt-4 text-gray-400">Secure & accessible medical records with QR code sharing.</p>
        <div className="mt-6">
          <button className="bg-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-600" onClick={handleGetStarted}>Get Started</button>
        </div>
      </header>

      {/* Background Image Section */}
      {/* <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-3xl font-bold text-white mb-65">How It Works</h3>
        </div>
      </div> */}
       {/* Flowchart Section */}
       <section id="how-it-works" className="py-20 px-6 bg-gray-900">
        <h3 className="text-3xl text-center font-semibold mb-8">How It Works</h3>
        <div className="flex flex-wrap justify-center items-center gap-6 text-center">
          {["User Registers/Login", "Fills Medical Data", "Generates QR Code", "Saves & Shares QR Code", "Doctor Scans QR Code", "Accesses Medical Data", "User Updates Data"].map((step, index, arr) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="p-6 bg-gray-800 rounded-lg transition duration-300 transform hover:scale-110 hover:bg-blue-500">
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
          <div className="p-6 bg-gray-800 rounded-lg">
            <h4 className="text-xl font-bold">🔒 Secure Data</h4>
            <p className="text-gray-400 mt-2">Your medical data is encrypted and safe.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h4 className="text-xl font-bold">📱 Instant Access</h4>
            <p className="text-gray-400 mt-2">Scan the QR code to view medical records anytime.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h4 className="text-xl font-bold">⚡ Easy Sharing</h4>
            <p className="text-gray-400 mt-2">Share your health details securely with doctors.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="text-center py-20 bg-gray-800">
        <h3 className="text-2xl font-semibold">Get Your Digital Health Card Today!</h3>
        <p className="text-gray-400 mt-2">Sign up and generate your unique health QR code now.</p>
        <button className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-600" onClick={handleSignupClick}>Sign Up</button>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-800 text-gray-400">
        &copy; 2025 HealthSync | Privacy Policy
      </footer>
    </div>
  );
};

export default Home;
