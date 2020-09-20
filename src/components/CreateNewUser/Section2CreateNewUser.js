import React, {Component} from "react";
import './CreateNewUsercss/Section2CreateNewUser.css';
import {NavLink} from "react-router-dom";

class Section2CreateNewUser extends Component {
    render() {
        return (
            <div className="container-fluid section-2-create-new-user">
                <div className="container">
                    <div className="row row-section-2-create-new-user">
                        <div className="col-xl-5 ">
                            <h5 className="Head5">
                                Giải pháp trực tuyến của chúng tôi giành cho <br/>
                                khách hàng doanh nghiệp
                            </h5>
                            <p className="text-18px">
                                Chúng tối cung cấp giải pháp vận chuyển cho mọi nhu cầu :
                            </p>
                            <ul className="body2">
                                <li>Dành cho tất cả doanh nghiệp lớn và nhỏ</li>
                                <li>
                                    Chúng tôi có ưu đãi riêng cho doanh nghiệp gửi từ 300 đơn hàng
                                    một năm.
                                </li>
                                <li>
                                    Các bạn sẽ được những hỗ trợ tốt nhất từ chúng tôi.
                                </li>
                                <li>Giao nhận bưu kiện theo sắp xếp của doanh nghiệp.</li>
                            </ul>
                            <NavLink to="/Business/Homepage"
                                    className="btn btn-primary btn-raised text-button">
                                Tìm hiểu thêm
                            </NavLink>
                        </div>
                        <div className="col-xl-5">
                            <div className="img-container-section-2-create-new-user">
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section2CreateNewUser;