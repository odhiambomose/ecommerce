import React from "react";
import Announcement from "../components/Announcements/Announcements";

import Nav from "../components/Nav/Nav";
import Singleproduct from "../components/Singleproduct/Singleproduct";

import Newsletter from "../components/news letter/News";
import Footer from "../components/footer/Footer";
const SingleProductPage=()=>{

return(
<div>
<Nav />
<Announcement/>

<Singleproduct />

<Newsletter />
<Footer />
</div>

)

}
export default SingleProductPage