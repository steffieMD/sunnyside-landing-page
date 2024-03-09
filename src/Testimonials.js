import React from "react";
import "./App.css"
import img_emily from "./images/image-emily.jpg"
import img_thomas from "./images/image-thomas.jpg"
import img_jennie from "./images/image-jennie.jpg"

export default function Testimonials(){
    return(
        <div className="Testimonials p-5">
            <div className=" container p-5">
            <h4>CLIENT TESTIMONIALS</h4>
            <div className="row">
                <div className="col-sm-4 ">
                <img src={img_emily} alt="Emily R." className="client-image"/>
                </div>
                <div className="col-sm-4 ">
                <img src={img_thomas} alt="Thomas S." className="client-image"/>
                
                </div>
                <div className="col-sm-4 ">
                <img src={img_jennie} alt="Jennie F." className="client-image"/>
                
                </div>
                <div className="col-sm-4 ">
               
                <small>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</small>
                
                </div>
                <div className="col-sm-4 ">
               
                <small>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</small>
                
                </div>
                <div className="col-sm-4 ">
                
                <small>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended.</small>
               
                </div>
                <div className="col-sm-4 ">
                <strong>Emily R.</strong>
                <h6>Marketing Director</h6>
                </div>
                <div className="col-sm-4 ">
               
                <strong>Thomas S.</strong>
                <h6>Chief Operating Officer</h6>
                </div>
                <div className="col-sm-4 ">
                
                <strong>Jennie F.</strong>
                <h6>Business Owner</h6>
                </div>
            </div>
            </div>
        </div>
    )
}