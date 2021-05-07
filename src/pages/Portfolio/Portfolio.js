import React from "react";
import './Portfolio.css';
import Project from "../../components/Project";

function Portfolio() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-3">
      <Project/>
    </div>
    </div>
    </div>
  );
}

export default Portfolio;
