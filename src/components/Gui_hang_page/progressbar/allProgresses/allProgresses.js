import React, {Component, Fragment} from "react";
import './allProgressescss/allProgresses.css';

class AllProgresses extends Component {
    componentDidMount() {
        switch (this.props.match.url) {
            case '/gui-hang/chon-goi-cuoc':
                this.setState(
                    {
                        chon_goi_cuoc: true,
                        dia_chi: false,
                        thanh_toan: false,
                        hoan_thanh: false,
                    }
                );
                break;
            case '/gui-hang/dia-chi':
                this.setState(
                    {
                        chon_goi_cuoc: true,
                        dia_chi: true,
                        thanh_toan: false,
                        hoan_thanh: false,
                    }
                );
                break;
            case '/gui-hang/thanh-toan':
                this.setState(
                    {
                        chon_goi_cuoc: true,
                        dia_chi: true,
                        thanh_toan: true,
                        hoan_thanh: false,
                    }
                );
                break;
            case '/gui-hang/hoan-thanh':
                this.setState(
                    {
                        chon_goi_cuoc: true,
                        dia_chi: true,
                        thanh_toan: true,
                        hoan_thanh: true,
                    }
                );
                break;
            default:
                this.setState({chon_goi_cuoc: true});
                break;
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            chon_goi_cuoc: false,
            dia_chi: false,
            thanh_toan: false,
            hoan_thanh: false,
        }
    }

    render() {
        return (
            <Fragment>
               <span>
                    <span
                        className={this.state.chon_goi_cuoc ? "step Head4 active" : "step Head4"}>1</span>
                    <p className="text-18px" style={{margin: 0}}>Gói cước</p>
               </span>
                <span className="connect"/>
                <span>
                    <span
                        className={this.state.dia_chi ? "step Head4 active" : "step Head4"}>2</span>
                     <p className="text-18px" style={{margin: 0}}>Địa chỉ</p>
                </span>
                <span className="connect"/>
                <span>
                    <span
                        className={this.state.thanh_toan ? "step Head4 active" : "step Head4"}>3</span>
                     <p className="text-18px" style={{margin: 0}}>Thanh toán</p>
                </span>
                <span className="connect"/>
                <span>
                    <span
                        className={this.state.hoan_thanh ? "step Head4 active" : "step Head4"}>4</span>
                     <p className="text-18px" style={{margin: 0}}>Hoàn thành</p>
                </span>
            </Fragment>
        );
    }
};
export default AllProgresses;