import React, {Component} from "react";
import './CreateNewUsercss/Section2CreateNewUserInfo.css';
import {NavLink} from "react-router-dom";

class Section2CreateNewUserInfo extends Component {
    render() {
        return (
            <div className={this.props.match.url==='/Business/Homepage'? "container-fluid" +
                " section-2-create-new-user-info white-bg": "container-fluid section-2-create-new-user-info"}>
                <div className="container text-center">
                    <div className="row row-section-2-create-new-user-info">
                        <div className="col-xl-4">
                            <div className="section-2-create-new-user-info-card">
                                <div className="section-2-create-new-user-info-img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="section-2-create-new-user-info-text text-left">
                                    <h6 className="Head6">Bạn có câu hỏi nào không?</h6>
                                    <p className="body2">
                                        Chúng tôi rất vui khi được cung cấp thêm thông
                                        tin cho về gói doanh nghiệp cho các bạn.
                                    </p>
                                    <NavLink className="btn btn-primary text-button" to="">
                                        Liên hệ với chúng tôi
                                        <i className="fas fa-angle-right"/> </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl">
                            <div className="section-2-create-new-user-info-card">
                                <div className="section-2-create-new-user-info-img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="section-2-create-new-user-info-text text-left">
                                    <h6 className="Head6">Gửi hàng trực tuyến</h6>
                                    <p className="body2">
                                        Gửi hàng trực tuyến thuận tiện bằng tài khoản Blitz.
                                        Chỉ với một vài thao tác đơn giản
                                    </p>
                                    <NavLink className="btn btn-primary text-button" to="">
                                        Tìm hiểu thêm
                                        <i className="fas fa-angle-right"/> </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl">
                            <div className="section-2-create-new-user-info-card">
                                <div className="section-2-create-new-user-info-img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="section-2-create-new-user-info-text text-left">
                                    <h6 className="Head6">Giải pháp vận chuyển cá nhân</h6>
                                    <p className="body2">
                                        Chúng tôi cung cấp cho các bạn các giải pháp tốt nhất có thể để phù hợp với nhu cầu vận chuyển của các bạn.
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

export default Section2CreateNewUserInfo;