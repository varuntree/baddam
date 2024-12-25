import Header from "./pages/Header";
import Features from "./pages/Features";
import HowWeWork from "./pages/HowWeWork";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Services from "./pages/Services"; // Added import for Services component

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
        <Features />
        <Services /> {/* Added Services component */}
        <HowWeWork />
        <Industries />
        <AboutUs />
      <Footer />
    </div>
  );
}

// Placeholder for Services component.  This needs to be implemented separately.
// Add styling for glassmorphic hover effect here.
export const Services = () => {
    return (
        <div>
            {/* Services content here */}
        </div>
    )
}