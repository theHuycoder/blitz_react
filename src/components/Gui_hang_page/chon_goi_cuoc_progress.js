import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import ChonGoiCuoc from "./Chon_goi_cuoc";
import Nhapdiachi from "./Nhap_dia_chi";
import Thanhtoan from "./Thanh_toan";
import HoanThanh from "./HoanThanh";

class ChonGoiCuocProgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Routes :[
                {
                    path: this.props.match + '/chon-goi-cuoc',
                    exact:false,
                    strict:true,
                    main: ({match})=> <ChonGoiCuoc match={match}/>,
                },
                {
                    path: this.props.match + '/dia-chi',
                    exact:false,
                    strict:true,
                    main: ({match})=> <Nhapdiachi match={match}/>,
                },
                {
                    path: this.props.match + '/thanh-toan',
                    exact:false,
                    strict:true,
                    main: ({match})=> <Thanhtoan match={match}/>,
                },
                {
                    path: this.props.match + '/hoan-thanh',
                    exact:false,
                    strict:true,
                    main: ({match})=> <HoanThanh match={match}/>,
                },

            ]
        }
    }
    render() {
        let allRoutes = this.state.Routes.map((route,index)=> {
            return (
                <Route key={index} path={route.path} exact={route.exact} strict={route.strict}
                component={route.main}/>
            );
        })
        return (
            <Switch>
                {allRoutes}
            </Switch>
        );
    }
}

export default ChonGoiCuocProgress;