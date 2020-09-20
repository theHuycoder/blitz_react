import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './StartPagecss/StartPage.css';

class StartPage extends Component {
    render() {
        return (
            <div className="row row-start-page">
                <div className="col-xl-6">
                    <div className="item order-manager">
                        <h6 className="Head6">Vận chuyển và nhận hàng</h6>
                        <p className="text-18px text-right">Quản lí đơn hàng</p>
                        <div className="main">
                            <ul>
                                <li><NavLink to="" className="body1">Tổng quan về vận chuyển <i
                                    className="fas fa-angle-right"/></NavLink></li>
                                <li><NavLink to="" className="body1">Đơn mới <i
                                    className="fas fa-angle-right"/></NavLink></li>
                                <li><NavLink to="" className="body1">Đang vận chuyển <i
                                    className="fas fa-angle-right"/></NavLink></li>
                                <li><NavLink to="" className="body1">Đơn hàng đã nhận <i
                                    className="fas fa-angle-right"/></NavLink></li>
                                <li>
                                    <NavLink
                                        to="/Private/gui-hang/chon-goi-cuoc/tem-dien-tu/goi-co-ban"
                                        className="btn btn-primary btn-raised text-button">
                                        Đặt đơn hàng ngay
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="item shopee">
                        <h6 className="Head6">Kết nối với Shopee</h6>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="img-container">
                                    <picture>
                                        <img src="./images/others/shopee.png" alt=""
                                             className="img-shopee"/>
                                    </picture>
                                </div>
                            </div>
                            <div className="col-xl">
                                <p className="text-18px text-left p-shopee">Liên kết với tài khoản
                                    Shopee</p>
                                <NavLink to="/Private/gui-hang/chon-goi-cuoc/tem-dien-tu/goi-co-ban"
                                         className="btn btn-primary btn-raised text-button">
                                    Kết nối Shopee
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="item best_price">
                        <h6 className="Head6">Gói cước với giá tốt nhất</h6>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="img-container">
                                    <picture>
                                        <img src="./images/banners/header/banner1.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                            <div className="col-xl offset-xl-4">
                                <p className="text-18px p-best-price">Các gói ưu đãi giá tốt</p>
                                <NavLink
                                    to="/Private/gui-hang/chon-goi-cuoc/tem-dien-tu/goi-co-ban"
                                    className="btn btn-primary btn-raised text-button">
                                    Tìm hiểu thêm
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="item user-infos">
                        <h6 className="Head6">Thông tin cá nhân</h6>
                        <div className="row">
                            <div className="col-xl-12"></div>
                            <div className="col-xl-10 main-inner">
                                <div>
                                    <p className="text-18px p-user-infos">Chỉnh sửa thông tin cá
                                        nhân của bạn thật
                                        đơn giản và dễ dàng</p>
                                    <NavLink
                                        to="/Private/gui-hang/chon-goi-cuoc/tem-dien-tu/goi-co-ban"
                                        className="btn btn-primary btn-raised text-button">
                                        Chỉnh sửa thông tin
                                    </NavLink>
                                    <NavLink
                                        to="/Private/gui-hang/chon-goi-cuoc/tem-dien-tu/goi-co-ban"
                                        className="btn btn-outline-primary btn-raised text-button">
                                        Chỉnh sửa địa chỉ
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="col-sign-up">
                                    <button className="text-button">
                                        <i className="fas fa-sign-out-alt"/> &nbsp;Đăng xuất
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default StartPage;