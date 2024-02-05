import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/Settings";
import RegisterAuth from "./pages/RegisterAuth";
import Navbar from "./components/navbar/Navbar";
import Notification from "./pages/Notification";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/userauth"
          element={
            <PrivateRoute>
              <RegisterAuth />
            </PrivateRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />

        <Route
          path="/notification"
          element={
            <PrivateRoute>
              <Notification />
            </PrivateRoute>
          }
        />

        <Route path="*">NOT FOUND</Route>
      </Routes>
    </Router>
  );
}

export default App;
