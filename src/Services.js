import React from "react";
import "./App.css"
import egg_img from "./images/image-transform.jpg"
import pink_cup from "./images/image-stand-out.jpg"
import cherry_img from "./images/image-graphic-design.jpg"
import orange_img from "./images/image-photography.jpg"


export default function Services() {
    return (
        <div className="Services">
            <div className="row">
                <div className="col-sm-6">
                    <div className="services-writeup ">
                        <h3>Transform your brand</h3>
                        <small>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</small>
                        <a href="\" className="d-block"><strong>LEARN MORE</strong></a>
                    </div>
                   </div>
                <div className="col-sm-6 yellow-bg"><img src={egg_img} alt="white egg on a yellow background" className="img-fluid"/></div>
                <div className="col-sm-6 pink-bg"><img src={pink_cup} alt="pink cup" className="img-fluid"/></div>
                <div className="col-sm-6">
                <div className="services-writeup">
                        <h3>Transform your brand</h3>
                        <small>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</small>
                        <a href="\" className="d-block"><strong>LEARN MORE</strong></a>
                    </div>
                </div>
                <div className="col-sm-6 green-bg position-relative"><img src={cherry_img} alt="2 cherries on a stem" className="img-fluid"/>
                <div className="services-writeup position-absolute top-100 start-50 translate-middle">
                        <h3>Graphic Design</h3>
                        <small>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</small>
                        
                    </div></div>
                <div className="col-sm-6 position-relative">
                    <img src={orange_img} alt="smiley face" className="img-fluid"/>
                <div className="services-writeup position-absolute top-100 start-50 translate-middle">
                        <h3>Photography</h3>
                        <small>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</small>
                    
                    </div></div>
            </div>
            </div>
    )
}