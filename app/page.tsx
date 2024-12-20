import Image from "next/image";
import Header from "./pages/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Header/>
      </div>
    </div>
  );
}
  