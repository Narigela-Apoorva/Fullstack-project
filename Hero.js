import React from 'react';
import Navbar from '../Navbar';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe';
import Footer from '../Footer';
function Hero() {
    return ( 
        <>
        {/* <Navbar/> */}
        <LeftImage/>
        <RightImage/>
        <Universe/>
        {/* <Footer/> */}
        </>
     );
}

export default Hero;