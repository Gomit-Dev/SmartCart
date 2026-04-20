import "./App.css";
import { Routes, Route } from "react-router-dom";

import Registeration from "./pages/registeration";
import Login from "./pages/login";
import Logout from "./pages/logout";

export default function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Registeration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}