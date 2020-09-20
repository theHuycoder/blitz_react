import React, {Component} from "react";
import {Route} from "react-router-dom";
import './Progressbarcss/Progressbar.css';
import AllProgresses from "./allProgresses/allProgresses";

class Progressbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Routes: [
                {
                    path: this.props.match.url + '/chon-goi-cuoc',
                    exact: false,
                    strict: true,
                    main: ({match}) => <AllProgresses match={match}/>
                },
                {
                    path: this.props.match.url + '/dia-chi',
                    exact: false,
                    strict: true,
                    main: ({match}) => <AllProgresses match={match}/>
                },
                {
                    path: this.props.match.url + '/thanh-toan',
                    exact: false,
                    strict: true,
                    main: ({match}) => <AllProgresses match={match}/>
                },
                {
                    path: this.props.match.url + '/hoan-thanh',
                    exact: false,
                    strict: true,
                    main: ({match}) => <AllProgresses match={match}/>
                },
            ],
        }
    };

    render() {
        let allRoutes = this.state.Routes.map((route, index) => {
            return (
                <Route key={index} path={route.path} exact={route.exact} strict={route.strict}
                       component={route.main}/>
            );
        })
        return (
            <div className="container-fluid Progressbar">
                <div className="container">
                    <div className="row row-Progressbar">
                        <div className="col-xl-12 col-Progressbar">
                            {allRoutes}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Progressbar;