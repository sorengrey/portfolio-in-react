import React from "react";
import './Portfolio.css';
import Project from "../../components/Project";
import "../../img/electric-sheep.png";

function Portfolio() {
  return (
    <div className="container">
    <div className="row">
      <Project/>
    </div>
    </div>
  );
}

export default Portfolio;
