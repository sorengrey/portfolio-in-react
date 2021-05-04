import React, { Component } from "react";
import resume from './Heather Smith - Resume.pdf';

class Resume extends Component {

    render() {
  
      return (
          <div>
            <a href={resume} target="blank" rel="noreferrer">Download Pdf</a>
          </div>
      );
  
    }
  }
  
  export default Resume;