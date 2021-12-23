import React, { useEffect } from "react";
import "./Projects.css";
import "../Contact/Contact.css";
import { SiFacebook, SiInstagram } from "react-icons/si";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = ({ scrollYProgress }) => {
  const yRange = useTransform(scrollYProgress, [0.15, 1], [0, 1]);
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    yRange.onChange((v) => console.log("yRange: ", v));
  }, [yRange]);

  const pathLength = useSpring(yRange, {
    stiffness: 500,
    damping: 40,
  });

  return (
    <div className="projetos">
      <svg
        position="absolute"
        zIndex={-1}
        left={20}
        width="100%"
        height={5382}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={`M939.947 4876.71C945.148 4866.3 937.78 4860.81 933.445 4859.36L864.928 4997.29L713.39 5334.76L807.914 4850.68L839.922 4842.01C841.755 4833.33 842.922 4807.31 832.92 4772.61C820.417 4729.23 791.909 4734.44 780.407 4737.91C768.904 4741.38 780.407 4777.81 791.909 4772.61C803.412 4767.4 817.416 4723.16 802.412 4693.66C787.408 4664.17 760.401 4688.46 748.899 4666.77C739.696 4649.42 745.064 4631.2 748.899 4624.26C751.566 4582.33 757.601 4495.18 760.402 4481.99C763.902 4465.51 777.906 4447.29 791.909 4455.1C805.913 4462.91 800.412 4501.08 791.909 4531.44C783.407 4561.8 752.9 4570.48 733.395 4578.29C713.89 4586.09 725.893 4531.44 699.386 4531.44C672.879 4531.44 677.381 4488.06 677.381 4470.71C677.381 4453.36 689.884 4441.22 699.386 4447.29C708.889 4453.36 696.885 4485.46 677.381 4511.49C657.876 4537.51 637.37 4511.49 612.364 4511.49C587.358 4511.49 583.857 4531.44 565.352 4560.93C546.848 4590.43 521.341 4570.48 506.837 4570.48C492.334 4570.48 468.328 4533.17 453.324 4531.44C438.32 4529.7 429.318 4552.26 448.323 4570.48C467.327 4588.7 481.831 4543.58 506.837 4511.49C531.844 4479.39 526.843 4441.22 521.341 4375.29C515.84 4309.36 447.823 4302.42 429.318 4278.99C410.813 4255.57 417.315 4180.1 436.82 4154.07C456.325 4128.05 487.833 4162.75 490.333 4180.1C492.834 4197.45 483.332 4267.71 463.327 4226.94C443.321 4186.17 481.831 4212.19 494.334 4212.19C506.837 4212.19 511.339 4189.64 513.839 4173.16C516.34 4156.67 523.842 4147.13 545.347 4154.07C566.853 4161.01 568.853 4177.49 569.853 4198.31C570.854 4219.13 566.353 4244.29 556.35 4278.99C546.347 4313.69 528.843 4345.79 494.334 4367.48C466.727 4384.83 405.812 4374.71 378.805 4367.48C364.135 4363.14 329.093 4348.74 306.287 4325.84C277.78 4297.21 255.274 4246.89 247.772 4212.19C240.27 4177.49 241.771 4128.05 247.772 4078.6C252.573 4039.04 264.11 4008.33 269.277 3997.92C281.614 3966.4 306.287 3872.3 306.287 3748.07C306.287 3592.79 253.774 3546.81 287.282 3500.83C320.791 3454.86 331.293 3453.12 332.293 3414.08C333.294 3375.04 325.292 3350.75 306.287 3341.21C287.282 3331.67 262.776 3355.96 241.771 3335.14C220.765 3314.32 213.263 3294.37 216.264 3276.15C219.265 3257.93 229.768 3224.96 241.771 3230.17C251.373 3234.33 248.772 3251.57 246.272 3259.66C241.735 3268.05 231.182 3286.21 225.266 3291.76C217.871 3298.7 200.26 3307.38 185.756 3291.76C171.253 3276.15 152.248 3257.06 162.25 3211.95C172.253 3166.84 189.257 3178.99 193.258 3101.78C197.259 3024.57 171.753 2988.13 159.75 2988.13C147.747 2988.13 132.743 2987.27 127.242 3005.48C122.84 3020.06 130.742 3034.69 135.244 3040.18C136.577 3045.39 144.646 3054.24 166.251 3047.99C193.258 3040.18 207.762 3038.45 230.768 3010.69C249.172 2988.48 262.442 2956.9 266.777 2943.89C270.278 2934.64 278.38 2909.88 282.781 2884.9C288.282 2853.67 296.284 2814.63 316.789 2793.81C333.194 2777.15 339.295 2770.68 340.295 2769.52C360.967 2764.6 407.812 2741.59 429.818 2688.84C457.325 2622.91 487.333 2702.72 518.34 2594.28C549.348 2485.84 467.828 2496.25 488.333 2404.3C508.838 2312.34 551.849 2392.15 560.351 2286.31C567.153 2201.64 563.185 2166.6 560.351 2159.66C557.183 2131.9 545.247 2066.31 522.841 2026.06C494.834 1975.74 476.83 1960.13 464.327 1962.73C451.824 1965.33 434.319 1968.8 411.813 1993.96C389.308 2019.12 359.8 2048.62 343.296 2037.34C326.792 2026.06 298.785 2001.77 312.788 1962.73C326.792 1923.69 374.37 1961.86 351.798 1993.96C329.227 2026.06 290.283 2037.34 265.777 2015.65C241.27 1993.96 219.765 1947.12 218.765 1910.68C217.764 1874.24 228.767 1835.21 242.271 1849.09C255.774 1862.97 221.765 1925.43 200.76 1903.74C179.755 1882.05 159.75 1816.12 180.255 1779.69C200.76 1743.25 247.772 1725.9 229.767 1695.54C211.763 1665.17 199.76 1726.77 218.765 1744.12C237.77 1761.47 290.283 1734.57 296.284 1633.94C302.286 1533.31 274.779 1430.08 267.777 1384.97C260.775 1339.86 124.741 1312.1 123.241 1168.96C121.74 1025.82 165.251 1062.25 172.753 1011.07C180.255 959.885 190.258 911.305 143.746 887.882C97.234 864.459 143.746 808.938 143.746 839.301C143.746 869.664 140.245 910.437 118.739 906.099C97.234 901.762 57.724 875.737 52.7227 831.493C47.7215 787.25 -21.7961 854.916 8.71162 851.446C39.2193 847.976 35.2183 776.84 30.2171 738.669C25.2158 700.499 47.7215 659.726 56.2236 651.051C64.7258 642.375 86.7313 618.085 106.236 634.568C125.741 651.051 145.746 687.486 132.243 702.234C118.739 716.982 101.235 724.789 93.233 702.234C85.231 679.679 77.7291 582.517 81.23 573.842C84.7308 565.167 73.7281 531.334 106.236 483.621C138.744 435.907 152.248 449.788 172.753 441.98C193.258 434.172 202.261 379.519 193.258 379.519C184.256 379.519 179.255 453.258 202.761 441.98C226.267 430.702 258.775 468.873 300.285 361.301C341.796 253.73 377.805 221.632 400.811 242.452C423.817 263.272 435.82 305.78 431.819 318.793C427.818 331.806 405.812 349.156 400.811 311.853C395.809 274.55 441.494 221.983 465 205.5C488.506 189.017 501.999 170.718 504 152.5C505.6 137.926 504 152.5 508 121.5C511.5 107.833 524.3 80.7 547.5 81.5C576.5 82.5 604.5 87 607 67C609.5 47 580 57 579.5 67C579 77 615 120 639.5 98.5C664 77 750.5 99 773.5 0.5M939.947 4876.71C934.746 4887.12 789.742 5186.41 717.891 5334.76L707.888 5379L994.461 5146.51V5081.44L791.909 5287.04L1002.96 5064.96L1150 4902.74L1011.46 4887.99L725.893 5334.76L960.452 4940.91C956.118 4943.8 947.149 4944.9 945.948 4926.16C944.748 4907.42 941.447 4885.39 939.947 4876.71Z`}
          stroke="white"
          stroke-width="2"
          fill="transparent"
          strokeLinecap="round"
          // style={{
          //   pathLength,
          // }}
        />
      </svg>
      {/* <img className="path" src="./completo.svg" /> */}
      {/*<img src="./1.svg" style={{ marginLeft: "3.6%" }} />*/}
      <div
        className="ellen"
        onClick={() =>
          window.open("https://ellen-exposition.netlify.app/", "_blank")
        }
      >
        <img
          src="./ellen-grid.svg"
          onMouseOver={(e) => {
            e.target.classList.add("foto_blur");
            document.getElementsByClassName("e")[0].classList.add("foto_blur");
          }}
          onMouseLeave={(e) => {
            e.target.classList.remove("foto_blur");
            document
              .getElementsByClassName("e")[0]
              .classList.remove("foto_blur");
          }}
        />
        <p className="e">ellen lupton</p>
      </div>
      {/*<img src="./2.svg" style={{ marginLeft: "30%" }} />*/}
      <div
        className="trio"
        onClick={() => window.open("https://trio-mbe.netlify.app/", "_blank")}
      >
        <img
          src="./trio.png"
          style={{ width: "550px" }}
          onMouseOver={(e) => {
            {
              e.target.classList.add("foto_blur");
              document
                .getElementsByClassName("t")[0]
                .classList.add("foto_blur");
            }
            //document.getElementsByClassName("e").classList.add("foto_blur");
          }}
          onMouseLeave={(e) => {
            e.target.classList.remove("foto_blur");
            document
              .getElementsByClassName("t")[0]
              .classList.remove("foto_blur");
          }}
        />
        <p className="t">trio</p>
      </div>
      {/*<img src="./3.svg" style={{ marginLeft: "15%" }} />*/}
      <div
        className="ilustracao"
        onClick={() =>
          window.open("https://www.behance.net/madalenasilva1", "_blank")
        }
      >
        <img
          src="./ilustrações.png"
          onMouseOver={(e) => {
            {
              e.target.classList.add("foto_blur");
              document
                .getElementsByClassName("i")[0]
                .classList.add("foto_blur");
            }
            //document.getElementsByClassName("e").classList.add("foto_blur");
          }}
          onMouseLeave={(e) => {
            e.target.classList.remove("foto_blur");
            document
              .getElementsByClassName("i")[0]
              .classList.remove("foto_blur");
          }}
        />
        <p className="i">illustrations</p>
      </div>
      {/* CONTACTO */}
      <div className="contacto" ref={ref}>
        {inView && (
          <motion.div
            className="text"
            initial={{
              translateX: "-50vw",
              translateY: "3001px",
            }}
            animate={{
              scale: [0.5, 1],
              translateX: 0,
              translateY: 0,
            }}
            transition={{
              type: "spring",
              duration: 1.5,
            }}
          >
            <p
              className="m"
              style={{
                fontFamily: "Bely BoldV",
                fontSize: "10rem",
                marginBottom: "-7rem",
              }}
            >
              More
            </p>
            <p
              className="i"
              style={{
                fontFamily: "Bely Regular",
                fontSize: "10rem",
                marginLeft: "15rem",
              }}
            >
              info?
            </p>
          </motion.div>
        )}
        {inView && (
          <motion.div
            initial={{
              translateX: "50vw",
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              type: "spring",
              duration: 1.5,
            }}
          >
            <SiFacebook
              data-blobity
              data-blobity-radius="30"
              data-blobity-offset-x="0"
              data-blobity-offset-y="0"
              data-blobity-magnetic="true"
              className="face"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/madalenarssilva",
                  "_blank"
                )
              }
            />
            <SiInstagram
              data-blobity
              data-blobity-radius="20"
              data-blobity-offset-x="0"
              data-blobity-offset-y="0"
              data-blobity-magnetic="true"
              className="insta"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/madalenarssilva/",
                  "_blank"
                )
              }
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
