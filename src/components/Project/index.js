import React from "react";
import { projects } from "./projects.js"
import "./style.css";


function Project() {
    return (
        <>
        <div className="card">
        {projects.map((data, key) => {
          return (
            <div key={key}>
                <img
                src={data.img}
                className="card-img-top img-thumbnail"
                alt="..."/>

                
                 <div className="card-title text-center">
                  <h5>{data.cardtitle}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">
                    {data.cardtext}
                    </p>

                     <a href={data.deployedlink} className="card-link">
                    Live Application
                    </a>

                <a href={data.githublink} className="card-link">
                Github Repo
                </a>
              </div> 
            </div>
          );
      })}
      </div>
    </>
  );
};

 export default Project;