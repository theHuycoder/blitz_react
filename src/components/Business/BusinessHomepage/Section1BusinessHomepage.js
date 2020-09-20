import React, {Component} from "react";
import './BusinessHomepagecss/Section1BusinessHomepage.css';
import {NavLink} from "react-router-dom";

class Section1BusinessHomepage extends Component {
    render() {
        return (
            <div className="container-fluid section-1-business-homepage">
                <div className="container">
                    <div className="row row-section-1-business-homepage">
                        <div className="col-xl-12 col-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <NavLink to="/Private/Homepage">
                                            <i className="fas fa-home"/>Trang chủ
                                        </NavLink>
                                    </li>
                                    <li className="breadcrumb-item active">Khách hàng doanh nghiệp
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-xl-8 col-main">
                            <h4 className="Head4">
                                Để bạn có thể gửi nhiều hàng đơn hàng một cách đơn
                                giản, chúng tôi cung cấp giải pháp gửi nhiều đơn một
                                lần rất dễ dàng, chỉ với một vài thao tác đơn giản
                            </h4>
                            <p className="body2">
                                Với gói khách hàng doanh nghiệp, chúng tôi cung cấp cho bạn một giải
                                pháp an toàn và giá cả phải chăng <br/>
                                để vận chuyển hàng chuyên nghiệp với khối lượng vận chuyển lớn -
                                từ 300 đơn hàng mỗi một năm.
                            </p>
                            <h6 className="Head6">Quyền lợi của bạn:</h6>
                            <p className="body2 body2-black">
                                Được ưu đãi về giá<br/>
                                Thu thập bưu kiện theo nhu cầu của bạn<br/>
                                Thời gian giao hàng ngắn<br/>
                                Thanh toán thuận tiện qua các cổng trực tuyến GrabPay, Momo, Visa, Master Card, Paypal và Atm nội địa<br/>
                                Không ràng buộc hợp đồng - không có chi phí ẩn
                            </p>
                            <NavLink to="/Private/dang-ky"
                                     className="btn btn-primary btn-raised text-button">
                                Đăng ký tài khoản doanh nghiệp ngay bây giờ
                            </NavLink>
                        </div>
                        <div className="col-xl">
                            <div className="img-container-section-1-business-homepage">
                                <div className="img-container">
                                    <div><img src="" alt=""/></div>
                                </div>
                                <div className="info">
                                    <h6 className="Head6">Bạn có câu hỏi nào không?</h6>
                                    <p className="body2">Chúng tôi rất vui khi được cung cấp thông
                                        tin thêm về các gói ưu đãi</p>
                                    <NavLink to="" className="btn btn-outline-primary text-button">Liên
                                        hệ với chúng tôi</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section1BusinessHomepage;