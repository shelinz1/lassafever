import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import EditProfile from "./pages/Edit";
import RegisterAuth from "./pages/RegisterAuth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/userauth" element={<RegisterAuth />} />
        {/* <Route path="*">NOT FOUND</Route> */}
      </Routes>
    </Router>
  );
}

export default App;
