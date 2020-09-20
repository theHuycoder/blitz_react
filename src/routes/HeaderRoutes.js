import React from "react";
import HeaderHomepage from './../components/Hompage/headerHompage';
import HeaderCreateNewUserInfo from "../components/CreateNewUser/HeaderCreateNewUserInfo";
import HeaderCreateNewUser from "../components/CreateNewUser/HeaderCreateNewUser";
import HeaderBusinessHomepage from "../components/Business/BusinessHomepage/HeaderBusinessHomepage";
import CreateNewUserDone from "../components/CreateNewUser/CreateNewUserDone";
import UserInfosMainPage from "../components/UserInfosPage/UserInfosMainPage";
const routesHeader = [
    {
        path:'/Private/Homepage',
        exact:false,
        strict:true,
        main: ()=> <HeaderHomepage/>
    },
    {
        path:'/Private/dang-ky-info',
        exact:false,
        strict:true,
        main: ()=> <HeaderCreateNewUserInfo/>
    },
    {
        path:'/Private/dang-ky',
        exact:false,
        strict:true,
        main: ()=> <HeaderCreateNewUser/>
    },
    {
        path:'/Business/Homepage',
        exact:false,
        strict:true,
        main: ()=> <HeaderBusinessHomepage/>
    },
    {
        path:'/Private/dang-ky-done',
        exact:true,
        strict:true,
        main: ()=> <CreateNewUserDone/>
    },
    {
        path:'/Private/User-infos',
        exact:false,
        strict:true,
        main: ({match})=> <UserInfosMainPage match={match}/>
    },
];
export default routesHeader;