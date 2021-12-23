import React, { useState, useEffect, useCallback } from "react";
import "./Header.css";
import { MenuButton } from "./MenuButton.js";
import { motion } from "framer-motion";
import { MdArrowCircleUp } from "react-icons/md";

const Header = () => {
  const [isOpen, setOpen] = React.useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.addEventListener("resize", changeWidth);
    };
  }, []);

  const scrollTo = useCallback((classname) => {
    document.getElementsByClassName(classname)[0].scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="header">
        {screenWidth >= 480 && (
          <div className="name" onClick={() => scrollTo("main-view")}>
            <p className="fist-name">madalena</p>
            <p className="last-name">Roque</p>
          </div>
        )}
        <div className="navbar">
          <p
            onClick={() => scrollTo("book")}
            data-blobity
            data-blobity-radius="4"
            data-blobity-offset-x="0"
            data-blobity-offset-y="0"
            data-blobity-magnetic="true"
            style={{ padding: "0 0.5rem" }}
          >
            about
          </p>
          <p
            onClick={() => scrollTo("projetos")}
            data-blobity
            data-blobity-radius="4"
            data-blobity-offset-x="0"
            data-blobity-offset-y="0"
            data-blobity-magnetic="true"
            style={{ padding: "0 0.5rem" }}
          >
            projects
          </p>
          <p
            onClick={() => scrollTo("contacto")}
            data-blobity
            data-blobity-radius="4"
            data-blobity-offset-x="0"
            data-blobity-offset-y="0"
            data-blobity-magnetic="true"
            style={{ padding: "0 0.5rem" }}
          >
            media
          </p>
        </div>
      </div>

      <img
        data-blobity
        data-blobity-radius="26"
        data-blobity-offset-x="0"
        data-blobity-offset-y="0"
        data-blobity-magnetic="true"
        src="./seta.svg"
        onClick={() => scrollTo("main-view")}
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          margin: "2rem",
          width: 50,
          height: 50,
          zIndex: 1000,
          cursor: "pointer",
        }}
      />
    </>
  );
};

export default React.memo(Header);
