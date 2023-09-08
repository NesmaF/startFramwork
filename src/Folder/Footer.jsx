
import React from 'react'

export default function Footer() {
    return (
      <>
        <div className="container footer  text-white text-center ">
          <div className="row gy-5">
            <div className="col-md-4  ">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
              <div className="scoial">
                <i class="icon fa-brands fa-facebook"></i>
                <i class="icon fa-brands fa-twitter"></i>
                <i class="icon fa-brands fa-linkedin-in"></i>
                <i class="icon fa-solid fa-globe"></i>
              </div>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="copy text-center">
          <p className='text-white'>Copyright © Your Website 2021</p>
        </div>
      </>
    );
}
