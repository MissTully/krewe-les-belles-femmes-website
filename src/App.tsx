import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Heritage from "./pages/Heritage";
import Fellowship from "./pages/Fellowship";
import GivingBack from "./pages/GivingBack";
import Soiree from "./pages/Soiree";
import Apply from "./pages/Apply";
import ExecutiveProducers from "./pages/ExecutiveProducers";
import Underwriters from "./pages/Underwriters";
import StageDoor from "./pages/StageDoor";
import Calendar from "./pages/Calendar";
import Company from "./pages/Company";

export default function App() {
  const location = useLocation();
  const backstage = location.pathname.startsWith("/stage-door");

  return (
    <div className={backstage ? "backstage" : "front-stage"}>
      <Layout backstage={backstage}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/fellowship" element={<Fellowship />} />
          <Route path="/company" element={<Company />} />
          <Route path="/giving-back" element={<GivingBack />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/soiree" element={<Soiree />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/executive-producers" element={<ExecutiveProducers />} />
          <Route path="/underwriters" element={<Underwriters />} />
          <Route path="/stage-door" element={<StageDoor />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </div>
  );
}
