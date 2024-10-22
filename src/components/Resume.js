import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';

const Resume = () => {
  return (
    
    <section id="resume" className="container resume-section">
      <h2 className="text-center mb-4">Resume</h2>
      <p className="text-center">
        check out my <a href="https://drive.google.com/file/d/1CgW8sBgEEOXBI3jFCOrl26klJriJX824/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
      </p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary">
          <a href="https://drive.google.com/file/d/1CgW8sBgEEOXBI3jFCOrl26klJriJX824/view?usp=drive_link" download className="text-white text-decoration-none">
            Download Resume
          </a>
        </button>
      </div>
    </section>
  );
};

export default Resume;
