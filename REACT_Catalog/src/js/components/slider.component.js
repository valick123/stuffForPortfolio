import  React from 'react';
import Slider from "react-slick";
import { SummerSale, SuperSale, ValentineSale, WinterSale } from '../images';
import {Row, Col} from "reactstrap"



export const SlickSleder = props => {
    const settings = {
        infinite: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        pauseOnHover: true,
        appendDots: dots => (
            <div
              style={{
                position:"static"
              }}
            >
              <ul style={{display:"flex", justifyContent:"center" }}> {dots} </ul>
            </div>
          ),
    };
    return(
        <Row>
                    <Col lg={12}>
                        <Slider {...settings}>
                            <div className="slider-item">
                                <div className="slider-content">
                                    <img className="slider-img" src={SuperSale} alt=""/>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-content">
                                    <img className="slider-img" src={ValentineSale} alt=""/>

                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-content">
                                    <img className="slider-img" src={WinterSale} alt=""/>

                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-content">
                                    <img className="slider-img" src={SummerSale} />

                                </div>
                            </div>     
                            <div className="slider-item">
                                <div className="slider-content">
                                    <img className="slider-img" src={SummerSale} />

                                </div>
                            </div>    
                        </Slider>
                    </Col>
                </Row>
    )
}