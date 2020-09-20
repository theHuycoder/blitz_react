import React, {Component,Fragment} from "react";
import './CreateNewUsercss/CreateNewUserDone.css';
import {connect} from 'react-redux';
import {NavLink, withRouter} from "react-router-dom";
import * as actions from "./../../actions/CreateNewUserActions/CreateNewUserActions";
import LoginScreen from "../LoginScreen/LoginScreen";
class CreateNewUserDone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LoginScreen:false,
        }
    }
    showLoginScreen = ()=>{
        this.setState({
            LoginScreen:true,
        })
    }
    openLoginScreen = (data)=>{
        this.setState({LoginScreen:data})
    }
    render() {
        return (
            <Fragment>
                {this.state.LoginScreen? <LoginScreen openLoginScreen={this.openLoginScreen}/>: null}
                <div className="container-fluid create-new-user-done">
                    <div className="container container-create-new-user-done text-center">
                        <div className="row row-create-new-user-done-info">
                            <div className="col-xl-12">
                                <h3 className="Head3">
                                    Xin cảm ơn!<br/>
                                    Bạn đã đăng ký thành công tài khoản myBlitz
                                </h3>
                                <p className="text-28px">Tên đăng nhập của bạn là:
                                    <span> {this.props.info_from_redux.user_name}</span>
                                </p>
                                <p className="text-28px">Vui lòng vào email:
                                    <span> {this.props.info_from_redux.user_email} </span>
                                    để kích hoạt tài khoản.
                                </p>
                            </div>
                        </div>
                        <div className="row row-create-new-user-done-button">
                            <div className="col-xl-4 offset-xl-2">
                                <div className="text-center">
                                    <h6 className="Head6">Bạn đã kích hoạt tài khoản?</h6>
                                    <button type="button" onClick={this.showLoginScreen} className="btn btn-primary btn-raised text-button">Đăng nhập ngay</button>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="text-center">
                                    <h6 className="Head6 text-center">Kích hoạt sau</h6>
                                    <NavLink to="/Private/Homepage" className="btn btn-outline-primary btn-raised text-button">Về trang chủ</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    componentWillUnmount() {
        this.props.reset_create_new_user_redux({})
    }
}
const mapStateToProps = state => {
    return ({
        info_from_redux: state.CreateNewUserReducers,
    })
}
const mapDispatchToProps = dispatch => {
    return({
        reset_create_new_user_redux : (data) =>{
            dispatch(actions.ResetCreateNewUser(data))
        }
    })
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateNewUserDone));