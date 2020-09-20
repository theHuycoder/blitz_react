import React,{Component} from "react";
import {withRouter,Link} from "react-router-dom";
import {connect} from "react-redux";
import './css/TableForm.css';
import * as actions from './../../actions/HomepageTable/HomepageTableActions';
class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info_from_table: {
                country:'Việt Nam',
                width:0,
                length:0,
                height:0,
            }
        }
    }
    onHandleChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        let initialState = {...this.state.info_from_table}
        if (typeof value === 'number'){
            value = parseFloat(value);
        }else {
             value = target.value;
        }
        this.setState({
            info_from_table : {...initialState,[name]:value}
        },()=>console.log(this.state.info_from_table))
    }
    onSubmitTable = (event) =>{
        event.preventDefault();
        this.props.send_data_to_redux(this.state.info_from_table)
        this.props.history.push('/Private/gui-hang/chon-goi-cuoc/tem-dien-tu/goi-co-ban');
    }
    render(){
        return (
            <div className="header-table-form">
                <form onSubmit={this.onSubmitTable}>
                    <label className="Head5">Bạn muốn gửi hàng đến đâu?</label>
                    <select className="custom-select" name="country" onChange={this.onHandleChange}>
                        <option>Việt Nam</option>
                        <option>Thái Lan</option>
                        <option>Singapore</option>
                        <option>Malaysia</option>
                        <option>Indonesia</option>
                        <option>Campuchia</option>
                        <option>Myanmar</option>
                        <option>Lào</option>
                        <option>Philipines</option>
                        <option>Đông Timo</option>
                        <option>Brunei</option>
                    </select>
                    <div className="image-description">
                        <label className="Head5">Kích thước <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp; &nbsp; &nbsp;kiện hàng ?</label>
                        <img src="./images/others/tableformdescription.png" alt=""/>
                    </div>
                    <div className="packet-size-input">
                        <div className="packet-size">
                            <label className="text-18px">Chiều dài</label>
                            <input type="number" name="length" placeholder="in cm" min={0} onChange={this.onHandleChange}/>
                        </div>
                        <div className="packet-size">
                            <label className="text-18px">Chiều rộng</label>
                            <input type="number" name="width" placeholder="in cm" min={0} onChange={this.onHandleChange}/>
                        </div>
                        <div className="packet-size">
                            <label className="text-18px">Chiều cao</label>
                            <input type="number" name="height" placeholder="in cm" min={0} onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <p><Link className="body1" to="">Xem bảng giá theo kích thước</Link></p>
                    <button type="submit" className="btn btn-raised btn-primary" to="/gui-hang/chon-goi-cuoc/tem-dien-tu/goi-co-ban">Đặt đơn ngay</button>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return ({
        send_data_to_redux : (data)=>{
            dispatch(actions.GetDataFromTable(data))
        }
    })
}
export default withRouter(connect(null,mapDispatchToProps)(TableForm));