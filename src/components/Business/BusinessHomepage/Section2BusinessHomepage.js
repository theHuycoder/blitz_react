import React,{Component} from "react";
import './BusinessHomepagecss/Section2BusinessHomepage.css';

class Section2BusinessHomepage extends Component {
    render() {
        return(
            <div className="container-fluid section-2-business-homepage">
                <div className="container">
                    <div className="row row-section-2-business-homepage">
                        <div className="col-xl-12 col-title text-center">
                            <h4 className="Head4">
                                Trở thành chuyên gia vận chuyển với chỉ một vài cú click chuột
                            </h4>
                        </div>
                        <div className="col-xl col-main">
                            <div className="row main-content">
                                <div className="col-xl-3 col-step ">
                                    <div className="step step-1">
                                        <div className="text">
                                            <h4 className="Head4">1</h4>
                                            <p className="body1">
                                                Điền thông tin của bạn vào mẫu đơn
                                                đăng ký và cho biết khối lượng vận
                                                chuyển hàng năm của bạn.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-step">
                                    <div className="step step-2">
                                        <div className="text">
                                            <h4 className="Head4">2</h4>
                                            <p className="body1">
                                                Tìm hiểu về giá vận chuyển
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-step">
                                    <div className="step step-3">
                                        <div className="text">
                                            <h4 className="Head4">3</h4>
                                            <p className="body1">
                                                Xác định các cài đặt cơ bản cho lô
                                                hàng của bạn ví dụ như địa chỉ nhận
                                                hàng, phương thức thanh toán...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-step">
                                    <div className="step step-4">
                                        <div className="text">
                                            <h4 className="Head4">4</h4>
                                            <p className="body1">
                                                Tài khoản của bạn sẽ được chúng tôi
                                                kích hoạt trong 24giờ. Sau đó bạn có
                                                thể vận chuyển trực tiếp.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section2BusinessHomepage;