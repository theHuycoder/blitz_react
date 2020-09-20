import * as types from './../../constances/allCheckDonHangtypes';

export const CheckDonHang = (ID)=>{
    return ({
        type: types.CHECK_DON_HANG,
        ID,
    });
}