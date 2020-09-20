import React, {Component, Fragment} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import './Gui_Hang_Page_css/Thanh_toan.css';

class Thanhtoan extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    constructor(props) {
        super(props);
        this.state = {
            pay_methods: [
                {
                    name: 'GrabPay',
                    src: './images/paymethods/grabpay.png',
                    Link: '/grabpay',
                },
                {
                    name: 'Visa',
                    src: './images/paymethods/visa_PNG32.png',
                    Link: '',
                },
                {
                    name: 'Master Card',
                    src: './images/paymethods/mastercard.png',
                    Link: '',
                },
                {
                    name: 'Paypal',
                    src: './images/paymethods/paypal_PNG19.png',
                    Link: '',
                },
            ],
            nextLink: null,
            validated: false,
        }
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
    sendLinkToClick = (link) => {
        this.setState({
            nextLink: link,
        }, () => console.log(this.state.nextLink))
    }
    ClickNextToPay = (event) => {
        var form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                validated: true,
            }, () => console.log(this.state.validated))
        } else {
            event.preventDefault();
            this.props.history.push('/Private/gui-hang/hoan-thanh')
        }

    };

    render() {
        let pay_methods = this.state.pay_methods.map((method, index) => {
            return (
                <div className="each-method" key={index}>
                    <div className="custom-control custom-radio">
                        <div className="choose-method">
                            <input
                                onClick={() => this.sendLinkToClick(method.Link)} type="radio"
                                className="custom-control-input" id={method.name} name="pay-methods"
                                required/>
                            <label className="custom-control-label Head4"
                                   htmlFor={method.name}>{method.name}</label>
                            <div className="invalid-tooltip">Vui lòng chọn hình thức thanh toán
                            </div>
                        </div>
                        <div className="div-method-logo"><img src={method.src} alt=""
                                                              className="method-logo"/></div>
                    </div>
                </div>
            );
        })
        return (
            <div className="gui-hang-thanh-toan">
                <p className="Head3">Thanh toán</p>
                <p className="text-28px">Hóa đơn điện tử sẽ được gửi đến
                    Email: <span>{this.props.info_from_redux.thong_tin_dia_chi_sender.sender_email}</span>
                    <i className="fas fa-edit fa-1x"/>
                </p>
                <div className="row info-repeat">
                    <div className="col-xl-5 goi-cuoc">
                        <p className="Head5">{this.props.info_from_redux.thongtindonhang.paket_size}<i
                            className="fas fa-edit fa-1x"/></p>
                        <p className="Head6">{this.props.info_from_redux.thongtindonhang.paket_max}</p>
                        <p>{this.paket_info_1()}</p>
                        <p>{this.paket_info_2()}</p>
                    </div>
                    <div className="col-xl-4 receiver-info">
                        <p className="Head5">Người nhận<i className="fas fa-edit fa-1x"/></p>
                        <p className="Head6 pay_name">{this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_name}</p>
                        <p className="Head6">{
                            this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_paket_shop ? ('Điểm giao nhận: ' + this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_paket_shop) :
                                (this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_adresse + ',' +
                                    this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_district)
                        }
                        </p>
                        <p className="Head6">{this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_city},
                            {this.props.info_from_redux.thong_tin_dia_chi_receiver.receiver_country}</p>
                    </div>
                    <div className="col-xl-3 sender-info">
                        <p className="Head5">Người gửi<i className="fas fa-edit fa-1x"/></p>
                        <p className="Head6 pay_name">{this.props.info_from_redux.thong_tin_dia_chi_sender.sender_name}</p>
                        <p className="Head6">{this.props.info_from_redux.thong_tin_dia_chi_sender.sender_adresse},
                            {this.props.info_from_redux.thong_tin_dia_chi_sender.sender_district}</p>
                        <p className="Head6">{this.props.info_from_redux.thong_tin_dia_chi_sender.sender_city},
                            {this.props.info_from_redux.thong_tin_dia_chi_sender.sender_country}</p>
                    </div>
                </div>
                <NavLink to="" className="btn btn-raised btn-primary text-button">Thêm đơn hàng
                    khác</NavLink>
                <div className="coupon">
                    <p className="text-28px">Nhập mã giảm giá</p>
                    <form action="">
                        <input type="text" className="form-control Head5" placeholder="Nhập mã"/>
                        <button type="submit" className="btn btn-raised btn-primary text-button">
                            Sử dụng
                        </button>
                    </form>
                </div>
                <div className="thanh-toan-all-price">
                    <span className="Head5">Tổng tiền:</span>
                    <span
                        className="Head4">{this.props.info_from_redux.priceall.toLocaleString()} VNĐ</span>
                </div>
                <form action="" onSubmit={this.ClickNextToPay}
                      className={this.state.validated ? "needs-validation was-validated" : "needs-validataion"}
                      noValidate>
                    <div className="thanh-toan-pay-methods">
                        <p className="Head3">Chọn hình thức thanh toán</p>
                        {pay_methods}
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"
                               id="check-dieu-khoan" required/>
                        <label className="custom-control-label text-28px"
                               htmlFor="check-dieu-khoan">Tôi đồng ý với
                            điều khoản và quy định</label>
                        <div className="invalid-feedback">Đồng ý điều khoản và quy định để tiếp
                            tục
                        </div>
                    </div>
                    <button type="submit"
                            className="btn btn-primary btn-raised text-button click-to-pay">Thanh
                        toán
                    </button>
                </form>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return (
        {
            info_from_redux: state.CreateNewGuiHangReducers,
        }
    );
}
export default withRouter(connect(mapStateToProps, null)(Thanhtoan));