import React from "react";
import Announcement from "../components/Announcements/Announcements";
import Categories from "../components/categories/Category";
import Nav from "../components/Nav/Nav";
import Slider from "../components/Slider/Slider"
import Products from "../components/Products/Products";
import Newsletter from "../components/news letter/News";
import Footer from "../components/footer/Footer";
const Home=()=>{

return(
<div>
<Announcement/>
<Nav />
<Slider />
<Categories />
<Products />
<Newsletter />
<Footer />
</div>

)

}
export default Home;