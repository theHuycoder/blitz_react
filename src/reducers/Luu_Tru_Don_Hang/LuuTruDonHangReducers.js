import * as types from './../../constances/allLuuTrutypes';

var saveddata = JSON.parse(localStorage.getItem('DonHangDatabase'))
var initialState = [{
    id: 'ikljb46st80ks8knhlk',
    priceall: 450000,
    progress: [
        {
            time: 'Thứ hai, 07 Tháng chín 2020, 14 giờ 20 phút',
            info: 'Đã tiếp nhận đơn hàng',
        },
        {
            time: 'Thứ ba, 08 Tháng chín 2020, 10 giờ 15 phút',
            info: 'Bưu kiện đã đến kho vận chuyển Lào Cai',
        },
        {
            time: 'Thứ ba , 08 Tháng chín 2020, 15 giờ 48 phút',
            info: 'Bưu kiện đã rời kho vận chuyển Lào Cai ',
        },
        {
            time: 'Thứ tư, 09 Tháng chín 2020, 05 giờ 25 phút',
            info: 'Bưu kiện đã đến kho vận chuyển Hà Nội',
        },
        {
            time: 'Thứ tư, 09 Tháng chín 2020, 08 giờ 25 phút',
            info: 'Bưu kiện đang được giao',
        },
        {
            time: 'Thứ tư, 09 Tháng chín 2020, 15 giờ 25 phút',
            info: 'Đã giao cho Đặng Lâm Thồn',
        },
    ],
    status: 'Finish',
    thongtindonhang: {
        name: 'goi_5kg_tc',
        country: 'Việt Nam',
        paket_max: 'tối đa 120x60x15cm',
        paket_size: '5kg-Tiêu chuẩn',
        info_modal: [
            'Đơn hàng được đảm bảo. Đền bù lên đến 35.000.000VNĐ nếu có thất thoát' +
            ' hay hư hỏng.',
            'Kích thước tối thiểu:15x11x1cm(dàixrộngxcao).',
            'Kích thước tối đa:120x60x60cm(dàixrộngxcao).',
            'Nếu vượt quá kích thước tối đa, vui lòng đặt mua gói 10kg-tiêu chuẩn',
            'Lưu ý: Các lô hàng có chu vi trên 300 cm phải được thanh toán trước' +
            ' bằng tem bưu kiện DHL tối đa 31,5 kg, bất kể trọng lượng thực của chúng.',
            'Nếu bưu kiện có vấn đề về bao bì, chúng tôi sẽ hỗ trợ thùng carton'
        ],
    },
    thong_tin_dia_chi_option: {
        chon_ngay_giao_nguoi_nhan: null,
        giao_hang_tai_nha: null,
    },
    thong_tin_dia_chi_receiver: {
        receiver_adresse: "56A Xuân Thủy",
        receiver_city: "Hà Nội",
        receiver_country: "Việt Nam",
        receiver_district: "Cầu Giấy",
        receiver_email: "lamthon@gmail.com",
        receiver_name: "Đặng Lâm Thồn",
    },
    thong_tin_dia_chi_sender: {
        sender_adresse: "62 Lê Chân",
        sender_city: "Hải Phòng",
        sender_country: "Việt Nam",
        sender_district: "Lê Chân",
        sender_email: "dhuyhuy@gmail.com",
        sender_name: "Đỗ Quang Huy",
    }
}];
var StateWithSaveddata = saveddata ? saveddata : initialState;
const LuuTruDonHangReducers = (state = StateWithSaveddata, action) => {
    switch (action.type) {
        case (types.GUI_HANG_SAVE_TO_REDUX):
            let actiondata = action.data;
            let StartState = [...state];
            StartState.push(actiondata);
            state = [...StartState];
            localStorage.setItem('DonHangDatabase', JSON.stringify(state))
            return [...state];
        default:
            return state;
    }
}
export default LuuTruDonHangReducers;