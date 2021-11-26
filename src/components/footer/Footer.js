import React from "react"
import "./Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import  RoomIcon from '@mui/icons-material/Room'; 
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';



const Footer = () => {
    return (

        <>
    
<div className="footer-part">
    <div className="icon-text">
<div className="footer-text">
    <h2>Magoso Enterprises</h2>
    <p>Buy the best from the best.We bring you quality products and remarkable customers experience.we value you</p>
</div>
<div className="icon-footer">
    <div className="facebook">
<FacebookOutlinedIcon />
</div>
<div className="instagram">
<InstagramIcon />
</div>
<div className="pinterest">
<PinterestIcon />
</div>
<div className="twitter">
<TwitterIcon />
</div>
</div>
</div>

<div className="useful-part">
    <h2>Useful links</h2>
<ul>
    <li>Home</li>
    <li>Man Fasion</li>
    <li>Accessories</li>
    <li>Order Tracking</li>
    <li>Wishlist</li>
</ul>

</div>

<div className="third-part">
    
<ul>
    <li>Cart</li>
    <li>Women Fasion</li>
    <li>Accessories</li>
    <li>My account</li>
    <li>Terms</li>
</ul>

</div>

<div className="fourth-part">
    <h2>Contact</h2>
<div>
<RoomIcon />
<p>Great Street,Lavington,Nairobi.Ke</p>
</div>
<div>
<CallIcon />
<p>+ 254 123 456 789</p>
</div>
<div>
<EmailIcon />
<p>@ magoso.com</p>
</div>
<div className="payment">
<div>
    <img src="images/visa.svg" width="70" />
</div>
<div>
<img src="images/master-card.svg" width="70" />
</div>
<div>
<img src="images/mpesa.svg" width="70"/>
</div>


</div>
</div>

</div>

<div className="copy">
<p>Magoso Enterprises &copy; 2021 Alrights Reserved</p>
</div>
</>


     ) }
    export default Footer