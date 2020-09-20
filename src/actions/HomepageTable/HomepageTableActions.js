import * as types from './../../constances/allHomepageTabletypes';

export const GetDataFromTable = (data) => {
    return{
        type: types.GET_DATA_FROM_HOMEPAGE_TABLE,
        data: data
    };
}