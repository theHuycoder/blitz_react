import * as types from './../../constances/allLuuTrutypes';
export const GuiHangSaveToRedux = (data)=>{
    return({
        type: types.GUI_HANG_SAVE_TO_REDUX,
        data,
    })
}