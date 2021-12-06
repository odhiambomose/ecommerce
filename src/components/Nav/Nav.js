import React from "react";
import "./Nav.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const Nav=()=>{

    return(
<div className="nav-rapper">
    <div className="left"><span className="lang">EN</span>
    <div className="search-container">
<input className="input-part" type="text" placeholder="search products"/>
<SearchOutlinedIcon/>
    </div>

    </div>
    <div className="center"><h1>MAGOSO ENTERPRISE.</h1></div>
    <div className="right">
        <ul>
        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/signup">Register</Link></li>
        <Link to="/cart"><Badge badgeContent={4} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge></Link>
       </ul>
    </div>
</div>

    )
}
export default Nav