
import Header from "./pages/Header";
import Accordion from "./components/Accordion";
import Features from "./pages/Features";
import HowWeWork from "./pages/HowWeWork";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import People from "./pages/People";
import Services from "./services/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Features />
      <HowWeWork />
      <Industries />
      <AboutUs />
      <People />
      <Accordion />
      <Footer />
    </div>
  );
}
