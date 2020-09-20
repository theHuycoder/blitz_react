import React from "react";
import GuiHangMainPage from "../components/Gui_hang_page/Gui_hang_main_Page";
import Section1Homepage from "../components/Hompage/Section1/Section1Homepage";
import CreateNewUserInfo from "../components/CreateNewUser/CreateNewUserInfo";
import CreateNewUser from "../components/CreateNewUser/CreateNewUser";
import Section1BusinessHomepage
    from "../components/Business/BusinessHomepage/Section1BusinessHomepage";

const routesSection1 = [
    {
        path: '/Private/Homepage',
        exact: false,
        strict: true,
        main: ({match}) => <Section1Homepage match={match}/>
    },
    {
        path: '/Private/gui-hang',
        exact: false,
        strict: true,
        main: ({match}) => <GuiHangMainPage match={match}/>
    },
    {
        path: '/Private/dang-ky-info',
        exact: false,
        strict: true,
        main: ({match}) => <CreateNewUserInfo match={match}/>
    },
    {
        path: '/Private/dang-ky',
        exact: false,
        strict: true,
        main: ({match}) => <CreateNewUser match={match}/>
    },
    {
        path: '/Business/Homepage',
        exact: false,
        strict: true,
        main: ({match}) => <Section1BusinessHomepage match={match}/>
    },

];
export default routesSection1;