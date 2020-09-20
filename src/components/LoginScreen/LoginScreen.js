import React, {Component} from "react";
import './LoginScreencss/LoginScreen.css';
import {NavLink,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actionsLoginLogout from "../../actions/LoginActions/LoginActions";
class LoginScreen extends Component {
    componentDidMount() {
        var modal = document.getElementById('login-screen');
        window.onclick = (event) => {
            if (event.target === modal) {
                this.props.openLoginScreen(false)
            }
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            validated_password: false,
            validated_username: false,
            LoginValidated: {
                User_name: '',
                User_password: '',
            },
            Loginsuccess: false,
        }
    }
    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let cloneLoginValidated = {...this.state.LoginValidated}
        this.setState({
            LoginValidated: {...cloneLoginValidated, [name]: value},
        })
    }
    onLogin = (event)=>{
        let input_username = this.state.LoginValidated.User_name;
        let input_password = this.state.LoginValidated.User_password;
        let indexUserName = this.props.info_stored_user_from_redux.findIndex(user => user.user_name === input_username);
        let indexUserPassword = this.props.info_stored_user_from_redux.findIndex(user => user.user_password === input_password)
        console.log(input_username)
        let form = event.currentTarget;
        if (form.checkValidity()===false){
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                validated: true,
                validated_username: false,
                validated_password: false,
            })
        }else if (indexUserName === -1 && form.checkValidity() === true) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                validated: false,
                validated_username: true,
                validated_password: false,
            })
        } else if (form.checkValidity() === true && indexUserPassword === -1) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                validated: false,
                validated_username: false,
                validated_password: true,
            })
        } else {
            event.preventDefault();
            this.setState({
                validated: false,
                validated_username: false,
                validated_password: false,
                Loginsuccess: true,
            })
            this.props.login_info_to_redux(this.props.info_stored_user_from_redux[indexUserName]);
            this.props.openLoginScreen(false)
            this.props.history.push('/Private/Homepage')
        }
    }
    render() {
        return (
            <div className="login-screen" id="login-screen">
                <div className="container-login-screen">
                    <p className="text-28px text-left">Vui lòng đăng nhập <br/> để sử dụng tính năng
                        này</p>
                    <form noValidate
                          className={this.state.validated ?
                              "needs-validation was-validated" :
                              "needs-validation"}
                          onSubmit={this.onLogin}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                   placeholder="Tên đăng nhập"
                                   style={{textTransform: 'none'}}
                                   name="User_name"
                                   onChange={this.onHandleChange}
                                   onFocus={this.onFocus}
                                   onBlur={this.onBlur}
                                   required/>
                            <div className="invalid-feedback">Vui lòng nhập tên đăng
                                nhập
                            </div>
                            <div
                                className={this.state.validated_username ? "invalid-password body2 show" :
                                    "invalid-password body2"}>Sai tên đăng nhập
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control"
                                   placeholder="Mật khẩu"
                                   name="User_password"
                                   style={{textTransform: 'none'}}
                                   onChange={this.onHandleChange}
                                   required/>
                            <div className="invalid-feedback">Vui lòng nhập mật khẩu
                            </div>
                            <div
                                className={this.state.validated_password ? "invalid-password body2 show" :
                                    "invalid-password body2"}>Sai mật khẩu
                            </div>
                        </div>
                        <div
                            className="custom-control custom-checkbox login-checkbox text-left">
                            <input type="checkbox"
                                   className="custom-control-input login-checkbox-input"
                                   id="nho-thong-tin-login-screen"/>
                            <label
                                className="custom-control-label login-checkbox-label text-18px"
                                htmlFor="nho-thong-tin-login-screen">Nhớ thông tin</label>
                        </div>
                        <button type="submit"
                                className="btn btn-primary btn-raised text-button click-to-login">
                            Đăng nhập
                        </button>
                        <NavLink to="" className="body2 text-left forgot-password">
                            Quên mật khẩu ?
                        </NavLink>
                        <h5 className="Head5 text-left login-sign-up">
                            Bạn không có tài khoản myBlitz?
                            <NavLink to="/Private/dang-ky-info" className="Head5">
                                Đăng ký
                            </NavLink>
                        </h5>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return (
        {
            info_stored_user_from_redux: state.LuuTruUsersReducers,
            info_login_from_redux: state.LoginReducers
        }
    );
}
const mapDispatchToProps = dispatch => {
    return ({
        login_info_to_redux: (data) => {
            dispatch(actionsLoginLogout.Login(data))
        },
    });
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginScreen));