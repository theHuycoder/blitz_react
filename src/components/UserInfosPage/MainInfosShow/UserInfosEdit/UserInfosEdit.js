import React, {Component} from "react";
import './UserInfosEditcss/UserInfosEdit.css';
import {Route, Switch, withRouter} from "react-router-dom";
import Infos from "./Infos/Infos";

class UserInfosEdit extends Component {
    constructor(props) {
        super(props);
        this.routes = [
            {
                path: this.props.match.url + '/Infos',
                exact: false,
                strict: true,
                main: ({match}) => <Infos match={match}/>
            }
        ];
        this.state = {
            option_button: {
                info: true,
                security: false,
                notification: false,
            },
        }
    }
    OptionButton = (name,link)=>{
        let inititalState = {
            new_order: false,
            progress_order: false,
            add_new: false,
            all_oder: false,
        }
        this.setState({
            option_button: {...inititalState,[name]:true}
        },()=>this.props.history.push(link))
    }
    render() {
        let allRoutes = this.routes.map((route, index) => {
            return (
                <Route key={index} exact={route.exact} strict={route.strict} path={route.path}
                       component={route.main}/>
            )
        })
        return (
            <div className="row row-user-infos-edit">
                <div className="col-xl-12">
                    <p className="text-28px">Thay đổi thông tin tài khoản</p>
                </div>
                <div className="col-xl-12">
                    <div className="row row-user-infos-edit-main">
                        <div className="col-xl-12 col-option-button">
                            <button className={this.state.option_button.info ? "option-button" +
                                " body1 active" : "option-button body1"}
                                    onClick={() => this.OptionButton('info',this.props.match.url + '/Infos')}>
                                <i className="fas fa-id-card"/>&nbsp;Thông tin
                            </button>
                            <button
                                className={this.state.option_button.security ? "option-button" +
                                    " body1 active" : "option-button body1"}
                                onClick={() => this.OptionButton('security')}>
                                <i className="fas fa-lock"/>&nbsp;Bảo mật
                            </button>
                            <button
                                className={this.state.option_button.notification ? "option-button" +
                                    " body1 active" : "option-button body1"}
                                onClick={() => this.OptionButton('notification')}>
                                <i className="fas fa-bell"/>&nbsp;Thông báo
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="user-infos-edit-main">
                        <Switch>
                            {allRoutes}
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UserInfosEdit);