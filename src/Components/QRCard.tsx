// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { QRCodeCanvas } from "qrcode.react";
// import { useParams } from "react-router-dom";

// const QRCard = () => {
//     const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState(null);

//   useEffect(() => {
//     if (!id) {
//         console.error("No ID provided in URL");
//         navigate("/"); // Redirect if no ID
//         return;
//       }
//     const savedData = localStorage.getItem(`healthData-${id}`);
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     } else {
//       navigate("/");
//     }
//   }, [id,navigate]);

//   if (!formData) {
//     return <p className="text-center text-white">Loading...</p>;
//   }

//   return (
//     <div className="min-h-screen p-6 bg-gray-900 text-white">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-center">Your Health Card</h1>
//         <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
//           <h2 className="text-xl font-semibold mb-4">QR Code</h2>
//           <QRCodeCanvas value={id || "invalid"} size={200} />
//         </div>

//         {/* Display Personal & Medical Information */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-6">
//           <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//           <p><strong>Name:</strong> {formData.fullName}</p>
//           <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
//           <p><strong>Gender:</strong> {formData.gender}</p>
//           {formData.profilePicture && (
//             <img src={formData.profilePicture} alt="Profile" className="mt-4 w-32 h-32 rounded-full mx-auto" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QRCard;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { useTheme } from "./ThemeContext";

// Define the expected structure of formData
interface FormData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  profilePicture?: string;
}

const QRCard: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // Ensure id is typed correctly
  const navigate = useNavigate();
  const { theme } = useTheme(); // Get current theme
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    if (!id) {
      console.error("No ID provided in URL");
      navigate("/"); // Redirect if no ID
      return;
    }

    const savedData = localStorage.getItem(`healthData-${id}`);
    if (savedData) {
      setFormData(JSON.parse(savedData) as FormData);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  if (!formData) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen p-6`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Health Card</h1>

        {/* QR Code Section */}
        <div className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} p-6 rounded-lg shadow-md text-center`}>
          <h2 className="text-xl font-semibold mb-4">QR Code</h2>
          <QRCodeCanvas value={id || "invalid"} size={200} />
        </div>

        {/* Display Personal & Medical Information */}
        <div className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} p-6 rounded-lg shadow-md mt-6`}>
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <p><strong>Name:</strong> {formData.fullName}</p>
          <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          {formData.profilePicture && (
            <img src={formData.profilePicture} alt="Profile" className="mt-4 w-32 h-32 rounded-full mx-auto" />
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCard;
