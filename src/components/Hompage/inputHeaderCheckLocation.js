import React, {Component} from "react";
import './css/inputHeaderForm.css';

class InputHeaderCheckLocation extends Component {
    render() {
        return (
            <div className="input-form">
                <form action="">
                    <label className="input-header-form-label">Tìm điểm giao nhận</label>
                    <div className="input-button">
                        <input type="text" className="form-control Head5"
                               placeholder="Nhập địa chỉ của bạn"/>
                        <button type="submit" className="btn btn-raised btn-primary">Tìm ngay
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default InputHeaderCheckLocation;