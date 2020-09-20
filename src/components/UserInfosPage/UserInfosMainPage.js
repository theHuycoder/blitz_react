import React,{Component} from "react";
import './UserInfosPagecss/UserInfosMainPage.css';
import SideBar from "./SideBar/SideBar";
import MainInfosShow from "./MainInfosShow/MainInfosShow";
class UserInfosMainPage extends  Component {
    render(){
        return(
            <div className="container-fluid user-infos-main-page">
                <div className="container">
                    <div className="row row-user-infos-main-page">
                        <div className="col-xl-3">
                            <SideBar match={this.props.match.url}/>
                        </div>
                        <div className="col-xl">
                            <MainInfosShow match={this.props.match.url}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserInfosMainPage;