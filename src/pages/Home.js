import React from "react";
import Announcement from "../components/Announcements/Announcements";
import Categories from "../components/categories/Category";
import Nav from "../components/Nav/Nav";
import Slider from "../components/Slider/Slider"
const Home=()=>{

return(
<div>
<Announcement/>
<Nav />
<Slider />
<Categories />
</div>

)

}
export default Home;