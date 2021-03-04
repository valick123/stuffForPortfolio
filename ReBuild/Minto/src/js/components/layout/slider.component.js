import React from "react";
import Slider from "react-slick";
import {SliderBG} from "../../images";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={` arrow-ico arrow-next`}
        style={{  zIndex:1}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={` arrow-ico arrow-prev`}
        style={{  left:5, zIndex:1 }} 
        onClick={onClick}
      />
    );
  }

export const SimpleSlider = props => {
    const settings = {
        infinite: true,
        autoplay:true,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:4000,
        lazyLoad: true,
        className:"slider-block",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return(
            <Slider {...settings}>
                <div>
                    <div className="slider-item" style={{backgroundImage:`url(${SliderBG})`}}>
                        <h1>Minto</h1>
                        <p>A minimal Web Design from cssauthor.com</p>
                    </div>
                </div>
                <div>
                    <div className="slider-item" style={{backgroundImage:`url(${SliderBG})`}}>
                        <h1>Minto</h1>
                        <p>A minimal Web Design from cssauthor.com</p>
                    </div>
                </div>    
                    
            </Slider>
        
    )
 }