import React from "react";
import "./Home.css";
import biopic from '../../img/bio-picture.png';
import kitties from '../../img/kitties.jpg';

function Home() {
  return (
    <div className="content">
      <div className="box">
        <h1 className="display-3">Heather Smith</h1>
        <em>full stack developer</em>
      </div>

      <div className="container mb-4" id="aboutme">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <img
              src={biopic}
              className="img-thumbnail float-start"
              id="profile-img"
              alt="Heather Smith"
            />

            <p>
              <em>
                <b>Heather Smith </b>
              </em>
              is a developer about to graduate from Georgia Tech's Full Stack
              Flex Bootcamp. Her skills include:
            </p>
        
      
            <div id="skill-list">
              <ul className="list-group d-inline-flex">
                <li className="list-group-item list-group-item-action text-center">
                  JavaScript
                </li>
                <li className="list-group-item list-group-item-action text-center">
                  jQuery
                </li>
                <li className="list-group-item list-group-item-action text-center">
                  Node
                </li>
                <li className="list-group-item list-group-item-action text-center">
                  Postman
                </li>
                <li className="list-group-item list-group-item-action text-center">
                  Express
                </li>
                <li className="list-group-item list-group-item-action text-center">
                  React
                </li>
              </ul>

              <ul className="list-group d-inline-flex">
                <li className="list-group-item list-group-item-action text-center ">
                  HTML
                </li>
                <li className="list-group-item list-group-item-action text-center ">
                  CSS
                </li>
                <li className="list-group-item list-group-item-action text-center ">
                  Bootstrap
                </li>
                <li className="list-group-item list-group-item-action text-center ">
                  MongoDB
                </li>
                <li className="list-group-item list-group-item-action text-center ">
                  mySQL
                </li>
                <li className="list-group-item list-group-item-action text-center ">
                  Sequelize
                </li>
              </ul>
            </div>
            <br />
            <p>
              Before the pandemic, Heather was working as an office
              administrator for a small label printing company. As the pandemic
              spread, she left her job and started self-guided studies with
              Codecademy at home. After learning through the summer and fall,
              she had built a foundation and it was time to move forward. The GA
              Tech bootcamp has been an enormous challenge, but she is on track
              to graduate at the end of May, 2021.
              {/* <br />
              <br /> */}
              <img
                src={kitties}
                className="img-thumbnail float-end"
                id="kitties"
                alt="Bun and Mia, two cats"
              />
              When she isn't coding, Heather likes gardening, cooking, thrift
              shopping, and video games. She also loves to fossil hunt, and is a
              member of the Georgia Mineral Society. Currently, she lives in
              Sandy Springs, Georgia with her husband and two cats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
