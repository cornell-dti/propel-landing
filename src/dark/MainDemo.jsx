import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import { RiRocketFill } from "react-icons/ri";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import SliderOne from "../component/slider/SliderOne";
import ServiceTwo from "../elements/service/ServiceTwo";
import Testimonial from "../elements/Testimonial";
import About from "../component/HomeLayout/homeOne/About";
import Helmet from "../component/common/Helmet";

class MainDemo extends Component{
    render(){
        // const PostList = BlogContent.slice(0 , 3);
        return(
            <div> 
                <Helmet pageTitle="DTI Propel" />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" useNavLinks={false} />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <SliderOne />
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div className="about-area about-position-top pb--120 bg-white">
                    <About />
                </div>
                {/* End About Area */}

                {/* Start Service Area  */}
                <div className="service-area ptb--80  bg_image bg_image--3">
                   <div className="container">
                        <ServiceTwo />
                   </div>
                </div>
                {/* End Service Area  */}

                {/* Start Portfolio Area */}
                {/* <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55">
                        <Portfolio />
                    </div>
                </div> */}
                <div className="testimonial-thumb-wrapper pb--120 pt--120">
                  <Testimonial />
                </div>
                {/* End Portfolio Area */}

                {/* End Brand Area */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <RiRocketFill />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />
                
            </div>
        )
    }
}
export default MainDemo;