import React, {Component, Fragment} from "react";
import './Gui_Hang_Page_css/Hoan_thanh.css';
import {connect} from "react-redux";
import * as actionsLuuTru from "./../../actions/LuuTruActions/LuuTruActions";
import * as actionsCreate from "./../../actions/GuiHangActions/GuiHangActions";
class HoanThanh extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.UpdateToDatabase(this.props.info_from_redux);
    }

    UpdateToDatabase = (data) => {
            this.props.send_order_to_database(data)
    }
    Reset_redux = ()=>{
        this.props.reset_redux();
    }
    paket_info_1 = () => {
        var paket_info_1;
        switch (this.props.info_from_redux.thongtindonhang.name) {
            case 'goi_2kg_s':
                paket_info_1 =
                    <Fragment>
                        <i className="fas fa-times"/>
                        <span className="paket-info-text">Theo dõi trực tuyến</span>
                    </Fragment>
                return paket_info_1;
            case 'goi_2kg_m':
                paket_info_1 =
                    <Fragment>
                        <i className="fas fa-times"/>
                        <span className="paket-info-text">Theo dõi trực tuyến</span>
                    </Fragment>
                return paket_info_1;
            case 'goi_2kg_tc':
                paket_info_1 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Theo dõi trực tuyến</span>
                    </Fragment>
                return paket_info_1;
            case 'goi_5kg_tc':
                paket_info_1 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Theo dõi trực tuyến</span>
                    </Fragment>
                return paket_info_1;
            case 'goi_10kg_tc':
                paket_info_1 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Theo dõi trực tuyến</span>
                    </Fragment>
                return paket_info_1;
            case 'goi_315kg_tc':
                paket_info_1 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Theo dõi trực tuyến</span>
                    </Fragment>
                return paket_info_1;
            case 'truoc_9h':
                paket_info_1 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Theo dõi trực tuyến</span>
                    </Fragment>
                return paket_info_1;
            case 'truoc_10h' :
                paket_info_1 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Theo dõi trực tuyến</span>
                    </Fragment>
                return paket_info_1;
            case 'truoc_12h':
                paket_info_1 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Theo dõi trực tuyến</span>
                    </Fragment>
                return paket_info_1;
            case 'trong_ngay':
                paket_info_1 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Theo dõi trực tuyến</span>
                    </Fragment>
                return paket_info_1;
            default:
                paket_info_1 = null;
                return paket_info_1;
        }
    }
    paket_info_2 = () => {
        var paket_info_2;
        switch (this.props.info_from_redux.thongtindonhang.name) {
            case 'goi_2kg_s':
                paket_info_2 =
                    <Fragment>
                        <i className="fas fa-times"/>
                        <span className="paket-info-text">Đảm bảo</span>
                    </Fragment>
                return paket_info_2;
            case 'goi_2kg_m':
                paket_info_2 =
                    <Fragment>
                        <i className="fas fa-times"/>
                        <span className="paket-info-text">Đảm bảo</span>
                    </Fragment>
                return paket_info_2;
            case 'goi_2kg_tc':
                paket_info_2 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Đảm bảo</span>
                    </Fragment>
                return paket_info_2;
            case 'goi_5kg_tc':
                paket_info_2 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Đảm bảo</span>
                    </Fragment>
                return paket_info_2;
            case 'goi_10kg_tc':
                paket_info_2 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Đảm bảo</span>
                    </Fragment>
                return paket_info_2;
            case 'goi_315kg_tc':
                paket_info_2 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Đảm bảo</span>
                    </Fragment>
                return paket_info_2;
            case 'truoc_9h':
                paket_info_2 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Đảm bảo</span>
                    </Fragment>
                return paket_info_2;
            case 'truoc_10h':
                paket_info_2 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Đảm bảo</span>
                    </Fragment>
                break;
            case 'truoc_12h':
                paket_info_2 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Đảm bảo</span>
                    </Fragment>
                return paket_info_2;
            case 'trong_ngay':
                paket_info_2 =
                    <Fragment>
                        <i className="fas fa-check"/>
                        <span className="paket-info-text">Đảm bảo</span>
                    </Fragment>
                return paket_info_2;
            default:
                paket_info_2 = null;
                return paket_info_2;
        }
    }
    componentWillUnmount() {
        this.props.reset_create_new_order({})
    }

    render() {
        return (
            <div className="gui-hang-hoan-thanh">
                <div className="row row-tieu-de-hoan-thanh">
                    <div className="col-xl-12 col-tieu-de-hoan-thanh">
                        <h3 className="Head3">Xin cảm ơn! bạn đã đặt hàng thành công</h3>
                        <p className="text-28px">Hóa đơn điện tử đã được gửi đến
                            Email:<span>{this.props.info_from_redux.thong_tin_dia_chi_sender.sender_email}</span>
                        </p>
                        <p className="text-28px">bạn cũng có thể theo dõi đơn hàng của mình với mã
                            sau:</p>
                        <p className="Head3 Check-code">{this.props.info_from_redux.id}</p>
                    </div>
                </div>
                <div className="row row-button-download">
                    <div className="col-xl-12 col-button-download">
                        <button type="button" className="btn btn-primary btn-raised text-button">In
                            tem điện tử
                        </button>
                        <button type="button"
                                className="btn btn-outline-primary btn-raised text-button">Tải hóa
                            đơn về
                        </button>
                    </div>
                </div>
                <div className="row row-hoan-thanh-repeat-info">
                    <div className="col-xl-5 col-hoan-thanh-goi-cuoc">
                        <p className="Head5">{this.props.info_from_redux.thongtindonhang.paket_size}</p>
                        <p className="Head6">{this.props.info_from_redux.thongtindonhang.paket_max}</p>
                        <p>{this.paket_info_1()}</p>
                        <p>{this.paket_info_2()}</p>
                    </div>
                    <div className="col-xl-4 receiver-info">
                        <p className="Head5">Người nhận</p>
                        <p className="Head6 pay_name">{this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_name}</p>
                        <p className="Head6">{this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_adresse},
                            {this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_district}</p>
                        <p className="Head6">{this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_city},
                            {this.props.info_from_redux.thong_tin_dia_chi_receiver.reiceiver_country}</p>
                    </div>
                    <div className="col-xl-3 sender-info">
                        <p className="Head5">Người gửi</p>
                        <p className="Head6 pay_name">{this.props.info_from_redux.thong_tin_dia_chi_sender.sender_name}</p>
                        <p className="Head6">{this.props.info_from_redux.thong_tin_dia_chi_sender.sender_adresse},
                            {this.props.info_from_redux.thong_tin_dia_chi_sender.sender_district}</p>
                        <p className="Head6">{this.props.info_from_redux.thong_tin_dia_chi_sender.sender_city},
                            {this.props.info_from_redux.thong_tin_dia_chi_sender.sender_country}</p>
                    </div>
                </div>
                <div className="row row-may-in">
                    <div className="col-xl-12 col-tieu-de-may-in">
                        <h3 className="Head3">Bạn không có máy in?</h3>
                        <p className="text-28px">Chúng tôi sẽ giúp bạn làm việc đó</p>
                    </div>
                    <div className="col-xl-4 text-center">
                        <h4 className="Head4">Quét mã QR code</h4>
                        <p className="text-28px text-center">
                            Mở hóa đơn bang điện thoại sau đó đưa cho nhân viên chúng tôi quét mã
                            QR.
                        </p>
                    </div>
                    <div className="col-xl-4 text-center">
                        <h4 className="Head4">Tại các điểm giao nhận</h4>
                        <p className="text-28px text-center">
                            Hãy đưa cho nhân viên của Blitz
                            tại các điểm giao nhận.
                            Nhân viên sẽ in giúp bạn
                        </p>
                    </div>
                    <div className="col-xl-4 text-center">
                        <h4 className="Head4 ">Blitz in giúp bạn</h4>
                        <p className="text-28px ">
                            Chúng tôi sẽ in hóa đơn cho bạn và gửi cho bạn qua đường bưu điện
                        </p>
                    </div>
                </div>
                <div className="row row-hoan-thanh-tuychon">
                    <div className="col-xl-6 text-center">
                        <h4 className="Head4">Có vấn đề với đơn hàng của bạn?</h4>
                        <button type="button"
                                className="btn btn-outline-primary btn-raised text-button">
                            Hủy đơn hàng
                        </button>
                    </div>
                    <div className="col-xl-6 text-center">
                        <h4 className="Head4">Đặt thêm đơn hàng khác</h4>
                        <button type="button"
                                className="btn btn-outline-primary btn-raised text-button">Đặt ngay
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        info_from_redux: state.CreateNewGuiHangReducers,
    });
}
const mapDispatchToProps = (dispatch, props) => {
    return ({
        send_order_to_database: (data) => {
            dispatch(actionsLuuTru.GuiHangSaveToRedux(data))
        },
        reset_create_new_order : (data)=>{
            dispatch(actionsCreate.ResetReduxGuiHang(data))
        }
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(HoanThanh);