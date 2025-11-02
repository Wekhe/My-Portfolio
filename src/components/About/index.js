import { useEffect, useState } from "react";
import {
  faSpringBoot,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  // faReact,
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
            Hi, I’m a passionate Blockchain Developer with a strong background in building decentralized applications (dApps), smart contracts, and web3 integrations. 
                
            <p> I specialize in Solidity, Ethereum, and smart contract development, and I enjoy solving complex problems using the power of decentralized technology.</p>
            
           <p> From writing secure and efficient smart contracts to integrating Chainlink oracles and deploying full-stack dApps using tools like Hardhat, Ethers.js, and React, I focus on creating scalable, transparent, and user-friendly blockchain solutions.</p>
              
            <p> I’ve worked with both test networks and local environment development chains , I understand the importance of gas optimization, security audits, and real-world usability.
            
            My goal is to contribute to the future of Web3 by building meaningful products that empower users through decentralization, transparency, and trust.</p>
                
          </p>
          <p>
            I'm confident, naturally curious, and always working on improving my
            skills one design problem at a time.
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
      <Loader type="semi-circle-spin" />
    </>
  );
};

export default About;
