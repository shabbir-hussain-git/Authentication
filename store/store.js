import React from "react";

const initialValue = {
    isLogin:false,
    updateLoginState:()=>{},
    logout:()=>{}
}
const AuthStore = React.createContext(initialValue);

export default AuthStore;