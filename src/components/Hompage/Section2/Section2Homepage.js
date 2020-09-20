import React, {Component} from "react";
import './Section2css/Section2Homepage.css';
import {NavLink} from "react-router-dom";

class Section2Homepage extends Component {
    render() {
        return (
            <div className="container-fluid Section-2-Homepage">
                <div className="container">
                    <div className="row row-section-2-homepage-title text-center">
                        <div className="col-xl-12">
                            <div className="title-bg">
                                <h5 className="Head5">
                                    Những quyền lợi khi bạn gửi hàng tại Blitz
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="row row-section-2-homepage-benefit text-center">
                        <div className="col-xl-4">
                            <div className="row inner">
                                <div className="col-xl-12">
                                    <h6 className="Head6 text-left">
                                        Số lượng điểm giao nhận lớn
                                    </h6>
                                </div>
                                <div className="col-xl text-left inner-content">
                                    <div className="mini-img"/>
                                    <div className="Head6">
                                        Lên đến hơn 9000 điểm giao nhận trên toàn quốc.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="row inner">
                                <div className="col-xl-12">
                                    <h6 className="Head6 text-left">
                                        Luôn luôn có trách nhiệm
                                    </h6>
                                </div>
                                <div className="col-xl text-left inner-content">
                                    <div className="mini-img"/>
                                    <div className="Head6">
                                        Đảm bảo có trách nhiệm với buư kiện của quý khách hàng.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="row inner">
                                <div className="col-xl-12">
                                    <h6 className="Head6 text-left">
                                        Trọng lượng vận chuyển cao
                                    </h6>
                                </div>
                                <div className="col-xl text-left inner-content">
                                    <div className="mini-img"/>
                                    <div className="Head6">
                                        Giá không phụ thuộc vào kích thước.Vận chuyển tối đa 31,5kg.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-section-2-homepage-link">
                        <div className="col-xl-6">
                            <div className="link-container">
                                <div className="link-left">
                                    <div className="link-left-text">
                                        <h6 className="Head6">Tài khoản myBlitz</h6>
                                        <p className="body1">
                                            Hưởng lợi từ nhiều dịch vụ khác<br/>
                                            như danh sách gửi thư hoặc <br/>
                                            nhập dữ liệu...
                                        </p>
                                        <NavLink to="" className="btn btn-outline-primary text-button">
                                            Tìm hiểu thêm <i className="fas fa-angle-right"/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl">
                            <div className="link-container">
                                <div className="link-left">
                                    <div className="link-left-text">
                                        <h6 className="Head6">Khách hàng thân quen</h6>
                                        <p className="body1">
                                            Ưu đãi cho khách hàng gửi từ<br/>
                                            300 đơn hàng trên năm<br/>
                                        </p>
                                        <NavLink to="" className="btn btn-outline-primary text-button">
                                            Tìm hiểu thêm <i className="fas fa-angle-right"/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section2Homepage;