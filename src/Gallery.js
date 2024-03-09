import React from "react";
import milk_bottles from "./images/image-gallery-milkbottles.jpg"
import orange from "./images/image-gallery-orange.jpg"
import cone from "./images/image-gallery-cone.jpg"
import sugarcubes from "./images/image-gallery-sugarcubes.jpg"

export default function Gallery(){
    return(
        <div className="Gallery row">
            <div className="col-sm-3 p-0 ">
            <img src={milk_bottles} alt="3 milk bottles on a cloudy background" className="img-fluid"/>
            </div>
            <div className="col-sm-3 p-0">
            <img src={orange} alt="half an orange in a white bowl in a blue bowl with an orange coloured background" className="img-fluid"/>
            </div>
            <div className="col-sm-3 p-0">
            <img src={cone} alt="a cone on a blue background" className="img-fluid"/>
            </div>
            <div className="col-sm-3 p-0">
            <img src={sugarcubes} alt="sugarcubes stacked on a pink background" className="img-fluid"/>
            </div>
        </div>
        
    )
}