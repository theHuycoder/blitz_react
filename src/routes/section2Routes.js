import React from "react";
import Section2Homepage from "../components/Hompage/Section2/Section2Homepage";
import Section2CreateNewUser from "../components/CreateNewUser/Section2CreateNewUser";
import Section2CreateNewUserInfo from "../components/CreateNewUser/Section2CreateNewUserInfo";
import Section2BusinessHomepage
    from "../components/Business/BusinessHomepage/Section2BusinessHomepage";
const routesSection2 = [
    {
        path:'/Private/Homepage',
        exact:false,
        strict:true,
        main : ({match}) => <Section2Homepage match={match}/>
    },
    {
        path:'/Private/dang-ky-info',
        exact:false,
        strict:true,
        main : ({match}) => <Section2CreateNewUserInfo match={match}/>
    },
    {
        path:'/Private/dang-ky',
        exact:false,
        strict:true,
        main : ({match}) => <Section2CreateNewUser match={match}/>
    },
    {
        path:'/Business/Homepage',
        exact:false,
        strict:true,
        main : ({match}) => <Section2BusinessHomepage match={match}/>
    },

];
export default routesSection2;