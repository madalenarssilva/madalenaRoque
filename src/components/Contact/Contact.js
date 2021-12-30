import React from "react";
import "./Contact.css";
import { SiFacebook, SiInstagram } from "react-icons/si";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const Contact = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 30], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 500, damping: 40 });

  return (
    <div className="contacto">
      <motion.div
        className="text"
        initial={{
          translateX: "-50vw",
          translateY: "80vh",
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
          style={{
            fontFamily: "Bely BoldV",
            fontSize: "10rem",
          }}
        >
          More
        </p>
        <p
          style={{
            fontFamily: "Bely Regular",
            fontSize: "10rem",
          }}
        >
          info?
        </p>
      </motion.div>
      {/*<svg
        width="445"
        height="494"
        viewBox="0 0 445 494"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          path
          d="M28.5 1.5C23.3333 7.5 11.8 25.2 7 48C0.999996 76.5 -0.500004 105 7 125C14.5 145 37 174 65.5 190.5C88.3 203.7 123.333 212 138 214.5C165 218.667 225.9 224.5 253.5 214.5C288 202 305.5 183.5 315.5 163.5C325.5 143.5 330 129 329 117C328 105 326 95.5 304.5 91.5C283 87.5 275.5 93 273 102.5C270.5 112 266 125 253.5 125C241 125 202.5 110 222.5 133.5C242.5 157 252 116.5 249.5 106.5C247 96.5 215.5 76.5 196 91.5C176.5 106.5 170 150 188.5 163.5C207 177 275 181 280.5 219C286 257 291 279 266 297.5C241 316 226.5 342 207.5 331.5C188.5 321 197.5 308 212.5 309C227.5 310 251.5 331.5 266 331.5C280.5 331.5 306 343 324.5 326C343 309 346.5 297.5 371.5 297.5C396.5 297.5 417 312.5 436.5 297.5C456 282.5 468 264 458.5 260.5C449 257 436.5 264 436.5 274C436.5 284 432 309 458.5 309C485 309 473 340.5 492.5 336C512 331.5 542.5 326.5 551 309C559.5 291.5 565 269.5 551 265C537 260.5 523 271 519.5 280.5C516.7 288.1 510.667 338.333 508 362.5C504.167 366.5 498.8 377 508 387C519.5 399.5 546.5 385.5 561.5 402.5C576.5 419.5 562.5 445 551 448C539.5 451 528 430 539.5 428C551 426 579.5 423 592 448C602 468 600.833 483 599 488L567 493L472.5 772L624 577.5L692.5 498C696.833 498.833 704.2 502 699 508M699 508C693.8 514 548.833 686.5 477 772L467 797.5L753.5 663.5V626L551 744.5L762 616.5L909 523L770.5 514.5L485 772L719.5 545C715.167 546.667 706.2 547.3 705 536.5C703.8 525.7 700.5 513 699 508Z"
          stroke="white"
          stroke-width="2"
          fill="transparent"
          strokeLinecap="round"
          style={{
            pathLength,
            marginLeft: "10%",
          }}
        />
        </svg>*/}
      <SiFacebook
        data-blobity
        data-blobity-radius="30"
        data-blobity-offset-x="0"
        data-blobity-offset-y="0"
        data-blobity-magnetic="false"
        className="face"
        onClick={() =>
          window.open("https://www.facebook.com/madalenarssilva", "_blank")
        }
      />
      <SiInstagram
        data-blobity
        data-blobity-radius="20"
        data-blobity-offset-x="0"
        data-blobity-offset-y="0"
        data-blobity-magnetic="false"
        className="insta"
        onClick={() =>
          window.open("https://www.instagram.com/madalenarssilva/", "_blank")
        }
      />
    </div>
  );
};

export default Contact;
