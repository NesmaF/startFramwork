import React from 'react'

export default function About() {
  return (
    <>
      <div className="container about text-center vh-100">
        <h2>ABOUT COMPONENT</h2>
        <div className="line my-3">
          <div className="line1"></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className="line2"></div>
        </div>
        <div className="container">
          <div className="row text">
            <div className="col-md-6 text-white text1">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="col-md-6 text-white text2">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
