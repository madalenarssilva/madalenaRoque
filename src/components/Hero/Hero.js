import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  const [mainViewHeight, setMainViewHeight] = useState("100vh");
  const [nuvemTopY, setNuvemTopY] = useState(null);
  const [livroBottomY, setLivroBottomY] = useState(null);

  useEffect(() => {
    if (nuvemTopY != null && livroBottomY != null) {
      setMainViewHeight(livroBottomY - nuvemTopY);
    }
  }, [livroBottomY, nuvemTopY]);

  return (
    <div className="main-view" style={{ height: mainViewHeight }}>
      <Header />
      <img className="mada-design" src="/madaDesign.svg" />
      <img
        onLoad={(e) => setNuvemTopY(e.target.getBoundingClientRect().top)}
        className="lapis"
        src="/lapis.svg"
      />
      <img className="musica" src="/musica.svg" />
      <img className="nuvem" src="/nuvem.svg" />
      <img className="pc" src="/pc.svg" />
      <img
        onLoad={(e) => setLivroBottomY(e.target.getBoundingClientRect().bottom)}
        className="livro"
        src="/livro.svg"
      />
    </div>
  );
};

export default Hero;
