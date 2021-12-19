import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projetos">
      <img src="./1.svg" style={{ marginLeft: "3.6%" }} />
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
      <img src="./4.svg" style={{ marginLeft: "40%" }} />
    </div>
  );
};

export default Projects;
