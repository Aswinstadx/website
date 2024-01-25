import React from "react";
import "./About.css";
import { ABOUT_PAGE_IMAGE } from "../../Contants/Images/urls";
function About() {
  return (
    <div className="about-page">
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-4">
            <h1>ABOUT</h1>
          </div>
          <div className="col-md-8">
            <div className="m-5">
              <p className="m-5">
                Marten Eckerstrom, a distinguished actor trained at the
                prestigious Lee Strasberg Theatre & Film Institute and the
                American Academy of Dramatic Arts, stands out with his profound
                understanding of classical theater and the nuances of method
                acting. His educational journey in New York has laid a robust
                groundwork, allowing him to deliver performances that resonate
                with authenticity and emotional depth. Marten's versatility is
                evident across a spectrum of roles in acclaimed TV productions
                and films, as well as in his commanding stage appearances.
              </p>
            </div>
          </div>
        </div>
        <div className="about-page-image">
          <img src={ABOUT_PAGE_IMAGE} className="mt-5" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="35"
            viewBox="0 0 57 35"
            fill="none"
            className="centered-svg"
          >
            <path
              d="M55.4167 0H1.58333C0.708882 0 0 0.783502 0 1.75V33.25C0 34.2165 0.708882 35 1.58333 35H55.4167C56.2911 35 57 34.2165 57 33.25V1.75C57 0.783502 56.2911 0 55.4167 0Z"
              fill="black"
              fill-opacity="0.7"
            />
          </svg> */}
        </div>
      </div>
    </div>
  );
}

export default About;
