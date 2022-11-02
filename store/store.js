import React from "react";

const initialValue = {
    isLogin:false,
    updateLoginState:()=>{}
}
const AuthStore = React.createContext(initialValue);

export default AuthStore;