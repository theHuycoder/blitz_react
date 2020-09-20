import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import './css/inputHeaderForm.css';
import {connect} from "react-redux";
import * as actions from './../../actions/CheckDonHangActions/CheckDonHangActions';
class InputHeaderCheckShipCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            ID:null,
        }
    }
    getID = (event)=>{
        var target = event.target;
        var value = target.value;
        this.setState({
            ID: value,
        })
    }
    CheckCode = (event) => {
        var form = event.currentTarget;
        if(form.checkValidity()===false){
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                validated:true,
            },()=>console.log(this.state.validated))
        }else{
            event.preventDefault();
            this.props.send_id_to_check(this.state.ID);
            this.props.history.push('/Private/Homepage/check-don-hang')
        }

    };
    render() {
        return (
            <div className="input-form">
                <form onSubmit={this.CheckCode}
                      className={this.state.validated?"needs-validation was-validated":"needs-validataion"} noValidate>
                    <label className="input-header-form-label">Kiểm tra đơn hàng</label>
                    <div className="input-button">
                        <input type="text" className="form-control Head5"
                               placeholder="Nhập mã của bạn" required onChange={this.getID}/>
                        <button type="submit" className="btn btn-raised btn-primary">
                            Kiểm tra
                        </button>
                        <span className="invalid-feedback">Vui lòng nhập mã của bạn</span>
                    </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        send_id_to_check :  (id)=>{
            dispatch(actions.CheckDonHang(id));
        }
    });
}
export default withRouter(connect(null,mapDispatchToProps)(InputHeaderCheckShipCode));