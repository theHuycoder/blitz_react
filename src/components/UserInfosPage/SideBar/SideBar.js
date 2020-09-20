import React, {Component} from "react";
import './SideBarcss/SideBar.css';
import {NavLink} from "react-router-dom";

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Acordion: {
                send_order: false,
                receive_order: false,
                user_infos: false,
            },
            send_order_links: [
                {
                    to: this.props.match + '/General-order',
                    exact: true,
                    strict: true,
                    name: 'Tổng quan về vận chuyển'
                },
                {
                    to: '/',
                    exact: true,
                    strict: true,
                    name: 'Đơn mới'
                },
                {
                    to: '/',
                    exact: true,
                    strict: true,
                    name: 'Đang vận chuyển'
                },
                {
                    to: '/',
                    exact: true,
                    strict: true,
                    name: 'Nhập địa chỉ Shopee'
                },
            ],
            receive_order_links:[
                {
                    to: '/',
                    exact: true,
                    strict: true,
                    name: 'Theo dõi đơn hàng'
                },
                {
                    to: '/',
                    exact: true,
                    strict: true,
                    name: 'Đơn hàng đã nhận'
                },
            ],
            user_infos_links : [
                {
                    to: this.props.match +'/User-infos-edit/Infos',
                    exact: true,
                    strict: true,
                    name: 'Thay đổi thông tin'
                },
                {
                    to: '/',
                    exact: true,
                    strict: true,
                    name: 'Danh sách địa chỉ'
                },{
                    to: '/',
                    exact: true,
                    strict: true,
                    name: 'Điểm thưởng'
                },
            ],
        }
    }

    ToggleAcordion = (name) => {
        let initialState = {...this.state.Acordion}
        this.setState({
            Acordion: {...initialState, [name]: !initialState[name]}
        })
    }

    render() {
        let allLinksSendOrders = this.state.send_order_links.map((link, index) => {
            return (
                <NavLink key={index} to={link.to} exact={link.exact}
                         strict={link.strict}
                         className="body1" activeClassName="active">
                    {link.name}
                </NavLink>
            );
        });
        let allLinksReceiveOrders = this.state.receive_order_links.map((link, index) => {
            return (
                <NavLink key={index} to={link.to} exact={link.exact}
                         strict={link.strict}
                         className="body1" activeClassName="active">
                    {link.name}
                </NavLink>
            );
        });
        let allLinksUserInfos = this.state.user_infos_links.map((link, index) => {
            return (
                <NavLink key={index} to={link.to} exact={link.exact}
                         strict={link.strict}
                         className="body1" activeClassName="active">
                    {link.name}
                </NavLink>
            );
        });
        return (
            <div className="side-bar text-left">
                <div className="accordion" id="side-bar">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="mb-0">
                                <button className="btn btn-link text-left text-button" type="button"
                                        data-toggle="collapse" data-target="#start-page"
                                        aria-expanded="true" aria-controls="start-page">
                                    Trang chủ
                                </button>
                            </h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="send-order-heading">
                            <h2 className="mb-0">
                                <button className="btn btn-link text-left collapsed text-button"
                                        type="button" data-toggle="collapse"
                                        data-target="#send-order" aria-expanded="false"
                                        aria-controls="send-order"
                                        onClick={() => this.ToggleAcordion('send_order')}>
                                    Đơn hàng đã gửi
                                    {this.state.Acordion.send_order ?
                                        <i className="fas fa-angle-up"/> :
                                        <i className="fas fa-angle-right"/>}
                                </button>
                            </h2>
                        </div>
                        <div id="send-order" className="collapse"
                             aria-labelledby="send-order-heading">
                            <div className="card-body">
                                {allLinksSendOrders}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="receive-order-heading">
                            <h2 className="mb-0">
                                <button className="btn btn-link text-left collapsed text-button"
                                        type="button" data-toggle="collapse"
                                        data-target="#receive-order" aria-expanded="false"
                                        aria-controls="receive-order"
                                        onClick={() => this.ToggleAcordion('receive_order')}>
                                    Đơn hàng đã nhận {this.state.Acordion.receive_order ?
                                    <i className="fas fa-angle-up"/> :
                                    <i className="fas fa-angle-right"/>}
                                </button>
                            </h2>
                        </div>
                        <div id="receive-order" className="collapse"
                             aria-labelledby="receive-order-heading">
                            <div className="card-body">
                                {allLinksReceiveOrders}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="user-infos-heading">
                            <h2 className="mb-0">
                                <button className="btn btn-link text-left collapsed text-button"
                                        type="button" data-toggle="collapse"
                                        data-target="#user-infos" aria-expanded="false"
                                        aria-controls="user-infos"
                                        onClick={() => this.ToggleAcordion('user_infos')}>
                                    Thông tin cá nhân {this.state.Acordion.user_infos ?
                                    <i className="fas fa-angle-up"/> :
                                    <i className="fas fa-angle-right"/>}
                                </button>
                            </h2>
                        </div>
                        <div id="user-infos" className="collapse"
                             aria-labelledby="user-infos-heading">
                            <div className="card-body">
                                {allLinksUserInfos}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="log-out-heading">
                            <h2 className="mb-0">
                                <button className="btn btn-link text-left collapsed text-button"
                                        type="button" data-toggle="collapse"
                                        data-target="#log-out" aria-expanded="false"
                                        aria-controls="log-out">
                                    <i className="fas fa-sign-out-alt"/> &nbsp;Đăng xuất
                                </button>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;