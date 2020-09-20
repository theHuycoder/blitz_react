import * as types from './../../constances/allGuiHangtypes';

var savedState = JSON.parse(localStorage.getItem('createNewDonHang'));
var initialState = savedState ? savedState : {};
const CreateNewGuiHangReducers = (state = initialState, action) => {
    switch (action.type) {
        case (types.CHON_GOI_CUOC_UPDATE_PRICE_REDUX):
            let updateState1 = {
                id: action.id,
                priceall: action.price,
                thongtindonhang: action.thongtindonhang,
                status: action.status,
            }
            state = {...state,...updateState1}
            console.log(state);
            localStorage.setItem('createNewDonHang', JSON.stringify(state))
            return {...state};
        case (types.NHAP_DIA_CHI_UPDATE_PRICE_REDUX):
            let updateState2 = {
                thong_tin_dia_chi_receiver: action.thong_tin_dia_chi_receiver,
                thong_tin_dia_chi_sender: action.thong_tin_dia_chi_sender,
                thong_tin_dia_chi_option: action.thong_tin_dia_chi_option,
                priceall:action.priceall,
                progress: action.progress,
            }
            state = {...state,...updateState2}
            // khi gop 2 mang thi gia tri lap o mang thu 2 se duoc ap dung
            console.log(state)
            localStorage.setItem('createNewDonHang', JSON.stringify(state));
            return {...state};
        case (types.RESET_REDUX_GUI_HANG):
            let reset_state = action.data;
            state = {...reset_state};
            localStorage.setItem('createNewDonHang',JSON.stringify(state))
            return {...state};
        default:
            return state;
    }
}
export default CreateNewGuiHangReducers;