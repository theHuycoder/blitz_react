import * as types from './../../constances/allLuuTruUsertypes';

export const LuuTruUser = (data)=>{
    return({
        type: types.LUU_TRU_USER,
        thongtinUser: data
    })
}
export const LuuTruEditedUser = (data)=>{
    return({
        type:types.LUU_TRU_EDITED_USER,
        thongtinUser:data,
    })
}