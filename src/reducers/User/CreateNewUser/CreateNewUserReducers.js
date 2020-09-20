import * as types from './../../../constances/allCreateNewUsertypes'
var saveddata = JSON.parse(localStorage.getItem('CreateNewUser'))
var initialState = saveddata?saveddata : {};
const CreateNewUserReducers = (state = initialState,action) => {
    switch (action.type){
        case (types.CREATE_NEW_USER):
            let new_user = {...action.thongtinUser}
            state = {...new_user};
            localStorage.setItem('CreateNewUser',JSON.stringify(state))
            console.log(state)
            return {...state};
        case (types.RESET_CREATE_NEW_USER):
            let reset = {...action.data};
            state = {...reset};
            localStorage.setItem('CreateNewUser',JSON.stringify(state))
            return {...state};
        default:
            return state;
    }
}
export default  CreateNewUserReducers;