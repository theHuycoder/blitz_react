import React, {Component} from "react";
import './Section3css/Section3Homepage.css';
import {NavLink} from "react-router-dom";

class Section3Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavLinks: [
                {
                    imgsrc: '',
                    text: 'Gói toàn quốc',
                    Link:'',
                },
                {
                    imgsrc:'',
                    text: 'Bưu kiện khu vực',
                    Link:'',
                },
                {
                    imgsrc:'',
                    text: 'Nhận bưu kiện',
                    Link:''
                },
                {
                    imgsrc:'',
                    text: 'Giao hàng tại điểm giao nhận',
                    Link:''
                },
                {
                    imgsrc:'',
                    text: 'Vali và hành lý',
                    Link:''
                },
                {
                    imgsrc:'',
                    text: 'Thư tín',
                    Link:''
                },
            ]
        }
    }

    render() {
        let allNavLinks = this.state.NavLinks.map((Link,index)=> {
            return(
                <div className="col-xl-2 text-center" key={index}>
                    <div className="mini-img" style={{backgroundImage: 'url(Link.imgsrc)'}}/>
                    <NavLink to={Link.Link} className="text-18px">
                        <i className="fas fa-angle-right"/>
                        {Link.text}
                    </NavLink>
                </div>
            );
        })
        return (
            <div className="container-fluid section-3-homepage">
                <div className="container">
                    <div className="row row-section-3-homepage">
                        <div className="col-xl-12">
                            <h5 className="Head5">Dịch vụ vận chuyển của chúng tôi</h5>
                        </div>
                        {allNavLinks}
                    </div>
                </div>
            </div>
        );
    }
}

export default Section3Homepage;