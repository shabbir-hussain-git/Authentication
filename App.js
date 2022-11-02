import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import { StatusBar } from 'react-native';
import AuthStore from './store/store'
import { useEffect, useState } from 'react';
import {getData,removeData} from './Services/Storage';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const [isLogin,isLoginHandler] = useState(false);

  const updateLoginState = (state)=>{
    isLoginHandler(state);
  }
  const logout = async ()=>{
    await removeData("sKey");
    isLoginHandler(false);
  }
  useEffect(()=>{
    const getSessionKey = async (key)=>{
      let d = await getData(key);
      console.log(d);
      if(d){
        isLoginHandler(true)
      }
    }
    getSessionKey("sKey")
  },[])
  return (
    <NavigationContainer>
      <AuthStore.Provider value={{
        isLogin:isLogin,
        updateLoginState:updateLoginState,
        logout:logout
      }}>
       {!isLogin && <AuthStack /> }
       {isLogin && <AuthenticatedStack /> }
      </AuthStore.Provider>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <Navigation />
    </>
  );
}