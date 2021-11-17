import React from "react";
import "./Slider.css"
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import{slides} from "../../data"
const handleClick=()=>{
    alert("mose")
}
const Sliders=()=>{
return(
    <div className="wrapper">
        <div className="left-arrow" onClick={handleClick}>
        <ArrowLeftOutlinedIcon />
            
        </div>
<div className="slide">
<div className="slide-image">
    <img src="images/woman1.jpg" />
</div>
<div className="slide-content">
    <h2>HOLIDAY OFFERS</h2>
    <p>Grab our latest December offers</p>
    <button>Buy Know</button>
</div>

</div>










    
    

<div className="right-arrow" onClick={handleClick}>
<ArrowRightOutlinedIcon />
</div>

    </div>
)


}

export default Sliders