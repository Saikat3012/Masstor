import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground, Image } from "react-native";
import { connect, useSelector } from 'react-redux';
import {
    RLAppIntroList
} from 'basecomponent';

import Images from 'constants/Images';
import LottieView from 'lottie-react-native';
import BaseStyle from 'constants/BaseStyle';
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation, props }) => {
    useEffect(() => {
        // setTimeout(() => {
        //     navigation.navigate('Login');
        // }, 1000);
        _checkUserLogin()

    }, [])
    //================================ Start common Function ===========================================
    // //Check user is login or not
    const _checkUserLogin = async () => {
        const isUserLogin = await AsyncStorage.getItem('LoginUserAsync');
        // setUserlogin(isUserLogin)
        console.log("Async Value on Api js", isUserLogin);
        if (isUserLogin == null || isUserLogin == 'null') {
            // navigation.navigate('Login');
            navigation.navigate('Login');
        }
        else {
            navigation.navigate('Home');
        }
    }


    //================================ Start common componenet =========================================== 

    return (
        <Fragment>
            {/* <ImageBackground style={{ flex: 1 }}
                source={Images.splasScreenImg}
            > */}
            <View
                style={{ flex: 1 }}
            >
                <View style={{ height: Platform.OS === 'ios' ? 20 : 0 }}>
                </View>
                <View style={{ width: BaseStyle.DEVICE_WIDTH, alignSelf: 'center', }}>
                    <LottieView
                        source={Images.splashJson}
                        style={{
                            // width: BaseStyle.DEVICE_WIDTH * 2,
                            // width: 500,
                            height: BaseStyle.DEVICE_HEIGHT,
                            // backgroundColor: 'yellow',
                            alignSelf: 'center',

                        }}
                        autoPlay={true}
                        loop={false}
                        onAnimationFinish={() => {
                            // navigation.navigate('Login');
                            _checkUserLogin()
                        }}
                    />
                </View>
                {/* <Image source={Images.splasScreenGif} style={{ flex: 1, }} /> */}
            </View>
            {/* </ImageBackground> */}
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(SplashScreen);