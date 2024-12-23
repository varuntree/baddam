
import Header from "./pages/Header";
import Features from "./pages/Features";
import HowWeWork from "./pages/HowWeWork";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <Features />
        <HowWeWork />
        <Industries />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}
