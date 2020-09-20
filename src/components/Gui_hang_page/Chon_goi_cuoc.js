import React, {Component} from "react";
import './Gui_Hang_Page_css/chon_goi_cuoc.css';
import {NavLink, Route} from "react-router-dom";
import TemDienTu from "./Child-Components/Tem_dien_tu";
import NhanTaiNha from "./Child-Components/Nhan_tai_nha";
class ChonGoiCuoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable_link:{
                tem_dien_tu:true,
                nhan_tai_nha:false,
                dinh_kem:false,
            },
            default_link:{
              tem_dien_tu:true,
              nhan_tai_nha:false,
              dinh_kem:false,
            },
            routes: [
                {
                    path: this.props.match.url + '/tem-dien-tu',
                    exact: false,
                    main: ({match}) => <TemDienTu match={match}/>,
                },
                {
                    path: this.props.match.url + '/nhan-tai-nha',
                    exact: false,
                    main: ({match}) => <NhanTaiNha match={match}/>,
                }
            ],
        }
    }
    onDisableLink= (linkname)=>{
        let initialDisable = {
            tem_dien_tu:false,
            nhan_tai_nha:false,
            dinh_kem:false,
        }
        let initialDefault ={
            tem_dien_tu:false,
            nhan_tai_nha:false,
            dinh_kem:false,
        }
        this.setState({
            disable_link: {...initialDisable,[linkname]:true},
            default_link: {...initialDefault,[linkname]:true}
        })
    }
    render() {
        let allRoutes = this.state.routes.map((route, index) => {
            return (
                <Route key={index} path={route.path} exact={route.exact} strict
                       component={route.main}/>
            );
        });
        return (
            <div>
                <h3 className="Head3 Head3-chon-goi-cuoc">Đặt đơn online và nhận mã QR</h3>
                <div className="option-chon-goi-cuoc-1">
                    <NavLink className={this.state.disable_link.tem_dien_tu?"button-chon-goi-cuoc-1" +
                        " text-button disabled-link":"button-chon-goi-cuoc-1 text-button"}
                             strict
                             activeClassName="active-chon-goi-cuoc-1"
                             to={this.state.default_link.tem_dien_tu?
                                 (this.props.match.url + '/tem-dien-tu'):(this.props.match.url + '/tem-dien-tu/goi-co-ban')}
                             onClick={()=>this.onDisableLink('tem_dien_tu')}
                            >Tem điện tử</NavLink>
                    <NavLink className={this.state.disable_link.nhan_tai_nha?"button-chon-goi-cuoc-1" +
                        " text-button disabled-link":"button-chon-goi-cuoc-1 text-button"}
                             strict
                             activeClassName="active-chon-goi-cuoc-1"
                             to={this.props.match.url + '/nhan-tai-nha/'}
                             onClick={()=>this.onDisableLink('nhan_tai_nha')}
                            >Nhận tại nhà</NavLink>
                    <NavLink className={this.state.disable_link.dinh_kem?"button-chon-goi-cuoc-1" +
                                 " text-button disabled-link":"button-chon-goi-cuoc-1 text-button"}
                             strict
                             activeClassName="active-chon-goi-cuoc-1"
                             to={this.props.match.url + '/dinh-kem/'}
                             onClick={()=>this.onDisableLink('dinh_kem')}
                            >Đính kèm</NavLink>
                </div>
                <div className="show-for-option">
                    {allRoutes}
                </div>
            </div>
        );
    }
};
export default ChonGoiCuoc;