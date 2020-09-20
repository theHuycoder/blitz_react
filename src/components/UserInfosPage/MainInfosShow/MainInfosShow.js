import React,{Component} from "react";
import {Switch,Route} from "react-router-dom"
import './MainInfosShowcss/MainInfosShow.css';
import StartPage from "./StartPage/StartPage";
import GeneralOrder from "./GeneralOrder/GeneralOrder";
import UserInfosEdit from "./UserInfosEdit/UserInfosEdit";
class MainInfosShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Routes : [
                {
                    path:this.props.match,
                    exact:true,
                    strict:true,
                    main: ({match})=> <StartPage match={match}/>,
                },
                {
                    path:this.props.match + '/General-order',
                    exact:true,
                    strict:true,
                    main: ({match})=> <GeneralOrder match={match}/>,
                },
                {
                    path:this.props.match + '/User-infos-edit',
                    exact:false,
                    strict:true,
                    main: ({match})=> <UserInfosEdit match={match}/>,
                },

            ]
        }
    }
    render(){
        let allRoutes = this.state.Routes.map((route,index)=>{
            return(
                <Route key={index} path={route.path} exact={route.exact} strict={route.strict} component={route.main}/>
            );
        })
        return(
            <div className="main-infos-show">
                <Switch>
                    {allRoutes}
                </Switch>
            </div>
        );
    }
}
export default MainInfosShow;