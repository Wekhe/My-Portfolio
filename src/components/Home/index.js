import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Logo from "./Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = "Ikem, ".split("");
  const jobArray = "software engineer.".split("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _8`}>H</span>
            <span className={`${letterClass} _9`}>i</span>
            <br />
            <span className={`${letterClass} _10`}>I</span>
            <span className={`${letterClass} _11`}>'m</span>
            &nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={12}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Software Engineering & Blockchain, @ Rivers State</h2>
          <Link to="/contact">
            <div className="edge">
              <span>Contact Me</span>
              <span>Contact Me</span>
              <span>Contact Me</span>
              <span>Contact Me</span>
            </div>
          </Link>
        </div>
        <Logo className="Home" />
      </div>

      <Loader type="semi-circle-spin" />
    </>
  );
};

export default Home;
