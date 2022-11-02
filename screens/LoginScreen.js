import AuthContent from '../components/Auth/AuthContent';
import doLogin from '../Services/Services'
import { useContext, useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import AuthStore from '../store/store';
import {storeData} from '../Services/Storage';

function LoginScreen() {
  const ctx = useContext(AuthStore)
  const [isLoading,isLoadingHandler] = useState(false);
  const onAuthenticate = async ()=>{
    isLoadingHandler(true);
    let d = await doLogin('sd','sdsd');   
    await storeData('sKey','123Qwer');
   isLoadingHandler(false)
   ctx.updateLoginState(true);
  }
  if(isLoading){
   return <LoadingOverlay></LoadingOverlay>
  }
  return <AuthContent isLogin onAuthenticate={onAuthenticate} />;
}

export default LoginScreen;