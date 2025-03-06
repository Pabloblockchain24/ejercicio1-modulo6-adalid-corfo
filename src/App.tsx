import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EquipoMedico from "./pages/EquipoMedico";
import AddAppointment from "./pages/AddAppointment";
import ServiciosMedicos from "./pages/ServiciosMedicos";
import DataProvider from "./context/DataContext";
import ProfilerView from "./pages/ProfilerView";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddDoctor from "./pages/AddDoctor";
import AddService from "./pages/AddService";
import Navbar from "./components/Navbar";
import EditAppointment from "./pages/EditAppointment";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoutes";
import Vulnerabilities from "./pages/Vulnerabilities";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <DataProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EquipoMedico" element={<EquipoMedico />} />
            <Route path="/AddAppointment" element={<AddAppointment />} />
            <Route path="/ServiciosMedicos" element={<ServiciosMedicos />} />
            <Route path="/ProfilerView" element={<ProfilerView />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRules={["admin", "doctor"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vulnerabilities"
              element={
                <ProtectedRoute allowedRules={["admin"]}>
                  <Vulnerabilities />
                </ProtectedRoute>
              }
            />
            <Route
              path="/AddDoctor"
              element={
                <ProtectedRoute allowedRules={["admin"]}>
                  <AddDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/AddService"
              element={
                <ProtectedRoute allowedRules={["admin"]}>
                  <AddService />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-appointment/:id"
              element={
                <ProtectedRoute allowedRules={["admin", "doctor"]}>
                  <EditAppointment />
                </ProtectedRoute>
              }
            />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
