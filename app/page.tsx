
import Header from "./pages/Header";
import Features from "./pages/Features";
import HowWeWork from "./pages/HowWeWork";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Features />
      <HowWeWork />
      <Industries />
      <AboutUs />
    </div>
  );
}
