import React, { useState, useEffect, useCallback } from "react";
import Header from "../Header/Header";
import "./Hero.css";
import "../../App";

const Hero = (blobity) => {
  const [mainViewHeight, setMainViewHeight] = useState("100vh");
  const [nuvemTopY, setNuvemTopY] = useState(null);
  const [livroBottomY, setLivroBottomY] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (nuvemTopY != null && livroBottomY != null) {
      setMainViewHeight(livroBottomY - nuvemTopY);
    }
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.addEventListener("resize", changeWidth);
    };
  }, [livroBottomY, nuvemTopY]);

  const scrollTo = useCallback((classname) => {
    document.getElementsByClassName(classname)[0].scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="main-view" style={{ height: mainViewHeight }}>
      <Header />
      {/*<img className="mada-design" src="/madaDesign.svg" />
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
      />*/}
      {screenWidth >= 480 && (
        <img
          className="hero-image"
          src="./heroComplete.svg"
          onLoad={(e) => {
            setNuvemTopY(e.target.getBoundingClientRect().top);
            setLivroBottomY(e.target.getBoundingClientRect().bottom);
          }}
          onMouseOver={(e) => {
            e.target.classList.add("hero-animation");
            /*blobity.updateOptions({ size: "60" });*/
          }}
          onMouseLeave={(e) => {
            e.target.classList.remove("hero-animation");
          }}
          onClick={(e) => {
            scrollTo("book");
          }}
        ></img>
      )}
      {screenWidth < 480 && (
        <img
          className="mada-design"
          src="/madaDesign.svg"
          onLoad={(e) => {
            setNuvemTopY(e.target.getBoundingClientRect().top);
            setLivroBottomY(e.target.getBoundingClientRect().bottom);
            e.target.classList.add("hero-animation");
          }}
          onClick={(e) => {
            scrollTo("book");
          }}
        />
      )}
    </div>
  );
};

export default Hero;
