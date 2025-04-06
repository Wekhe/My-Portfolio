import { useEffect, useState } from "react";
import {
  faEthereum,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timeoutId); // Cleanup function to prevent memory leaks
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm confident, naturally curious, and always working on improving my
            skills one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence, it would be: a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            {[
              { icon: faEthereum, color: "grey" },
              { icon: faHtml5, color: "#F06529" },
              { icon: faCss3, color: "#28A4D9" },
              { icon: faReact, color: "#5ED4F4" },
              { icon: faJsSquare, color: "#EFD81D" },
              { icon: faGitAlt, color: "#EC4D28" },
            ].map((item, index) => (
              <div key={index} className={`face${index + 1}`}>
                <FontAwesomeIcon icon={item.icon} color={item.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
