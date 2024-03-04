import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { UsersProvider } from "./context/UsersContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <UsersProvider>
        <App />
      </UsersProvider>
    </AuthProvider>
  </React.StrictMode>
);
