import React from "react";
import "./App.css";
import img_emily from "./images/image-emily.jpg";
import img_thomas from "./images/image-thomas.jpg";
import img_jennie from "./images/image-jennie.jpg";

export default function Testimonials() {
  return (
    <div className="Testimonials p-5">
      <div className=" container ">
        <h4>CLIENT TESTIMONIALS</h4>

        <div className="row">
          <div class="card col-sm-4 border border-0 mb-4">
            <img src={img_emily} alt="Emily R." className="client-image" />
            <div class="card-body">
              <small>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </small>
              <strong>Emily R.</strong>
              <h6>Marketing Director</h6>
            </div>
          </div>

          <div class="card col-sm-4 border border-0 mb-4">
            <img src={img_thomas} alt="Thomas S." className="client-image" />
            <div class="card-body">
              <small>
                Sunnyside's enthusiasm coupled with their keen interest in our
                brand's success made it a satisfying and enjoyable experience.
              </small>

              <strong>Thomas S.</strong>
              <h6>Chief Operating Officer</h6>
            </div>
          </div>

          <div class="card col-sm-4 border border-0">
            <img src={img_jennie} alt="Jennie F." className="client-image" />
            <div class="card-body">
              <small>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended.
              </small>
              <strong>Jennie F.</strong>
              <h6>Business Owner</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
