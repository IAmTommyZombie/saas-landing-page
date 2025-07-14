import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <CTA />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
