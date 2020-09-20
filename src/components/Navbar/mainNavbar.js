import React, {Component, Fragment} from "react";
import {Link, NavLink, withRouter} from "react-router-dom";
import './css/mainNavbar.css';
import * as miniLinks from './datas/miniLinks';
import {connect} from 'react-redux';
import * as actionsLoginLogout from './../../actions/LoginActions/LoginActions';

class MainNavbar extends Component {
    componentDidMount() {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                this.setState({
                    Toggle: true,
                })
            } else {
                this.setState({
                    Toggle: false,
                })
            }
            ;
            this.setState({
                Loginsuccess: this.props.info_login_from_redux.Loginsuccess,
            })
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            LinkonHover: {
                Gui_hang: false,
                Nhan_hang: false,
                Gia_cuoc: false,
                Lien_he: false,
                Login: false,
            },
            Focus: false,
            Toggle: false,
            Logo_src: {
                src_1: './images/Logo/logoBlueXL.png',
                src_2: './images/Logo/logoYellowXL.png',
            },
            validated: false,
            validated_password: false,
            validated_username: false,
            LoginValidated: {
                User_name: '',
                User_password: '',
            },
            Loginsuccess: false,
            LoginsuccessLinkList: [
                {
                    to: '',
                    name: '',
                },
                {
                    to: '/Private/User-infos/General-order',
                    name: 'Đơn hàng của tôi',
                },
                {
                    to: '/Private/gui-hang/chon-goi-cuoc/tem-dien-tu/goi-co-ban',
                    name: 'Đặt đơn Online',
                },
                {
                    to: '',
                    name: 'Danh sách địa chỉ',
                },
                {
                    to: '',
                    name: 'Điểm thưởng'
                },
                {
                    to: '/Private/User-infos/User-infos-edit/Infos',
                    name: 'Thông tin cá nhân',
                },
                {
                    to: '',
                    name: 'Đăng xuất',
                },
            ],
        }
    };

    dropDownMenuShow = Linkname => {
        let initialStateonHover = {
            Gui_hang: false,
            Nhan_hang: false,
            Gia_cuoc: false,
            Lien_he: false,
            Login: false,
        };
        this.setState({
            LinkonHover: {...initialStateonHover, [Linkname]: true}
        })
    };
    dropDownMenuOff = Linkname => {
        let initialStateonHover = {
            Gui_hang: false,
            Nhan_hang: false,
            Gia_cuoc: false,
            Lien_he: false,
            Login: false,
        };
        if (this.state.Focus) {
            this.setState({
                LinkonHover: {
                    Gui_hang: false,
                    Nhan_hang: false,
                    Gia_cuoc: false,
                    Lien_he: false,
                    Login: true,
                }
            })
        } else {
            this.setState({
                LinkonHover: {...initialStateonHover, [Linkname]: false}
            })
        }
    };
    onFocus = () => {
        this.setState({
            Focus: true,
        })
    }
    onBlur = () => {
        this.setState({
            Focus: false,
        })
    }
    update_Logo = () => {
        let logo_src = this.state.Logo_src.src_1;
        if (this.state.Toggle) {
            logo_src = this.state.Logo_src.src_2;
            return logo_src;
        } else {
            return logo_src;
        }
    };
    drop_down_menu = (linklist) => {
        let list = linklist.map((col, index) => {
            return (
                <div className="col-xl-3 col-mini-Link" key={index}>
                    <p className="Head5 mini-Link-title">{col.title}</p>
                    <ul>
                        {col.Link.map((minilink, index) => {
                            return (
                                <li className="list-item-mini-Link" key={index}>
                                    <Link className="Head6 each-mini-Link"
                                          to={minilink.to}>{minilink.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
        });
        return (list);
    };
    toHomepage = () => {
        window.scrollTo(0, 0);
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
    onLogin = (event) => {
        let input_username = this.state.LoginValidated.User_name;
        let input_password = this.state.LoginValidated.User_password;
        let indexUserName = this.props.info_stored_user_from_redux.findIndex(user => user.user_name === input_username);
        let indexUserPassword = this.props.info_stored_user_from_redux.findIndex(user => user.user_password === input_password)
        let form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                validated: true,
                validated_username: false,
                validated_password: false,
            })
        } else if (indexUserName === -1 && form.checkValidity() === true) {
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
                Focus: false,
                LinkonHover: {
                    Gui_hang: false,
                    Nhan_hang: false,
                    Gia_cuoc: false,
                    Lien_he: false,
                    Login: false,
                },
            })
            this.props.login_info_to_redux(this.props.info_stored_user_from_redux[indexUserName])
        }
    }
    Logout = () => {
        this.setState({Loginsuccess: false})
        this.props.logout_info_to_redux(false);
        if (window.location.pathname.startsWith('/Private/User-infos')){
            this.props.history.push('/Private/Homepage')
        }
    }

    render() {
        let input_username = this.state.LoginValidated.User_name;
        let input_password = this.state.LoginValidated.User_password;
        let indexUser;
        indexUser = this.state.Loginsuccess ?
            this.props.info_stored_user_from_redux.findIndex(user => user.user_name === input_username && user.user_password === input_password)
            : null;
        let LoginsuccessLinks = this.state.LoginsuccessLinkList.map((link, index) => {
            if (index === this.state.LoginsuccessLinkList.length - 1) {
                return (
                    <button type="buttons"
                            className=" col-xl-3 offset-xl-9 login-success-link text-28px"
                            key={index}
                            onClick={() => this.Logout()}>
                        <i className="fas fa-sign-out-alt"/><span>{link.name}</span>
                    </button>
                );
            } else {
                return (
                    <NavLink to={link.to}
                             className="col-xl-3 offset-xl-9 login-success-link text-28px"
                             key={index}
                    onClick={()=>this.dropDownMenuOff()}>
                        <span>{link.name}</span>
                    </NavLink>
                );
            }
        })
        return (
            <Fragment>
                <div
                    className={this.state.Toggle ? "container-fluid mainNavbar Navbar-Toggle" : "container-fluid mainNavbar"}>
                    <div className="container container-mainNavbar">
                        <div className="row row-mainNavbar">
                            <div className="col-xl-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <NavLink className="navbar-brand" to="/Private/Homepage/" strict
                                             onClick={this.toHomepage}>
                                        <img src={this.update_Logo()}
                                             alt="Blitz"
                                             className={this.state.Loginsuccess ? 'nav-logo' +
                                                 ' nav-logo-login' : 'nav-logo'}/>
                                    </NavLink>
                                    <button className="navbar-toggler" type="button"
                                            data-toggle="collapse" data-target="#navbarNav"
                                            aria-controls="navbarNav" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"/>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <NavLink className="nav-link Head4"
                                                         onClick={this.toHomepage}
                                                         to="/Private/Homepage/"
                                                >Trang chủ
                                                    <span
                                                        className="sr-only">(current)</span></NavLink>
                                            </li>
                                            <li className={this.state.LinkonHover.Gui_hang ? 'nav-item focus' : 'nav-item'}
                                                onMouseOver={() => this.dropDownMenuShow('Gui_hang')}>
                                                <NavLink
                                                    className={this.state.LinkonHover.Gui_hang ? 'nav-link Head4 focus-link' : 'nav-link Head4'}
                                                    to="/Private/gui-hang/chon-goi-cuoc/tem-dien-tu/goi-co-ban"
                                                    strict
                                                    activeClassName="nav-bar-main-link-active"
                                                    isActive={() => {
                                                        return this.props.location.pathname.startsWith('/Private/gui-hang');
                                                    }}
                                                >Gửi hàng</NavLink>
                                            </li>
                                            <li className={this.state.LinkonHover.Nhan_hang ? 'nav-item' +
                                                ' focus' : 'nav-item'}
                                                onMouseOver={() => this.dropDownMenuShow('Nhan_hang')}>
                                                <NavLink
                                                    className={this.state.LinkonHover.Nhan_hang ? 'nav-link Head4 focus-link' : 'nav-link Head4'}
                                                    to="">Nhận hàng</NavLink>
                                            </li>
                                            <li className={this.state.LinkonHover.Gia_cuoc ? 'nav-item' +
                                                ' focus' : 'nav-item'}
                                                onMouseOver={() => this.dropDownMenuShow('Gia_cuoc')}>
                                                <NavLink
                                                    className={this.state.LinkonHover.Gia_cuoc ? 'nav-link Head4 focus-link' : 'nav-link Head4'}
                                                    to="">Giá cước</NavLink>
                                            </li>
                                            <li className={this.state.LinkonHover.Lien_he ? 'nav-item focus' : 'nav-item'}
                                                onMouseOver={() => this.dropDownMenuShow('Lien_he')}>
                                                <NavLink
                                                    className={this.state.LinkonHover.Lien_he ? 'nav-link Head4 focus-link' : 'nav-link Head4'}
                                                    to=""
                                                >Liên hệ</NavLink>
                                            </li>
                                            <li className={this.state.LinkonHover.Login ? ('nav-item' +
                                                ' focus') : 'nav-item'}
                                                onMouseOver={() => this.dropDownMenuShow('Login')}>
                                                <NavLink
                                                    className="nav-link Head4"
                                                    to="">
                                                    {this.props.info_login_from_redux.Loginsuccess ? (
                                                        <Fragment>
                                                            <i className={this.state.LinkonHover.Login ? 'fas fa-user fa-md focus-link' : 'fas fa-user fa-md'}/>&nbsp;
                                                            <span
                                                                className={this.state.LinkonHover.Login ? 'focus-link' : ''}>{this.props.info_login_from_redux.user_real_name.split(" ").pop()}</span>
                                                        </Fragment>) : (<Fragment>
                                                        {this.state.Loginsuccess ?
                                                            (
                                                                <Fragment>
                                                                    <i className={this.state.LinkonHover.Login ? 'fas fa-user fa-md focus-link' : 'fas fa-user fa-md'}/>&nbsp;
                                                                    <span
                                                                        className={this.state.LinkonHover.Login ? 'focus-link' : ''}>{this.props.info_stored_user_from_redux[indexUser].user_real_name.split(" ").pop()}</span>
                                                                </Fragment>) :
                                                            (
                                                                <i className={this.state.LinkonHover.Login ? 'fas' +
                                                                    ' fa-user fa-1x focus-link' : 'fas fa-user' +
                                                                    ' fa-1x'}/>)}
                                                    </Fragment>)}

                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div
                        className={this.state.LinkonHover.Gui_hang ? 'container-fluid drop-down-menu' +
                            ' active-drop-down' : 'container-fluid drop-down-menu'}
                        onMouseLeave={() => this.dropDownMenuOff()}>
                        <div className="container">
                            <div className="row row-drop-down-menu">
                                {this.drop_down_menu(miniLinks.Gui_hang)}
                            </div>
                        </div>
                    </div>
                    <div
                        className={this.state.LinkonHover.Nhan_hang ? 'container-fluid drop-down-menu' +
                            ' active-drop-down' : 'container-fluid drop-down-menu'}
                        onMouseLeave={() => this.dropDownMenuOff()}>
                        <div className="container">
                            <div className="row row-drop-down-menu">
                                <div className="col-xl-3">
                                    <p className="Head5 mini-Link-title">Kiểm tra đơn hàng</p>
                                    <span
                                        className="Head6 each-mini-Link">Nhập mã vận chuyển của bạn</span>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control"/>
                                        </div>
                                        <Link to=""
                                              className="btn btn-raised btn-primary text-button button-drop-down">Kiểm
                                            tra</Link>
                                    </form>
                                </div>
                                {this.drop_down_menu(miniLinks.Nhan_hang)}
                            </div>
                        </div>
                    </div>
                    <div
                        className={this.state.LinkonHover.Gia_cuoc ? 'container-fluid drop-down-menu' +
                            ' active-drop-down' : 'container-fluid drop-down-menu'}
                        onMouseLeave={() => this.dropDownMenuOff()}>
                        <div className="container">
                            <div className="row row-drop-down-menu">
                                {this.drop_down_menu(miniLinks.Gia_cuoc)}
                            </div>
                        </div>
                    </div>
                    <div
                        className={this.state.LinkonHover.Lien_he ? 'container-fluid drop-down-menu' +
                            ' active-drop-down' : 'container-fluid drop-down-menu'}
                        onMouseLeave={() => this.dropDownMenuOff()}>
                        <div className="container">
                            <div className="row row-drop-down-menu">
                                {this.drop_down_menu(miniLinks.Lien_he)}
                            </div>
                        </div>
                    </div>
                    {this.state.Loginsuccess || this.props.info_login_from_redux.Loginsuccess ? (
                        <div className="container container-login"
                             onMouseLeave={() => this.dropDownMenuOff()}>
                            <div className={this.state.LinkonHover.Login ? 'drop-down-menu' +
                                ' drop-down-login active-drop-down' : 'drop-down-menu drop-down-login text-center'}>
                                <div className="row row-login-success">
                                    {LoginsuccessLinks}
                                </div>
                            </div>
                        </div>
                    ) : (<div className="container container-login"
                              onMouseLeave={() => this.dropDownMenuOff()}>
                        <div
                            className={this.state.LinkonHover.Login ? 'drop-down-menu' +
                                ' drop-down-login active-drop-down' : 'drop-down-menu drop-down-login text-center'}
                        >
                            <div className="row row-login">
                                <form noValidate
                                      className={this.state.validated ? "col-xl-3 offset-xl-9" +
                                          " inner-login needs-validation was-validated" : "col-xl-3 offset-xl-9" +
                                          " inner-login needs-validation"}
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
                                               onFocus={this.onFocus}
                                               onBlur={this.onBlur}
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
                                               id="nho-thong-tin"/>
                                        <label
                                            className="custom-control-label body2 login-checkbox-label"
                                            htmlFor="nho-thong-tin">Nhớ thông tin</label>
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
                    </div>)
                    }
                </div>
            </Fragment>
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
        logout_info_to_redux: (data) => {
            dispatch(actionsLoginLogout.Logout(data))
        }
    });
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNavbar));