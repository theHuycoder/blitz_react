import * as types from './../../constances/allCheckDonHangtypes';
var initialState;
var saveddata = JSON.parse(localStorage.getItem('ship_code_check'))
initialState = saveddata? saveddata:null;

const CheckDonHangReducers = (state = initialState,action) =>{
    switch (action.type) {
        case (types.CHECK_DON_HANG):
            state = action.ID;
            localStorage.setItem('ship_code_check',JSON.stringify(state))
            return state
        default:
            return state;
    }
}
export default CheckDonHangReducers;