import React, {Component, Fragment} from "react";
import {NavLink} from "react-router-dom";
import Col_Footer from './datas/FooterLinks';
import './Footercss/Footer.css';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state ={
            social_media:[
                {
                    name:'Email',
                    to:'',
                    src: ()=> <i className="far fa-envelope fa-3x fa-fw"/>,
                },
                {
                    name:'Facebook',
                    to:'',
                    src: ()=> <i className="fab fa-facebook-square fa-3x fa-fw"/>,
                },
                {
                    name:'Twitter',
                    to:'',
                    src: ()=> <i className="fab fa-twitter-square fa-3x fa-fw"/>,
                },
            ],
        }

    }
    render(){
        let allLinksFooter = Col_Footer.map((col,index)=>{
            return (
                <div className="col-xl-3 col-footer-link" key={index}>
                    <h5 className="Head5">{col.title}</h5>
                    <ul>
                        {col.Mini_Links.map((link,index)=>{
                          return(
                              <li key={index}>
                                  <NavLink className="body2" to={link.to}>{link.name}</NavLink>
                              </li>
                          );
                        })}
                    </ul>
                </div>
            );
        });
        let socialMedias = this.state.social_media.map((media,index)=>{
            return(
                <Fragment key={index}>
                    <NavLink to={media.to} title={media.name}>
                        {media.src()}
                    </NavLink>
                </Fragment>
            );
        });
        return(
            <div className="container-fluid Footer">
                <div className="container container-Footer">
                    <div className="row row-Footer">
                        {allLinksFooter}
                    </div>
                    <div className="row social-media-contact">
                        <div className="col-xl-12 col-social-media-contact">
                            <span className="Head5">Theo dõi :</span>
                            <span>{socialMedias}</span>
                        </div>
                    </div>
                    <div className="row row-logo-footer">
                        <div className="col-xl-12 col-logo-footer">
                            <div>
                                <NavLink to="/Homepage">
                                    <img src="./images/Logo/logoYellowXL.png" alt="to HomePage" className="img-logo-footer"/>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="" className="Head6">
                                    Điều khoản sử dụng
                                </NavLink>
                                <NavLink to="" className="Head6">
                                    Chính sách quyền riêng tư
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Footer;