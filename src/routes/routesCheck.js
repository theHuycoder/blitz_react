import React from "react";
import CheckDonHang from "../components/CheckDonHang/CheckDonHang";

const routesCheck = [
    {
        path:'/Private/Homepage/check-don-hang',
        exact:true,
        strict:false,
        main: ()=> <CheckDonHang/>
    },
]
export default routesCheck;