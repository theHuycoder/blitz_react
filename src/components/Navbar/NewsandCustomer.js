import React, {Component, Fragment} from "react";
import {NavLink, withRouter} from "react-router-dom";
import './css/NewsandCustomer.css';

class NewsandCustomer extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid News">
                </div>
                <div className="container-fluid Customer-Choice">
                    <div className="container">
                        <div className="row row-Customer-Choice">
                            <div className="col-xl-5 offset-xl-7">
                                <NavLink to="/Private/Homepage"
                                         className="Head6 Customer-Choice-Link"
                                         activeClassName="Customer-Link-active"
                                         isActive={() => {
                                             return this.props.location.pathname.startsWith('/Private');
                                         }} strict>Khách
                                    hàng cá nhân</NavLink>
                                <NavLink to="/Business/Homepage"
                                         className="Head6 Customer-Choice-Link"
                                         activeClassName="Customer-Link-active"
                                         isActive={() => {
                                             return this.props.location.pathname.startsWith('/Business');
                                         }} strict>Khách hàng doanh nghiệp
                                </NavLink>
                            </div>
                        </div>
                        {}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(NewsandCustomer);