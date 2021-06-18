import React, { Fragment, useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet, StatusBar, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, Platform } from "react-native";
import { connect, useSelector } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import { REQUEST, } from 'constants/Enum';

import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLRoundList,
    RLSchoolInfoList,
    RLProfileSettingList,
    RLModal,
} from 'basecomponent';



const MySchool = ({ navigation, props }) => {
    const SchoolInfoDataList = [
        {
            id: 1,
            schoolimage: Images.school1,
            schoolname: 'K.R. Mangalam World School',
            schoollocation: 'Noida, UP', 
            standard: 'Std 4th  to 10th',
            fees: 'Rs- 500-10000 ',
            btnImg: Images.VerifyBlue
        },
        {
            id: 2,
            schoolimage: Images.school2,
            schoolname: 'Delhi Public School (DPS)',
            schoollocation: 'Delhi',
            standard: 'Std 1st  to 10th',
            fees: 'Rs- 500-10000 ',
            btnImg: Images.VerifyBlue
        },
    ]
    const [explorSchool, setExplorSchool] = useState(false) //Select School Type
    const [showRequestModal, SetShowRequestModal] = useState(false)
    const [requestStatus, setRequeststatus] = useState(REQUEST.SENDING);
    const [progress, setProgress] = useState(0);
    const [btnTitle, setBtnTitle] = useState(BaseText.requestFreeAccess)
    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    const _onclickBtn = (parms) => {
        switch (parms) {
            case 'explore':
                console.log("my expolore");
                // this.setState({ schoolStatus: true })
                // this.setState({ schoolStatus: !this.state.schoolStatus })
                setExplorSchool(!explorSchool)
                break;
            // case 'hi':
            //   console.log("my ");
            //   break;
            default:
                break;
        }
    }
    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            <RLHeader
                isRadiousHeader
                leftImg={Images.previousArrowWhite}
                title={BaseText.MySchool}
                onpressleft={() => navigation.goBack()}
                rightImg={Images.notificationWhite}
            // roundBackWhite={true}
            // notificationWhite={true}

            />
        )
    }

    //Render method for free access request popup
    const _renderPopupModal = () => {
        return (
            <RLModal
                requestStatus={requestStatus}
                modalVisible={showRequestModal}
                progress={progress}
                btnLeftPress={() => {
                    console.log("Left Btn Press");
                    SetShowRequestModal(false);
                }}
                btnRightPress={() => {
                    console.log("Right Btn Press");
                    SetShowRequestModal(false);
                }}
            />
        );
    }
    //Render method for free access request popup

    //Image Logo
    const _renderLogo = () => {
        // if (explorSchool == true) {
        //     return (
        //         <View style={{
        //             alignSelf: 'center',
        //             marginTop: 90,
        //             marginBottom: 20,
        //             backgroundColor: 'red'
        //         }}>
        //             <MySchoolPink />
        //         </View>
        //     )
        // }
        // else {
        //     return (
        //         <MySchoolBlue />
        //     )
        // }
        return (

            <Image
                source={explorSchool ? Images.mySchoolPink : Images.mySchoolBlue}
                style={{
                    height: 205,
                    width: 285,
                    alignSelf: 'center',
                    marginTop: 90,
                    marginBottom: 20
                }}
            />

        )
    }

    //ExplorView
    const _renderExploreView = () => {
        return (
            <View>
                <Text style={{ fontSize: 11, fontFamily: ENV.mfontFamilySemiBold, color: Colors.blue1, alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 90, marginVertical: 30 }}>
                    {BaseText.emptySelectedSchoolTitle}
                </Text>

                <View
                    style={{
                        height: 185,
                        // marginTop: hp(5),
                        marginBottom: 70,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                        alignSelf: 'center',
                        borderRadius: 17,
                        backgroundColor: Colors.white,
                        shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        elevation: 7,
                    }}>
                    <RLButton
                        SimpleButton={true}
                        simplebuttonStyle={[buttonStyle.explorSchoolBtnStyle, { alignSelf: 'center', }]}
                        onpress={() => _onclickBtn('explore')}
                        simplebuttontextStyle={buttonStyle.explorSchoolBtntxtStyle}
                        simplebuttontext={BaseText.ExploreSchools}
                    />
                </View>
            </View >
        )
    }

    //Check Status View
    const _renderCheckStatusView = () => {
        return (
            <View style={{ marginVertical: 30, justifyContent: 'space-between', flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', }}>
                <Text numberOfLines={1} style={{ fontSize: 11, fontFamily: ENV.mfontFamilySemiBold, color: Colors.blue1, alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 50, }}>
                    You enquired 2 School yet.
            </Text>
                {/* <TouchableOpacity
                    style={{ backgroundColor: Colors.violet, borderRadius: 30, paddingVertical: 10, paddingHorizontal: 25 }}
                >
                    <Text style={{ color: Colors.white, fontSize: 14, fontFamily: ENV.mfontFamilyMedium }}>
                        Check Status
          </Text>
                </TouchableOpacity> */}
                <RLButton
                    SimpleButton={true}
                    simplebuttonStyle={[buttonStyle.checkStatusBtnStyle, { alignSelf: 'center', }]}
                    // onpress={() => _onclickBtn('explore')}
                    simplebuttontextStyle={{ color: Colors.white, fontSize: 10, fontFamily: ENV.mfontFamilyMedium }}
                    simplebuttontext={BaseText.CheckStatus}
                />
            </View>
        )
    }

    //School Info List
    const _renderSchoolInfoItem = ({ item, index }) => {
        return (
            <RLSchoolInfoList
                IspendingSchoolInfo={true}
                backgroundImg={item.schoolimage}
                schoolname={item.schoolname}
                schoollocation={item.schoollocation}
                standard={item.standard}
                fees={item.fees}
                marginLeft={index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 5 : BaseStyle.DEVICE_WIDTH / 100 * 0}
                schoolLikeBtnImg={item.btnImg}
            />
        )
    }


    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={{ flex: 1, }}>
                    {showRequestModal && _renderPopupModal()}
                    {_header()}
                    <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1, }}>
                        <RLText
                            text={BaseText.kycBenefits}
                            style={{
                                fontSize: 20,
                                color: Colors.violet,
                                fontFamily: ENV.mfontFamilyBold,
                                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                alignSelf: 'center',
                                // backgroundColor: 'red',
                                textAlign: 'center',
                                paddingBottom: 15,
                                paddingTop: 20
                            }}
                        />
                        <Image
                            source={Images.tlLineImage}
                            style={{
                                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                height: 150,
                                resizeMode: 'contain',
                                alignSelf: 'center',
                            }}
                        />

                        <Text style={{ paddingTop: 10, lineHeight: 20, fontFamily: ENV.mpolisfontFamilyMedium, fontSize: 14, color: Colors.gray7, width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', textAlign: 'center' }}>{'Fill our'}
                            <Text style={{ fontFamily: ENV.mpolisfontFamilyBold }}>{' Single KYC Form'}</Text>
                            <Text style={{ fontFamily: ENV.mpolisfontFamilyMedium }}>{' to find out if you are eligible for'}</Text>
                            <Text style={{ fontFamily: ENV.mpolisfontFamilyBold }}>{' Entrance Test'}</Text>
                            <Text style={{ fontFamily: ENV.mpolisfontFamilyMedium }}>{' or'}</Text>
                            <Text style={{ fontFamily: ENV.mpolisfontFamilyBold }}>{' Admission.'}</Text>
                        </Text>
                        <ImageBackground
                            style={{
                                height: 114,
                                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                alignSelf: 'center',
                                // backgroundColor: Colors.white,
                                backgroundColor: Colors.violet,
                                borderRadius: 15,
                                shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 7,
                                marginVertical: 20
                            }}
                            imageStyle={{
                                borderRadius: 15,

                            }}

                            source={Images.banner4}
                        >
                            <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 85, alignSelf: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', }}>
                                    <Image source={Images.lightBulbImage} style={{ height: 7, width: 7, resizeMode: 'contain' }} />
                                    <RLText
                                        text={BaseText.hiwText}
                                        style={{
                                            fontSize: 12,
                                            fontFamily: ENV.mfontFamilyRegular,
                                            color: Colors.white,
                                            marginLeft: 5,
                                            paddingVertical: 5
                                        }}
                                    />
                                </View>
                                <RLText
                                    text={'Single KYC Form'}
                                    style={{
                                        fontSize: 16,
                                        fontFamily: ENV.mfontFamilyBold,
                                        color: Colors.white,
                                        alignSelf: 'flex-end',
                                        paddingVertical: 5
                                    }}
                                />
                                <RLText
                                    text={`${'Apply for hassle free admission \n process by simply filling one Form.'}`}
                                    style={{
                                        fontSize: 10,
                                        fontFamily: ENV.mfontFamilyMedium,
                                        color: Colors.white,
                                        alignSelf: 'flex-end',
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
                                        textAlign: 'right',
                                        paddingVertical: 5
                                    }}
                                />

                            </View>
                        </ImageBackground>
                        <RLText
                            text={BaseText.requestoffernow}
                            style={{
                                fontSize: 14,
                                color: Colors.gray7,
                                fontFamily: ENV.mpolisfontFamilyMedium,
                                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                alignSelf: 'center',
                                // backgroundColor: 'red',
                                textAlign: 'center',
                            }}
                        />

                        <RLButton
                            SimpleButton={true}
                            simplebuttonStyle={{ marginVertical: 10, alignSelf: 'center', backgroundColor: Colors.violet, borderRadius: 18, height: 36, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 12 }}
                            onpress={() => {
                                SetShowRequestModal(true)
                                setTimeout(() => {
                                    setProgress(89);
                                    setTimeout(() => {
                                        setRequeststatus(REQUEST.SENT);
                                        setTimeout(() => {
                                            SetShowRequestModal(false)
                                            setBtnTitle(BaseText.Requested)
                                        }, 3000);
                                    }, 2000)
                                }, 1000)
                            }}
                            simplebuttontextStyle={{ color: Colors.white, fontSize: 14, fontFamily: ENV.mfontFamilyMedium, }}
                            simplebuttontext={btnTitle}
                        />

                        <View style={{ alignSelf: 'center', flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, justifyContent: 'center' }}>
                            <RLText
                                text={`${'Rs. 199 / 1 School'}`}
                                style={{
                                    fontSize: 12,
                                    color: Colors.violet,
                                    fontFamily: ENV.mfontFamilyMedium,
                                    alignSelf: 'center',
                                    // backgroundColor: 'red',
                                    // textAlign: 'center',
                                    textDecorationLine: 'line-through',
                                    textDecorationStyle: 'solid',
                                    paddingRight: 5,
                                    opacity: 0.7
                                }}
                            />
                            <RLText
                                text={`${'('}`}
                                style={{
                                    fontSize: 25,
                                    color: Colors.pink,
                                    fontFamily: ENV.mfontFamilyMedium,
                                    alignSelf: 'center',
                                    // backgroundColor: 'red',
                                    // textAlign: 'center',

                                    paddingRight: 5,

                                }}
                            />

                            <RLText
                                text={`${'100% OFF \n Limited Time Offers'}`}
                                style={{
                                    fontSize: 8,
                                    color: Colors.pink,
                                    fontFamily: ENV.mfontFamilyRegular,
                                    alignSelf: 'center',
                                    // backgroundColor: 'red',
                                    textAlign: 'center',
                                    opacity: 0.7
                                }}
                            />
                            <RLText
                                text={`${')'}`}
                                style={{
                                    fontSize: 25,
                                    color: Colors.pink,
                                    fontFamily: ENV.mfontFamilyMedium,
                                    alignSelf: 'center',
                                    // backgroundColor: 'red',
                                    // textAlign: 'center',

                                    paddingLeft: 5
                                }}
                            />
                        </View>
                        <RLText
                            text={BaseText.mySchoolCondtion}
                            style={{
                                fontSize: 10,
                                color: Colors.violet,
                                fontFamily: ENV.mfontFamilyMedium,
                                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                alignSelf: 'center',
                                // backgroundColor: 'red',
                                textAlign: 'center',
                                paddingTop: 10,
                                marginBottom: 80,
                                opacity: 0.7
                            }}
                        />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(MySchool);