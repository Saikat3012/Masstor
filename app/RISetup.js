//This file is run first when app  start. Import Navigtion File Here
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { LogBox, SafeAreaView } from 'react-native';
import configureStore from './Redux/Store/ConfigureStore';
import SplashScreen from 'react-native-splash-screen'
const store = configureStore();

const RISetup = () => {

    useEffect(() => {
        LogBox.ignoreAllLogs()
        SplashScreen.hide();
    }, [])

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};
export default RISetup;