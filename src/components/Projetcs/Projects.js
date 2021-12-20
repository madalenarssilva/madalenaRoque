import React from "react";
import "./Projects.css";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const Projects = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 500, damping: 40 });

  return (
    <div className="projetos">
      <svg
        width="445"
        height="494"
        viewBox="0 0 445 494"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M444 1C438.502 36.659 411.414 115.046 347.041 143.322C266.575 178.667 185.109 153.218 131.632 183.851C88.8502 208.356 65.1604 234.276 67.1595 262.552C66.9929 285.487 69.9583 333.336 83.1527 341.253C99.6457 351.149 137.13 341.253 110.141 315.805C88.6911 295.579 44.4176 307.168 24.565 315.638C24.3003 315.751 24.0376 315.829 23.7571 315.894C17.993 317.213 7.59304 323.525 3.68646 336.54C-3.81034 361.517 5.51893 394.192 17.6804 419.483C27.8428 436.134 59.7626 468.871 106.143 466.609C152.523 464.347 164.452 483.261 164.618 493"
          stroke="white"
          stroke-width="2"
          fill="transparent"
          strokeLinecap="round"
          style={{
            pathLength,
          }}
        />
      </svg>

      {/*<img src="./1.svg" style={{ marginLeft: "3.6%" }} />*/}
      <div>
        <img src="./ellen-grid.svg" style={{ marginLeft: "10%" }} />
        <p>ellen lupton</p>
      </div>
      <img src="./2.svg" style={{ marginLeft: "30%" }} />
      <div>
        <img src="./trio.svg" style={{ marginLeft: "45%" }} />
        <p>trio</p>
      </div>
      <img src="./3.svg" style={{ marginLeft: "15%" }} />
      <div>
        <img src="./ilustrações.svg" style={{ marginLeft: "10%" }} />
        <p>illustrations</p>
      </div>
    </div>
  );
};

export default Projects;
