import React, {Component, Fragment} from "react";
import './goi_chuyen_phat_css/goi_express.css';
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import * as actions from "./../../../../actions/GuiHangActions/GuiHangActions";
import moment from "moment";
import 'moment/locale/vi';

class GoiExpress extends Component {
    componentDidMount() {
        let currentHour = moment().hour();
        let cloneStateGoiCuoc = [...this.state.Goi_cuoc];
        if (currentHour <= 9) {
            this.setState({
                Goi_cuoc: [...cloneStateGoiCuoc]
            })
        } else if (currentHour > 9 && currentHour <= 10) {
            cloneStateGoiCuoc.splice(0, 1);
            this.setState({
                Goi_cuoc: [...cloneStateGoiCuoc],
            });
        } else if (currentHour < 12 && currentHour > 10) {
            cloneStateGoiCuoc.splice(0, 2);
            this.setState({
                Goi_cuoc: [...cloneStateGoiCuoc],
            })
        } else {
            cloneStateGoiCuoc.splice(0, 3);
            this.setState({
                Goi_cuoc: [...cloneStateGoiCuoc],
            })
        }
        ;
        let value_price;
        switch (this.props.info_from_table_redux.country) {
            case 'Việt Nam':
                value_price = 0;
                break;
            case 'Thái Lan':
                value_price = 120000;
                break;
            case 'Singapore':
                value_price = 130000;
                break;
            case 'Malaysia':
                value_price = 150000;
                break;
            case 'Indonesia':
                value_price = 150000;
                break;
            case 'Campuchia':
                value_price = 80000;
                break;
            case 'Myanmar':
                value_price = 100000;
                break;
            case 'Lào':
                value_price = 50000;
                break;
            case 'Philipines':
                value_price = 150000;
                break;
            case 'Đông Timo':
                value_price = 150000;
                break;
            case 'Brunei':
                value_price = 200000;
                break;
            default:
                value_price = 0;
        }
        let index_default_goi_cuoc = this.state.Goi_cuoc.findIndex((goi_cuoc, index) => this.state.active_goi_cuoc[goi_cuoc.name] === true)
        this.setState({
            price_country: value_price,
            price_goi_cuoc: this.state.Goi_cuoc[index_default_goi_cuoc].price,
            thong_tin_don_hang: {...this.state.Goi_cuoc[index_default_goi_cuoc],country:this.props.info_from_table_redux.country},
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            focus: {
                country: false,
                weight: false,
            },
            price_country: 0,
            price_goi_cuoc: 0,
            active_goi_cuoc: {
                truoc_9h: false,
                truoc_10h: false,
                truoc_12h: false,
                trong_ngay: true,
            },
            thong_tin_don_hang:{},
            Goi_cuoc: [
                {
                    name: 'truoc_9h',
                    price: 625000,
                    paket_size: 'Trước 9 giờ',
                    paket_max: 'tối đa 120x60x60cm',
                    paket_info_1: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-check"/>
                                <span className="paket-info-text">Theo dõi trực tuyến</span>
                            </Fragment>
                        )
                    },
                    paket_info_2: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-check"/>
                                <span className="paket-info-text">Đảm bảo</span>
                            </Fragment>
                        )
                    },
                    info_modal: [
                        'Không đảm bảo. Chúng tôi không chịu trách nhiệm nếu đơn hàng hư hỏng' +
                        ' hay thất thoái',
                        'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao)',
                        'Kích thước tối đa:32x25x10cm(dàixrộngxcao)',
                        'Vui lòng đóng gói bưu kiện kỹ càng và cẩn thận'
                    ],
                },
                {
                    name: 'truoc_10h',
                    price: 545000,
                    paket_size: 'Trước 10h',
                    paket_max: 'tối đa 120x60x60cm',
                    paket_info_1: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-check"/>
                                <span className="paket-info-text">Theo dõi trực tuyến</span>
                            </Fragment>
                        )
                    },
                    paket_info_2: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-check"/>
                                <span className="paket-info-text">Đảm bảo</span>
                            </Fragment>
                        )
                    },
                    info_modal: [
                        'Không đảm bảo. Chúng tôi không chịu trách nhiệm nếu đơn hàng hư hỏng' +
                        ' hay thất thoái.',
                        'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao).',
                        'Kích thước tối đa:60x30x15cm(dàixrộngxcao).',
                        'Vui lòng đóng gói bưu kiện kỹ càng và cẩn thận.'
                    ]
                },
                {
                    name: 'truoc_12h',
                    price: 490000,
                    paket_size: 'Trước 12h',
                    paket_max: 'tối đa 120x60x60cm',
                    paket_info_1: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-check"/>
                                <span className="paket-info-text">Theo dõi trực tuyến</span>
                            </Fragment>
                        )
                    },
                    paket_info_2: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-check"/>
                                <span className="paket-info-text">Đảm bảo</span>
                            </Fragment>
                        )
                    },
                    info_modal: [
                        'Đơn hàng được đảm bảo. Đền bù lên đến 12.000.000VNĐ nếu có thất thoát' +
                        ' hay hư hỏng.',
                        'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao).',
                        'Kích thước tối đa:60x30x15cm(dàixrộngxcao).',
                        'Nếu vượt quá kích thước tối đa, vui lòng đặt mua gói 5kg-tiêu chuẩn',
                        'Nếu bưu kiện có vấn đề về bao bì, chúng tôi sẽ hỗ trợ thùng carton'
                    ]
                },
                {
                    name: 'trong_ngay',
                    price: 440000,
                    paket_size: 'Trong ngày',
                    paket_max: 'tối đa 120x60x60cm',
                    paket_info_1: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-check"/>
                                <span className="paket-info-text">Theo dõi trực tuyến</span>
                            </Fragment>
                        )
                    },
                    paket_info_2: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-check"/>
                                <span className="paket-info-text">Đảm bảo</span>
                            </Fragment>
                        )
                    },
                    info_modal: [
                        'Đơn hàng được đảm bảo. Đền bù lên đến 35.000.000VNĐ nếu có thất thoát' +
                        ' hay hư hỏng.',
                        'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao).',
                        'Kích thước tối đa:120x60x60cm(dàixrộngxcao).',
                        'Nếu vượt quá kích thước tối đa, vui lòng đặt mua gói 10kg-tiêu chuẩn',
                        'Lưu ý: Các lô hàng có chu vi trên 300 cm phải được thanh toán trước' +
                        ' bằng tem bưu kiện DHL tối đa 31,5 kg, bất kể trọng lượng thực của chúng.',
                        'Nếu bưu kiện có vấn đề về bao bì, chúng tôi sẽ hỗ trợ thùng carton'
                    ]
                },
            ],
        }
    }

    formFocus = (name) => {
        let clone_state = {...this.state.focus}
        this.setState({
            focus: {...clone_state, [name]: true}
        })
    }
    formoutFocus = (name) => {
        let clone_state = {...this.state.focus}
        this.setState({
            focus: {...clone_state, [name]: false},
        })
    }
    ChooseGoiCuoc = (goicuocname, goicuocgia) => {
        let initialActive = {
            truoc_9h: false,
            truoc_10h: false,
            truoc_12h: false,
            trong_ngay: false,
        }
        let goicuoc_price;
        this.setState({
            active_goi_cuoc: {...initialActive, [goicuocname]: true},
        }, () => {
            if (this.state.active_goi_cuoc.[goicuocname]) {
                goicuoc_price = goicuocgia;
                let index_goi_cuoc_duoc_chon = this.state.Goi_cuoc.findIndex((goi, index) => goi.name === goicuocname)
                let thong_tin_goi_cuoc_duoc_chon = this.state.Goi_cuoc[index_goi_cuoc_duoc_chon];
                this.setState({
                    price_goi_cuoc: goicuoc_price,
                    thong_tin_don_hang: {...this.state.thong_tin_don_hang, ...thong_tin_goi_cuoc_duoc_chon},
                })
            }
        })
    }
    onHandleChangeCountry = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let value_price;
        if (name === 'country') {
            switch (value) {
                case 'Việt Nam':
                    value_price = 0;
                    break;
                case 'Thái Lan':
                    value_price = 120000;
                    break;
                case 'Singapore':
                    value_price = 130000;
                    break;
                case 'Malaysia':
                    value_price = 150000;
                    break;
                case 'Indonesia':
                    value_price = 150000;
                    break;
                case 'Campuchia':
                    value_price = 80000;
                    break;
                case 'Myanmar':
                    value_price = 100000;
                    break;
                case 'Lào':
                    value_price = 50000;
                    break;
                case 'Philipines':
                    value_price = 150000;
                    break;
                case 'Đông Timo':
                    value_price = 150000;
                    break;
                case 'Brunei':
                    value_price = 200000;
                    break;
                default:
                    value_price = 0;
            }
        }
        this.setState({
            price_country: value_price,
        })
    };
    onHandleChangeWeight = (event) => {
        let target = event.target;
        let value = target.value;
        let clone_goi_cuoc = [
            {
                name: 'truoc_9h',
                price: 625000,
                paket_size: 'Trước 9 giờ',
                paket_max: 'tối đa 120x60x60cm',
                paket_info_1: () => {
                    return (
                        <Fragment>
                            <i className="fas fa-check"/>
                            <span className="paket-info-text">Theo dõi trực tuyến</span>
                        </Fragment>
                    )
                },
                paket_info_2: () => {
                    return (
                        <Fragment>
                            <i className="fas fa-check"/>
                            <span className="paket-info-text">Đảm bảo</span>
                        </Fragment>
                    )
                },
                info_modal: [
                    'Không đảm bảo. Chúng tôi không chịu trách nhiệm nếu đơn hàng hư hỏng' +
                    ' hay thất thoái',
                    'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao)',
                    'Kích thước tối đa:32x25x10cm(dàixrộngxcao)',
                    'Vui lòng đóng gói bưu kiện kỹ càng và cẩn thận'
                ],
            },
            {
                name: 'truoc_10h',
                price: 545000,
                paket_size: 'Trước 10h',
                paket_max: 'tối đa 120x60x60cm',
                paket_info_1: () => {
                    return (
                        <Fragment>
                            <i className="fas fa-check"/>
                            <span className="paket-info-text">Theo dõi trực tuyến</span>
                        </Fragment>
                    )
                },
                paket_info_2: () => {
                    return (
                        <Fragment>
                            <i className="fas fa-check"/>
                            <span className="paket-info-text">Đảm bảo</span>
                        </Fragment>
                    )
                },
                info_modal: [
                    'Không đảm bảo. Chúng tôi không chịu trách nhiệm nếu đơn hàng hư hỏng' +
                    ' hay thất thoái.',
                    'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao).',
                    'Kích thước tối đa:60x30x15cm(dàixrộngxcao).',
                    'Vui lòng đóng gói bưu kiện kỹ càng và cẩn thận.'
                ]
            },
            {
                name: 'truoc_12h',
                price: 490000,
                paket_size: 'Trước 12h',
                paket_max: 'tối đa 120x60x60cm',
                paket_info_1: () => {
                    return (
                        <Fragment>
                            <i className="fas fa-check"/>
                            <span className="paket-info-text">Theo dõi trực tuyến</span>
                        </Fragment>
                    )
                },
                paket_info_2: () => {
                    return (
                        <Fragment>
                            <i className="fas fa-check"/>
                            <span className="paket-info-text">Đảm bảo</span>
                        </Fragment>
                    )
                },
                info_modal: [
                    'Đơn hàng được đảm bảo. Đền bù lên đến 12.000.000VNĐ nếu có thất thoát' +
                    ' hay hư hỏng.',
                    'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao).',
                    'Kích thước tối đa:60x30x15cm(dàixrộngxcao).',
                    'Nếu vượt quá kích thước tối đa, vui lòng đặt mua gói 5kg-tiêu chuẩn',
                    'Nếu bưu kiện có vấn đề về bao bì, chúng tôi sẽ hỗ trợ thùng carton'
                ]
            },
            {
                name: 'trong_ngay',
                price: 440000,
                paket_size: 'Trong ngày',
                paket_max: 'tối đa 120x60x60cm',
                paket_info_1: () => {
                    return (
                        <Fragment>
                            <i className="fas fa-check"/>
                            <span className="paket-info-text">Theo dõi trực tuyến</span>
                        </Fragment>
                    )
                },
                paket_info_2: () => {
                    return (
                        <Fragment>
                            <i className="fas fa-check"/>
                            <span className="paket-info-text">Đảm bảo</span>
                        </Fragment>
                    )
                },
                info_modal: [
                    'Đơn hàng được đảm bảo. Đền bù lên đến 35.000.000VNĐ nếu có thất thoát' +
                    ' hay hư hỏng.',
                    'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao).',
                    'Kích thước tối đa:120x60x60cm(dàixrộngxcao).',
                    'Nếu vượt quá kích thước tối đa, vui lòng đặt mua gói 10kg-tiêu chuẩn',
                    'Lưu ý: Các lô hàng có chu vi trên 300 cm phải được thanh toán trước' +
                    ' bằng tem bưu kiện DHL tối đa 31,5 kg, bất kể trọng lượng thực của chúng.',
                    'Nếu bưu kiện có vấn đề về bao bì, chúng tôi sẽ hỗ trợ thùng carton'
                ]
            },
        ];
        let currentHour = moment().hour();
        if (currentHour <= 9) {
            clone_goi_cuoc.splice(0, 0)
        } else if (currentHour > 9 && currentHour <= 10) {
            clone_goi_cuoc.splice(0, 1);
        } else if (currentHour < 12 && currentHour > 10) {
            clone_goi_cuoc.splice(0, 2);
        } else {
            clone_goi_cuoc.splice(0, 3);
        }
        ;
        let update_goi_cuoc;
        switch (value) {
            case'2kg':
                update_goi_cuoc = [...clone_goi_cuoc];
                this.setState({
                    Goi_cuoc: [...update_goi_cuoc],
                },()=>{
                    let index_default_goi_cuoc = this.state.Goi_cuoc.findIndex((goi_cuoc) => this.state.active_goi_cuoc[goi_cuoc.name] === true)
                    this.setState({
                        price_goi_cuoc: this.state.Goi_cuoc[index_default_goi_cuoc].price,
                        thong_tin_don_hang: {...this.state.Goi_cuoc[index_default_goi_cuoc],country:this.props.info_from_table_redux.country},
                    })
                });
                break;
            case '5kg':
                update_goi_cuoc = clone_goi_cuoc.map(goi_cuoc => {
                    return {...goi_cuoc, price: (goi_cuoc.price + 100000)}
                })
                this.setState({
                    Goi_cuoc: [...update_goi_cuoc],
                },()=>{
                    let index_default_goi_cuoc = this.state.Goi_cuoc.findIndex((goi_cuoc) => this.state.active_goi_cuoc[goi_cuoc.name] === true)
                    this.setState({
                        price_goi_cuoc: this.state.Goi_cuoc[index_default_goi_cuoc].price,
                        thong_tin_don_hang: {...this.state.Goi_cuoc[index_default_goi_cuoc],country:this.props.info_from_table_redux.country},
                    })
                })
                break;
            case '10kg':
                update_goi_cuoc = clone_goi_cuoc.map(goi_cuoc => {
                    return {...goi_cuoc, price: (goi_cuoc.price + 150000)}
                })
                this.setState({
                    Goi_cuoc: [...update_goi_cuoc],
                },()=>{
                    let index_default_goi_cuoc = this.state.Goi_cuoc.findIndex((goi_cuoc) => this.state.active_goi_cuoc[goi_cuoc.name] === true)
                    this.setState({
                        price_goi_cuoc: this.state.Goi_cuoc[index_default_goi_cuoc].price,
                        thong_tin_don_hang: {...this.state.Goi_cuoc[index_default_goi_cuoc],country:this.props.info_from_table_redux.country},
                    })
                })
                break;
            case '31,5kg':
                update_goi_cuoc = clone_goi_cuoc.map(goi_cuoc => {
                    return {...goi_cuoc, price: (goi_cuoc.price + 250000)}
                })
                this.setState({
                    Goi_cuoc: [...update_goi_cuoc],
                },()=>{
                    let index_default_goi_cuoc = this.state.Goi_cuoc.findIndex((goi_cuoc) => this.state.active_goi_cuoc[goi_cuoc.name] === true)
                    this.setState({
                        price_goi_cuoc: this.state.Goi_cuoc[index_default_goi_cuoc].price,
                        thong_tin_don_hang: {...this.state.Goi_cuoc[index_default_goi_cuoc],country:this.props.info_from_table_redux.country},
                    })
                })
                break;
            default:
                update_goi_cuoc = [...clone_goi_cuoc];
                this.setState({
                    Goi_cuoc: [...update_goi_cuoc],
                },()=>{
                    let index_default_goi_cuoc = this.state.Goi_cuoc.findIndex((goi_cuoc) => this.state.active_goi_cuoc[goi_cuoc.name] === true)
                    this.setState({
                        price_goi_cuoc: this.state.Goi_cuoc[index_default_goi_cuoc].price,
                        thong_tin_don_hang: {...this.state.Goi_cuoc[index_default_goi_cuoc],country:this.props.info_from_table_redux.country},
                    })
                });
                break;
        }
    }
    SendPricetoRedux = (priceallchongoicuoc) => {
        var id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.props.UpdatePricetoRedux(this.state.thong_tin_don_hang, priceallchongoicuoc, id)
    }
    render() {
        let all_price = parseFloat(this.state.price_goi_cuoc)+parseFloat(this.state.price_country)
        let allGoicuoc = this.state.Goi_cuoc.map((goi, index) => {
            let price_string = goi.price.toLocaleString();
            let active = goi.name;
            return (
                <div className={this.state.active_goi_cuoc.[active] ?
                    'col-xl-2 container-goi-cuoc active-current-goi-cuoc' : 'col-xl-2 container-goi-cuoc'}
                     key={index}>
                    <div className={this.state.active_goi_cuoc.[active] ?
                        'body1 price price-current-active' : 'body1 price'}
                    >{price_string} VNĐ
                    </div>
                    <div className="body2 paket-size">{goi.paket_size}</div>
                    <button type="button" className="btn btn-primary small-info" data-toggle="modal"
                            data-target={'#' + goi.name}>
                        <i className="far fa-question-circle fa-2x"/>
                    </button>
                    <div className="modal fade" id={goi.name} tabIndex="-1"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title Head4" style={{textAlign: "left"}}
                                        id={goi.name + index}>{goi.paket_size}</h4>
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ul>
                                        {goi.info_modal.map((info, index) => {
                                            return (
                                                <li key={index} className="body2"
                                                    style={{textAlign: "left"}}>
                                                    {info}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paket-info">
                        <p>{goi.paket_max}</p>
                        <p>{goi.paket_info_1()}</p>
                        <p>{goi.paket_info_2()}</p>
                    </div>
                    <div>
                        {/*this.state.[bien]*/}
                        {this.state.active_goi_cuoc.[active] ?
                            (<i className="fas fa-check-circle fa-2x"/>) :
                            (<button className="btn btn-raised btn-primary text-button"
                                     onClick={() => this.ChooseGoiCuoc(goi.name, goi.price)}
                            >
                                Chọn
                            </button>)}
                    </div>
                </div>
            );
        });
        return (
            <Fragment>
                <div className="goi-express-display">
                    <p className="text-28px">Tem điện tử - Gói vận chuyển nhanh Express</p>
                    <button type="button" className="btn btn-primary" data-toggle="modal"
                            data-target="#goi-express-info">
                        <i className="far fa-question-circle fa-2x"/>
                    </button>
                    <div className="modal fade" id="goi-express-info" tabIndex="-1"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title Head4" id="exampleModalLabel">Vận
                                        chuyển nhanh Express</h4>
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p className="body1">
                                        Chuyển phát nhanh trong nước lên đến
                                        31,5 kg với giao hàng nhanh chậm nhất đến ngày hôm sau
                                        (Thứ
                                        Hai-Thứ Sáu, nếu hàng được bàn giao trước 9, 10 hoặc 12
                                        giờ
                                        sáng), bên ngoài Việt Nam trong vòng 2-3 ngày (Thứ
                                        Hai-Thứ
                                        Sáu). <br/>
                                        Có thể giao hàng tại chi nhánh của Blitz hoặc đặt dịch
                                        vụ
                                        nhận hàng tại nhà.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="" className="country-select-form">
                        <div style={{display: 'inline-block'}}
                             className={this.state.focus.country ? 'country-select-input focus' : 'country-select-input'}>
                            <label className="label-country-select">Chọn quốc gia</label><br/>
                            <select className="custom-select Head6" name="country"
                                    onFocus={() => this.formFocus('country')}
                                    onBlur={() => this.formoutFocus('country')}
                                    onChange={this.onHandleChangeCountry}
                                    defaultValue={this.props.info_from_table_redux.country}>
                                <option>Việt Nam</option>
                                <option>Thái Lan</option>
                                <option>Singapore</option>
                                <option>Malaysia</option>
                                <option>Indonesia</option>
                                <option>Campuchia</option>
                                <option>Myanmar</option>
                                <option>Lào</option>
                                <option>Philipines</option>
                                <option>Đông Timo</option>
                                <option>Brunei</option>
                            </select>
                        </div>
                        <div className="info-price-country">
                            <button type="button" className="btn btn-primary country-info-price"
                                    data-toggle="modal" data-target="#country-price"
                                    title="giá cước từng quốc gia">
                                <i className="far fa-question-circle fa-3x"/>
                            </button>
                            <div className="modal fade" id="country-price" tabIndex="-1"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title Head4"
                                                id="exampleModalLabel">Gía cước theo quốc
                                                gia</h4>
                                            <button type="button" className="close"
                                                    data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p className="body1">Việt Nam : <strong>Không mất
                                                phí</strong></p>
                                            <p className="body1">Thái Lan : <strong>Thêm
                                                120.000VNĐ</strong></p>
                                            <p className="body1">Singapore : <strong>Thêm
                                                130.000VNĐ</strong></p>
                                            <p className="body1">Malaysia : <strong>Thêm
                                                150.000VNĐ</strong></p>
                                            <p className="body1">Indonesia : <strong>Thêm
                                                150.000VNĐ</strong></p>
                                            <p className="body1">Campuchia : <strong>Thêm
                                                80.000VNĐ</strong></p>
                                            <p className="body1">Myanmar : <strong>Thêm
                                                100.000VNĐ</strong></p>
                                            <p className="body1">Lào : <strong>Thêm
                                                50.000VNĐ</strong></p>
                                            <p className="body1">Philippines : <strong>Thêm
                                                150.000VNĐ</strong></p>
                                            <p className="body1">Đông Ti-mo : <strong>Thêm
                                                150.000VNĐ</strong></p>
                                            <p className="body1">Brunei : <strong>Thêm
                                                200.000VNĐ</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p className="text-28px">Kích thước kiện hàng</p>
                    <form action="" className="country-select-form form-weight">
                        <div style={{display: 'inline-block'}}
                             className={this.state.focus.weight ? 'country-select-input focus' : 'country-select-input'}>
                            <label className="label-country-select">Chọn khối lượng</label><br/>
                            <select className="custom-select Head6" name="country"
                                    onFocus={() => this.formFocus('weight')}
                                    onBlur={() => this.formoutFocus('weight')}
                                    onChange={this.onHandleChangeWeight}>
                                <option>2kg</option>
                                <option>5kg</option>
                                <option>10kg</option>
                                <option>31,5kg</option>
                            </select>
                        </div>
                    </form>
                    <p className="body2">Kích thước tối đa 120x60x60cm</p>
                    <p className="text-28px">Các gói vận chuyển Express</p>
                    <div className="row row-goi-cuoc">
                        {allGoicuoc}
                    </div>
                </div>
                <div className="chon-goi-cuoc-all-price">
                    <span className="Head5">Tổng tiền</span>
                    <span className="Head4">{all_price.toLocaleString()} VNĐ</span>
                </div>
                <div className="next-to-adress">
                    <NavLink to="/Private/gui-hang/dia-chi" strict
                             className="btn btn-raised btn-primary text-button"
                             onClick={() => this.SendPricetoRedux(all_price)}>
                        Tiếp theo
                    </NavLink>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return ({
        info_from_table_redux: state.HomepageTableReducers,
    });
}
const mapDispatchToProps = dispatch => {
    return ({
        UpdatePricetoRedux: (thongtindonhang, priceallchongoicuoc, id) => {
            dispatch(actions.UpdatePriceToRedux(thongtindonhang, priceallchongoicuoc, id))
        }
    })
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GoiExpress));