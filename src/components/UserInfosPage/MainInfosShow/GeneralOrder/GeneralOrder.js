import React, {Component} from "react";
import './GeneralOrdercss/GeneralOrder.css';

class GeneralOrder extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.page_number < 1) {
            this.setState({
                page_number: 1,
            })
        }
        if (this.state.page_number > 99) {
            this.setState({
                page_number: 99,
            })
        }

    }

    constructor(props) {
        super(props);
        this.state = {
            table_row: 10,
            option_button: {
                new_order: false,
                progress_order: false,
                add_new: false,
                all_order: true,
            },
            page_number: 1,
        }
    }
    OptionButton = (name)=>{
        let inititalState = {
            new_order: false,
            progress_order: false,
            add_new: false,
            all_oder: false,
        }
        this.setState({
            option_button: {...inititalState,[name]:true}
        })
    }
    AllowOnlyNumber = (event) => {
        let code = (event.which) ? event.which : event.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
            event.preventDefault();
        }
    }
    changePage = (amount) => {
        this.setState({
            page_number: parseFloat(this.state.page_number) + parseFloat(amount)
        })
    }
    OrderQuantity = (event)=>{
        let target = event.target;
        let value = target.value;
        this.setState({
            table_row: parseFloat(value)
        })
    }
    setPagenumber = (event) => {
        let target = event.target;
        let value = target.value;
        if (parseFloat(value) >= 99) {
            target.value = 99;
        }
        this.setState({
            page_number: value,
        })
    }

    render() {
        let table_row = [...Array(this.state.table_row)].map((row, index) => {
                return (
                    <tr key={index}>
                        <td>abc</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                );
            }
        )
        return (
            <div className="row row-general-order">
                <div className="col-xl-12">
                    <p className="text-28px">
                        Tổng quan về vận chuyển
                    </p>
                </div>
                <div className="col-xl-12">
                    <div className="row row-general-order-main">
                        <div className="col-xl-12 col-option-button">
                            <button className={this.state.option_button.add_new ? "option-button" +
                                " body1 active" : "option-button body1"}
                            onClick={()=>this.OptionButton('add_new')}>
                                <i className="fas fa-plus"/>&nbsp;Thêm đơn
                            </button>
                            <button
                                className={this.state.option_button.new_order ? "option-button" +
                                    " body1 active" : "option-button body1"}
                                onClick={()=>this.OptionButton('new_order')}>
                                <i className="fas fa-calendar-day"/>&nbsp;Mới tiếp nhận
                            </button>
                            <button
                                className={this.state.option_button.progress_order ? "option-button" +
                                    " body1 active" : "option-button body1"}
                                onClick={()=>this.OptionButton('progress_order')}>
                                <i className="fas fa-truck"/>&nbsp;Đang vận chuyển
                            </button>
                            <button className={this.state.option_button.all_order ? "option-button" +
                                " body1 active" : "option-button body1"}
                                    onClick={()=>this.OptionButton('all_order')}><i
                                className="fas fa-reply-all"/>&nbsp;Tất cả
                            </button>
                        </div>
                        <div className="col-xl-12 col-general-order-table">
                            <table>
                                <thead className="body1">
                                <tr>
                                    <th>Mã số đơn hàng</th>
                                    <th>Người gửi</th>
                                    <th>Người nhận</th>
                                    <th>Quốc gia</th>
                                    <th>Địa chỉ nhận hàng</th>
                                    <th>Trạng thái</th>
                                </tr>
                                </thead>
                                <tbody>
                                {table_row}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="order-quantity">
                        <form>
                            <select name="order-quantity" className="custom-select" onChange={this.OrderQuantity}>
                                <option defaultValue={10} hidden>10</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value={10}>10</option>
                            </select>
                            <label htmlFor="order-quantity" className="body1">Đơn hàng gần
                                nhất</label>
                        </form>
                    </div>
                </div>
                <div className="col-xl-6 text-right">
                    <div className="order-page">
                        <button
                            className={this.state.page_number <= 1 ? "fast-page-button body1 disabled" : "fast-page-button body1"}>
                            Trang đầu
                        </button>
                        <button
                            className={this.state.page_number <= 1 ? "page-button body1 disabled" : "page-button body1"}
                            onClick={() => this.changePage(-1)}><i
                            className="fas fa-angle-left"/></button>
                        <input type="text" onChange={this.setPagenumber}
                               value={this.state.page_number} className="body1 text-center"
                               onKeyPress={this.AllowOnlyNumber}/>
                        <button className={this.state.page_number >= 99 ? "page-button body1" +
                            " disabled" : "page-button body1"} onClick={() => this.changePage(1)}><i
                            className="fas fa-angle-right"/></button>
                        <button className={this.state.page_number >= 99 ? "fast-page-button body1" +
                            " disabled" : "fast-page-button body1"}>Trang cuối</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneralOrder;