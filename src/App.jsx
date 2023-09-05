import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ExpertisePage from "./pages/ExpertisePage";
import TeamPage from "./pages/TeamPage";
import WorksPage from "./pages/WorksPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import BackToTop from "./components/backToTop/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      mirror: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
