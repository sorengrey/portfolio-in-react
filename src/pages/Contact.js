import React from "react";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import adobe from "../img/adobe.png";
// import Resume from "../components/Resume/";

function Contact() {
  return (
    <div className="container-sm content">
      <div className="container-sm">
        <div className="container" id="contactform">
          <div className="row">
            <div className="col-6">
              <h1>Contact</h1>
              <div className="mb-3">
                 <label for="name" className="form-label">
                  Name
                 </label>
                 <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  />
              </div>
              <div className="mb-3">
                 <label for="email" className="form-label">
                  Email
                 </label>
                 <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="example@mail.com"
                  />
                </div>
              <div className="mb-3">
                <label for="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                > </textarea>
              </div>
              <div className="submitbutton">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>

            <div className="col-3" id="social-links">
              <div
                className="card text-center"
                id="social"
                style="width: 18rem;"
              >
                <div className="card-body">
                  {/* <h5 className="card-title"></h5> */}
                  <p className="card-text">
                    Heather can be reached at
                    <b>
                      <a href="mailto:halexsmith86@gmail.com" target="_blank" rel="noreferrer">
                        halexsmith86@gmail.com
                      </a>
                    </b>
                    , or by phone: <b>1-(404)-644-4675</b>
                  </p>

                  <a
                    href="https://github.com/sorengrey"
                    className="card-link text-align-center"
                  >

                    <img src={github} className="icon" alt="Github logo"/>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/heather-smith-b44107124/"
                    className="card-link"
                  >
                    <img src={linkedin} className="icon" alt="LinkedIn logo" />
                  </a>
                </div>
              </div>

              <div
                className="card mt-1 text-center"
                id="resume"
                style="width: 18rem;"
              >
                <div className="card-body">
                  <h3>
                    <b>Resume</b>
                  </h3>
                  <a href="" target="_blank" rel="noreferrer">
                  <img id="adobe" src={adobe} alt="Adobe logo"/>
                  <p>PDF available here</p>
                  {/* <Resume /> */}
                  </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
)}

export default Contact;
