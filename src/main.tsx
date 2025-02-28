import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Optional for styling
import "react-datepicker/dist/react-datepicker.css";
import { AuthProvider } from "./Components/Auth";

// Ensure TypeScript knows `document.getElementById("root")` won't be null
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

