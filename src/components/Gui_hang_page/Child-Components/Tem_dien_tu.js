import React, {Component} from "react";
import {NavLink, Route} from "react-router-dom";
import './childcss/Tem_dien_tu.css';
import GoiCoBan from "./goi_chuyen_phat/goi_co_ban";
import GoiExpress from "./goi_chuyen_phat/goi_express";
class TemDienTu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [
                {
                    path: this.props.match.url + '/goi-co-ban',
                    exact: false,
                    main: ({match}) => <GoiCoBan match={match}/>
                },
                {
                    path: this.props.match.url + '/goi-express',
                    exact: false,
                    main: ({match}) => <GoiExpress match={match}/>
                }
            ],
        }
    };

    render() {
        let allRoutes = this.state.routes.map((route, index) => {
            return (
                <Route key={index} path={route.path} exact={route.exact} strict
                       component={route.main}/>
            );
        })
        return (
            <div className="Tem-dien-tu">
                <div className="Tem-dien-tu-goi-chuyen-phat">
                    <NavLink className="Head6 goi-chuyen-phat-button" strict
                             activeClassName="active-goi-chuyen-phat"
                             to={this.props.match.url + '/goi-co-ban'}>Cơ bản</NavLink>
                    <NavLink className="Head6 goi-chuyen-phat-button" strict
                             activeClassName="active-goi-chuyen-phat"
                             to={this.props.match.url + '/goi-express'}>Express</NavLink>
                    <NavLink className="Head6 goi-chuyen-phat-button" strict
                             activeClassName="active-goi-chuyen-phat"
                             to={this.props.match.url + '/ua-thich'}>Ưa thích</NavLink>
                </div>
                <div className="show-goi-chuyen-phat">
                    {allRoutes}
                </div>
            </div>
        );
    }
}

export default TemDienTu;