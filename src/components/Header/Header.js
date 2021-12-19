import React, { useState, useEffect } from "react";
import "./Header.css";
import { MenuButton } from "./MenuButton.js";
import { motion } from "framer-motion";

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

  return (
    <>
      <div className="header">
        <div className="name">
          <p className="fist-name">madalena</p>
          <p className="last-name">Roque</p>
        </div>
        {screenWidth >= 480 && (
          <div className="navbar">
            <p>about</p>
            <p>projects</p>
            <p>media</p>
          </div>
        )}
      </div>
      <MenuButton
        className="hamburguer"
        isOpen={isOpen}
        onClick={() => {
          setOpen(!isOpen);
        }}
        strokeWidth="4"
        color="var(--textColor)"
        lineProps={{ strokeLinecap: "round" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        width="24"
        height="24"
      />
      {isOpen && screenWidth <= 480 && (
        <motion.div
          className="navbar"
          initial={{
            translateX: "-5vw",
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
        >
          <p>about</p>
          <p>projects</p>
          <p>media</p>
        </motion.div>
      )}
    </>
  );
};

export default Header;
