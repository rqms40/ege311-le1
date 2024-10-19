import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <section id="reproduction" className="h-screen bg-secondary">
        <h1>Reproduction</h1>
      </section>
      <section id="hygiene" className="h-screen">
        <h1>Hygiene</h1>
      </section>
      <section id="adolescents" className="h-screen bg-secondary">
        <h1>Adolescents</h1>
      </section>
      <section id="about" className="h-screen">
        <h1>About</h1>
      </section>
      <Footer />
    </main>
  );
};

export default App;
