import React, {Component} from "react";
import './CreateNewUsercss/CreateNewUserInfo.css';
import {NavLink} from "react-router-dom";

class CreateNewUserInfo extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="container-fluid create-new-user-info">
                <div className="container">
                    <div className="row row-create-new-user-info">
                        <div className="col-xl-12 col-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <NavLink to="/Private/Homepage">
                                            <i className="fas fa-home"/>Trang chủ
                                        </NavLink>
                                    </li>
                                    <li className="breadcrumb-item active">Tài khoản cá nhân</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-xl-8 col-main">
                            <h4 className="Head4">
                                Bạn có muốn gửi và nhận bưu kiện của mình thuận tiện
                                hơn không? Hãy tạo một tài khoản Blitz ngay nào.
                            </h4>
                            <p className="body2">
                               Đăng ký một lần và tận hưởng nhiều lợi ích
                            </p>
                            <h6 className="Head6">Quyền lợi của bạn:</h6>
                            <p className="body2 body2-black">
                                Quản lý lô hàng thuận tiện với cái nhìn tổng quan
                                về lô hàng và biên lai.
                                <br/><br/>
                                Thuận tiện nhập dữ liệu địa chỉ để chuyển vào
                                danh sách vận chuyển và nhãn bưu kiện trực
                                tuyến.
                                <br/><br/>
                                Đồng bộ hóa với ứng dụng Blitz để quản lý lô
                                hàng trong ứng dụng myBlitz
                            </p>
                            <NavLink to="/Private/dang-ky"
                                    className="btn btn-primary btn-raised text-button">
                                Đăng ký tài khoản ngay bây giờ
                            </NavLink>
                        </div>
                        <div className="col-xl col-main">
                            <div className="img-container-create-new-user-info">
                                <div className="img-container">
                                    <div><img src="" alt=""/></div>
                                </div>
                                <div className="info">
                                    <h6 className="Head6">Bạn có câu hỏi nào không?</h6>
                                    <p className="body2">Chúng tôi rất vui khi được cung cấp thông tin thêm về các gói ưu đãi</p>
                                    <NavLink to="" className="btn btn-outline-primary text-button">Liên hệ với chúng tôi</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateNewUserInfo;