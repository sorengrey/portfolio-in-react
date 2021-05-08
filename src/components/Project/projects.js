import React from "react";
import sheep from "../../img/electric-sheep.png";
import weather from "../../img/weather-screenshot.png";
import note from "../../img/note-taker.png";
import quiz from "../../img/code-quiz-screenshot.png";
import schedule from "../../img/planner-screenshot.png";
import tracker from "../../img/tracker.png";

export const projects = [
  {
    img: sheep,
    cardtitle: "Electric Sheep",
    cardtext: "A dream journal, made in collaboration with two classmates.",
    deployedlink: "https://banana-crumble-13553.herokuapp.com/",
    githublink: "https://github.com/acbewley/young-vipers-electric-sheep",
  },
  {
    img: weather,
    cardtitle: "OpenWeather Dashboard",
    cardtext:
      "A dashboard that displays the current weather and 5-day forecast.",
    deployedlink: "https://sorengrey.github.io/OpenWeather-Dashboard/",
    githublink: "https://github.com/sorengrey/OpenWeather-Dashboard",
  },
  {
    img: note,
    cardtitle: "Note Taker",
    cardtext:
      "An application that allows the user to take and save notes to its server.",
    deployedlink: "https://arcane-sands-37553.herokuapp.com/",
    githublink: "https://github.com/sorengrey/Note-Taker",
  },
  {
    img: quiz,
    cardtitle: "Coding Quiz Challenge",
    cardtext: "A quiz game with a timer and a high score board.",
    deployedlink: "https://sorengrey.github.io/Coding-Quiz",
    githublink: "https://github.com/sorengrey/Coding-Quiz",
  },
  {
    img: schedule,
    cardtitle: "Work Day Scheduler",
    cardtext: "An application that lets the user schedule their workday.",
    deployedlink: "https://sorengrey.github.io/Day-Planner/",
    githublink: "https://github.com/sorengrey/Day-Planner",
  },
  {
    img: tracker,
    cardtitle: "Employee Tracker",
    cardtext: "A CLI program that keeps track of a company's employees.",
    deployedlink: "https://github.com/sorengrey/Employee-Tracker-CMS",
    githublink: "https://github.com/sorengrey/Employee-Tracker-CMS",
  },
];

export default projects;
