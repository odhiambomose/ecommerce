

import React, { useState } from "react";
import "./Slider.css"
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import{slides} from "../../data"

const Sliders=()=>{
    const [slideIndex,setSlideIndex]=useState(0);

const handleClick=(direction)=>{
    if(direction==="left"){
     setSlideIndex(slideIndex>0?slideIndex-1)   
    }



}

return(
    <div className="wrapper">
        <div className="left-arrow" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlinedIcon />
            
        </div>


{

slides.map(slide=>{
    return(
<div className="slide" style={{backgroundColor:slide.bg}}>
<div className="slide-image">
    <img src={slide.img} />
</div>
<div className="slide-content">
    <h2>{slide.title}</h2>
    <p>{slide.desc}</p>
    <button>Buy Know</button>
</div>

</div>
    )
})

}

















    
    

<div className="right-arrow" onClick={()=>handleClick("right")}>
<ArrowRightOutlinedIcon />
</div>


    </div>


)


}

export default Sliders