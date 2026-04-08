import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from './Pages/Dashboard';
import Patients from './Pages/Patients';
import Doctors from './Pages/Doctors';
import Appointments from './Pages/Appointments';
import Billing from './Pages/Billing';
import Staff from './Pages/Staff';
import Beds from './Pages/Beds';
import Pharmacy from './Pages/Pharmacy';
import LabReports from './Pages/LabReports';
import Analytics from './Pages/Analytics';
import Settings from './Pages/Settings';
import Login from './Pages/Login';
import Main from './Pages/Main';
import AboutUs from './Pages/AboutUs';
import Departments from './Pages/Departments';
import PatientVisitors from './Pages/PatientVisitors';
import Media from './Pages/Media';
import ArtClinic from './Pages/ArtClinic';
import ContactUs from './Pages/ContactUs';
import Career from './Pages/Career';

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Login />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        {/* Standalone public pages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/patient-visitors" element={<PatientVisitors />} />
        <Route path="/media" element={<Media />} />
        <Route path="/art-clinic" element={<ArtClinic />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/career" element={<Career />} />

        {/* Private dashboard pages */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex-1 min-h-screen bg-gray-100">
                  <Navbar />
                  <div className="p-6">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="patients" element={<Patients />} />
                      <Route path="doctors" element={<Doctors />} />
                      <Route path="staff" element={<Staff />} />
                      <Route path="beds" element={<Beds />} />
                      <Route path="appointments" element={<Appointments />} />
                      <Route path="billing" element={<Billing />} />
                      <Route path="pharmacy" element={<Pharmacy />} />
                      <Route path="lab-reports" element={<LabReports />} />
                      <Route path="analytics" element={<Analytics />} />
                      <Route path="settings" element={<Settings />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
