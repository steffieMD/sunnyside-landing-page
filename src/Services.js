import React from "react";
import "./App.css"
import egg_img from "./images/image-transform.jpg"
import pink_cup from "./images/image-stand-out.jpg"
import cherry_img from "./images/image-graphic-design.jpg"
import orange_img from "./images/image-photography.jpg"


export default function Services() {
    return (
        <div className="Services container-fluid">
            <div className="row">
                <div className="col-sm-6 p-0">
                    <div className="services-writeup">
                        <div className="container-fluid p-5">
                        <h3>Transform your brand</h3>
                        <small className="writeup">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</small>
                        <a href="\" className="yellow-link"><strong>LEARN MORE</strong></a>
                        </div>
                        
                    </div>
                   </div>
                <div className="col-sm-6 p-0 yellow-bg"><img src={egg_img} alt="white egg on a yellow background" className="img-fluid"/></div>
                <div className="col-sm-6 p-0 pink-bg"><img src={pink_cup} alt="pink cup" className="img-fluid"/></div>
                <div className="col-sm-6 p-0">
                <div className="services-writeup">
                <div className="container-fluid p-5">
                        <h3>Stand out to the right audience</h3>
                        <small className="writeup">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</small>
                        <a href="\" className="pink-link"><strong>LEARN MORE</strong></a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 p-0 green-bg position-relative"><img src={cherry_img} alt="2 cherries on a stem" className="img-fluid"/>
                <div className="graphic graphic-design services-writeup position-absolute bottom-0 start-50 translate-middle-x">
                        <h3>Graphic Design</h3>
                        <small>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</small>
                        
                    </div></div>
                <div className="col-sm-6 p-0 position-relative">
                    <img src={orange_img} alt="smiley face" className="img-fluid"/>
                <div className="graphic photography position-absolute bottom-0 start-50 translate-middle-x">
                        <h3>Photography</h3>
                        <small>Increase your credibility by getting the most stunning, high-quality photos that improve your business.</small>
                    
                    </div></div>
            </div>
            </div>
    )
}