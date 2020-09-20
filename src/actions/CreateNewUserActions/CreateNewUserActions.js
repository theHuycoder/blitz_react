import * as types from './../../constances/allCreateNewUsertypes';

export const CreateNewUser = (data)=>{
    return({
        type: types.CREATE_NEW_USER,
        thongtinUser:data,
    })
}
export const ResetCreateNewUser = (data)=>{
    return({
        type : types.RESET_CREATE_NEW_USER,
        data:data,
    })
}