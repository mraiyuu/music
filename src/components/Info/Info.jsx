import React from "react";
import "./Info.css";
import { student, hours, group_7 } from "../../assets";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={student} />
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>

          <div className="info-content">
            <img src={hours} />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
         
        </div>
        <img className="bg-element-2" src={group_7} />
       
      </div>
    </section>
  );
};

export default Info;
