import React, {Component} from "react";
import './Section1css/Section1Homepage.css';
import {NavLink} from "react-router-dom";

class Section1Homepage extends Component {
    render() {
        return (
            <div className="container-fluid section-1-homepage">
                <div className="container">
                    <div className="row row-section-1-homepage">
                        <div className="col-xl-4 text-center">
                            <div className="section-1-card">
                                <div className="section-1-img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="section-1-text text-left">
                                    <h6 className="Head6">Kích thước và giá gói hàng</h6>
                                    <p className="body2">
                                        Tại đây bạn có thể tìm thấy giá cho tất cả các
                                        kích thước gói hàng
                                    </p>
                                    <NavLink className="btn btn-primary text-button" to="">Giá cước
                                        <i className="fas fa-angle-right"/> </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl">
                            <div className="section-1-card">
                                <div className="section-1-img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="section-1-text text-left">
                                    <h6 className="Head6">Tạo đơn bưu kiện</h6>
                                    <p className="body2">
                                        Tạo đơn bưu kiện của bạn trực tuyến và tiết kiệm
                                    </p>
                                    <NavLink className="btn btn-primary text-button" to="">Bưu kiện trực tuyến
                                        <i className="fas fa-angle-right"/> </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl">
                            <div className="section-1-card">
                                <div className="section-1-img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="section-1-text text-left">
                                    <h6 className="Head6">Khách hàng doanh nghiệp</h6>
                                    <p className="body2">
                                        Chúng tối có giải pháp phù hợp với mọi nhu cầu cá nhân
                                    </p>
                                    <NavLink className="btn btn-primary text-button" to="">Tìm hiểu thêm
                                        <i className="fas fa-angle-right"/> </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Section1Homepage;