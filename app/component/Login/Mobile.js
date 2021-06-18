import React, { Fragment, useCallback, useEffect, useState } from "react";
import { View, Text, SafeAreaView, KeyboardAvoidingView, Image, BackHandler, TouchableOpacity, ScrollView, Platform } from "react-native";
import { connect, useDispatch, useSelector } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import Validation from 'utils/BaseValidation';
import { consoleLog } from 'utils/console';
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
import HandMobile from 'assets/svg/handMobile';
import { MobileAuthenticate } from 'action/user';
import LottieView from 'lottie-react-native';
import viewstyle from 'theme/component/ViewStyle';

import { OTP, REQUEST, FEESTRUCTURE, PAYMENT } from 'constants/Enum';
import { useFocusEffect } from "@react-navigation/core";


const Mobile = ({ navigation, props }) => {
    let fieldMobileRef = React.createRef();
    const dispatch = useDispatch(); //Store Redux value using useDispatch

    const [mobile, setMobile] = useState('');
    const [ismobileFail, setIsmobileFail] = useState(false);
    const [load, SetLoad] = useState(false);
    const [showModal, SetShowModal] = useState(false);
    const [progress, SetProgress] = useState(0)
    const [otpStatus, setOtpStatus] = useState(OTP.SENDING);
    //Onpress GoBack Button
    // const backAction = () => {
    //     navigation.goBack(null);
    //     return false;
    // };
    // useEffect(() => {
    //     BackHandler.addEventListener("hardwareBackPress", backAction);
    //     return () =>
    //         BackHandler.removeEventListener("hardwareBackPress", backAction);
    // }, [])

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
    //================================ Start common Function ===========================================

    //OnChange TextInput
    const _onChangeTextField = (value, type) => {
        setMobile(value)
    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }

    const _validateInputFields = () => {
        if (!Validation.phonenumbervalidtion.test(mobile)) {
            return true;
        }
        else {
            return false;
        }
    }

    const _onClickSubmit = () => {
        if (!_validateInputFields()) {
            // navigation.navigate('Otp')
            SetShowModal(true);
            console.log('right');
            _mobileAuthAPI()
        }
        else {
            console.log('wrong');
        }
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
    //================================ API common Function ===========================================
    const _mobileAuthAPI = () => {
        // SetLoad(true)
        const params = {
            mobileNumber: mobile
        }
        // console.log("parms");
        try {
            // SetLoad(false)
            // SetShowModal(true)
            setTimeout(() => {
                SetProgress(89)
            }, 1000)
            // setTimeout(() => {
            //     SetShowModal(false)
            // }, 1600)
            MobileAuthenticate(params, (result) => {
                console.log("Response on Mobile-->", result);
                if (result.success) {
                    // consoleLog("Response On Sucess-->", result.success);
                    dispatch({
                        type: 'Register_Mobile',
                        data: mobile
                    })
                    dispatch({
                        type: 'MobileSend_Otp',
                        data: result.result
                    })
                    setOtpStatus(OTP.SENT);
                    setTimeout(() => {
                        SetShowModal(false)
                        SetProgress(0)
                        navigation.navigate('Otp');
                    }, 2000);
                }
                else {
                    // SetLoad(false)
                    // setOtpStatus(OTP.FAIL);
                    SetShowModal(false)
                    consoleLog("Response Fail on Mobile");
                }
            })
        }
        catch (e) {
            SetLoad(false)
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
                // paymentStatus={PAYMENT.FAIL}
                // isAdmis={false}
                // isAdmisDone={true}
                // schoolName={'K.R. Mangalam School'}
                // schoolProfile={Images.schoolImage}
                // isDeleteAcc={true}
                // isRate={true}
                // rate={1}
                // isSimple={true}
                // onChangeRate={(rating) => {
                //     // console.log(rating)
                // }}
                // modalVisible={showModal}
                // btnLeftPress={() => {
                //     console.log("Left Btn Press");
                //     SetShowModal(false);
                // }}
                // btnRightPress={() => {
                //     console.log("Right Btn Press");
                //     SetShowModal(false);
                // }}
                otpStatus={otpStatus}
                num={mobile == "" ? "9876543210" : mobile}
                modalVisible={showModal}
                progress={progress}
                changePress={() => {
                    console.log("Change");
                    SetShowModal(false);
                }}
                btnLeftPress={() => {
                    console.log("Left Btn Press");
                    SetShowModal(false);
                }}
                btnRightPress={() => {
                    console.log("Right Btn Press");
                    SetShowModal(false);
                }}
            />
        );
    }
    //Render method for otp popup

    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' && 'padding'} >
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={{ flex: 1, }}>
                        {showModal && _renderPopupModal()}
                        {_header()}
                        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={{ flex: 1 }}>
                                <View style={{ alignSelf: 'center', marginBottom: 40 }}>
                                    <RLTextInput
                                        PlainTextInput={true}
                                        placeholder={'Enter your Mobile Number'}
                                        refKey={'mobile'}
                                        fieldRef={fieldMobileRef}
                                        keyboardType="phone-pad"
                                        onEditTextField={(value) => _onChangeTextField(value, 'mobile')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldMobileRef)}
                                        txtInputStyle={{ fontSize: 14, fontFamily: ENV.mpolisfontFamilyRegular, alignSelf: 'center' }}
                                        // textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 65}
                                        maxLength={10}
                                        autoFocus={true}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 80}

                                    // value={}
                                    />
                                </View>

                                <RLButton
                                    SimpleButton={true}
                                    simplebuttonStyle={[buttonStyle.submitBtnStyle, { alignSelf: 'center' }]}
                                    onpress={() => _onClickSubmit()}
                                    simplebuttontextStyle={buttonStyle.submitmBtntxtStyle}
                                    simplebuttontext={BaseText.Submit}
                                />

                                <Text style={{
                                    color: Colors.gray7, fontSize: 13, fontFamily: ENV.mfontFamilySemiBold,
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                    textAlign: 'center',
                                    alignSelf: 'center',
                                    paddingVertical: 35
                                }}>By continue you may receive SMS for verification. {"\n"} Message & datarates may apply</Text>

                            </View>
                            <View style={{ justifyContent: 'flex-end', }}>
                                {/* <Image
                                    style={{ width: 345, height: 341, }}
                                    source={Images.hand}
                                /> */}
                                <HandMobile style={{ alignSelf: 'center' }} />
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
export default connect(select)(Mobile);