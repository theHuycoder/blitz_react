import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './childcss/Dia_chi_form.css';
import moment from "moment";
import 'moment/locale/vi';
import {connect} from "react-redux";

class DiaChiForm extends Component {
    componentDidMount() {
        moment.locale('vi');
        let days1 = [];
        let days2 = [];
        for (let i = 1; i <= 7; i++) {

            days1.push(moment().add(i, 'days').format('LLLL'));
            this.setState({
                list_of_days_giao_hang_tai_nha: [...days1]
            })
        }
        for (let i = 2; i <= 8; i++) {
            days2.push(moment().add(i, 'days').format('LLLL'));
            this.setState({
                list_of_days_chon_ngay_giao_nguoi_nhan: [...days2]
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.SendInfoOut();
    }

    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            cities: [
                'An Giang', 'Bà Rịa – Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu', 'Bắc Ninh', 'Bến' +
                ' Tre', 'Bình Định', 'Bình Dương', 'Hà Nội', 'Tp.Hồ Chí Minh'],
            default_city_select: {
                receiver_city: true,
                sender_city: true,
            },
            list_of_days_giao_hang_tai_nha: [],
            list_of_days_chon_ngay_giao_nguoi_nhan: [],
            option_bo_sung: {
                giao_hang_tai_nha: false,
                chon_ngay_giao_nguoi_nhan: false,
            },
            option_bo_sung_price: {
                giao_hang_tai_nha: 0,
                chon_ngay_giao_nguoi_nhan: 0,
            },
            thong_tin_dia_chi_receiver: {
                receiver_country: this.props.country_from_redux.thongtindonhang.country,
            },
            thong_tin_dia_chi_sender: {
                sender_country: 'Việt Nam',
            },
            thong_tin_dia_chi_option: {
                giao_hang_tai_nha: null,
                chon_ngay_giao_nguoi_nhan: null,
            }
        }
    }

    openArcodion = (nameArcodion, price) => {
        let inititialArcodion = {...this.state.option_bo_sung};
        let clonepriceoption = {...this.state.option_bo_sung_price}
        let updateArcodionPrice = {...clonepriceoption, [nameArcodion]: [price]}
        let updateArcodion = {
            ...inititialArcodion,
            [nameArcodion]: !inititialArcodion[nameArcodion]
        }
        this.setState({
            option_bo_sung: {...updateArcodion}
        }, () => {
            if (this.state.option_bo_sung.[nameArcodion] === true) {
                this.setState({
                    option_bo_sung_price: {...updateArcodionPrice},
                }, () => {
                    this.props.OptionPrice(this.state.option_bo_sung_price);
                })
            } else {
                let reset_price = {...this.state.option_bo_sung_price, [nameArcodion]: 0}
                this.setState({
                    option_bo_sung_price: reset_price,
                    thong_tin_dia_chi_option: {
                        ...this.state.thong_tin_dia_chi_option,
                        [nameArcodion]: null
                    }
                }, () => {
                    this.props.OptionPrice(this.state.option_bo_sung_price)
                })
            }
        })
    }
    formFocus = () => {
        this.setState({
            focus: true,
        })
    }
    formoutFocus = () => {
        this.setState({
            focus: false,
        })
    }
    onCity = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        let inititalDefaultSelect = {
            receiver_city: true,
            sender_city: true,
        }
        if (value === '') {
            this.setState({
                default_city_select: {...inititalDefaultSelect}
            }, () => {
                if (name === 'receiver_city') {
                    this.setState({
                        thong_tin_dia_chi_receiver: {
                            ...this.state.thong_tin_dia_chi_receiver,
                            [name]: value
                        }
                    })
                } else if (name === 'sender_city') {
                    this.setState({
                        thong_tin_dia_chi_sender: {
                            ...this.state.thong_tin_dia_chi_sender,
                            [name]: value
                        }
                    })
                }
            })
        } else {
            let updateSelect = {...this.state.default_city_select, [name]: false}
            this.setState({
                default_city_select: {...updateSelect},
            }, () => {
                if (name === 'receiver_city') {
                    this.setState({
                        thong_tin_dia_chi_receiver: {
                            ...this.state.thong_tin_dia_chi_receiver,
                            [name]: value
                        }
                    })
                } else if (name === 'sender_city') {
                    this.setState({
                        thong_tin_dia_chi_sender: {
                            ...this.state.thong_tin_dia_chi_sender,
                            [name]: value
                        }
                    })
                }
            })
        }
    }
    onHandleChangeReceiver = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === "checkboxes" ? target.checked : target.value;
        let initialReceiver = {receiver_country: this.props.country_from_redux.thongtindonhang.country}
        let updateinitialReceiver = {...this.state.thong_tin_dia_chi_receiver}
        if (value !== '') {
            this.setState({
                thong_tin_dia_chi_receiver: {...updateinitialReceiver, [name]: value}
            })
        } else {
            this.setState({
                thong_tin_dia_chi_receiver: {...initialReceiver}
            })
        }
    }
    onHandleChangeSender = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === "checkboxes" ? target.checked : target.value;
        let initialSender = {...this.state.thong_tin_dia_chi_sender}
        this.setState({
            thong_tin_dia_chi_sender: {...initialSender, [name]: value}
        })
    }
    onHandleChangeOption = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === "checkboxes" ? target.checked : target.value;
        let inititalOption = {...this.state.thong_tin_dia_chi_option};
        if (this.state.option_bo_sung.[name] === true) {
            this.setState({
                thong_tin_dia_chi_option: {...inititalOption, [name]: value}
            }, () => console.log(this.state.thong_tin_dia_chi_option))
        } else if (this.state.option_bo_sung.[name] === false) {
            this.setState({
                thong_tin_dia_chi_option: {...inititalOption, [name]: null}
            }, () => console.log(this.state.thong_tin_dia_chi_option))
        }
    }
    SendInfoOut = () => {
        this.props.SendInfoOut(this.state)
    }

    render() {
        let selectCity = this.state.cities.map((city, index) => {
            return (
                <option key={index}>{city}</option>
            );
        });
        let date_select_list_giao_hang_tai_nha = this.state.list_of_days_giao_hang_tai_nha.map((day, index) => {
            return (
                <option key={index}>{day}</option>
            );
        })
        let date_select_list_chon_ngay_giao_nguoi_nhan = this.state.list_of_days_chon_ngay_giao_nguoi_nhan.map((day, index) => {
            return (
                <option key={index}>{day}</option>
            );
        })
        return (
            <div className="input-dia-chi-here">
                <form id="nhap-dia-chi" className={this.props.validated ? "needs-validation" +
                    " was-validated" : "needs-validation"}
                      noValidate
                      onSubmit={this.props.SubmitForm}>
                    <div className="receiver-input-form">
                        <NavLink to="" className="btn btn-outline-primary text-button">
                            Người nhận đã lưu
                        </NavLink>
                        <div className="input-button">
                            <input type="text" className="form-control"
                                   placeholder="Họ và tên*" required
                                   onChange={this.onHandleChangeReceiver}
                                   name="receiver_name"/>
                            <div className="invalid-feedback">Vui lòng nhập tên người nhận</div>
                        </div>
                        <div className="input-button">
                            <input type="text" className="form-control"
                                   placeholder="Thông tin bổ sung"
                                   name="receiver_optional_info"
                                   onChange={this.onHandleChangeReceiver}/>
                        </div>
                        <div className="input-button">
                            <input type="text" className="form-control"
                                   placeholder="Địa chỉ*"
                                   onChange={this.onHandleChangeReceiver}
                                   name="receiver_adresse"
                                   required/>
                            <div className="invalid-feedback">Vui lòng nhập địa chỉ người nhận</div>
                        </div>
                        <div className="input-button">
                            <select
                                className={this.state.default_city_select.receiver_city ? "custom-select" +
                                    " city-default" : "custom-select"}
                                required name="receiver_city" onChange={this.onCity}>
                                <option value="">Tỉnh/Thành phố*</option>
                                {selectCity}
                            </select>
                            <div className="invalid-feedback">Vui lòng chọn thành phố</div>
                        </div>
                        <div className="input-button">
                            <input type="text" className="form-control"
                                   placeholder="Quận/Huyện*" required
                                   name="receiver_district"
                                   onChange={this.onHandleChangeReceiver}/>
                            <div className="invalid-feedback">Vui lòng chọn quận/huyện</div>
                        </div>
                        <div className="input-button input-with-label-in">
                            <label htmlFor="receiver-country">Chọn quốc gia</label><br/>
                            <input type="text" className="form-control form-control-country"
                                   defaultValue={this.props.country_from_redux.thongtindonhang.country}
                                   name="receiver_country" disabled
                                   onChange={this.onHandleChangeReceiver}/>
                        </div>
                        <div className="input-button">
                            <input type="email" className="form-control"
                                   placeholder="Email người nhận"
                                   onChange={this.onHandleChangeReceiver} name="receiver_email"/>
                            <button type="button" className="btn btn-primary" data-toggle="modal"
                                    data-target="#info-receiver-email">
                                <i className="far fa-question-circle fa-3x"
                                   style={{color: '#000000'}}/>
                            </button>
                            <div className="modal fade" id="info-receiver-email" tabIndex="-1"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title Head4"
                                                id="exampleModalLabel">Email người nhận</h4>
                                            <button type="button" className="close"
                                                    data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p className="body1">
                                                Chúng tôi sẽ gửi thông tin về đơn hàng cho người
                                                nhận thông qua Email này.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="body1" style={{color: 'rgba(0,0,0,0.6)'}}>*Bắt buộc</p>
                        <NavLink to="" className="btn btn-outline-primary">
                            Lưu địa chỉ
                        </NavLink>
                    </div>
                    <div className="receiver-input-form">
                        <p className="text-28px">Người gửi</p>
                        <NavLink to="" className="btn btn-outline-primary text-button">
                            Người gửi đã lưu
                        </NavLink>
                        <div className="input-button">
                            <input type="text" className="form-control"
                                   placeholder="Họ và tên*" name="sender_name"
                                   onChange={this.onHandleChangeSender}
                                   required/>
                            <div className="invalid-feedback">Vui lòng điền tên người gửi</div>
                        </div>
                        <div className="input-button">
                            <input type="text" className="form-control"
                                   placeholder="Thông tin bổ sung"
                                   name="sender_optional_info"
                                   onChange={this.onHandleChangeSender}/>
                        </div>
                        <div className="input-button">
                            <input type="text" className="form-control"
                                   placeholder="Địa chỉ*" required
                                   name="sender_adresse"
                                   onChange={this.onHandleChangeSender}/>
                            <div className="invalid-feedback">Vui lòng chọn địa chỉ ngươi gửi</div>
                        </div>
                        <div className="input-button">
                            <select
                                className={this.state.default_city_select.sender_city ? "custom-select" +
                                    " city-default" : "custom-select"}
                                required name="sender_city" onChange={this.onCity}>
                                <option value="">Tỉnh/Thành phố*</option>
                                {selectCity}
                            </select>
                            <div className="invalid-feedback">Vui lòng chọn thành phố</div>
                        </div>
                        <div className="input-button">
                            <input type="text" className="form-control"
                                   placeholder="Quận/Huyện*"
                                   name="sender_district"
                                   onChange={this.onHandleChangeSender}
                                   required/>
                            <div className="invalid-feedback">Vui lòng chọn quận/huyện</div>
                        </div>
                        <div className="input-button input-with-label-in">
                            <label htmlFor="receiver-country">Chọn quốc gia</label><br/>
                            <input type="text" className="form-control form-control-country"
                                   defaultValue="Việt Nam" name="sender_country"
                                   onChange={this.onHandleChangeSender}
                                   disabled/>
                        </div>
                        <div className="input-button">
                            <input type="email" className="form-control"
                                   placeholder="Email người gửi*" name="sender_email"
                                   onChange={this.onHandleChangeSender}
                                   required/>
                            <div className="invalid-feedback">Vui lòng điền Email người gửi</div>
                            <button type="button" className="btn btn-primary" data-toggle="modal"
                                    data-target="#info-sender-email">
                                <i className="far fa-question-circle fa-3x"
                                   style={{color: '#000000'}}/>
                            </button>
                            <div className="modal fade" id="info-sender-email" tabIndex="-1"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title Head4"
                                                id="exampleModalLabel">Email người gửi</h4>
                                            <button type="button" className="close"
                                                    data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p className="body1">
                                                Chúng tôi sẽ gửi hóa đơn, mã QR và các thông tin
                                                liên quan đến đơn hàng qua Email này
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="body1" style={{color: 'rgba(0,0,0,0.6)'}}>*Bắt buộc</p>
                        <NavLink to="" className="btn btn-outline-primary">
                            Lưu địa chỉ
                        </NavLink>
                    </div>
                </form>
                <div className="option-giao-hang-tai-nha">
                    <span className="text-28px">Giao hàng cho nhân viên tại nhà</span>
                    <button type="button" className="btn btn-primary" data-toggle="modal"
                            data-target="#option-giao-hang-tai-nha-info">
                        <i className="far fa-question-circle fa-2x"
                           style={{color: '#000000'}}/>
                    </button>
                    <div className="modal fade" id="option-giao-hang-tai-nha-info" tabIndex="-1"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title Head4"
                                        id="exampleModalLabel">Giao hàng cho nhân viên tại nhà( Thêm
                                        75.000VNĐ)</h4>
                                    <button type="button" className="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p className="body1">
                                        Chúng tôi sẽ nhận hàng trong các ngày từ thứ 2 đến thứ 7(
                                        không tính ngày nghỉ lễ) trong khoảng từ 8 giờ đến 20 giờ.
                                        Nếu đặt 4 đơn hàng trở lên dịch vụ sẽ không mất thêm phí
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse"
                                        data-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseOne"
                                        onClick={() => this.openArcodion('giao_hang_tai_nha', 75000)}>
                                    <div>
                                        {this.state.option_bo_sung.giao_hang_tai_nha ?
                                            (
                                                <i className="fas fa-check-circle fa-3x"></i>) :
                                            (<i className="fas fa-plus-circle fa-3x"></i>)}
                                    </div>
                                    <div style={{textAlign: 'left'}}>
                                        <p style={{display: 'inline-block'}} className="body2">
                                            Giao hàng cho nhân viên tại nhà (Thêm 75.000VNĐ)
                                        </p>
                                        <p className="body2">
                                            Bạn không có thời gian đến điểm giao nhận hoặc không có
                                            điểm giao nhận gần bạn? Hãy để chúng tôi đến nhận hàng.
                                        </p>
                                    </div>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFive" className="collapse"
                             aria-labelledby="headingOne">
                            <div className="card-body">
                                <div className={this.state.focus ? "input-button" +
                                    " input-with-label-in focus" : "input-button input-with-label-in"}>
                                    <label>Nhận hàng vào khoảng 8:00 giờ và 20:00 giờ</label><br/>
                                    <select className="custom-select" name="giao_hang_tai_nha"
                                            onChange={this.onHandleChangeOption}
                                            onFocus={this.formFocus}
                                            onBlur={this.formoutFocus}>
                                        {date_select_list_giao_hang_tai_nha}
                                    </select>
                                </div>
                                <div className="option-luu-y">
                                    <p><i className="fas fa-exclamation-circle fa-2x"></i></p>
                                    <p className="luu-y">
                                        <span className="body2">Bạn không có nhà?</span><br/>
                                        Hãy điền vào ô thông tin bổ sung để chúng tôi có thể biết vị
                                        trí bạn đặt bưu kiện.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="option-giao-hang-theo-ngay">
                    <span className="text-28px">Chọn ngày giao hàng cho người nhận</span>
                    <button type="button" className="btn btn-primary" data-toggle="modal"
                            data-target="#option-giao-hang-theo-ngay-info">
                        <i className="far fa-question-circle fa-2x"
                           style={{color: '#000000'}}/>
                    </button>
                    <div className="modal fade" id="option-giao-hang-theo-ngay-info" tabIndex="-1"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title Head4"
                                        id="exampleModalLabel">Giao hàng theo yêu cầu( Thêm
                                        25.000VNĐ)</h4>
                                    <button type="button" className="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p className="body1">
                                        Với dịch vụ Ngày ưu tiên, bạn xác định gói hàng sẽ được giao
                                        vào ngày làm việc nào (thứ Hai đến thứ Bảy). Nếu chúng tôi
                                        không thể giao hàng vào ngày được yêu cầu, bạn sẽ tự động
                                        được hoàn trả phí dịch vụ trong vòng một tuần. Vui lòng giao
                                        hàng của bạn cho DHL từ hai đến sáu ngày làm việc trước ngày
                                        giao hàng mong muốn.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse"
                                        data-target="#collapseSix" aria-expanded="false"
                                        aria-controls="collapseOne"
                                        onClick={() => this.openArcodion('chon_ngay_giao_nguoi_nhan', 25000)}>
                                    <div>
                                        {this.state.option_bo_sung.chon_ngay_giao_nguoi_nhan ?
                                            (
                                                <i className="fas fa-check-circle fa-3x"/>) :
                                            (<i className="fas fa-plus-circle fa-3x"/>)}
                                    </div>
                                    <div style={{textAlign: 'left'}}>
                                        <p style={{display: 'inline-block'}} className="body2">
                                            Giao hàng theo yêu cầu (Thêm
                                            25.000VNĐ)
                                        </p>
                                        <p className="body2">
                                            Bạn muốn bưu kiện được giao vào ngày cụ thể
                                        </p>
                                    </div>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSix" className="collapse"
                             aria-labelledby="headingOne">
                            <div className="card-body">
                                <div className={this.state.focus ? "input-button" +
                                    " input-with-label-in focus" : "input-button input-with-label-in"}>
                                    <label>Chọn ngày giao</label><br/>
                                    <select className="custom-select"
                                            name="chon_ngay_giao_nguoi_nhan"
                                            onChange={this.onHandleChangeOption}
                                            onFocus={this.formFocus}
                                            onBlur={this.formoutFocus}>
                                        {date_select_list_chon_ngay_giao_nguoi_nhan}
                                    </select>
                                </div>
                                <div className="option-luu-y">
                                    <p><i className="fas fa-exclamation-circle fa-2x"></i></p>
                                    <p className="luu-y">
                                        <span className="body2">Lưu ý</span><br/>
                                        Để kiện hàng được giao đúng vào ngày theo yêu cầu, kiện hàng
                                        của bạn nên được bàn giao cho
                                        chúng tôi trước một ngày.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
const mapStateToProps = state => {
    return ({
        country_from_redux: state.CreateNewGuiHangReducers,
    })
}
export default connect(mapStateToProps, null)(DiaChiForm);