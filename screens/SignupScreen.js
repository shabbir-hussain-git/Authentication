import AuthContent from '../components/Auth/AuthContent';
import register from '../Services/Services'
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isLoading,isLoadingHandler] = useState(false);
  const onAuthenticate = async ()=>{
    isLoadingHandler(true);
    console.log('Shabbir')
    let d = await register('sd','sdsd');
    console.log('Shabbir2')

    isLoadingHandler(false)
  }
  if(isLoading){
   return <LoadingOverlay></LoadingOverlay>
  }
  return <AuthContent onAuthenticate={onAuthenticate} />;
}

export default SignupScreen;