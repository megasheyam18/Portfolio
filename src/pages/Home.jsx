import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import FloatingSocials from "../components/FloatingSocials";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
import About from "../components/About";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import CertificateModal from "../components/CertificateModal";
import CustomCursor from "../components/CustomCursor";

function Home() {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Handle scroll to section on page load if hash is present
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleOpenModal = (pdf, title, organization) => {
    // For PDFs, we'll show the image in modal
    const certImage = `/assets/Cerfectiate/${title.toLowerCase().replace(/\s+/g, "-")}.png`;
    setModalData({ image: certImage, title, organization, pdf });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <CustomCursor />
      <CertificateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        certData={modalData}
      />
      <Navbar />
      <FloatingSocials />

      <Hero />
      <Tools />
      <About />
      <Services />
      <Experience />
      <Education />
      <Projects />
      <Certificates onOpenModal={handleOpenModal} />
      <Contact />
    </>
  );
}

export default Home;
