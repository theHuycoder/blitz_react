import {combineReducers} from "redux";
import CreateNewGuiHangReducers from "./Gui_Hang_Reducers/CreateNewGuiHangReducers";
import LuuTruDonHangReducers from "./Luu_Tru_Don_Hang/LuuTruDonHangReducers";
import CheckDonHangReducers from "./Check_Don_Hang/CheckDonHangReducers";
import HomepageTableReducers from "./Homepage_Table/HomePageTableReducers";
import CreateNewUserReducers from "./User/CreateNewUser/CreateNewUserReducers";
import LuuTruUsersReducers from "./User/Luu_Tru_User/LuuTruUserReducers";
import LoginReducers from "./User/Login/LoginReducers";

const mainReducers = combineReducers(
    {
        CreateNewGuiHangReducers,
        LuuTruDonHangReducers,
        CheckDonHangReducers,
        HomepageTableReducers,
        CreateNewUserReducers,
        LuuTruUsersReducers,
        LoginReducers
    }
)
export default mainReducers;