import React from "react";
import { popularProducts } from "../../data"
import Product from "../Product/Product";
import "./Products.css"



const Products=()=>{
    return(
        <div className="product-image">
  {
        popularProducts.map(gallery => {
            return (

                <Product gallery={gallery}/>
                
            
            
            )
            
        })
    }
            
        </div>
    )
}
export default Products;