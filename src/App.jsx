import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Hygiene from "./components/hygiene/Hygiene";
import Adolescents from "./components/adolescents/Adolescents";
import Reproduction from "./components/reproduction/Reproduction";
import About from "./components/about/About";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />

      <Reproduction></Reproduction>

      {/* Hygiene Section */}
      <Hygiene />

      {/* Adolescents Section */}
      <Adolescents />

      <About />

      <Footer />
    </main>
  );
};

export default App;
