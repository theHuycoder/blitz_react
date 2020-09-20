import React, {Component, Fragment} from "react";
import './goi_chuyen_phat_css/goi_co_ban.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from './../../../../actions/GuiHangActions/GuiHangActions';

class GoiCoBan extends Component {
    componentDidMount() {
        let initialActive = {
            goi_2kg_s: false,
            goi_2kg_m: false,
            goi_2kg_tc: false,
            goi_5kg_tc: false,
            goi_10kg_tc: false,
            goi_315kg_tc: false,
        }
        let goi_cuoc = this.props.info_from_table_redux.goi_cuoc;
        let goi_cuoc_index = this.state.Goi_cuoc.findIndex((goi, index) => goi.name === goi_cuoc)
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
        this.setState({
            active_goi_cuoc: {...initialActive, [goi_cuoc]: true},
            thong_tin_don_hang: {...this.state.Goi_cuoc[goi_cuoc_index],country: this.props.info_from_table_redux.country},
            price_country: value_price,
        },()=> {
            let index_default_goi_cuoc = this.state.Goi_cuoc.findIndex((goi_cuoc, index) => this.state.active_goi_cuoc[goi_cuoc.name] === true)
            this.setState({
            price_goi_cuoc: this.state.Goi_cuoc[index_default_goi_cuoc].price,
        })})
    }

    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            id: null,
            Goi_cuoc: [
                {
                    name: 'goi_2kg_s',
                    price: 125000,
                    paket_size: '2kg-Kiện S',
                    paket_max: 'tối đa 35x25x10cm',
                    paket_info_1: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-times"></i>
                                <span className="paket-info-text">Theo dõi trực tuyến</span>
                            </Fragment>
                        )
                    },
                    paket_info_2: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-times"></i>
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
                    name: 'goi_2kg_m',
                    price: 145000,
                    paket_size: '2kg-Kiện M',
                    paket_max: 'tối đa 60x30x10cm',
                    paket_info_1: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-times"></i>
                                <span className="paket-info-text">Theo dõi trực tuyến</span>
                            </Fragment>
                        )
                    },
                    paket_info_2: () => {
                        return (
                            <Fragment>
                                <i className="fas fa-times"></i>
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
                    name: 'goi_2kg_tc',
                    price: 175000,
                    paket_size: '2kg-Tiêu chuẩn',
                    paket_max: 'tối đa 60x30x10cm',
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
                    name: 'goi_5kg_tc',
                    price: 200000,
                    paket_size: '5kg-Tiêu chuẩn',
                    paket_max: 'tối đa 120x30x10cm',
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
                {
                    name: 'goi_10kg_tc',
                    price: 325000,
                    paket_size: '10kg-Tiêu chuẩn',
                    paket_max: 'tối đa 120x30x10cm',
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
                        'Đơn hàng được đảm bảo. Đền bù lên đến 50.000.000VNĐ nếu có thất thoát' +
                        ' hay hư hỏng.',
                        'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao).',
                        'Kích thước tối đa:120x60x60cm(dàixrộngxcao).',
                        'Nếu vượt quá kích thước tối đa, vui lòng đặt mua gói 10kg-tiêu chuẩn',
                        'Lưu ý: Các lô hàng có chu vi trên 300 cm phải được thanh toán trước' +
                        ' bằng tem bưu kiện DHL tối đa 31,5 kg, bất kể trọng lượng thực của chúng.',
                        'Nếu bưu kiện có vấn đề về bao bì, chúng tôi sẽ hỗ trợ thùng carton'
                    ]
                },
                {
                    name: 'goi_315kg_tc',
                    price: 525000,
                    paket_size: '31,5kg-Tiêu chuẩn',
                    paket_max: 'tối đa 120x30x10cm',
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
                                <i className="fas fa-check"></i>
                                <span className="paket-info-text">Đảm bảo</span>
                            </Fragment>
                        )
                    },
                    info_modal: [
                        'Đơn hàng được đảm bảo. Đền bù lên đến 100.000.000VNĐ nếu có thất thoát' +
                        ' hay hư hỏng.',
                        'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao).',
                        'Kích thước tối đa:120x60x60cm(dàixrộngxcao).',
                        'Nếu vượt quá kích thước tối đa, vui lòng đặt mua gói 10kg-tiêu chuẩn',
                        'Đối với các lô hàng vượt quá kích thước tối đa đối với bưu kiện, ' +
                        'không có hình khối hoặc hình cuộn hoặc không có bao bì hoặc túi vận' +
                        ' chuyển bằng bìa cứng hoặc giấy, vui lòng thêm dịch vụ hàng hóa cồng' +
                        ' kềnh.',
                        'Nếu bưu kiện có vấn đề về bao bì, chúng tôi sẽ hỗ trợ thùng carton'
                    ]
                },
            ],
            active_goi_cuoc: {
                goi_2kg_s: false,
                goi_2kg_m: false,
                goi_2kg_tc: false,
                goi_5kg_tc: true,
                goi_10kg_tc: false,
                goi_315kg_tc: false,
            },
            option_bo_sung: {
                dam_bao: false,
                roll: false,
                cong_kenh: false,
                pay_after: false,
                check_age: false,
            },
            price_country: 0,
            price_goi_cuoc: 200000,
            price_option: {
                dam_bao: 0,
                roll: 0,
                cong_kenh: 0,
                pay_after: 0,
                check_age: 0,
            },
            thong_tin_don_hang: {
                country: 'Việt Nam',
                name: 'goi_5kg_tc',
                price: 200000,
                paket_size: '5kg-Tiêu chuẩn',
                paket_max: 'tối đa 120x30x10cm',
                paket_info_1: () => {
                    return (
                        <Fragment>
                            <i className="fas fa-check"></i>
                            <span className="paket-info-text">Theo dõi trực tuyến</span>
                        </Fragment>
                    )
                },
                paket_info_2: () => {
                    return (
                        <Fragment>
                            <i className="fas fa-check"></i>
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
        }

    };

    formFocus = () => {
        this.setState({
            focus: true,
        })
    }
    formoutFocus = () => {
        this.setState({
            focus: false,
        })
    }
    ChooseGoiCuoc = (goicuocname, goicuocgia) => {
        let initialActive = {
            goi_2kg_s: false,
            goi_2kg_m: false,
            goi_2kg_tc: false,
            goi_5kg_tc: false,
            goi_10kg_tc: false,
            goi_315kg_tc: false,
        }
        let goicuoc_price;
        this.setState({
            active_goi_cuoc: {...initialActive, [goicuocname] : true},
        }, () => {
            if (this.state.active_goi_cuoc.[goicuocname]) {
                goicuoc_price = goicuocgia;
                let index_goi_cuoc_duoc_chon = this.state.Goi_cuoc.findIndex((goi, index) => goi.name === goicuocname)
                let thong_tin_goi_cuoc_duoc_chon = this.state.Goi_cuoc[index_goi_cuoc_duoc_chon];
                console.log(thong_tin_goi_cuoc_duoc_chon);
                this.setState({
                    price_goi_cuoc: goicuoc_price,
                    thong_tin_don_hang: {...this.state.thong_tin_don_hang, ...thong_tin_goi_cuoc_duoc_chon},
                }, () => console.log(this.state.thong_tin_don_hang))
            }
        })
    }
    openArcodion = (nameAcordion, price) => {
        let clone_Arcodion = {...this.state.option_bo_sung}
        let clone_price_option = {...this.state.price_option}
        let new_price_option = {...clone_price_option, [nameAcordion]: price}
        this.setState({
            option_bo_sung: {
                ...clone_Arcodion,
                [nameAcordion]: !clone_Arcodion[nameAcordion]
            },
        }, () => {
            if (this.state.option_bo_sung.[nameAcordion] === true) {
                this.setState({
                    price_option: new_price_option
                })
            } else {
                let reset_price = {...this.state.price_option, [nameAcordion]: 0}
                this.setState({
                    price_option: reset_price,
                })
            }
        })
    }
    onHandleChangeCountry = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var value_price;
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
            thong_tin_don_hang: {...this.state.thong_tin_don_hang, country: value}
        }, () => console.log(this.state.thong_tin_don_hang))

    };
    onHandleChangeOption = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        let clone_price_option = {...this.state.price_option}
        let new_price_option = {...clone_price_option, [name]: parseInt(value)}
        console.log(new_price_option);
        this.setState({
            price_option: new_price_option,
        })
    }
    SendPricetoRedux = (priceallchongoicuoc) => {
        var id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.props.UpdatePricetoRedux(this.state.thong_tin_don_hang, priceallchongoicuoc, id)}


    render() {
        var {price_option} = this.state;
        // console.log(Object.keys(price_option))
        //co the lay gia tri thuoc tinh trong object bang cach nay
        var sum_of_option = Object.keys(price_option).reduce((begin, price, index) => {
            return begin += parseFloat(price_option[price]);
        }, 0);
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
        let all_price = this.state.price_country + this.state.price_goi_cuoc + sum_of_option;
        return (
            <Fragment>
                <div className="goi-co-ban-display">
                    <p className="text-28px">Tem điện tử - Gói cơ bản &nbsp;&nbsp;</p>
                    <button type="button" className="btn btn-primary" data-toggle="modal"
                            data-target="#exampleModal">
                        <i className="far fa-question-circle fa-2x"/>
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title Head4" id="exampleModalLabel">Gói cơ
                                        bản</h4>
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p className="body1">
                                        Gửi hàng nội địa và gửi hàng quốc tế lên đến 31,5kg.<br/>
                                        Giao hàng nội địa trong vòng 1-2 ngày.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="" className="country-select-form">
                        <div style={{display: 'inline-block'}}
                             className={this.state.focus ? 'country-select-input focus' : 'country-select-input'}>
                            <label className="label-country-select">Chọn quốc gia</label><br/>
                            <select className="custom-select Head6" name="country"
                                    onFocus={this.formFocus}
                                    onBlur={this.formoutFocus}
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
                                                id="exampleModalLabel">Gía cước theo quốc gia</h4>
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
                    <p className="text-28px">Chọn gói cước</p>
                    <div className="row row-goi-cuoc">
                        {allGoicuoc}
                    </div>
                    <p className="body2">Tất cả giá là giá cuối cùng. Cước bưu kiện nhỏ cũng như bưu
                        kiện từ 2 đến 10 kg được miễn thuế GTGT theo UStG. Tuy nhiên, khi kết hợp
                        với dịch vụ vận chuyển
                        hàng hóa cồng kềnh, hàng cuộn và tiền mặt khi giao hàng, bưu phí này phải
                        chịu thuế bán hàng và tăng thuế VAT theo luật định. Tất cả các mức giá khác
                        đã bao gồm VAT theo luật định.
                    </p>
                    <p className="text-28px">Tùy chọn bổ sung</p>
                    <div className="option-bo-sung">
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="collapse"
                                                data-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne"
                                                onClick={() => this.openArcodion('dam_bao', 70000)}>
                                            <div>
                                                {this.state.option_bo_sung.dam_bao ?
                                                    (
                                                        <i className="fas fa-check-circle fa-3x"></i>) :
                                                    (<i className="fas fa-plus-circle fa-3x"></i>)}
                                            </div>
                                            <div>
                                                <p className="body2">Vận chuyển đảm bảo (thêm từ
                                                    70.000VNĐ)</p>
                                                <p className="body2">Nếu hàng hóa của bạn có giá trị
                                                    cao?</p>
                                            </div>
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse"
                                     aria-labelledby="headingOne">
                                    <div className="card-body">
                                        <form>
                                            {this.state.option_bo_sung.dam_bao ? (
                                                <Fragment>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio"
                                                               className="custom-control-input"
                                                               id="dam-bao-40tr"
                                                               name="dam_bao" value={70000}
                                                               onChange={this.onHandleChangeOption}
                                                               defaultChecked
                                                        />
                                                        <label
                                                            className="custom-control-label body2"
                                                            htmlFor="dam-bao-40tr">
                                                            Đền bù lên đến 40.000.000 VNĐ
                                                            (+70.000VNĐ)
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio"
                                                               className="custom-control-input"
                                                               id="dam-bao-400-tr" name="dam_bao"
                                                               value={150000}
                                                               onChange={this.onHandleChangeOption}/>
                                                        <label
                                                            className="custom-control-label body2"
                                                            htmlFor="dam-bao-400-tr">
                                                            Đền bù lên đến 400.000.000 VNĐ
                                                            (+150.000VNĐ)
                                                        </label>
                                                    </div>
                                                </Fragment>) : null}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="show"
                                                data-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseOne"
                                                onClick={() => this.openArcodion('roll', 52000)}>
                                            <div>
                                                {this.state.option_bo_sung.roll ?
                                                    (<i className="fas fa-check-circle fa-3x"/>) :
                                                    (<i className="fas fa-plus-circle fa-3x"/>)}
                                            </div>
                                            <div>
                                                <p className="body2">Bưu kiện có thể lăn được (thêm
                                                    52.000VNĐ)</p>
                                                <p className="body2">Nếu hàng hóa của bạn có thể lăn
                                                    được?</p>
                                            </div>
                                        </button>
                                    </h5>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="show"
                                                data-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseOne"
                                                onClick={() => this.openArcodion('cong_kenh', 250000)}>
                                            <div>
                                                {this.state.option_bo_sung.cong_kenh ?
                                                    (
                                                        <i className="fas fa-check-circle fa-3x"></i>) :
                                                    (<i className="fas fa-plus-circle fa-3x"></i>)}
                                            </div>
                                            <div>
                                                <p className="body2">Hàng hóa cồng kềnh (thêm
                                                    250.000VNĐ)</p>
                                                <p className="body2">Nếu hàng hóa của bạn có kích
                                                    thước lớn?</p>
                                            </div>
                                        </button>
                                    </h5>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="collapse"
                                                data-target="#collapseFour" aria-expanded="false"
                                                aria-controls="collapseOne"
                                                onClick={() => this.openArcodion('pay_after', 50000)}>
                                            <div>
                                                {this.state.option_bo_sung.pay_after ?
                                                    (
                                                        <i className="fas fa-check-circle fa-3x"></i>) :
                                                    (<i className="fas fa-plus-circle fa-3x"></i>)}
                                            </div>
                                            <div>
                                                <p className="body2">Thanh toán khi giao hàng (thêm
                                                    50.000VNĐ)</p>
                                                <p className="body2">Người nhận sẽ thanh toán?</p>
                                            </div>
                                        </button>
                                    </h5>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="collapse"
                                                data-target="#collapseFive" aria-expanded="false"
                                                aria-controls="collapseOne"
                                                onClick={() => this.openArcodion('check_age', 30000)}>
                                            <div>
                                                {this.state.option_bo_sung.check_age ?
                                                    (
                                                        <i className="fas fa-check-circle fa-3x"></i>) :
                                                    (<i className="fas fa-plus-circle fa-3x"></i>)}
                                            </div>
                                            <div>
                                                <p className="body2">Kiểm tra độ tuổi trước khi giao
                                                    hàng (thêm 30.000VNĐ)</p>
                                                <p className="body2">Nếu hàng hóa của bạn giới hạn
                                                    độ tuổi?</p>
                                            </div>
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseFive" className="collapse"
                                     aria-labelledby="headingOne">
                                    <div className="card-body">
                                        <form>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input"
                                                       name="check-age" id="16-tuoi"
                                                       defaultChecked/>
                                                <label className="custom-control-label body2"
                                                       htmlFor="16-tuoi">
                                                    Kiểm tra trên 16 tuổi
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input"
                                                       name="check-age" id="18-tuoi"/>
                                                <label className="custom-control-label body2"
                                                       htmlFor="18-tuoi">
                                                    Kiểm tra trên 18 tuổi
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="body2">
                        Tất cả phí dịch vụ là giá cuối cùng. Phí bổ sung cho bảo hiểm vận tải không
                        có
                        thuế GTGT theo UStG. Tất cả các phí dịch vụ khác đã bao gồm VAT theo luật
                        định.
                    </p>
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
const mapDispatchToProps = (dispatch, props) => {
    return ({
            UpdatePricetoRedux: (thongtindonhang, priceallchongoicuoc, id) => {
                dispatch(actions.UpdatePriceToRedux(thongtindonhang, priceallchongoicuoc, id))
            }
        }
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(GoiCoBan);