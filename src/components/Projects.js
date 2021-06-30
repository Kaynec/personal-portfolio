import React from "react";
import { projectsData } from "../mock";

import LinkIcon from "@material-ui/icons/Link";
import CodeIcon from "@material-ui/icons/Code";

import useStyles from "./styles";
import { IconButton } from "@material-ui/core";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default function Projects() {
  const classes = useStyles();

  React.useEffect(() => {
    // ..
    AOS.init();
  }, []);
  return (
    <>
      <div id="Projects">
        <h1>
          Some of My <span style={{ borderBottom: "2px solid teal" }}>Lat</span>
          est Projects{" "}
        </h1>

        {projectsData.map((project) => {
          return (
            <div
              className="project"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <span className="position">{project.position} </span>
              <h2>{project.title} </h2>
              <p>{project.info}</p>
              <div className="stack">
                {project.stack.map((el) => {
                  return <span> {el}</span>;
                })}
              </div>
              <div className="buttons">
                <button>
                  <a href={project.url}>Live </a>
                </button>
                <button>
                  <a href={project.repo}>Code </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
