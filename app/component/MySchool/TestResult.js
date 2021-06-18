import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import { connect, useSelector } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import { RESULTTYPE } from 'constants/Enum';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';
import Tooltip from 'react-native-walkthrough-tooltip';

import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLSchoolInfoList,
} from 'basecomponent';

import RedInfoIcon from 'assets/svg/redinfoicon.js';
import YellowInfoIcon from 'assets/svg/yellowinfoicon.js';
import GreenInfoIcon from 'assets/svg/greeninfoicon.js';
import EntranceTestResultIcon from 'assets/svg/entrancetestresulticon.js';

const TestResult = ({ navigation, props }) => {
    const [status, SetStatus] = useState(RESULTTYPE.FAIL); //FAIL, PENDING, PASS
    const [showResult, SetShowResult] = useState(false);
    const [isshowToolTip, SetIsShowToolTip] = useState(false);
    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================

    //================================ Start common componenet =========================================== 

    //Header Render Method
    const _header = () => {
        return (
            <RLHeader
                isRadiousHeader
                // leftImg={Images.roundBack}
                title={BaseText.MySchool}
                onpressleft={() => navigation.goBack()}
                // rightImg={Images.notificationWhite}
                roundBackWhite={true}
                notificationWhite={true}
                onpressright={() => {
                    if (status == RESULTTYPE.FAIL) {
                        SetStatus(RESULTTYPE.PENDING);
                    }
                    else if (status == RESULTTYPE.PENDING) {
                        SetStatus(RESULTTYPE.PASS);
                    }
                    else if (status == RESULTTYPE.PASS) {
                        SetStatus(RESULTTYPE.FAIL);
                    }
                }}
            />
        )
    }
    //Header Render Method

    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={{ flex: 1, }}>
                    {_header()}
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                        <View style={styles.titleWrapper}>
                            <View>
                                <EntranceTestResultIcon />
                            </View>
                            <View>
                                <RLText
                                    text={BaseText.failTestTitle}
                                    style={{
                                        fontFamily: ENV.mfontFamilyBold,
                                        color: Colors.violet,
                                        fontSize: 17,
                                        marginLeft: 10,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 10, }}>
                            <RLSchoolInfoList
                                isTestResult={true}
                                status={status}
                                backgroundImg={Images.school1}
                                schoolname={'K.R. Mangalam World School'}
                                schoollocation={'Noida, UP'}
                                standard={'Std 4th  to 10th'}
                                fees={'Rs- 500-10000 '}
                                onPressResultButton={() => {
                                    SetShowResult(true);
                                }}
                            />
                        </View>
                        <View style={styles.noteWrapper}>
                            <Tooltip
                                contentStyle={{ width: BaseStyle.DEVICE_WIDTH / 100 * 86, padding: 15, borderRadius: 5, backgroundColor: status == RESULTTYPE.FAIL ? Colors.red : status == RESULTTYPE.PENDING ? Colors.yellow : Colors.green }}
                                animated={true}
                                // topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                                // arrowSize={{ width: 20, height: 18, }}
                                backgroundColor="rgba(0,0,0,0.1)"
                                isVisible={isshowToolTip}
                                content={
                                    <TouchableOpacity
                                        onPress={() => {
                                            SetIsShowToolTip(false);
                                        }}
                                        activeOpacity={1}
                                    >
                                        <RLText
                                            text={'Lorem ipsum dolor sit amet, consectetueradipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit'}
                                            style={{
                                                fontSize: 10,
                                                color: Colors.white,
                                                fontFamily: ENV.mfontFamilyRegular
                                            }}
                                        />
                                    </TouchableOpacity>
                                }
                                placement={'bottom'}
                                onClose={() => { }}
                                showChildInTooltip={false}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        SetIsShowToolTip(!isshowToolTip);
                                    }}
                                >
                                    {status == RESULTTYPE.FAIL ?
                                        <RedInfoIcon height={13} width={13} />
                                        : status == RESULTTYPE.PENDING ?
                                            <YellowInfoIcon height={13} width={13} />
                                            :
                                            <GreenInfoIcon height={13} width={13} />
                                    }
                                </TouchableOpacity>
                            </Tooltip>
                            <View>
                                <RLText
                                    text={status == RESULTTYPE.FAIL ? BaseText.failTestNote : status == RESULTTYPE.PENDING ? BaseText.pendTestNote : BaseText.successTestNote}
                                    style={{
                                        fontFamily: ENV.mfontFamilyBold,
                                        color: Colors.violet,
                                        fontSize: 11,
                                        marginLeft: 10,
                                    }}
                                />
                            </View>
                        </View>
                        {(status == RESULTTYPE.FAIL || status == RESULTTYPE.PASS) &&
                            <RLButton
                                SimpleButton={true}
                                simplebuttontext={status == RESULTTYPE.FAIL ? BaseText.failTestBtnText : BaseText.successTestBtnText}
                                simplebuttontextStyle={buttonStyle.simpleButtonTextStyle}
                                simplebuttonStyle={[buttonStyle.simpleButtonStyle, { marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 7, }]}
                                onpress={() => {
                                    // console.log("Simple Button Press--");
                                    // navigation.navigate("AdmissionTest");
                                }}
                            />
                        }
                    </ScrollView>
                </View>
                {showResult &&
                    <View style={[styles.overlay,]}>
                        <View style={{ justifyContent: 'center', flex: 1, }}>
                            <LinearGradient colors={[Colors.violet9, Colors.violet8]} style={styles.linearGradient}>
                                <View style={styles.linearGradientOutline}>
                                    <View>
                                        <Image source={status == RESULTTYPE.FAIL ? Images.bulbFailImage : status == RESULTTYPE.PENDING ? Images.bulbPendingImage : Images.bulbSuccessImage} style={styles.imageStyle} />
                                    </View>
                                    <RLText
                                        text={status == RESULTTYPE.FAIL ? BaseText.testFailTitle : status == RESULTTYPE.PENDING ? BaseText.testPendTitle : BaseText.testSuccessTitle}
                                        style={{
                                            color: Colors.white,
                                            fontFamily: ENV.mfontFamilyBold,
                                            textAlign: 'center',
                                            fontSize: 23,
                                            marginTop: BaseStyle.DEVICE_WIDTH / 100 * 5,
                                        }}
                                    />
                                    <RLText
                                        text={status == RESULTTYPE.FAIL ? BaseText.testFailNote : status == RESULTTYPE.PENDING ? BaseText.testPendNote : BaseText.testSuccessNote}
                                        style={{
                                            color: Colors.white,
                                            fontFamily: ENV.mfontFamilyMedium,
                                            textAlign: 'center',
                                            fontSize: 11,
                                            marginTop: BaseStyle.DEVICE_WIDTH / 100 * 2,
                                            marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 20,
                                        }}
                                    />
                                    <RLButton
                                        SimpleButton={true}
                                        simplebuttontext={status == RESULTTYPE.FAIL ? BaseText.testFailBtnText : status == RESULTTYPE.PENDING ? BaseText.testPendBtnText : BaseText.testSuccessBtnText}
                                        simplebuttontextStyle={buttonStyle.simpleButtonResultTextStyle}
                                        simplebuttonStyle={[buttonStyle.simpleButtonResultStyle, { marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 4, }]}
                                        onpress={() => {
                                            SetShowResult(false);
                                        }}
                                    />
                                </View>
                            </LinearGradient>
                        </View>
                    </View>
                }
            </SafeAreaView>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    noteWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        width: BaseStyle.DEVICE_WIDTH / 100 * 90,
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2,
        backgroundColor: Colors.lightPink,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignSelf: 'center',
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: BaseStyle.DEVICE_WIDTH / 100 * 90,
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2,
        alignSelf: 'center',
        marginTop: 30,
    },
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: Colors.white1Opa50,
        width: BaseStyle.DEVICE_WIDTH,
        height: BaseStyle.DEVICE_HEIGHT,
    },
    linearGradient: {
        borderRadius: 16,
        height: BaseStyle.DEVICE_HEIGHT / 100 * 65,
    },
    linearGradientOutline: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.white,
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    imageStyle: {
        height: 150,
        width: 130,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});

const select = (store) => {
    return store;
}
export default connect(select)(TestResult);