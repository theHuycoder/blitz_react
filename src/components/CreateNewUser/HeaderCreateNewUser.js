import React, {Component} from "react";
import './CreateNewUsercss/HeaderCreateNewUser.css';

class HeaderCreateNewUser extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="container-fluid header-create-new-user">
                <div className="row row-header-create-new-user">
                    <div className="col-xl-12">
                        <div>
                            <div className="img-container">
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderCreateNewUser;