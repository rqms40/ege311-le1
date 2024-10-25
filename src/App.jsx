import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Hygiene from "./components/hygiene/Hygiene";
import Adolescents from "./components/adolescents/Adolescents";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <section id="reproduction" className="h-screen bg-secondary">
        <h1>Reproduction</h1>
      </section>

      {/* Hygiene Section */}
      <Hygiene />

      {/* Adolescents Section */}
      <Adolescents />

      <section id="about" className="h-screen bg-secondary">
        <h1>About</h1>
      </section>

      <Footer />
    </main>
  );
};

export default App;
