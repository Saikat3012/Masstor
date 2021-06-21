import React, { Fragment, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, TextInput, Alert, alert, Image, BackHandler, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { connect, useSelector } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import LinearGradient from "react-native-linear-gradient";
import {
    RLText,
    RLNoInternet
} from 'basecomponent';

// import SplashIcon from 'assets/svg/splashicon';
import GoogleLogo from 'assets/svg/googleLogo';
import LoginLogo from 'assets/svg/loginLogo';
import BabyLogin from 'assets/svg/babyLogin';

const Login = ({ navigation, props }) => {
    const inputRef = useRef();
    // const [mobile, setMobile] = useState(null);

    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };


    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])
    //================================ Start common Function ===========================================
    //Navigate Mobile screen
    const _onFocusMobile = () => {
        navigation.navigate('Mobile');
        // setMobile(null)
        inputRef.current.clear();
    }
    //================================ Start common componenet =========================================== 

    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <RLNoInternet
                        RefreshClick={() => {
                            // console.log("Refresh Click Login");
                        }}
                        style={{
                            // height: BaseStyle.DEVICE_HEIGHT,
                        }}
                        height={BaseStyle.DEVICE_HEIGHT}
                    />
                    <LinearGradient
                        colors={['#983089', '#7D2B86', '#562380']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{ flex: 1 }}>
                        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={{ flex: 1, }}>
                                {/* <SplashIcon /> */}
                                <LoginLogo style={{ marginTop: 50, width: 99, height: 78, resizeMode: 'contain', alignSelf: 'center' }} />

                                {/* <Image
                                    style={{ marginTop: 35, width: 99, height: 78, resizeMode: 'contain', alignSelf: 'center' }}
                                    source={Images.logo}
                                /> */}
                            </View>
                            {/* <Image
                                style={{ top: 20, zIndex: 50, width: 500, height: 500, resizeMode: 'contain', alignSelf: 'center', }}
                                source={Images.baby}
                            /> */}

                            {/* working Code */}
                            {/* <Image
                                style={{ top: 40, zIndex: 50, height: '40%', width: '50%', resizeMode: 'contain', alignSelf: 'center', }}
                                source={Images.baby}
                            /> */}


                            <Image
                                style={{ top: 40, zIndex: 50, height: 300, width: 300, resizeMode: 'contain', alignSelf: 'center' }}
                                source={Images.baby}
                            />

                            {/* <BabyLogin style={{ zIndex: 50, top: 30, alignSelf: 'center', }} /> */}
                            <View style={{ paddingVertical: 35, justifyContent: 'flex-end', backgroundColor: Colors.white, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>

                                {/* <Image
                                    style={{ top: -30, width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center', backgroundColor: 'red' }}
                                    source={Images.logo}
                                /> */}
                                <RLText
                                    text={BaseText.WelcomeMasstor}
                                    style={{
                                        color: Colors.violet,
                                        fontSize: 26,
                                        fontFamily: ENV.mfontFamilyBold,
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 80,
                                        marginTop: 5,
                                        alignSelf: 'center',
                                        textAlign: 'center',
                                    }}
                                />

                                <View style={{ marginTop: 30, flexDirection: 'row', alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 80, justifyContent: 'space-between' }}>
                                    <RLText
                                        text={BaseText.LogSign}
                                        style={{
                                            color: Colors.violet,
                                            fontSize: 14,
                                            fontFamily: ENV.mfontFamilyBold
                                        }}
                                    />

                                    {/* <RLText
                                        text={BaseText.Explore}
                                        style={{
                                            color: Colors.gray,
                                            fontSize: 11,
                                            fontFamily: ENV.mfontFamilyBold
                                        }}
                                        onPress={() => navigation.navigate('Home')}
                                    /> */}
                                </View>
                                <View style={{
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 80,
                                    alignSelf: 'center',

                                    marginVertical: 20

                                }}>
                                    <TextInput

                                        style={{
                                            fontSize: 11,
                                            fontFamily: ENV.mfontFamilyMedium,
                                            paddingLeft: 0,
                                            paddingVertical: 0,
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 60,

                                            borderBottomWidth: 1,
                                            borderBottomColor: Colors.gray1,

                                        }}
                                        ref={inputRef}
                                        keyboardType={'phone-pad'}
                                        placeholder="Enter Your Mobile Number"
                                        placeholderTextColor={Colors.gray1}
                                        onFocus={() => _onFocusMobile()}
                                        maxLength={10}
                                        onChangeText={(value) => _onFocusMobile()}
                                    // value={mobile}
                                    />

                                </View>

                                {/* <View style={{
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 80,
                                    alignSelf: 'center',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 30
                                }}>
                                    <RLText
                                        onPress={() => navigation.navigate('Mobile')}
                                        text={BaseText.Orcontinuewith}
                                        style={{
                                            fontSize: 14, color: Colors.blue,
                                            fontFamily: ENV.mfontFamilyMedium, paddingRight: 10
                                        }}
                                    />
                                    {/* <GoogleLogo /> 

                                    <Image
                                        style={{ width: 14, height: 14, resizeMode: 'contain', }}
                                        source={Images.googleIcon}
                                    />
                                </View> */}
                            </View>
                        </ScrollView>
                    </LinearGradient>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Login);