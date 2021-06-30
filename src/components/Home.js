import React from "react";
import useStyles from "./styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton } from "@material-ui/core";
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <header className="header">
        <nav>
          {/* <a href="#Home"> Home</a> */}
          <a href="#Projects"> Projects</a>
          <a href="#Contact"> Contact</a>
        </nav>
      </header>

      <main>
        <section>
          <h1>
            <span>i'm </span> Ali
          </h1>
          <h5> Software Developer </h5>
          <button>
            <a
              href="#Contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              GET IN TOUCH{" "}
            </a>{" "}
          </button>
          <div>
            <IconButton
              href="https:/linkedin.com/in/ali-ozbak-26884120b/"
              target="_blank"
            >
              <LinkedInIcon className={classes.IconButton} fontSize="large" />
            </IconButton>

            <IconButton href="https://github.com/Kaynec" target="_blank">
              <GitHubIcon className={classes.IconButton} fontSize="large" />
            </IconButton>
          </div>
        </section>

        <section className="skills">
          <p>
            {" "}
            languages = <span style={{ color: "#e3db0a" }}>[</span>{" "}
            <span>JavaScript</span> , <span>Html</span> ,<span>Css</span>{" "}
            <span style={{ color: "#e3db0a" }}> ]</span>{" "}
          </p>
          <p>
            {" "}
            Frameworks = <span style={{ color: "#e3db0a" }}>[</span>{" "}
            <span>React</span>,<span>Express</span>,<span> Sass </span>{" "}
            <span style={{ color: "#e3db0a" }}> ]</span>{" "}
          </p>
          <p>
            tools = <span style={{ color: "#e3db0a" }}>[</span>{" "}
            <span>Webpack</span> , <span>Git</span> ,<span>node.js</span> ,{" "}
            <span>jest</span> , <span>material ui</span>,
            <span>styled components</span> ,<span> mongoDB</span>
            <span style={{ color: "#e3db0a" }}> ]</span>
          </p>
        </section>
      </main>
    </>
  );
}
