import React, {Component} from "react";
import './Gui_Hang_Page_css/Nhap_dia_chi.css';
import DiaChiForm from "./Child-Components/Dia_chi_form";
import PaketShopForm from "./Child-Components/Paket_shop_form";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "./../../actions/GuiHangActions/GuiHangActions";

class Nhapdiachi extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    constructor(props) {
        super(props);
        this.state = {
            to_form: true,
            option_bo_sung_price: {
                giao_hang_tai_nha: 0,
                chon_ngay_giao_nguoi_nhan: 0,
            },
            data: {},
            validated: false,
        }
    }

    onHandleChangeFormDiaChi = (event) => {
        var target = event.target;
        var name = target.name;
        this.setState({
            [name]: !this.state.to_form
        }, () => console.log(this.state))
    }
    UpdatePriceOption = (data) => {
        this.setState({
            option_bo_sung_price: {
                giao_hang_tai_nha: data.giao_hang_tai_nha,
                chon_ngay_giao_nguoi_nhan: data.chon_ngay_giao_nguoi_nhan,
            },
        })
    }
    SendInfoOut = (data) => {
        this.setState({
            data: data
        })
    }
    Updateinfotoredux = (price) => {
        this.props.update_info_to_redux(this.state.data, price);
    };
    SubmitForm = (event) => {
        var form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation();
            this.setState({
                validated: true,
            }, () => window.scrollTo(0, 0))
        } else {
            event.preventDefault();
            this.props.history.push('/Private/gui-hang/thanh-toan');
        }
    }

    render() {
        let all_price = parseInt(this.props.all_price.priceall) + parseInt(this.state.option_bo_sung_price.giao_hang_tai_nha) +
            parseInt(this.state.option_bo_sung_price.chon_ngay_giao_nguoi_nhan);
        return (
            <div className="gui-hang-nhap-dia-chi">
                <h3 className="Head3">Địa chỉ</h3>
                <div className="gui-hang-nhap-dia-chi-form">
                    <p className="text-28px">Người nhận</p>
                    <form className="adresse-or-paket">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input"
                                   id="adress"
                                   name="to_form"
                                   onChange={this.onHandleChangeFormDiaChi}
                                   defaultChecked
                            />
                            <label className="custom-control-label body1"
                                   htmlFor="adress">
                                Địa chỉ
                            </label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input"
                                   id="paket" name="to_form"
                                   onChange={this.onHandleChangeFormDiaChi}/>
                            <label className="custom-control-label body1"
                                   htmlFor="paket">
                                Điểm giao nhận
                            </label>
                        </div>
                    </form>
                    {this.state.to_form ?
                        <DiaChiForm OptionPrice={this.UpdatePriceOption}
                                    SendInfoOut={this.SendInfoOut}
                                    SubmitForm={this.SubmitForm}
                                    validated={this.state.validated}/> :
                        <PaketShopForm OptionPrice={this.UpdatePriceOption}
                                       SendInfoOut={this.SendInfoOut}
                                       SubmitForm={this.SubmitForm}
                                       validated={this.state.validated}/>
                    }

                </div>
                <div className="nhap-dia-chi-all-price">
                    <span className="Head5">Tổng tiền</span>
                    <span className="Head4">{all_price.toLocaleString()} VNĐ</span>
                </div>
                <div className="next-to-pay">
                    <button type="submit" form="nhap-dia-chi"
                            className="btn  btn-primary btn-raised text-button"
                            onClick={() => {
                                this.Updateinfotoredux(all_price)
                            }}>
                        Tiếp theo
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return (
        {
            all_price: state.CreateNewGuiHangReducers,
        }
    );
}
const mapDispatchToProps = (dispatch, props) => {
    return ({
        update_info_to_redux: (data, price) => {
            dispatch(actions.UpdatePriceDiaChiToRedux(data, price))
        }
    })
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nhapdiachi));