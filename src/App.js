import "./App.css";
import { useEffect, useCallback, useRef } from "react";
import Book from "./components/Book/Book";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projetcs/Projects";
import useBlobity from "blobity/lib/useBlobity";
import { useElementScroll } from "framer-motion";

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useElementScroll(ref);

  const blobity = new useBlobity({
    invert: true,
    focusableElements: "[data-blobity]",
  });

  useEffect(() => {
    return scrollYProgress.onChange((v) => console.log(v));
  }, [scrollYProgress]);

  return (
    <div ref={ref} className="App">
      <Hero blobity />
      <Book />
      <Projects scrollYProgress={scrollYProgress} />
    </div>
  );
}

export default App;
