import React from "react";
import "./Nav.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
        <li><a href="#">LOG IN</a></li>
        <li><a href="#">Register</a></li>
        <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
       </ul>
    </div>
</div>

    )
}
export default Nav