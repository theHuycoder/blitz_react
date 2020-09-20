import * as types from './../../../constances/allLogintypes';
var saveddata = JSON.parse(localStorage.getItem('LastLogin'))
var inititalState = saveddata ? saveddata : {Loginsuccess: false};

const LoginReducers = (state = inititalState, action) => {
    switch (action.type) {
        case(types.Login):
            let updateState = {...action.thongtinLoginUser,Loginsuccess: action.Loginsuccess};
            state = {...updateState}
            console.log(state);
            localStorage.setItem('LastLogin', JSON.stringify(state))
            return {...state};
        case (types.Logout):
            state = {Loginsuccess: action.Loginsuccess}
            console.log(state)
            localStorage.setItem('LastLogin', JSON.stringify(state))
            return {...state};
        case (types.Edit):
            let editState = {...action.thongtinLoginUser}
            state = {...state,...editState}
            localStorage.setItem('LastLogin',JSON.stringify(state))
            return{...state}
        default:
            return state;
    }
}
export default LoginReducers;