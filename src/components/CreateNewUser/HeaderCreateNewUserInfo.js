import React,{Component} from "react";
import './CreateNewUsercss/HeaderCreateNewUserInfo.css';

class HeaderCreateNewUserInfo extends Component {
    render(){
        return(
            <div className="container-fluid header-create-new-user-info">
                    <div className="row row-header-create-new-user-info">
                        <div className="col-xl-12">
                            <div>
                                <div className="img-container">
                                    <div className="info-new-user">
                                        <div className="text">
                                            <h4 className="Head4">Tài khoản cá nhân myBlitz</h4>
                                            <p className="body2">Hưởng lợi từ nhiều dịch vụ khác như danh
                                                sách gửi thư hoặc nhập dữ liệu.</p>
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
export default HeaderCreateNewUserInfo;