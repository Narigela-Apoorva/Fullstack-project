import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

function ProductPage() {
    return ( 
        <>
        {/* <Navbar/> */}
        <Hero/>
        <LeftImage/>
        <RightImage/>
        <Universe/>
        {/* <Footer/> */}
        </>
     );
}
export default ProductPage;