import React from "react";
import Section3Homepage from "../components/Hompage/Section3/Section3Homepage";
import Section2CreateNewUserInfo from "../components/CreateNewUser/Section2CreateNewUserInfo";

const routesSection3 = [
    {
        path:'/Private/Homepage',
        exact:false,
        strict:true,
        main : ({match}) => <Section3Homepage match={match}/>
    },
    {
        path:'/Business/Homepage',
        exact:false,
        strict:true,
        main : ({match}) => <Section2CreateNewUserInfo match={match}/>
    },


];
export default routesSection3;