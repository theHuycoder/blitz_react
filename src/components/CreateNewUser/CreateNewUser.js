import React, {Component} from "react";
import './CreateNewUsercss/CreateNewUser.css';
import {connect} from "react-redux";
import * as actionsCreate from './../../actions/CreateNewUserActions/CreateNewUserActions';
import * as actionsStore from './../../actions/LuuTruActions/LuuTruUserActions';
import {NavLink, withRouter} from "react-router-dom";

class CreateNewUser extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            user_exist_check:false,
            repeat: true,
            thongtinUser: {
                user_sexual:"male",
            },
        }
    }

    AllowOnlyNumber = (event) => {
        let code = (event.which) ? event.which : event.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
            event.preventDefault();
        }
    }
    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let updateinfo = {...this.state.thongtinUser, [name]: value}
        this.setState({
            thongtinUser: {...updateinfo}
        }, () => console.log(this.state.thongtinUser))

    }
    onSignUp = (event) => {
        let form = event.currentTarget;
        let user_name_inStore =this.props.info_from_redux.findIndex((user_name)=> user_name.user_name===this.state.thongtinUser.user_name);
        if (this.state.thongtinUser.user_password !== this.state.thongtinUser.user_repeat_password) {
            event.preventDefault();
            this.setState({
                repeat: false,
            })
        }
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                validated: true,
            })
        }else if (user_name_inStore !== -1) {
            event.preventDefault();
            this.setState({
                user_exist_check:true,
            })
        }
        else if (this.state.thongtinUser.user_password !== this.state.thongtinUser.user_repeat_password) {
            event.preventDefault();
            this.setState({
                repeat: false,
            })
        } else if (this.state.thongtinUser.user_password !== this.state.thongtinUser.user_repeat_password && form.checkValidity() === false) {
            event.preventDefault();
            this.setState({
                repeat: true,
                validated: true,
            })
        } else if (this.state.thongtinUser.user_password === this.state.thongtinUser.user_repeat_password && form.checkValidity() === true) {
            event.preventDefault();
            this.setState({
                repeat: true,
            },)
            this.props.create_info_to_redux(this.state.thongtinUser);
            this.props.send_info_to_redux(this.state.thongtinUser);
            this.props.history.push('/Private/dang-ky-done')
        } else {
            event.preventDefault();
            this.props.create_info_to_redux(this.state.thongtinUser);
            this.props.send_info_to_redux(this.state.thongtinUser);
            this.props.history.push('/Private/dang-ky-done')
        }
    }

    render() {
        return (
            <div className="container-fluid create-new-user">
                <div className="container">
                    <div className="row row-create-new-user">
                        <div className="col-xl-12 col-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <NavLink to="/Private/Homepage">
                                            <i className="fas fa-home"/>Trang chủ
                                            </NavLink>
                                    </li>
                                    <li className="breadcrumb-item active"
                                        aria-current="page">Đăng ký
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-xl-8 col-form-left">
                            <div className="inner-form">
                                <h3 className="Head3 text-center">Tài khoản cá nhân</h3>
                                <form onSubmit={this.onSignUp}
                                      className={this.state.validated ? "needs-validation was-validated" : "needs-validataion"}
                                      noValidate>
                                    <div className="row">
                                        <p className="col-xl-4 Head6">Xưng danh</p>
                                        <div className="input-button col-xl input-select">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input"
                                                       name="user_sexual" value="male" id="male"
                                                       defaultChecked required
                                                       onChange={this.onHandleChange}/>
                                                <label className="custom-control-label Head6"
                                                       htmlFor="male">
                                                    Ông
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input"
                                                       name="user_sexual"  value="female" id="female" required
                                                       onChange={this.onHandleChange}/>
                                                <label className="custom-control-label Head6"
                                                       htmlFor="female">
                                                    Bà
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-xl-4 Head6">Tên tài khoản :</label>
                                        <div className="input-button col-xl">
                                            <input type="text" className="form-control Head6"
                                                   placeholder="Nhập mã của bạn" name="user_name"
                                                   required onChange={this.onHandleChange}/>
                                            <span className="invalid-feedback">Vui lòng nhập tên tài khoản của bạn</span>
                                            <span className={this.state.user_exist_check ? "repeat-password show" : "repeat-password"}>Tài khoản đã tồn tại</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-xl-4 Head6">Email :</label>
                                        <div className="input-button col-xl">
                                            <input type="email" className="form-control Head6"
                                                   placeholder="Nhập Email của bạn"
                                                   name="user_email" required
                                                   onChange={this.onHandleChange}/>
                                            <span className="invalid-feedback">Vui lòng nhập Email của bạn</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-xl-4 Head6">Số điện thoại :</label>
                                        <div className="input-button col-xl">
                                            <input type="text" className="form-control Head6"
                                                   placeholder="Nhập SĐT của bạn"
                                                   name="user_telefone" required
                                                   onChange={this.onHandleChange}
                                                   onKeyPress={this.AllowOnlyNumber}/>
                                            <span className="invalid-feedback">Vui lòng nhập SĐT của bạn</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-xl-4 Head6">Mật khẩu :</label>
                                        <div className="input-button col-xl">
                                            <input type="password" className="form-control Head6"
                                                   placeholder="Nhập mật khẩu của bạn"
                                                   name="user_password" required
                                                   onChange={this.onHandleChange}/>
                                            <span className="invalid-feedback">Vui lòng nhập mật khẩu của bạn</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-xl-4 Head6">Nhập lại mật khẩu
                                            :</label>
                                        <div className="input-button col-xl">
                                            <input type="password"
                                                   className={this.state.repeat ? "form-control Head6" : "form-control Head6 invalid"}
                                                   placeholder="Nhập lại mật khẩu của bạn"
                                                   name="user_repeat_password" required
                                                   onChange={this.onHandleChange}/>
                                            <span
                                                className="invalid-feedback">Mật khẩu không khớp</span>
                                            <span
                                                className={this.state.repeat ? "repeat-password" : "repeat-password show"}>Mật khẩu không khớp</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-xl-4 Head6">Họ và tên :</label>
                                        <div className="input-button col-xl">
                                            <input type="text" className="form-control Head6"
                                                   placeholder="Họ và tên" name="user_real_name"
                                                   required onChange={this.onHandleChange}/>
                                            <span className="invalid-feedback">Vui lòng nhập họ tên của bạn</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-xl-4 Head6">Địa chỉ</label>
                                        <div className="input-button col-xl">
                                            <input type="text" className="form-control Head6"
                                                   placeholder="Nhập địa chỉ của bạn"
                                                   name="user_adress" required
                                                   onChange={this.onHandleChange}/>
                                            <span className="invalid-feedback">Vui lòng nhập địa chỉ của bạn</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-4"/>
                                        <div className="input-button col-xl">
                                            <div
                                                className="custom-control custom-checkbox login-checkbox text-left">
                                                <input type="checkbox"
                                                       className="custom-control-input login-checkbox-input"
                                                       id="notif-email" name="notif_email"
                                                       onChange={this.onHandleChange}/>
                                                <label
                                                    className="custom-control-label Head6 login-checkbox-label"
                                                    htmlFor="notif-email">Tôi muốn nhận thông tin
                                                    tùy chỉnh vè sản
                                                    phẩm và các dịch vụ từ Blitz qua Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-4"/>
                                        <div className="input-button col-xl">
                                            <div
                                                className="custom-control custom-checkbox login-checkbox text-left">
                                                <input type="checkbox"
                                                       className="custom-control-input login-checkbox-input"
                                                       id="dieu-khoan-dang-ky" required/>
                                                <label
                                                    className="custom-control-label Head6 login-checkbox-label"
                                                    htmlFor="dieu-khoan-dang-ky">Tôi chấp nhận các
                                                    điều
                                                    khoản và điều kiện của Blitz</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 text-center">
                                            <button type="submit"
                                                    className="btn btn-primary btn-raised text-button">
                                                Đăng ký
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl col-info-right">
                            <h4 className="Head4">
                                Quyền lợi của bạn
                            </h4>
                            <p className="text-18px">
                                Quản lý lô hàng thuận tiện với cái nhìn tổng quan
                                về lô hàng và biên lai
                            </p>
                            <p className="text-18px">
                                Thuận tiện nhập dữ liệu địa chỉ để chuyển vào
                                danh sách vận chuyển và nhãn bưu kiện trực
                                tuyến
                            </p>
                            <p className="text-18px">
                                Đồng bộ hóa với ứng dụng myBlitz để quản lý lô
                                hàng trong ứng dụng myBlitz
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return({
        info_from_redux : state.LuuTruUsersReducers,
    })
}
const mapDispatchToProps = dispatch => {
    return ({
        create_info_to_redux: (data) => {
            dispatch(actionsCreate.CreateNewUser(data))
        },
        send_info_to_redux: (data) => {
            dispatch(actionsStore.LuuTruUser(data))
        }

    })
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateNewUser));