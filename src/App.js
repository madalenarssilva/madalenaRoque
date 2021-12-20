import "./App.css";
import Book from "./components/Book/Book";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projetcs/Projects";
import useBlobity from "blobity/lib/useBlobity";

function App() {
  const blobity = new useBlobity({
    invert: true,
    focusableElements: "[data-blobity]",
  });
  return (
    <div className="App">
      <Header />
      <Hero />
      <Book />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
