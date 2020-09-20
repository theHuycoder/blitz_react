import * as types from './../../constances/allLogintypes';

export const Login = (data)=> {
    return({
        type: types.Login,
        Loginsuccess: true,
        thongtinLoginUser : data
    });
}
export const Logout = (data)=> {
    return({
        type: types.Logout,
        Loginsuccess:data,
    })
}
export const Edit = (data)=>{
    return({
        type:types.Edit,
        Loginsuccess:true,
        thongtinLoginUser: data,
    })
}