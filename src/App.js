import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import History from "./pages/History";
import Admin from "./pages/Admin";
import ServerMonitor from "./pages/ServerMonitor";
import Login from "./pages/Login";

function AppContent() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="app-container">

      {!isLoginPage && <Navbar />}

      <div className="main-container">

        {!isLoginPage && <Sidebar />}

        <div className="content">
          <Routes>

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/attendance"
              element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              }
            />

            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <History />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/server-monitor"
              element={
                <ProtectedRoute>
                  <ServerMonitor />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={<Login />}
            />

          </Routes>
        </div>

      </div>

      {!isLoginPage && <Footer />}

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;