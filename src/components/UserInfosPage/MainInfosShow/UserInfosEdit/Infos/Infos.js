import React, {Component} from "react";
import './Infoscss/Infos.css';
import {connect} from "react-redux";
import * as actions from "./../../../../../actions/LoginActions/LoginActions";
import * as actionsLuutru from "./../../../../../actions/LuuTruActions/LuuTruUserActions";

class Infos extends Component {
    componentWillUnmount() {
        this.setState({saved_success:false})
    }

    constructor(props) {
        super(props);
        this.state = {
            thongtinLoginUser: {},
            saved_success: false,
        }
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value
        let initialState = {...this.state.thongtinLoginUser};
        this.setState({
            thongtinLoginUser: {...initialState, ...initialState, [name]: value}
        }, () => console.log(this.state.thongtinLoginUser))
    }

    AllowOnlyNumber = (event) => {
        let code = (event.which) ? event.which : event.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="infos">
                <h6 className="Head6">
                    Thay đổi thông tin
                </h6>
                <div className="inner-form">
                    <form className="edit-form">
                        <div className="row">
                            <p className="col-xl-4 Head6">Xưng danh</p>
                            <div className="input-button col-xl input-select">
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input"
                                           name="user_sexual" value="male" id="male"
                                           defaultChecked={this.props.info_from_redux.user_sexual === "male"}
                                           required
                                           onChange={this.onHandleChange}/>
                                    <label className="custom-control-label Head6"
                                           htmlFor="male">
                                        Ông
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input"
                                           name="user_sexual" value="female" id="female" required
                                           onChange={this.onHandleChange}
                                           defaultChecked={this.props.info_from_redux.user_sexual === "female"}/>
                                    <label className="custom-control-label Head6"
                                           htmlFor="female">
                                        Bà
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-xl-4 Head6">Họ và tên</label>
                            <div className="input-button col-xl">
                                <input type="text" className="form-control Head6"
                                       placeholder="Nhập mã của bạn" name="user_real_name"
                                       defaultValue={this.props.info_from_redux.user_real_name ? this.props.info_from_redux.user_real_name : undefined}
                                       required onChange={this.onHandleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-xl-4 Head6">Email :</label>
                            <div className="input-button col-xl">
                                <input type="email" className="form-control Head6"
                                       placeholder="Nhập Email của bạn"
                                       defaultValue={this.props.info_from_redux.user_email ? this.props.info_from_redux.user_email : undefined}
                                       name="user_email" required
                                       onChange={this.onHandleChange}/>
                                <span
                                    className="invalid-feedback">Vui lòng nhập Email của bạn</span>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-xl-4 Head6">Số điện thoại di động :</label>
                            <div className="input-button col-xl">
                                <input type="text" className="form-control Head6"
                                       placeholder="Nhập SĐT của bạn"
                                       name="user_telefone" required
                                       defaultValue={this.props.info_from_redux.user_telefone ? this.props.info_from_redux.user_telefone : undefined}
                                       onChange={this.onHandleChange}
                                       onKeyPress={this.AllowOnlyNumber}/>
                                <span className="invalid-feedback">Vui lòng nhập SĐT của bạn</span>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-xl-4 Head6">Số điện thoại cố định :</label>
                            <div className="input-button col-xl">
                                <input type="text" className="form-control Head6"
                                       placeholder="Nhập SĐT của bạn"
                                       name="user_telefone_house" required
                                       defaultValue={this.props.info_from_redux.user_telefone_house ? this.props.info_from_redux.user_telefone_house : undefined}
                                       onChange={this.onHandleChange}
                                       onKeyPress={this.AllowOnlyNumber}/>
                                <span className="invalid-feedback">Vui lòng nhập SĐT của bạn</span>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-xl-4 Head6">Địa chỉ</label>
                            <div className="input-button col-xl">
                                <input type="text" className="form-control Head6"
                                       placeholder="Nhập địa chỉ của bạn" name="user_adress"
                                       defaultValue={this.props.info_from_redux.user_adress ? this.props.info_from_redux.user_adress : undefined}
                                       required onChange={this.onHandleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-xl-4 Head6">Địa chỉ bổ sung</label>
                            <div className="input-button col-xl">
                                <input type="text" className="form-control Head6"
                                       placeholder="Nhập địa chủ của bạn" name="user_adress_option"
                                       defaultValue={this.props.info_from_redux.user_adress_option ? this.props.info_from_redux.user_adress_option : undefined}
                                       required onChange={this.onHandleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-xl-4 Head6">Ngày sinh</label>
                            <div className="input-button col-xl">
                                <input type="date" className="form-control Head6"
                                       placeholder="Nhập ngày sinh của bạn"
                                       name="user_birthday" required
                                       defaultValue={this.props.info_from_redux.user_birthday ? this.props.info_from_redux.user_birthday : undefined}
                                       onChange={this.onHandleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-xl-4 Head6">Fax :</label>
                            <div className="input-button col-xl">
                                <input type="text" className="form-control Head6"
                                       placeholder="Nhập số Fax của bạn" name="user_fax"
                                       defaultValue={this.props.info_from_redux.user_fax ? this.props.info_from_redux.user_fax : undefined}
                                       required onChange={this.onHandleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-4">
                                <button type="button"
                                        className="btn btn-primary btn-raised text-button"
                                        onClick={() => {
                                            let promise = new Promise(resolve => resolve(this.props.save_edit_to_redux_login(this.state.thongtinLoginUser)))
                                            promise.then(() => {
                                              this.props.save_edit_to_redux_store(this.props.info_from_redux)
                                            });
                                            promise.then(this.setState({saved_success:true}))
                                        }}>
                                    Lưu thay đổi
                                </button>
                                <div className={this.state.saved_success?"save-success body1" +
                                    " show":"save-success body1"}>Đã lưu thành công</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
            info_from_redux: state.LoginReducers,
        }
    );
}
const mapDispatchToProps = dispatch => {
    return ({
        save_edit_to_redux_login: (data) => {
            dispatch(actions.Edit(data))
        },
        save_edit_to_redux_store: (data) => {
            dispatch(actionsLuutru.LuuTruEditedUser(data))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Infos);