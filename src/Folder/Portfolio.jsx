/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import img from "../poert1.png";
import img2 from "../port2.png";
import img3 from "../port3.png";

export default function Portfolio() {

  return (
    <>
      <div className="container port text-center ">
        <h2>PORTFOLIO COMPONENT</h2>
        <div className="line my-3">
          <div className="line1"></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className="line2"></div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-md-4 ">
              <div className="position-relative overflow-hidden photo">
                <img
                  src={img}
                  alt="img"
                  className="w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                ></img>
                <div
                  className="layer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="plus fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="position-relative overflow-hidden photo">
                <img
                  src={img2}
                  alt="img"
                  className="w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                ></img>
                <div
                  className="layer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <i class="plus fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="position-relative overflow-hidden photo">
                <img
                  src={img3}
                  alt="img"
                  className="w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                ></img>
                <div
                  className="layer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  <i class="plus fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="position-relative overflow-hidden photo">
                <img
                  src={img2}
                  alt="img"
                  className="w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                />
                <div
                  className="layer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <i class="plus fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="position-relative overflow-hidden photo">
                <img
                  src={img3}
                  alt="img"
                  className="w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                />
                <div
                  className="layer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  <i class="plus fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="position-relative overflow-hidden photo">
                <img
                  src={img}
                  alt="img"
                  className="w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />

                <div
                  className="layer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="plus fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-0">
              <img src={img} className="w-100" alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-0">
              <img src={img3} className="w-100" alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-0">
              <img src={img2} className="w-100" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
    
  
};
