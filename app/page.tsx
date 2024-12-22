
import Header from "./pages/Header";
import Features from "./pages/Features";
import HowWeWork from "./pages/HowWeWork";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Features />
      <HowWeWork />
      <div className="w-full bg-black py-12 flex justify-center">
        <button className="px-8 py-3 bg-black text-white border-2 border-primary rounded-full hover:bg-black/80 transition-all">
          Book Now
        </button>
      </div>
    </div>
  );
}
