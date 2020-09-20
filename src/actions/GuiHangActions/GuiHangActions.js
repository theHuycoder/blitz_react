import * as types from './../../constances/allGuiHangtypes';
import moment from "moment";

export const UpdatePriceToRedux = (thongtindonhang, priceallchongoicuoc, id) => {
    return (
        {
            type: types.CHON_GOI_CUOC_UPDATE_PRICE_REDUX,
            id: id,
            price: priceallchongoicuoc,
            thongtindonhang: thongtindonhang,
            status: 'New',
        }
    );
}
export const UpdatePriceDiaChiToRedux = (data, price) => {
    let time = moment().format('dddd, DD MMMM YYYY')
    return (
        {
            type: types.NHAP_DIA_CHI_UPDATE_PRICE_REDUX,
            thong_tin_dia_chi_receiver: data.thong_tin_dia_chi_receiver,
            thong_tin_dia_chi_sender: data.thong_tin_dia_chi_sender,
            thong_tin_dia_chi_option: data.thong_tin_dia_chi_option,
            priceall: price,
            progress: [
                {
                    time: time,
                    info: 'Đã tiếp nhận đơn hàng',
                },
            ]
        }
    );
}
export const ResetReduxGuiHang = (data) => {
    return ({
        type: types.RESET_REDUX_GUI_HANG,
        data: data,
    })
}