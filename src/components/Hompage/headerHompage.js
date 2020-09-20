import React, {Component} from "react";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import TableForm from "./tableForm";
import InputHeaderCheckShipCode from "./inputHeaderCheckShipCode";
import InputHeaderCheckLocation from "./inputHeaderCheckLocation";
import './css/headerHomepage.css';

class HeaderHomepage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    constructor(props) {
        super(props);
        this.state = {
            banners: [
                {
                    src: './images/banners/header/banner1.png',
                    Link: '',
                },
                {
                    src: './images/banners/header/banner2.jpg',
                    Link: '',
                },
                {
                    src: './images/banners/header/TikiNOW.png',
                    Link: '',
                },
            ]
        }
    }

    render() {
        const Settings = {
            dots: false,
            arrows: true,
            slidesToShow: 1,
            // autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
        }
        let Slide = this.state.banners.map((slide, index) => {
            return (
                <div key={index} className="each-slide-header">
                    <Link to={slide.Link}>
                        <img src={slide.src} alt="" className="img-slide-header"/>
                    </Link>
                </div>
            );
        })
        return (
            <div className="container-fluid main-Header">
                <div className="container container-main-Header">
                    <div className="row row-main-Header">
                        <div className="order-2 oder-xl-1 col-xl-4 col-table-form">
                            <TableForm/>
                        </div>
                        <div className="order-1 order-xl-2 col-xl-8 col-slide">
                            <div className="container-slide">
                                <Slider {...Settings}>
                                    {Slide}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="row row-input-header">
                        <div className="d-none d-xl-block col-xl-6 col-input-header col-left">
                            <InputHeaderCheckShipCode/>
                        </div>
                        <div className="d-none d-xl-block col-xl-6 col-input-header col-right">
                            <InputHeaderCheckLocation/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderHomepage;