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
import Footer from "../components/Footer";
import CertificateModal from "../components/CertificateModal";
import CustomCursor from "../components/CustomCursor";
import LoadingScreen from "../components/LoadingScreen";
import FadeInSection from "../components/FadeInSection";

function Home() {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
    const certImage = `/assets/Cerfectiate/${title.toLowerCase().replace(/\s+/g, "-")}.png`;
    setModalData({ image: certImage, title, organization, pdf });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <CustomCursor />
      <CertificateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        certData={modalData}
      />
      <Navbar />
      <FloatingSocials />

      <FadeInSection delay={100}>
        <Hero />
      </FadeInSection>

      <FadeInSection delay={200}>
        <Tools />
      </FadeInSection>

      <FadeInSection delay={300}>
        <About />
      </FadeInSection>

      <FadeInSection delay={400}>
        <Services />
      </FadeInSection>

      <FadeInSection delay={500}>
        <Experience />
      </FadeInSection>

      <FadeInSection delay={600}>
        <Education />
      </FadeInSection>

      <FadeInSection delay={700}>
        <Projects />
      </FadeInSection>

      <FadeInSection delay={800}>
        <Certificates onOpenModal={handleOpenModal} />
      </FadeInSection>

      <FadeInSection delay={900}>
        <Contact />
      </FadeInSection>

      <Footer />
    </>
  );
}

export default Home;
