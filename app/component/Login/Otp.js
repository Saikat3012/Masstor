import React, { Fragment, useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, BackHandler, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView, Platform } from "react-native";
import { connect, useSelector, useDispatch } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLModal,
} from 'basecomponent';
import Bubbleicon from 'assets/svg/bubbleicon';
import PreviousBlue from 'assets/svg/previousBlue';
import HandOtp from 'assets/svg/handOtp';
import { consoleLog } from 'utils/console';
import { substrString, sliceString } from 'utils/stringFunctions';
import { MobileAuthenticate, GetUserByToken, GetTokenFromUserId } from 'action/user';
import LottieView from 'lottie-react-native';
import viewstyle from 'theme/component/ViewStyle';
import { OTP } from 'constants/Enum';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";
let otp = "";

const Otp = ({ navigation, props }) => {
    let field1Ref = React.createRef();
    let field2Ref = React.createRef();
    let field3Ref = React.createRef();
    let field4Ref = React.createRef();

    const dispatch = useDispatch(); //Store Redux value using useDispatch
    const getmobileValue = useSelector(state => state.user.ReduxRegisterMobile)
    const getOtp = useSelector(state => state.user.ReduxMobileSendOtp);
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const [load, SetLoad] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const [minutes, setMinutes] = useState(1);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showOtpPopup, SetShowOTPPopup] = useState(true);
    const [otpStatus, setOtpStatus] = useState(OTP.DETECTING);
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                return true;
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, []),

    )
    useEffect(() => {
        _getotp() //get Otp
        // _onTimerStart()
        if (timeLeft === 0) {
            // console.log("TIME LEFT IS 0");
            setTimeLeft(0)
        }

        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {

            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a d
    }, [otp1, otp2, otp3, otp4, seconds, timeLeft])

    useEffect(() => {
        if (otp1 != "" && otp2 != "" && otp3 != "" && otp4 != "") {
            setTimeout(() => {
                SetShowOTPPopup(false);
                _onClickSubmit()
            }, 2000)
        }
        // if (showOtpPopup == false) {
        //     console.log("urvi");
        // }
    }, [otp1, otp2, otp3, otp4,])

    //================================ Start common Function ===========================================
    const name = () => {
        console.log("urvi");
        _getotp()
    }
    //Render Loading Animation
    const _renderLoader = () => {
        return (
            <View style={viewstyle.lottieLoadingWrapperStyle}>
                <LottieView
                    source={Images.loadingJson}
                    style={viewstyle.lottieLoadingViewStyle}
                    autoPlay={true}
                />
            </View>
        );
    }
    //OnChange TextInput
    const _onChangeTextField = (value, type, ref, nextref) => {
        switch (type) {
            case '1':
                if (value.length == 1) {
                    console.log("remove");
                    let { current: field } = nextref;
                    field.focus()
                    setOtp1(value)
                } else if (value.length == 0) {
                    setOtp1('')
                }
                break;
            case '2':
                if (value.length == 0) {
                    setOtp2('')
                    console.log("remove");
                    let { current: field } = ref;
                    field.focus()
                } else if (value.length == 1) {
                    let { current: field } = nextref;
                    field.focus()
                    setOtp2(value)
                }
                break;
            case '3':
                if (value.length == 0) {
                    setOtp3('')
                    console.log("remove");
                    let { current: field } = ref;
                    field.focus()
                } else if (value.length == 1) {
                    let { current: field } = nextref;
                    field.focus()
                    setOtp3(value)
                }
                break;
            case '4':
                if (value.length == 0) {
                    setOtp4('')
                    console.log("remove");
                    let { current: field } = ref;
                    field.focus()
                }
                else if (value.length == 1) {
                    setOtp4(value)
                }
                break;

            default:
                break;
        }

    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }

    const _onClickSubmit = () => {
        // navigation.navigate('Location')
        // SetShowOTPPopup(true);
        if (!_validateInputFields()) {
            _mobileAuthAPI()
        }
        else {
            console.log('wrong');
        }
    }

    const _validateInputFields = () => {
        otp = `${otp1}${otp2}${otp3}${otp4}`;
        console.log("submit", otp.length);
        console.log("submit", otp);
        if (otp.length == 4) {
            return false;
        }
        else {
            return true;
        }
    }

    const _getotp = () => {
        console.log("Urvi otp");
        const otpCode = substrString(getOtp, 0, 4)
        const otpCode1 = sliceString(otpCode, 0, 1)
        const otpCode2 = sliceString(otpCode, 1, 2)
        const otpCode3 = sliceString(otpCode, 2, 3)
        const otpCode4 = sliceString(otpCode, 3, 4)
        setOtp1(otpCode1)
        setOtp2(otpCode2)
        setOtp3(otpCode3)
        setOtp4(otpCode4)

    }

    const _onTimerStart = () => {
        const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds)
                setSeconds(seconds - 1)
                // this.setState(({ seconds }) => ({
                //     seconds: seconds - 1
                // }))
            }
            if (seconds === 0) {
                clearInterval(myInterval)
            }

        }, 1000);

    }
    //================================ API common Function ===========================================
    //Otp submit Api Calling
    const _mobileAuthAPI = () => {
        // SetLoad(true)
        const params = {
            mobileNumber: getmobileValue,
            otp: otp,
            rememberClient: true
        }
        consoleLog("Otp Parms-->", params)
        try {
            MobileAuthenticate(params, (result) => {
                console.log("Response on Otp-->", result);
                if (result.success) {
                    // consoleLog("Response On Sucess-->", result.success);
                    // SetLoad(false)
                    dispatch({
                        type: 'Otp_Token',
                        data: "Bearer " + result.result
                    })
                    setOtpStatus(OTP.SUCCESS)
                    SetShowOTPPopup(true)
                    // navigation.navigate('Location');
                    var userToken = "Bearer " + result.result;
                    console.log("user Token from api", userToken);
                    _getUserByTokenAPI(userToken)
                    setTimeout(() => {
                        SetShowOTPPopup(false)
                        navigation.navigate('Location');
                    }, 3000)
                }
                else {
                    // SetLoad(false)
                    setOtpStatus(OTP.FAIL)
                    SetShowOTPPopup(true)
                    consoleLog("Response Fail on Otp");
                }
            })
        }
        catch (e) {
            SetLoad(false)
            console.log(e);
        }
    }

    //Get Login User Detail by Token
    const _getUserByTokenAPI = (userToken) => {
        const params = {
            "token": userToken
        }
        console.log("parms usr on Otp screen", params);
        try {
            GetUserByToken(params, (result) => {
                console.log("Response of user on Otp Screen-->", result);
                if (result.success) {
                    SetLoad(false)
                    var res = result.result;
                    console.log("Login user Id----->", res.userId);
                    AsyncStorage.setItem('LoginUserAsync', JSON.stringify(res))
                    _getTokenFromUserIdAPI(res.userId)
                }
                else {
                    SetLoad(false)
                    consoleLog("Response Fail on UserApi on Otp Screen");
                }
            })
        }
        catch (e) {
            SetLoad(false)
            console.log("Error from here user Otp Screen")
            console.log(e);
        }
    }

    //Get Token from Login after Login Useu User Detail by Token
    const _getTokenFromUserIdAPI = (userId) => {
        const params = {
            UserId: userId
        }
        console.log("parms get Token after Login", params);
        try {
            GetTokenFromUserId(params, (result) => {
                console.log("Response of token  on Otp Screen-->", result);
                if (result.success) {
                    SetLoad(false)
                    var resToken = "Bearer " + result.result;
                    AsyncStorage.setItem('LoginUserAsyncToken', resToken)
                }
                else {
                    SetLoad(false)
                    consoleLog("Response Fail on login token on Otp Screen");
                }
            })
        }
        catch (e) {
            SetLoad(false)
            console.log("Error from here user token Otp Screen")
            console.log(e);
        }
    }
    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            <RLHeader
                isAdmissionHeader
                leftImg={Images.previousArrow}
                // title={BaseText.Applyforaddmission}
                onpressleft={() => navigation.goBack()}
                // showrightImg={true}
                // rightImg={Images.infoBlue}
                roundBackWhite={true}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}
            // backgroundColor={Colors.lightViolet}

            />
        )
    }

    //Render method for otp popup
    const _renderPopupModal = () => {
        return (
            <RLModal
                otpStatus={otpStatus}
                num={getmobileValue == "" ? "9876543210" : getmobileValue}
                modalVisible={showOtpPopup}
                progress={50}
                changePress={() => {
                    console.log("Change");
                    SetShowOTPPopup(false);
                }}
                btnLeftPress={() => {
                    console.log("Left Btn Press");
                    SetShowOTPPopup(false);
                }}
                btnRightPress={() => {
                    console.log("Right Btn Press");
                    SetShowOTPPopup(false);
                }}
            />
        );
    }
    //Render method for otp popup

    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' && 'padding'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={{ flex: 1, }}>
                        {showOtpPopup && _renderPopupModal()}
                        {_header()}
                        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 14, color: Colors.gray7, textAlign: 'center', fontFamily: ENV.mfontFamilySemiBold }}>
                                    {`${'Please enter 4-digit code sent to you \n at'}${'+91 '}${substrString(getmobileValue, 0, 6)}${'XXX'}`}
                                    {/* {`${'Please enter 4-digit code sent to you \n at'} ${'+91 980830XXX'}`} */}
                                </Text>
                                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 80, alignSelf: 'center', marginTop: 25, marginBottom: 45, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLTextInput
                                        PlainTextInput={true}
                                        refKey={'1'}
                                        fieldRef={field1Ref}
                                        onEditTextField={(value) => _onChangeTextField(value, '1', field1Ref, field2Ref)}
                                        onSubmitEditing={() => _onSubmitEditing(field2Ref)}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 13}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 13}
                                        borderRadius={8}
                                        txtInputStyle={{ textAlign: 'center', fontSize: 14, fontFamily: ENV.mfontFamilySemiBold }}
                                        maxLength={1}
                                        keyboardType={'number-pad'}
                                        value={otp1}
                                        editable={false}

                                    />
                                    <RLTextInput
                                        PlainTextInput={true}
                                        refKey={'2'}
                                        fieldRef={field2Ref}
                                        onEditTextField={(value) => _onChangeTextField(value, '2', field1Ref, field3Ref)}
                                        onSubmitEditing={() => _onSubmitEditing(field3Ref)}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 13}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 13}
                                        borderRadius={8}
                                        txtInputStyle={{ textAlign: 'center', fontSize: 14, fontFamily: ENV.mfontFamilySemiBold }}
                                        maxLength={1}
                                        keyboardType={'number-pad'}
                                        value={otp2}
                                        editable={false}
                                    />
                                    <RLTextInput
                                        PlainTextInput={true}
                                        refKey={'3'}
                                        fieldRef={field3Ref}
                                        onEditTextField={(value) => _onChangeTextField(value, '3', field2Ref, field4Ref)}
                                        onSubmitEditing={() => _onSubmitEditing(field4Ref)}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 13}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 13}
                                        borderRadius={8}
                                        txtInputStyle={{ textAlign: 'center', fontSize: 14, fontFamily: ENV.mfontFamilySemiBold }}
                                        maxLength={1}
                                        keyboardType={'number-pad'}
                                        value={otp3}
                                        editable={false}
                                    />
                                    <RLTextInput
                                        PlainTextInput={true}
                                        refKey={'4'}
                                        fieldRef={field4Ref}
                                        onEditTextField={(value) => _onChangeTextField(value, '4', field3Ref)}
                                        onSubmitEditing={() => _onSubmitEditing(field4Ref)}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 13}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 13}
                                        borderRadius={8}
                                        txtInputStyle={{ textAlign: 'center', fontSize: 14, fontFamily: ENV.mfontFamilySemiBold }}
                                        maxLength={1}
                                        keyboardType={'number-pad'}
                                        value={otp4}
                                        editable={false}
                                    />
                                </View>

                                <RLButton
                                    SimpleButton={true}
                                    simplebuttonStyle={[buttonStyle.submitBtnStyle, { alignSelf: 'center' }]}
                                    onpress={() => _onClickSubmit()}
                                    simplebuttontextStyle={buttonStyle.submitmBtntxtStyle}
                                    simplebuttontext={BaseText.Submit}
                                />
                                <RLText
                                    text={`${BaseText.ResendCode}${' 0:'}${timeLeft === 0 ? '00' : timeLeft}${' s'}`}
                                    style={{
                                        color: Colors.violet1, fontSize: 12, fontFamily: ENV.mfontFamilyMedium,
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
                                        textAlign: 'center',
                                        alignSelf: 'center',
                                        paddingVertical: 25
                                    }}
                                />
                            </View>
                            <View style={{ justifyContent: 'flex-end' }}>
                                {/* <Image
                                style={{ width: 345, height: 341, }}
                                source={Images.hand}
                            /> */}
                                <HandOtp style={{ alignSelf: 'center', }} />
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
            {load && _renderLoader()}
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Otp);