import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LeadForm from "./pages/LeadForm";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/lead" element={<LeadForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
