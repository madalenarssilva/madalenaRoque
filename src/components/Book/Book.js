import React, { useMemo } from "react";
import "./Book.css";
import styled from "styled-components";
import HTMLFlipBook from "react-pageflip";
import { convertRemToPixels, DESKTOP_PAGE } from "../../utils";

const Book = () => {
  const isMobile = useMemo(
    () => window.innerWidth <= DESKTOP_PAGE.width * 2,
    []
  );

  return (
    <>
      <div className="book">
        <HTMLFlipBook
          className={isMobile && "flip-book"}
          width={
            isMobile
              ? window.innerWidth - convertRemToPixels(2)
              : DESKTOP_PAGE.width
          }
          height={isMobile ? window.innerHeight * 0.9 : DESKTOP_PAGE.height}
          usePortrait={isMobile}
          showCover={!isMobile}
        >
          {/* CAPA*/}
          <div className="demoPage">
            <img className="about" src="/about.svg" />
          </div>
          {/* PAGINA EM BRANCO*/}
          {!isMobile ? <div className="demoPage" /> : <></>}
          {/* PRIMEIRA PAGINA*/}
          <div className="demoPage">
            <p>My name is Madalena Roque Silva.</p>
            <p>I am a Software Engineer from University of Coimbra.</p>
          </div>
          {/* PAGINA EM BRANCO*/}
          {!isMobile ? <div className="demoPage" /> : <></>}
          {/* SEGUNDA PAGINA*/}
          <div className="demoPage">
            <p>
              I love coding, building new interactive websites and platforms.{" "}
            </p>
            <img
              src="/pc.svg"
              style={{
                width: "70%",
                marginTop: "10%",
              }}
            />
          </div>
          {/* PAGINA EM BRANCO*/}
          {!isMobile ? <div className="demoPage" /> : <></>}
          {/* TERCEIRA PAGINA*/}
          <div className="demoPage">
            <p>In my free time I like to read a lot of books. </p>
            <img
              src="/livro2.svg"
              style={{
                width: "80%",
                marginLeft: "10%",
                marginTop: "-2.8%",
              }}
            />
          </div>
          {/* PAGINA EM BRANCO*/}
          {!isMobile ? <div className="demoPage" /> : <></>}
          {/* QUARTA PAGINA*/}
          <div className="demoPage">
            <p>
              Listen to different music genres, from classical music to the last
              Pop hits.
            </p>
            <img
              src="/musica2.svg"
              style={{
                width: "55%",
                marginLeft: "17%",
                marginTop: "-10%",
              }}
            />
          </div>
          {/* PAGINA EM BRANCO*/}
          {!isMobile ? <div className="demoPage" /> : <></>}
          {/* QUINTA PAGINA*/}
          <div className="demoPage">
            <p>Make illustrations.</p>
            <img
              src="/lapis2.svg"
              style={{
                width: "85%",
                marginTop: "-22%",
                marginLeft: "5%",
              }}
            />
          </div>
          {/* PAGINA EM BRANCO*/}
          {!isMobile ? <div className="demoPage" /> : <></>}
          {/* SEXTA PAGINA*/}
          <div className="demoPage">
            <p>
              And to learn new thinks , be creative and make a lot of
              philosophical questions.
            </p>
            <img
              src="/nuvem2.svg"
              style={{
                width: "70%",
                marginLeft: "12%",
                marginTop: "-24%",
              }}
            />
          </div>
          {/* PAGINA EM BRANCO*/}
          <div className="demoPage" />
        </HTMLFlipBook>
      </div>
    </>
  );
};

export const PageBook = styled.div`
  width: 100%;
  height: 100%;
  background: black;
`;

export default Book;
