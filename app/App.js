//Navigation File
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BeforeLoginStackNavigator } from './Navigation/StackNavigator';
import { SafeAreaView } from 'react-native';
// import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
    // useEffect(() => {
    //     _checkUserLogin()
    // }, [])

    // //Check user is login or not
    // const _checkUserLogin = async () => {
    //     const isUserLogin = await AsyncStorage.getItem('LoginUserAsync');
    //     // setUserlogin(isUserLogin)
    //     console.log("Async Value on Api js", isUserLogin);
    // }
    return (
        <NavigationContainer>
            <BeforeLoginStackNavigator />
        </NavigationContainer>
    );
};

export default App;