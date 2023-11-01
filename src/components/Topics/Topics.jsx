import React, { useState } from "react";
import "./Topics.css";
import {
  frequencies,
  daw,
  vocalProcessing,
  mixing,
  mixingConsole,
  mastering,
  element,
} from "../../assets";

const Topics = () => {
  
  const [currentImage, setCurrentImage] = useState(frequencies);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul>
            <li onMouseEnter={() => setCurrentImage(frequencies)}>What are frequencies</li>
            <li onMouseEnter={() => setCurrentImage(daw)}>Using DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocalProcessing)}>Vocal processing</li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>Mixing console</li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage}></img>
          </div>
          <div>
            <img src={ element } className="element"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
