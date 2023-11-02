import React from "react";
import "./Testimonies.css";
import { rectangle_19, rectangle_19_2, reactangle_19_3 } from "../../assets";

const Testimonies = () => {
  return (
    <section id="testimonies" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say</h2>
        <div className="content-container">
          <div className="testimonies">
            <img src={rectangle_19} alt="" />
            <div className="reviewer-details">
              <div className="name">Peter Adam</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot.
              </div>
            </div>
          </div>
          <div className="testimonies">
            <img src={rectangle_19_2} alt="" />
            <div className="reviewer-details">
              <div className="name">Robert fox</div>
              <div className="company-name">Instagram</div>
              <div className="review">
              I got to learn a lot about Music Production with this course. Thanks :)
              </div>
            </div>
          </div>
          <div className="testimonies">
            <img src={reactangle_19_3} alt=""/>
            <div className="reviewer-details">
              <div className="name">Emily Smith</div>
              <div className="company-name">Apple</div>
              <div className="review">
              Awesome! Great job!!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
