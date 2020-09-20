import * as types from './../../constances/allHomepageTabletypes';

var initialState = {
    goi_cuoc: 'goi_5kg_tc',
    country: "Việt Nam",
    length: 0,
    width: 0,
    height: 0,
}
const HomepageTableReducers = (state = initialState, action) => {
    var goi_cuoc;
    var updateState;
    switch (action.type) {
        case (types.GET_DATA_FROM_HOMEPAGE_TABLE):
            let length = action.data.length;
            let width = action.data.width;
            let height = action.data.height;
            if (length === 0 && width === 0 && height === 0) {
                goi_cuoc = 'goi_5kg_tc';
            }else if (height > 15) {
                goi_cuoc ='goi_10kg_tc';
            }
            else if (length <= 35 && width <= 25 && height <= 10) {
                goi_cuoc = 'goi_2kg_s';
            } else if ((length >= 60 && length < 120) ||  (width === 30)) {
                goi_cuoc = 'goi_5kg_tc';
            } else if ((length >= 35 && length < 60) || (width >= 25 && width < 30) ) {
                goi_cuoc = 'goi_2kg_tc';
            } else if (height > 10 && height <= 15) {
                goi_cuoc = 'goi_5kg_tc';
            } else {
                goi_cuoc = 'goi_10kg_tc';
            }
            updateState = {...action.data, "goi_cuoc": goi_cuoc};
            state = {...updateState};
            return {...state}
        default:
            return state;
    }
}
export default HomepageTableReducers;