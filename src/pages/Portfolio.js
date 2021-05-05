import React from "react";
import sheep from '../img/electric-sheep.png';
import quiz from '../img/code-quiz-screenshot.png';
import notetaker from '../img/note-taker.png';
import scheduler from '../img/planner-screenshot.png'
import weather from '../img/weather-screenshot.png'
import tracker from '../img/tracker.png'



function Portfolio() {
  return (
    <div>
      <section className="container-sm content" id="portfolio-images">
        <section className="row">
          <section className="col-sm-12">
            <h1>Portfolio</h1>
          </section>
        </section>

        <section className="row">
          <section className="col-sm-12">
            <div
              className="card float-start"
              // style="width: 18rem;"
            >
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

            <div
              className="card float-start"
              //  style="width: 18rem;"
            >
              <img
                src={weather}
                className="card-img-top img-thumbnail"
                alt="..."
              />
              <div className="card-body">
                <div className="card-title text-center">
                  <h5>OpenWeather Dashboard</h5>
                </div>
                <p className="card-text">
                  A dashboard that displays the current weather and 5-day
                  forecast.
                </p>
                <a
                  href="https://sorengrey.github.io/OpenWeather-Dashboard/"
                  class="card-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Application
                </a>
                <a href="#" class="card-link">
                  Github Repo
                </a>
              </div>
            </div>

            <div
              className="card float-start"
              // style="width: 18rem;"
            >
              <img
                src={scheduler}
                className="card-img-top img-thumbnail"
                alt="..."
              />
              <div className="card-body">
                <div className="card-title text-center">
                  <h5>Work Day Scheduler</h5>
                </div>
                <p className="card-text">
                  An application that lets the user schedule their workday.
                </p>
                <a
                  href="https://sorengrey.github.io/Day-Planner/"
                  className="card-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Application
                </a>
                <a
                  href="https://github.com/sorengrey/Day-Planner"
                  className="card-link"
                >
                  Github Repo
                </a>
              </div>
            </div>

            <div
              className="card float-start"
              //   style="width: 18rem;"
            >
              <img
                src={quiz}
                className="card-img-top img-thumbnail"
                alt="..."
              />
              <div className="card-body">
                <div className="card-title text-center">
                  <h5>Coding Quiz Challenge</h5>
                </div>
                <p className="card-text">
                  A quiz game with a timer and a high score board.
                </p>
                <a
                  href="https://sorengrey.github.io/Coding-Quiz"
                  className="card-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Application
                </a>
                <a
                  href="https://github.com/sorengrey/Coding-Quiz"
                  className="card-link"
                >
                  Github Repo
                </a>
              </div>
            </div>

            <div
              className="card float-start"
              //    style="width: 18rem;"
            >
              <img
                src={notetaker}
                className="card-img-top img-thumbnail"
                alt="..."
              />
              <div className="card-body">
                <div className="card-title text-center">
                  <h5>Note Taker</h5>
                </div>
                <p className="card-text">
                  An application that allows the user to take and save notes to
                  its server.
                </p>
                <a
                  href="https://arcane-sands-37553.herokuapp.com/"
                  className="card-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Application
                </a>
                <a
                  href="https://github.com/sorengrey/Note-Taker"
                  className="card-link"
                >
                  Github Repo
                </a>
              </div>
            </div>

            <div
              className="card float-start"
              // style="width: 18rem;"
            >
              <img
                src={tracker}
                className="card-img-top img-thumbnail"
                alt="..."
              />
              <div className="card-body">
                <div classname="card-title text-center">
                  <h5>Employee Tracker</h5>
                </div>
                <p className="card-text">
                  A CLI program that keeps track of a company's employees.
                </p>
                Install Application
                <a
                  href="https://github.com/sorengrey/Employee-Tracker-CMS"
                  className="card-link"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Portfolio;
