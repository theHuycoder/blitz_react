import React,{Component} from "react";
import './BusinessHomepagecss/HeaderBusinessHomepage.css';

class HeaderBusinessHomepage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render(){
        return(
            <div className="container-fluid header-business-homepage">
                <div className="row row-header-business-homepage">
                    <div className="col-xl-12">
                        <div>
                            <div className="img-container">
                                <div className="info-new-user">
                                    <div className="text">
                                        <h4 className="Head4">Khách hàng doanh nghiệp</h4>
                                        <p className="body2">Chúng tôi cung cấp cho bạn một mức giá
                                            riêng quản lý lô gàng thuận tiện khi bạn
                                            gửi từ 300 đơn hàng một năm.
                                        </p>
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
export default HeaderBusinessHomepage;