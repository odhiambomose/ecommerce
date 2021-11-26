import React from "react";
import Announcement from "../components/Announcements/Announcements";

import Nav from "../components/Nav/Nav";
import Select from "../components/select/Select";
import Products from "../components/Products/Products";
import Newsletter from "../components/news letter/News";
import Footer from "../components/footer/Footer";
const Productpages=()=>{

return(
<div>
<Nav />
<Announcement/>
<Select />

<Products />
<Newsletter />
<Footer />
</div>

)

}
export default Productpages;