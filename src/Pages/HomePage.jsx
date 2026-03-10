import Hero from "../components/Hero";
import BestSellersCarousel from "../components/BestSellersCarousel";
import PrepAssistant from "../components/PrepAssistant";
import Brew from "../components/Brew";
import Testimonials from "../components/Testimonials";
import Categories from "./Categories";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function HomePage() {
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero/>
      <BestSellersCarousel />
      <Categories/>
      <PrepAssistant />
      <Brew />
      <Testimonials />
      <Footer />
    </>
  );
}
