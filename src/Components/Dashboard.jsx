// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import { useState, useCallback } from "react";
// import { FaDownload, FaCopy, FaRedo } from "react-icons/fa";
// import { QRCodeSVG } from "qrcode.react";

// const DashBoard = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     dateOfBirth: null, // Changed from "undefined" to null
//     gender: "",
//     contactNumber: "",
//     email: "",
//     profilePicture: null,
//     bloodGroup: "",
//     allergies: "",
//     chronicConditions: "",
//     currentMedications: "",
//     emergencyContactName: "",
//     emergencyContactNumber: "",
//     vaccinationRecords: "",
//     previousSurgeries: "",
//     existingConditions: "",
//     familyHistory: "",
//     consentAnalytics: false,
//     privacyPolicy: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [qrGenerated, setQrGenerated] = useState(false);
//   const [previewUrl, setPreviewUrl] = useState("");
//   const [photo,setPhoto]=useState(null);
//   const [photoBase64,setPhotoBase64]=useState(null);
//   const [contacts, setContacts] = useState(() => {
//     // Try to load the contacts from localStorage if available
//     const savedContacts = localStorage.getItem("emergencyContacts");
//     return savedContacts ? JSON.parse(savedContacts) : [];
//   }); // To store the emergency contacts
//   const [name, setName] = useState(""); // For contact name
//   const [phone, setPhone] = useState("");





//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPhotoBase64(reader.result); // Store the base64 representation of the photo
//       };
//       reader.readAsDataURL(file); // Convert image to base64
//       setPhoto(file); // Optionally, store the file object for any future use
//     }
//   };




//   const handleInputChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     if (type === "file") {
//       const file = files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setPreviewUrl(reader.result);
//         };
//         reader.readAsDataURL(file);
//       }
//       setFormData((prev) => ({ ...prev, [name]: file }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: type === "checkbox" ? checked : value,
//       }));
//     }
//     validateField(name, type === "checkbox" ? checked : value);
//   };

//   const validateField = (name, value) => {
//     let newErrors = { ...errors };

//     switch (name) {
//       case "email":
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         newErrors.email = !emailRegex.test(value) ? "Invalid email format" : "";
//         break;
//       case "contactNumber":
//         const phoneRegex = /^\d{10}$/;
//         newErrors.contactNumber = !phoneRegex.test(value)
//           ? "Invalid phone number"
//           : "";
//         break;
//       default:
//         if (!value && value !== false) {
//           newErrors[name] = "This field is required";
//         } else {
//           delete newErrors[name];
//         }
//     }

//     setErrors(newErrors);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formIsValid = Object.keys(errors).length === 0;
//     if (formIsValid && formData.privacyPolicy) {
//       setQrGenerated(true);
//     }

//     if (name && phone) {
//       const newContact = { name, phone };
      
//       // Update contacts, ensure no more than 3
//       const updatedContacts = [newContact, ...contacts].slice(0, 3);

//       // Save contacts to localStorage to persist data after reload
//       setContacts(updatedContacts);
//       localStorage.setItem("emergencyContacts", JSON.stringify(updatedContacts));

//       // Reset input fields
//       setName("");
//       setPhone("");
//     } else {
//       alert("Please fill in both fields.");
//     }



//   };

//   const downloadQR = useCallback(() => {
//     const svg = document.getElementById("qr-code");
//     if (svg) {
//       const svgData = new XMLSerializer().serializeToString(svg);
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");
//       const img = new Image();
//       img.onload = () => {
//         canvas.width = img.width;
//         canvas.height = img.height;
//         ctx.drawImage(img, 0, 0);
//         const pngFile = canvas.toDataURL("image/png");
//         const downloadLink = document.createElement("a");
//         downloadLink.download = "qr-code.png";
//         downloadLink.href = pngFile;
//         downloadLink.click();
//       };
//       img.src = "data:image/svg+xml;base64," + btoa(svgData);
//     }
//   }, []);

//   const copyQRLink = () => {
//     navigator.clipboard.writeText("Generated QR Link");
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-900 text-white">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8">Edit Personal Information</h1>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Personal Information */}
//           <section className="bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   className="w-full p-1 border rounded border-gray-600 bg-gray-700 focus:ring-2 focus:ring-blue-400"
//                   required
//                 />
//                 <label className="block mb-2 mt-4">
//                   Enter Your Date of Birth
//                 </label>
//                 <DatePicker
//                   selected={formData.dateOfBirth}
//                   onChange={(date) => setFormData({ ...formData, dateOfBirth: date })}
//                   dateFormat="yyyy-MM-dd"
//                   placeholderText="Select Date of Birth"
//                   className="w-full p-1 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
//                 />
//                 <label className="block  mb-2 mt-4">Gender</label>
//                 <input type="text"
//                 placeholderText="Enter Gender"
//                 onChange={handleInputChange}
//                 required
//                 className="border  border-gray-600 rounded-lg shadow-sm bg-gray-700 p-1 "
//                 />
//                 <label className="block mb-2 mt-4" htmlFor="photo-upload" >
//                   Upload Photo:
//                 </label>
//                 <input 
//                 type="file"
//                 id="photo-upload"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="border  border-gray-600 rounded-lg shadow-sm bg-gray-700 p-1 cursor-pointer"
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Medical Information */}
//           <section className="bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
//             <label className="block mb-2 mt-4">Blood Group</label>
//             <input type="text"
//                 placeholderText="O+"
//                 onChange={handleInputChange}
//                 required
//                 className="border  border-gray-600 rounded-lg shadow-sm bg-gray-700  "
//                 />
//                 <label className="block mb-2 mt-4">Lab Tests and Results</label>
//                 <input type="comment"
//                 placeholderText="O+"
//                 onChange={handleInputChange}
//                 required
//                 className="border w-full border-gray-600 rounded-lg shadow-sm bg-gray-700  "
//                 />
//           </section>

//           {/* Medical History */}
//           <section className="bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Emergency Contact Information</h2>
//             <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name: </label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="border  border-gray-600 rounded-lg shadow-sm bg-gray-700  cursor-pointer"
//           />
//         </div>
//         <div>
//           <label>Phone Number: </label>
//           <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//             className="border  border-gray-600 rounded-lg shadow-sm bg-gray-700 mt-2 cursor-pointer"
//           />
//         </div>
//         <button type="submit" className="border  border-gray-600 rounded-lg shadow-sm bg-gray-700 p-1 cursor-pointer">Add Contact</button>
//       </form>
//       <h3>Emergency Contacts (up to 3):</h3>
//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             <strong>{contact.name}</strong>: {contact.phone}
//           </li>
//         ))}
//       </ul>

//           </section>

//           {/* Consent and Privacy */}
//           <section className="bg-gray-800 p-6 rounded-lg shadow-md">
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="consentAnalytics"
//                   checked={formData.consentAnalytics}
//                   onChange={handleInputChange}
//                   className="mr-2"
//                 />
//                 <label>I consent to anonymous analytics collection</label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="privacyPolicy"
//                   checked={formData.privacyPolicy}
//                   onChange={handleInputChange}
//                   className="mr-2"
//                   required
//                 />
//                 <label>I agree to the privacy policy</label>
//               </div>
//             </div>
//           </section>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Generate QR Code
//           </button>
//         </form>

//         {qrGenerated && (
//           <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Your QR Code</h2>
//             <div className="flex flex-col items-center space-y-4">
//               <QRCodeSVG
//                 id="qr-code"
//                 value={JSON.stringify(formData)}
//                 size={256}
//                 level="H"
//                 includeMargin={true}
//               />
//               <div className="flex space-x-4">
//                 <button onClick={downloadQR} className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
//                   <FaDownload />
//                   <span>Download</span>
//                 </button>
//                 <button onClick={copyQRLink} className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
//                   <FaCopy />
//                   <span>Copy Link</span>
//                 </button>
//                 <button onClick={() => setQrGenerated(false)} className="flex items-center space-x-2 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
//                   <FaRedo />
//                   <span>Regenerate</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DashBoard;





// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const DashBoard = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     dateOfBirth: null,
//     gender: "",
//     profilePicture: null,
//     bloodGroup: "",
//     labTests: "",
//     emergencyContacts: [],
//     consentAnalytics: false,
//     privacyPolicy: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [photoPreview, setPhotoPreview] = useState(null);
//   const [newContact, setNewContact] = useState({ name: "", phone: "" });

//   useEffect(() => {
//     const savedContacts = localStorage.getItem("emergencyContacts");
//     if (savedContacts) {
//       setFormData((prev) => ({ ...prev, emergencyContacts: JSON.parse(savedContacts) }));
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//     validateField(name, value);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setPhotoPreview(reader.result);
//       reader.readAsDataURL(file);
//       setFormData((prev) => ({ ...prev, profilePicture: file }));
//     }
//   };

//   const validateField = (name, value) => {
//     let newErrors = { ...errors };
//     if (!value) {
//       newErrors[name] = "This field is required";
//     } else {
//       delete newErrors[name];
//     }
//     setErrors(newErrors);
//   };

//   const handleAddContact = (e) => {
//     e.preventDefault();
//     if (newContact.name && newContact.phone) {
//       const updatedContacts = [...formData.emergencyContacts, newContact].slice(0, 3);
//       setFormData((prev) => ({ ...prev, emergencyContacts: updatedContacts }));
//       localStorage.setItem("emergencyContacts", JSON.stringify(updatedContacts));
//       setNewContact({ name: "", phone: "" });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (Object.keys(errors).length === 0 && formData.privacyPolicy) {
//       localStorage.setItem("formData", JSON.stringify(formData));
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-900 text-white">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8">Edit Personal Information</h1>
//         <form onSubmit={handleSubmit} className="space-y-8">
//           <section className="bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//             <label>Full Name</label>
//             <input type="text" name="fullName" onChange={handleInputChange} required className="w-full bg-gray-700 p-2" />
//             <label>Date of Birth</label>
//             <DatePicker selected={formData.dateOfBirth} onChange={(date) => setFormData({ ...formData, dateOfBirth: date })} className="mt-3 mb-1 mr-1 bg-gray-700 " /><br></br>
//             <label className="mt-3">Gender</label>
//             <select name="gender" onChange={handleInputChange} className="w-full mt-3 bg-gray-700 p-2">
//               <option value="">Select</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//             <label className=" mt-3">Upload Photo</label>
//             <input type="file" accept="image/*" onChange={handleFileChange} className="w-full mt-2 bg-gray-700 p-2" />
//           </section>
//           <section className="bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
//             <label>Blood Group</label>
//             <input type="text" name="bloodGroup" onChange={handleInputChange} className="w-full bg-gray-700 p-2" />
//             <label>Lab Tests and Results</label>
//             <textarea name="labTests" onChange={handleInputChange} className="w-full bg-gray-700 p-2"></textarea>
//           </section>
//           <section className="bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
//             <input type="text" placeholder="Name" value={newContact.name} onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} className="w-full bg-gray-700 p-2" />
//             <input type="tel" placeholder="Phone" value={newContact.phone} onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })} className="w-full bg-gray-700 p-2 mt-2" />
//             <button type="button" onClick={handleAddContact} className="mt-2 bg-blue-600 px-4 py-2">Add Contact</button>
//           </section>
//           <section className="bg-gray-800 p-6 rounded-lg shadow-md">
//             <input type="checkbox" name="privacyPolicy" onChange={handleInputChange} /> I agree to the privacy policy
//           </section>
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded">Generate QR Code</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DashBoard;



import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: null,
    gender: "",
    profilePicture: null,
    bloodGroup: "",
    labTests: "",
    emergencyContacts: [],
    consentAnalytics: false,
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const [newContact, setNewContact] = useState({ name: "", phone: "" });

  useEffect(() => {
    const savedContacts = localStorage.getItem("emergencyContacts");
    if (savedContacts) {
      setFormData((prev) => ({
        ...prev,
        emergencyContacts: JSON.parse(savedContacts),
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    validateField(name, value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
        setFormData((prev) => ({ ...prev, profilePicture: reader.result })); // Save as base64
      };
      reader.readAsDataURL(file);
    }
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    if (!value) {
      newErrors[name] = "This field is required";
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (newContact.name && newContact.phone) {
      const updatedContacts = [...formData.emergencyContacts, newContact].slice(
        0,
        3
      );
      setFormData((prev) => ({ ...prev, emergencyContacts: updatedContacts }));
      localStorage.setItem("emergencyContacts", JSON.stringify(updatedContacts));
      setNewContact({ name: "", phone: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (Object.keys(errors).length === 0 && formData.privacyPolicy) {
    //   const formattedData = {
    //     ...formData,
    //     dateOfBirth: formData.dateOfBirth
    //       ? formData.dateOfBirth.toISOString().split("T")[0]
    //       : "",
    //   };
    //   localStorage.setItem("formData", JSON.stringify(formattedData));
    //   navigate("/qr"); // Replace with actual path
    // }
    if (!formData.privacyPolicy) {
      alert("Please accept the privacy policy.");
      return;
    }
  
    const uniqueId = uuidv4(); // Generate unique ID
    const formattedData = {
      ...formData,
      dateOfBirth: formData.dateOfBirth
        ? formData.dateOfBirth.toISOString().split("T")[0]
        : "",
    };
  
    localStorage.setItem(`healthData-${uniqueId}`, JSON.stringify(formattedData));
  
    navigate(`/qr-card/${uniqueId}`); // Pass ID in URL

  };

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Edit Personal Information</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <label>Full Name</label>
            <input type="text" name="fullName" onChange={handleInputChange} required className="w-full bg-gray-700 p-2 border-1 border-gray-500 rounded-lg" />
            <label>Date of Birth</label>
            <DatePicker selected={formData.dateOfBirth} onChange={(date) => setFormData({ ...formData, dateOfBirth: date })} className="mt-3 mb-1 ml-2 bg-gray-700 border-1 border-gray-500 rounded-lg " /><br />
            <label>Gender</label>
            <select name="gender" onChange={handleInputChange} className="w-full mt-3 bg-gray-700 p-2 border-1 border-gray-500 rounded-lg">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label>Upload Photo</label>
            <input type="file" accept="image/*" onChange={handleFileChange} className="w-full mt-2 bg-gray-700 p-2 border-1 border-gray-500 rounded-lg" />
          </section>

          {/* Medical Information */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
            <label>Blood Group</label>
            <input type="text" name="bloodGroup" onChange={handleInputChange} className="w-full bg-gray-700 p-2 border-1 border-gray-500 rounded-lg" />
            <label>Lab Tests and Results</label>
            <textarea name="labTests" onChange={handleInputChange} className="w-full bg-gray-700 p-2 border-1 border-gray-500 rounded-lg"></textarea>
          </section>

          {/* Emergency Contacts */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
            <input type="text" placeholder="Name" value={newContact.name} onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} className="w-full bg-gray-700 p-2 border-1 border-gray-500 rounded-lg" />
            <input type="tel" placeholder="Phone" value={newContact.phone} onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })} className="w-full bg-gray-700 p-2 mt-2 border-1 border-gray-500 rounded-lg" />
            <button type="button" onClick={handleAddContact} className="mt-2 bg-blue-600 px-4 py-2">Add Contact</button>
          </section>

          {/* Privacy Policy Agreement */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <input type="checkbox" name="privacyPolicy" onChange={handleInputChange} /> I agree to the privacy policy
          </section>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded">Generate QR Code</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;

