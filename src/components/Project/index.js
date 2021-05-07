import React from "react";
import sheep from "../../img/electric-sheep.png"
import proj2 from ''
import proj3 from ''
import proj4 from ''
import proj5 from ''
import proj6 from ''

function Project() {
    return (
        <div className="card float-start">
              <img
                src={sheep}
                className="card-img-top img-thumbnail"
                alt="..."
              />
              <div className="card-body">
                <div className="card-title text-center">
                  <h5>Electric Sheep</h5>
                </div>
                <p className="card-text">
                  A dream journal, made in collaboration with two classmates.
                </p>
                <a
                  href="https://banana-crumble-13553.herokuapp.com/"
                  className="card-link"
                >
                  Live Application
                </a>
                <a
                  href="https://github.com/acbewley/young-vipers-electric-sheep"
                  className="card-link"
                >
                  Github Repo
                </a>
              </div>
            </div>
    )
}

export default Project;