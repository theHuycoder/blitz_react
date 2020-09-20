import React, {Component} from "react";
import './childcss/Nhan_tai_nha.css';
import moment from "moment";
import 'moment/locale/vi';
import {NavLink} from "react-router-dom";

class NhanTaiNha extends Component {
    componentDidMount() {
        moment.locale('vi');
        let days = [];
        for (let i = 1; i <= 7; i++) {

            days.push(moment().add(i, 'days').format('LLLL'));
            this.setState({
                list_of_days_giao_hang_tai_nha: [...days]
            })
        }
        ;
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.quantity < 1) {
            this.setState({
                quantity: 1,
            })
        } else if (this.state.quantity > 99) {
            this.setState({
                quantity: 99,
            })
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            list_of_days_giao_hang_tai_nha: [],
            focus: false,
            quantity: 1,
            initialPrice: 75000,
        }
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
    AllowOnlyNumber = (event) => {
        let code = (event.which) ? event.which : event.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
            event.preventDefault();
        }
    }
    ChangeQuantity = (amount) => {
        this.setState({
            quantity: (this.state.quantity + parseFloat(amount))
        })
    }
    onHandleChange = (event) => {
        let target = event.target;
        let value = target.value;
        if (parseFloat(value) >= 99) {
            target.value = 99;
        }
        this.setState({
            quantity: value,
        })
    }

    render() {
        let date_select_list_giao_hang_tai_nha = this.state.list_of_days_giao_hang_tai_nha.map((day, index) => {
            return (
                <option key={index}>{day}</option>
            );
        })
        let all_price = parseFloat(this.state.quantity) * parseFloat(this.state.initialPrice)
        return (
            <div>
                <div className="Nhan-tai-nha">
                    <p className="text-28px">Nhận hàng tại nhà</p>
                    <p className="Head6">
                        Dịch vụ nhận hàng tại nhà thứ 2 đến thứ
                        7 <span>( từ 8 giờ đến 20 giờ )</span> và<br/>
                        có giá <span>75.000 VNĐ</span> cho một đơn.
                    </p>
                    <div>
                        <button type="button" className="btn btn-primary" data-toggle="modal"
                                data-target="#info-receiver-email">
                            <h6 className="Head6">Xem thêm về dịch vụ nhận hàng tại nhà</h6>
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
                    <h6 className="Head6">Chọn ngày</h6>
                    <form action="">
                        <div className={this.state.focus ? "input-button" +
                            " input-with-label-in focus" : "input-button input-with-label-in"}>
                            <label>Nhận hàng vào khoảng 8:00 giờ và 20:00 giờ</label><br/>
                            <select className="custom-select"
                                    name="chon_ngay_giao_nguoi_nhan"
                                    onChange={this.onHandleChangeOption}
                                    onFocus={this.formFocus}
                                    onBlur={this.formoutFocus}>
                                {date_select_list_giao_hang_tai_nha}
                            </select>
                        </div>
                    </form>
                    <h6 className="Head6">Số lượng đơn hàng</h6>
                    <div className="quantity">
                        <button className={this.state.quantity<=1 ? "change-quantity" +
                            " disable-quantity":"change-quantity"} onClick={() => this.ChangeQuantity(-1)}>
                            <i className="fas fa-minus fa-2x"/></button>
                        <input type="text" className="text-28px" onKeyPress={this.AllowOnlyNumber}
                               min={1} value={this.state.quantity} onChange={this.onHandleChange}/>
                        <button className={this.state.quantity >= 99 ? "change-quantity" +
                            " disable-quantity":"change-quantity"} onClick={() => this.ChangeQuantity(1)}>
                            <i className="fas fa-plus fa-2x"/></button>
                    </div>
                </div>
                <div className="chon-goi-cuoc-all-price">
                    <span className="Head5">Tổng tiền</span>
                    <span className="Head4">{all_price.toLocaleString()} VNĐ</span>
                </div>
                <div className="next-to-adress">
                    <NavLink to="/gui-hang/dia-chi" strict
                             className="btn btn-raised btn-primary text-button"
                             onClick={() => this.SendPricetoRedux(all_price)}>
                        Tiếp theo
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default NhanTaiNha;