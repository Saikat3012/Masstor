import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet, TextInput, Animated, TouchableWithoutFeedback, Easing, } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ENV from 'env/index';
import { OTP, REQUEST, FEESTRUCTURE, PAYMENT } from 'constants/Enum';
import {
    RLButton
} from "basecomponent";

const RLModal = (props) => {

    const {
        otpStatus,
        num,
        email,
        modalVisible,
        progress,
        changePress,
        btnLeftPress,
        btnRightPress,
        isLogout,
        requestStatus,
        feeStatus,
        isMobile,
        onChangeInput,
        isKYC,
        paymentStatus,
        isAdmis,
        isAdmisDone,
        schoolName,
        schoolProfile,
        isDeleteAcc,
        isRate,
        rate,
        onChangeRate,
        isSimple,
    } = props;

    const [animation, setAnimation] = useState(new Animated.Value(1));
    const [stars, setStars] = useState([]);
    const [rating, setRating] = useState(1);

    //Set rating count
    const rates = star => {
        setRating(star)
        onChangeRate(star);
    }
    //Set rating count

    //General Use Effect
    useEffect(() => {
        updateStars();
    }, []);
    //General Use Effect

    //Use Effect for rating count update
    useEffect(() => {
        updateStars();
        animate();
    }, [rating])
    //Use Effect for rating count update

    //Method for handling animation
    const animate = () => {
        Animated.timing(animation, {
            toValue: 2,
            duration: 400,
            easing: Easing.ease,
            useNativeDriver: true
        }).start(() => {
            animation.setValue(1);
        });
    }
    //Method for handling animation

    //Method to update stars state variable/stars in UI
    const updateStars = () => {
        var animateScale = animation.interpolate({
            inputRange: [1, 1.5, 2],
            outputRange: [1, 1.4, 1]
        });

        var animationStyle = {
            transform: [{ scale: animateScale, }]
        }

        var _stars = [];
        // console.log("------------------------------------------");
        for (let i = 1; i <= 5; i++) {
            var filled = i <= rating;
            // console.log(i,this.state.rating);
            _stars.push(
                <TouchableWithoutFeedback key={i}
                    activeOpacity={0}
                    onPress={() => {
                        // console.log(i,this.state.rating);
                        rates(i);
                    }}
                >
                    <Animated.View style={i <= rating ? animationStyle : ""}>
                        {/* <Star filled={i <= this.state.rating} /> */}
                        {(!isSimple && filled && i == 1) && <Image source={Images.rate1Image} style={styles.starStyle} />}
                        {(!isSimple && filled && i == 2) && <Image source={Images.rate2Image} style={styles.starStyle} />}
                        {(!isSimple && filled && i == 3) && <Image source={Images.rate3Image} style={styles.starStyle} />}
                        {(!isSimple && filled && i == 4) && <Image source={Images.rate4Image} style={styles.starStyle} />}
                        {(!isSimple && filled && i == 5) && <Image source={Images.rate5Image} style={styles.starStyle} />}
                        {(!filled) && <Image source={Images.rateEmptyImage} style={styles.starStyle} />}
                        {(filled && isSimple) && <Image source={Images.rateFilledImage} style={styles.starStyle} />}
                    </Animated.View>
                </TouchableWithoutFeedback>);
        }
        // console.log("------------------------------------------");
        setStars(_stars);
    }
    //Method to update stars state variable/stars in UI

    //Render method for sending otp
    const _renderOTPSending = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <AnimatedCircularProgress
                        size={100}
                        width={5}
                        fill={progress}
                        tintColor={Colors.violet}
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor={Colors.gray7}
                        style={{ marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }}
                    />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupOtpSndngTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupOtpSndngMsg + " " + num + ". "}
                        <Text style={styles.popupTextBtnText} onPress={() => { changePress() }}>
                            {BaseText.popupOtpSndngBtnText}
                        </Text>
                    </Text>
                </View>
            </View>
        );
    }
    //Render method for sending otp

    //Render method for sent otp
    const _renderOTPSent = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.otpSentImage} style={{ height: 100, width: 100, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupOtpSentTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupOtpSentMsg + " " + num + ". "}
                        <Text style={styles.popupTextBtnText} onPress={() => { changePress() }}>
                            {BaseText.popupOtpSentBtnText}
                        </Text>
                    </Text>
                </View>
            </View>
        );
    }
    //Render method for sent otp

    //Render method for detecting otp
    const _renderOTPDetecting = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.otpFailImage} style={{ height: 100, width: 100, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupOtpDetectTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupOtpDetectMsg + " " + num + ". "}
                        <Text style={styles.popupTextBtnText} onPress={() => { changePress() }}>
                            {BaseText.popupOtpDetectBtn1Text}
                        </Text>
                    </Text>
                    <RLButton
                        SimpleButton={true}
                        simplebuttontext={BaseText.popupOtpDetectBtn2Text}
                        simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                        simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle, { marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, }]}
                        onpress={() => {
                            btnLeftPress()
                        }}
                    />
                </View>
            </View>
        );
    }
    //Render method for detecting otp

    //Render method for fail otp
    const _renderOTPFail = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.otpFailImage} style={{ height: 100, width: 100, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupOtpFailTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupOtpFailMsg}
                    </Text>
                    <View style={{ marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '70%', }}>
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupOtpFailBtn1Text}
                            simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle,]}
                            onpress={() => {
                                btnLeftPress()
                            }}
                        />
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupOtpFailBtn2Text}
                            simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle,]}
                            onpress={() => {
                                btnRightPress()
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
    //Render method for fail otp

    //Render method for success otp
    const _renderOTPSucces = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.otpVerifyImage} style={{ height: 100, width: 100, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupOtpSuccessTitle}
                    </Text>
                </View>
            </View>
        );
    }
    //Render method for success otp

    //Render method for logout
    const _renderLogout = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.logoutImage} style={{ height: 100, width: 100, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupLogoutTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupLogoutMsg}
                    </Text>
                    <View style={{ marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '45%', }}>
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupLogoutBtn1Text}
                            simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle, { paddingHorizontal: 17, }]}
                            onpress={() => {
                                btnLeftPress()
                            }}
                        />
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupLogoutBtn2Text}
                            simplebuttontextStyle={[buttonStyle.simpleButtonPopupTextStyle, { color: Colors.white, }]}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle, { paddingHorizontal: 17, backgroundColor: Colors.pink, borderWidth: 0, }]}
                            onpress={() => {
                                btnRightPress()
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
    //Render method for logout

    //Render method for requesting free access
    const _renderRequestSending = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <AnimatedCircularProgress
                        size={100}
                        width={5}
                        fill={progress}
                        tintColor={Colors.violet}
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor={Colors.gray7}
                        style={{ marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }}
                    />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupAccessReqTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupAccessReqMsg}
                    </Text>
                </View>
            </View>
        );
    }
    //Render method for requesting free access

    //Render method for free access request sent
    const _renderRequestSent = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.otpSentImage} style={{ height: 100, width: 100, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupAccessSubTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupAccessSubMsg}
                    </Text>
                </View>
            </View>
        );
    }
    //Render method for free access request sent

    //Render method for sending fee structure
    const _renderFeeStructureMSending = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupFeeStrctTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupFeeStrctMsg}
                    </Text>
                    <TextInput
                        placeholder={BaseText.popupFeeStrctMPH}
                        placeholderTextColor={Colors.gray11Opa78}
                        style={{
                            backgroundColor: Colors.gray6Opa40,
                            borderColor: Colors.violetOpa40,
                            borderWidth: 1,
                            borderRadius: 9,
                            color: Colors.violet,
                            marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2,
                            width: BaseStyle.DEVICE_WIDTH / 100 * 70,
                            height: BaseStyle.DEVICE_HEIGHT / 100 * 6,
                        }}
                        onChangeText={(text) => {
                            onChangeInput(text);
                        }}
                        keyboardType={'phone-pad'}
                    />
                    <RLButton
                        SimpleButton={true}
                        simplebuttontext={BaseText.popupFeeStrctBtnText}
                        simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                        simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle,]}
                        onpress={() => {
                            btnLeftPress()
                        }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={[styles.popupMsgText, { fontSize: 28, paddingBottom: BaseStyle.DEVICE_HEIGHT / 100 * 2.3, }]}>
                            {'.'}
                        </Text>
                        <Text style={[styles.popupMsgText,]}>
                            {BaseText.popupFeeStrctTOC}
                        </Text>
                        <Text style={[styles.popupMsgText, { fontSize: 28, paddingBottom: BaseStyle.DEVICE_HEIGHT / 100 * 2.3, }]}>
                            {' .'}
                        </Text>
                        <Text style={[styles.popupMsgText,]}>
                            {BaseText.popupFeeStrctPP}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
    //Render method for sending fee structure

    //Render method for sending fee structure
    const _renderFeeStructureESending = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupFeeStrctTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupFeeStrctMsg1}
                    </Text>
                    <TextInput
                        placeholder={BaseText.popupFeeStrctEPH}
                        placeholderTextColor={Colors.gray11Opa78}
                        style={{
                            backgroundColor: Colors.gray6Opa40,
                            borderColor: Colors.violetOpa40,
                            borderWidth: 1,
                            borderRadius: 9,
                            color: Colors.violet,
                            marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2,
                            width: BaseStyle.DEVICE_WIDTH / 100 * 70,
                            height: BaseStyle.DEVICE_HEIGHT / 100 * 6,
                        }}
                        onChangeText={(text) => {
                            onChangeInput(text);
                        }}
                        keyboardType={'email-address'}
                    />
                    <RLButton
                        SimpleButton={true}
                        // simplebuttontext={BaseText.popupFeeStrctBtnText}
                        simplebuttontext={BaseText.popupFeeStrctBtnTextSend}
                        simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                        simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle,]}
                        onpress={() => {
                            btnLeftPress()
                        }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={[styles.popupMsgText, { fontSize: 28, paddingBottom: BaseStyle.DEVICE_HEIGHT / 100 * 2.3, }]}>
                            {'.'}
                        </Text>
                        <Text style={[styles.popupMsgText,]}>
                            {BaseText.popupFeeStrctTOC}
                        </Text>
                        <Text style={[styles.popupMsgText, { fontSize: 28, paddingBottom: BaseStyle.DEVICE_HEIGHT / 100 * 2.3, }]}>
                            {' .'}
                        </Text>
                        <Text style={[styles.popupMsgText,]}>
                            {BaseText.popupFeeStrctPP}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
    //Render method for sending fee structure

    //Render method for sent fee structure
    const _renderFeeStructureSent = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.otpSentImage} style={{ height: 100, width: 100, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupFeeStrctSentTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupFeeStrctSentMsg + " " + (isMobile ? num : email) + ". "}
                        <Text style={styles.popupTextBtnText} onPress={() => { changePress() }}>
                            {BaseText.popupFeeStrctBtnText}
                        </Text>
                    </Text>
                </View>
            </View>
        );
    }
    //Render method for sent structure

    //Render method for KYC
    const _renderKYC = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.otpSentImage} style={{ height: 100, width: 100, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupKYCTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupKYCMsg}
                    </Text>
                    <View style={{ marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '70%', }}>
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupKYCBtn1Text}
                            simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle,]}
                            onpress={() => {
                                btnLeftPress()
                            }}
                        />
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupKYCBtn2Text}
                            simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle,]}
                            onpress={() => {
                                btnRightPress()
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
    //Render method for KYC

    //Render method for Payment Success
    const _renderPaySuccess = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.paymentSuccessImage} style={{ height: 100, width: 85, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupPaySuccTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupPaySuccMsg}
                    </Text>
                    <View style={{ marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, }}>
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupPaySuccBtnText}
                            simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle,]}
                            onpress={() => {
                                btnLeftPress()
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
    //Render method for Payment Success

    //Render method for Payment Fail
    const _renderPayFail = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.paymentFailImage} style={{ height: 100, width: 100, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupPayFailTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupPayFailMsg}
                    </Text>
                    <View style={{ marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, }}>
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupPayFailBtnText}
                            simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle,]}
                            onpress={() => {
                                btnLeftPress()
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
    //Render method for Payment Fail

    //Render method for Admission Done
    const _renderAdmis = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.paymentSuccessImage} style={{ height: 100, width: 85, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupAdmiSucTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, }]}>
                        {BaseText.popupAdmiSucMsg}
                    </Text>
                </View>
            </View>
        );
    }
    //Render method for Admission Done

    //Render method for Admission Done
    const _renderAdmisDone = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={schoolProfile} style={{ height: 100, width: 100, borderRadius: 500, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={[styles.popupTitleText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 5, }]}>
                        {BaseText.popupAdmiDoneTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, color: Colors.violet, }]}>
                        {schoolName}
                    </Text>
                    <View style={{ marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, }}>
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupAdmiDoneBtnText}
                            simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle, { paddingHorizontal: 25, }]}
                            onpress={() => {
                                btnLeftPress()
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
    //Render method for Admission Done

    //Render method for Delete Account
    const _renderDeleteAccount = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={Images.deleteAccountImage} style={{ height: 80, width: 60, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                    <Text style={styles.popupTitleText}>
                        {BaseText.popupDeleteAccTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, }]}>
                        {BaseText.popupDeleteAccMsg}
                    </Text>
                    <View style={{ marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '45%', }}>
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupDeleteAccBtn1Text}
                            simplebuttontextStyle={buttonStyle.simpleButtonPopupTextStyle}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle, { paddingHorizontal: 17, }]}
                            onpress={() => {
                                btnLeftPress()
                            }}
                        />
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupDeleteAccBtn2Text}
                            simplebuttontextStyle={[buttonStyle.simpleButtonPopupTextStyle, { color: Colors.white, }]}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle, { paddingHorizontal: 17, backgroundColor: Colors.pink, borderWidth: 0, }]}
                            onpress={() => {
                                btnRightPress()
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
    //Render method for Delete Account

    //Render method for Rate
    const _renderRating = () => {
        return (
            <View
                style={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 45, width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 25,
                    alignSelf: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Image source={Images.popupBG} style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 70, justifyContent: 'space-between', marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }}>
                        {stars}
                    </View>
                    <Text style={[styles.popupTitleText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 5, }]}>
                        {BaseText.popupRateTitle}
                    </Text>
                    <Text style={[styles.popupMsgText, { marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 16, marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 1, }]}>
                        {BaseText.popupRateMsg}
                    </Text>
                    <View style={{ marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, }}>
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.popupRateMsgBtn1Text}
                            simplebuttontextStyle={[buttonStyle.simpleButtonPopupTextStyle, { color: Colors.white, }]}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle, { paddingHorizontal: 17, backgroundColor: Colors.pink, borderWidth: 0, }]}
                            onpress={() => {
                                btnRightPress()
                            }}
                        />
                    </View>
                    <Text style={[styles.popupMsgText, { marginTop: BaseStyle.DEVICE_WIDTH / 100 * 1, fontSize: 8, fontFamily: ENV.mfontFamilyRegular }]}>
                        {BaseText.popupRateMsgBtn2Text}
                    </Text>
                </View>
            </View>
        );
    }
    //Render method for Rate

    return (
        <View style={{
            height: BaseStyle.DEVICE_HEIGHT, width: BaseStyle.DEVICE_WIDTH, backgroundColor: '#00000080', position: 'absolute', zIndex: 10, justifyContent: "center",
            alignItems: "center",
        }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                {(otpStatus == OTP.SENDING) && _renderOTPSending()}
                {(otpStatus == OTP.SENT) && _renderOTPSent()}
                {(otpStatus == OTP.DETECTING) && _renderOTPDetecting()}
                {(otpStatus == OTP.FAIL) && _renderOTPFail()}
                {(otpStatus == OTP.SUCCESS) && _renderOTPSucces()}
                {isLogout && _renderLogout()}
                {requestStatus == REQUEST.SENDING && _renderRequestSending()}
                {requestStatus == REQUEST.SENT && _renderRequestSent()}
                {feeStatus == FEESTRUCTURE.SENDING && isMobile && _renderFeeStructureMSending()}
                {feeStatus == FEESTRUCTURE.SENDING && !isMobile && _renderFeeStructureESending()}
                {feeStatus == FEESTRUCTURE.SENT && _renderFeeStructureSent()}
                {isKYC && _renderKYC()}
                {paymentStatus == PAYMENT.SUCCESS && _renderPaySuccess()}
                {paymentStatus == PAYMENT.FAIL && _renderPayFail()}
                {isAdmis && _renderAdmis()}
                {isAdmisDone && _renderAdmisDone()}
                {isDeleteAcc && _renderDeleteAccount()}
                {isRate && _renderRating()}
            </Modal>
        </View>
    );
};
export default RLModal;

const styles = StyleSheet.create({
    popupTitleText: {
        fontFamily: ENV.mfontFamilyBold,
        textAlign: 'center',
        fontSize: 21,
        color: Colors.violet,
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 1,
        marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 10,
    },
    popupMsgText: {
        fontFamily: ENV.mfontFamilyMedium,
        textAlign: 'center',
        fontSize: 14,
        color: Colors.gray7,
    },
    popupTextBtnText: {
        fontFamily: ENV.mfontFamilyMedium,
        textAlign: 'center',
        fontSize: 9,
        color: Colors.violet,
    },
    starStyle: {
        height: BaseStyle.DEVICE_WIDTH / 100 * 10,
        width: BaseStyle.DEVICE_WIDTH / 100 * 10.6,
    },
});