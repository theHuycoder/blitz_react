import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import './CheckDonHangcss/CheckDonHang.css';
import * as Scroll from "react-scroll";

class CheckDonHang extends Component {
    componentDidMount() {
        this.setState({
            appear: true,
        })
        let scroller = Scroll.scroller;
        scroller.scrollTo('check-don-hang', {
            smooth: true,
            duration: 500,
            offset: -80,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let scroller = Scroll.scroller;
        scroller.scrollTo('check-don-hang', {
            smooth: true,
            duration: 500,
            offset: -80,
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            appear: false,
            toggle_acordion: {
                history: true,
                notification_message: false,
            }
        };
    }

    toggle_acordion = (NameArcodion) => {
        let initialArcodionState = {...this.state.toggle_acordion}
        let update = {...initialArcodionState, [NameArcodion]: !initialArcodionState.[NameArcodion]}
        console.log(update)
        this.setState({
            toggle_acordion: {...update},
        }, () => {
            let scroller = Scroll.scroller;
            scroller.scrollTo(NameArcodion, {
                smooth: true,
                duration: 500,
                offset: -200,
            })
        })
    }
    toggle_arcodion_icon = (NameArcodion) => {
        if (this.state.toggle_acordion.[NameArcodion]) {
            return <i className="fas fa-minus fa-2x"/>;
        } else {
            return <i className="fas fa-plus fa-2x"/>;
        }
    }
    CloseArcodion = () => {
        this.setState({
            toggle_acordion: {
                history: false,
                notification_message: false,
            }
        })
    }

    render() {
        var don_hang_index = this.props.info_from_redux.findIndex(donhang => donhang.id.toUpperCase() === this.props.receive_code_redux || donhang.id === this.props.receive_code_redux)
        let sender_name;
        let donhang_id;
        let receiver_name;
        let icon_receiver;
        let receiver_paket_shop;
        let receiver_district;
        let receiver_city;
        let receiver_country;
        let newest_time;
        let newest_details;
        let history_details;
        let progress;
        if (don_hang_index === undefined || don_hang_index === -1) {
            return (
                <div>Không tìm thấy</div>
            );
        } else {
            sender_name = this.props.info_from_redux[don_hang_index].thong_tin_dia_chi_sender.sender_name;
            donhang_id = this.props.info_from_redux[don_hang_index].id.toUpperCase();
            receiver_name = this.props.info_from_redux[don_hang_index].thong_tin_dia_chi_receiver.receiver_name;
            receiver_district = this.props.info_from_redux[don_hang_index].thong_tin_dia_chi_receiver.receiver_district;
            receiver_city = this.props.info_from_redux[don_hang_index].thong_tin_dia_chi_receiver.receiver_city;
            receiver_paket_shop = this.props.info_from_redux[don_hang_index].thong_tin_dia_chi_receiver.receiver_paket_shop ?
                this.props.info_from_redux[don_hang_index].thong_tin_dia_chi_receiver.receiver_paket_shop : '';
            receiver_country = this.props.info_from_redux[don_hang_index].thong_tin_dia_chi_receiver.receiver_country;
            progress = [...this.props.info_from_redux[don_hang_index].progress];
            newest_time = progress[progress.length - 1].time;
            newest_details = progress[progress.length - 1].info;
            history_details = progress.reverse().map((detail, index) => {
                if (index === 0) {
                    return (
                        <div key={index} className="each-detail">
                            <div><i className="fas fa-check-circle fa-4x"/></div>
                            <div>
                                <h5 className="Head5">{detail.time}</h5>
                                <p className="Head5">{detail.info}</p>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div key={index} className="each-detail">
                            <div><i className="far fa-check-circle fa-4x"/></div>
                            <div>
                                <h5 className="Head5">{detail.time}</h5>
                                <p className="Head5">{detail.info}</p>
                            </div>
                        </div>
                    );
                }
            });
            switch (this.props.info_from_redux[don_hang_index].status) {
                case 'New':
                    icon_receiver = <i className="fas fa-check-circle fa-6x"/>;
                    break;
                case 'Progress' :
                    icon_receiver = <i className="fas fa-check-circle fa-6x"/>;
                    break;
                case 'Finish':
                    icon_receiver =
                        <img src="./images/others/finishshipedicon.png" className="icon-finished"
                             alt=""/>
                    break;
                case 'Error':
                    icon_receiver = <i className="fas fa-times-circle fa-6x"/>;
                    break;
                default:
                    break;
            }
            ;
            return (
                <div className="container-fluid check-don-hang-fluid"
                     name="check-don-hang">
                    <div className="container">
                        <div
                            className={this.state.appear ? "row row-check-don-hang scale-up-ver-top" : "row row-check-don-hang"}>
                            <div className="col-xl-10 offset-xl-1">
                                <button type="button" className="xem-tong-quat text-28px"
                                        onClick={this.CloseArcodion}><i
                                    className="fas fa-arrow-left fa-2x"/>Xem Tổng quát
                                </button>
                            </div>
                            <div className="col-xl-10 offset-xl-1">
                                <div className="check-don-hang-main">
                                    <div className="accordion" id="checkdonhangmain">
                                        <div className="card">
                                            <div className="card-header" id="sender-info">
                                                <h2 className="mb-0">
                                                    <button
                                                        className="btn btn-link btn-block text-left"
                                                        type="button" data-toggle="collapse"
                                                        data-target="#collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                        <h3 className="Head3">{sender_name}</h3>
                                                        <br/>
                                                        <h4 className="Head4">{donhang_id}</h4>
                                                    </button>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="receiver_info">
                                                <h2 className="mb-0">
                                                    <button
                                                        className="btn btn-link btn-block text-left collapsed"
                                                        type="button" data-toggle="collapse"
                                                        data-target="#collapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo">
                                                        <div>{icon_receiver}</div>
                                                        <div>
                                                            <h4 className="Head4 main-title">
                                                                {newest_details}
                                                            </h4>
                                                            <h5 className="Head5 main-details">
                                                                {newest_time}<br/>
                                                                Người
                                                                nhận: <span>{receiver_name}</span>,<br/>
                                                                {this.props.info_from_redux[don_hang_index].thong_tin_dia_chi_receiver.receiver_paket_shop ?
                                                                    ('Mã số điểm giao nhận :' + receiver_paket_shop) :
                                                                    (<Fragment>
                                                                        Đ/C: <span>{receiver_district},{receiver_city},{receiver_country}</span><br/>
                                                                        {this.props.info_from_redux[don_hang_index].status === 'Finish' ? (
                                                                            <Fragment>Người nhận
                                                                                hàng: <span>{newest_details}</span></Fragment>) : (
                                                                            <Fragment>Trạng
                                                                                thái: <span>{newest_details}</span></Fragment>)}
                                                                    </Fragment>)
                                                                }

                                                            </h5>
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>
                                        </div>
                                        <div
                                            className={this.state.toggle_acordion.history ? "card" : "card card-close-bg-gray"}>
                                            <div className="card-header" id="history"
                                                 name="history">
                                                <h2 className="mb-0">
                                                    <button
                                                        className="btn btn-link btn-block text-left collapsed"
                                                        type="button" data-toggle="collapse"
                                                        data-target="#collapseThree"
                                                        aria-expanded="true"
                                                        aria-controls="collapseThree"
                                                        onClick={() => this.toggle_acordion('history')}>
                                                        <h4 className="Head4 main-title">Lịch sử chi
                                                            tiết</h4>
                                                        <span>{this.toggle_arcodion_icon('history')}</span>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseThree"
                                                 className={this.state.toggle_acordion.history ? "show" : "collapse"}
                                                 aria-labelledby="headingThree">
                                                <div
                                                    className={this.props.info_from_redux[don_hang_index].progress.length > 1 ? "card-body body-history line-before" : "card-body body-history"}>
                                                    {history_details}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={this.state.toggle_acordion.notification_message ? "card" : "card card-close-bg-gray"}>
                                            <div className="card-header" id="notification_message"
                                                 name="notification_message">
                                                <h2 className="mb-0">
                                                    <button
                                                        className="btn btn-link btn-block text-left collapsed"
                                                        type="button" data-toggle="collapse"
                                                        data-target="#collapseFour"
                                                        aria-expanded="true"
                                                        aria-controls="collapseFour"
                                                        onClick={() => this.toggle_acordion('notification_message')}>
                                                        <h4 className="Head4 main-title">Nhận thông
                                                            báo
                                                            lịch trình vận chuyển</h4>
                                                        <span>{this.toggle_arcodion_icon('notification_message')}</span>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseFour"
                                                 className={this.state.toggle_acordion.notification_message ? "show" : "collapse"}
                                                 aria-labelledby="headingFour">
                                                <div className="card-body">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

const mapStateToProps = state => {
    return ({
        info_from_redux: state.LuuTruDonHangReducers,
        receive_code_redux: state.CheckDonHangReducers,
    })
}
export default connect(mapStateToProps, null)(CheckDonHang);
