import * as types from './../../../constances/allLuuTruUsertypes';
var saveddata = JSON.parse(localStorage.getItem('LuuTruUser'));
var User_stored = saveddata? saveddata : [];

const LuuTruUsersReducers = (state = User_stored, action) =>{
    switch (action.type){
        case (types.LUU_TRU_USER):
            let new_user = {...action.thongtinUser};
            let updateState = [...state];
            updateState.push(new_user);
            state = [...updateState];
            localStorage.setItem('LuuTruUser',JSON.stringify(state));
            console.log(state)
            return [...state];
        case (types.LUU_TRU_EDITED_USER):
            let indexofeditedUser = state.findIndex(user=> user.user_name===action.thongtinUser.user_name)
            let editedUser = {...state[indexofeditedUser],...action.thongtinUser}
            state[indexofeditedUser] = {...editedUser}
            localStorage.setItem('LuuTruUser',JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default  LuuTruUsersReducers;