import React, {Component, Fragment} from "react";
import {Route} from "react-router-dom";
import './Gui_Hang_Page_css/Gui_hang_main_Page.css'
import ChonGoiCuocProgress from "./chon_goi_cuoc_progress";
import Progressbar from "./progressbar/Progressbar";
class GuiHangMainPage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    constructor(props) {
        super(props);
        this.state = {
            Routes:[
                {
                  path:this.props.match.url,
                  exact:false,
                  strict:true,
                  main: ({match})=> <ChonGoiCuocProgress match={match.url} />
                },
            ],
            pay_methods:[
                {
                    name:'Grabpay',
                    src:'./images/paymethods/grabpay.png',
                },
                {
                    name:'Visa',
                    src:'./images/paymethods/visa_PNG32.png',
                },
                {
                    name:'mastercard',
                    src:'./images/paymethods/mastercard.png',
                },
                {
                    name:'paypal',
                    src:'./images/paymethods/paypal_PNG19.png',
                },
            ]
        }
    }
    render() {
        let pay_method = this.state.pay_methods.map((logo,index)=>{
            return(
                    <img src={logo.src} alt={logo.name} key={index} className="pay-method"/>
            );
        })
        let allRoutes = this.state.Routes.map((route,index)=>{
            return(
                <Route key={index} path={route.path} exact={route.exact} strict={route.strict} component={route.main}/>
            )
        })
        return (
            <Fragment>
                <Progressbar match={this.props.match}/>
                <div className="container-fluid Gui-hang-main-Page">
                    <div className="container">
                        <div className="row row-Gui-hang-main-Page">
                            <div className="col-xl-10 offset-xl-1" style={{padding:0}}>
                                {allRoutes}
                            </div>
                        </div>
                        <div className="row list-pay-methods">
                            <div className="col-xl-12 col-pay-methods">
                                <h3 className="Head3">Thanh toán an toàn với</h3>
                                <div>
                                    {pay_method}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}
export default GuiHangMainPage;