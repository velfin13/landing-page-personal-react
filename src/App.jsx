import Header from "./components/Header";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Skills from "./components/Main/Skills/Skills";
import Portfolio from "./components/Main/Portfolio";
import Contactme from "./components/Main/Contactme";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contactme />
      </main>
      <Footer />
      
    </>
  );
}

export default App;
