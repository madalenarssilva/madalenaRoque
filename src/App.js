import "./App.css";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projetcs/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Book />
      <Projects />
    </div>
  );
}

export default App;
