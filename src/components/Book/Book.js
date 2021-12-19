import React from "react";
import "./Book.css";
import styled from "styled-components";
import HTMLFlipBook from "react-pageflip";

const Book = () => {
  return (
    <>
      <div className="book">
        <HTMLFlipBook width={500} height={600} showCover={true}>
          {/* CAPA*/}
          <div className="demoPage">
            <PageBook className="page-book">
              <img className="about" src="/about.svg" />
            </PageBook>
          </div>
          {/* PAGINA EM BRANCO*/}
          <div className="demoPage">
            <PageBook className="page-book"></PageBook>
          </div>
          {/* PRIMEIRA PAGINA*/}
          <div className="demoPage">
            <PageBook className="page-book">
              <p>My name is Madalena Roque Silva.</p>
              <p>I am a Software Engineer from University of Coimbra.</p>
            </PageBook>
          </div>
          {/* PAGINA EM BRANCO*/}
          <div className="demoPage">
            <PageBook className="page-book"></PageBook>
          </div>
          {/* SEGUNDA PAGINA*/}
          <div className="demoPage">
            <PageBook className="page-book">
              <p>
                I love coding, building new interactive websites and platforms.{" "}
              </p>
              <img
                src="/pc.svg"
                style={{
                  width: "30vw",
                  marginTop: "3rem",
                }}
              />
            </PageBook>
          </div>
          {/* PAGINA EM BRANCO*/}
          <div className="demoPage">
            <PageBook className="page-book"></PageBook>
          </div>
          {/* TERCEIRA PAGINA*/}
          <div className="demoPage">
            <PageBook className="page-book">
              <p>In my free time I like to read a lot of books. </p>
              <img
                src="/livro2.svg"
                style={{
                  width: "25vw",
                  marginLeft: "5rem",
                  marginTop: "-1rem",
                }}
              />
            </PageBook>
          </div>
          {/* PAGINA EM BRANCO*/}
          <div className="demoPage">
            <PageBook className="page-book"></PageBook>
          </div>
          {/* QUARTA PAGINA*/}
          <div className="demoPage">
            <PageBook className="page-book">
              <p>
                Listen to different music genres, from classical music to the
                last Pop hits.
              </p>
              <img
                src="/musica2.svg"
                style={{
                  width: "20vw",
                  marginLeft: "6rem",
                  marginTop: "-1rem",
                }}
              />
            </PageBook>
          </div>
          {/* PAGINA EM BRANCO*/}
          <div className="demoPage">
            <PageBook className="page-book"></PageBook>
          </div>
          {/* QUINTA PAGINA*/}
          <div className="demoPage">
            <PageBook className="page-book">
              <p>Make illustrations.</p>
              <img
                src="/lapis2.svg"
                style={{
                  width: "30vw",
                  marginLeft: "2.2rem",
                  marginTop: "-6.2rem",
                }}
              />
            </PageBook>
          </div>
          {/* PAGINA EM BRANCO*/}
          <div className="demoPage">
            <PageBook className="page-book"></PageBook>
          </div>
          {/* SEXTA PAGINA*/}
          <div className="demoPage">
            <PageBook className="page-book">
              <p>
                And to learn new thinks , be creative and make a lot of
                philosophical questions.
              </p>
              <img
                src="/nuvem2.svg"
                style={{
                  width: "20vw",
                  marginLeft: "10rem",
                  marginTop: "-1rem",
                }}
              />
            </PageBook>
          </div>
          {/* PAGINA EM BRANCO*/}
          <div className="demoPage">
            <PageBook className="page-book"></PageBook>
          </div>
        </HTMLFlipBook>
      </div>
    </>
  );
};

export const PageBook = styled.div`
  border: 1.5px solid white;
  width: 100%;
  height: 100%;
  background: black;
`;

export default Book;
