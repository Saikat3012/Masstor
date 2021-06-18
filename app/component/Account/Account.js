import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity, Switch, ImageBackground, Alert, Platform } from "react-native";
import { connect, useSelector, useDispatch } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import LottieView from 'lottie-react-native';
import viewstyle from 'theme/component/ViewStyle';
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

import CameraWhite from 'assets/svg/cameraWhite';
import EditPenPink from 'assets/svg/editPenPink';
import { GetUserByToken, GetAllSchoolListByFilter, GetSchoolByName } from 'action/user';
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from 'lodash';


const Account = ({ navigation, props }) => {
    // Extam Option List
    // const SettingDataList = [
    //     { id: 1, title: 'My School', isswitch: false, img: Images.schoolBlue },
    //     { id: 2, title: 'Discover Localities', isswitch: false, img: Images.locationBlue },
    //     { id: 3, title: 'Compare Schools', isswitch: false, img: Images.schoolBlue },
    //     { id: 4, title: 'Favourites', isswitch: false, img: Images.loveBlue },
    //     { id: 5, title: 'EntranceTest', isswitch: false, img: Images.schoolBlue },
    //     { id: 6, title: 'Notification', isswitch: true, img: Images.notificationVilote },
    //     { id: 7, title: 'Sign Out', isswitch: false, img: Images.logoutBlue },
    // ]
    // Without EntranceTest
    const SettingDataList = [
        { id: 1, title: 'My School', isswitch: false, img: Images.schoolBlue },
        { id: 2, title: 'Discover Localities', isswitch: false, img: Images.locationBlue },
        { id: 3, title: 'Compare Schools', isswitch: false, img: Images.schoolBlue },
        { id: 4, title: 'Favourites', isswitch: false, img: Images.loveBlue },
        { id: 5, title: 'Notification', isswitch: true, img: Images.notificationVilote },
        { id: 6, title: 'Sign Out', isswitch: false, img: Images.logoutBlue },
    ]
    const dispatch = useDispatch(); //Store Redux value using useDispatch
    const getUserLoginToken = useSelector(state => state.user.ReduxOtpToken)
    const getUser = useSelector(state => state.user.ReduxUser)
    const [isswitch, setIsswitch] = useState(false)
    const [showLogoutModal, SetShowLogoutModal] = useState(false);
    const [load, SetLoad] = useState(false);
    const [isuserLogin, setIsuserLogin] = useState(false);
    const [loginusertoken, setLoginusertoken] = useState();


    useEffect(() => {
        _checkUserLogin()
        _getUserByTokenAPI()
        console.log(getUserLoginToken);
        console.log("Redux,User", getUser);

    }, [isuserLogin, loginusertoken])
    //================================ Start common Function ===========================================
    // Extam Option List
    // const _onClickItem = (item) => {
    //     switch (item.id) {
    //         case 1:
    //             navigation.navigate('MySchool')
    //             break;
    //         case 2:
    //             navigation.navigate('Localities')
    //             break;
    //         case 3:
    //             navigation.navigate('CompareSchool')
    //             break;
    //         case 4:
    //             navigation.navigate('FavouriteSchool')
    //             break;
    //         case 5:
    //             navigation.navigate('EntranceTest')
    //             break;
    //         case 6:
    //             break;
    //         case 7:
    //             SetShowLogoutModal(true);
    //             break;
    //         default:
    //             break;
    //     }
    // Without EntranceTest
    const _onClickItem = (item) => {
        switch (item.id) {
            case 1:
                navigation.navigate('MySchool')
                break;
            case 2:
                navigation.navigate('Localities')
                break;
            case 3:
                navigation.navigate('CompareSchool')
                break;
            case 4:
                if (isuserLogin) {
                    navigation.navigate('FavouriteSchool')
                }
                else {
                    alert("You have to do login first")
                }
                break;
            case 5:

                break;
            case 6:
                SetShowLogoutModal(true);
                break;

            default:
                break;
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

    // Check user is login or not
    const _checkUserLogin = async () => {
        const isUserLogin = await AsyncStorage.getItem('LoginUserAsync');
        // setUserlogin(isUserLogin)
        console.log("Async Value on Api js", isUserLogin);
        if (isUserLogin == null || isUserLogin == 'null') {
            // navigation.navigate('Login');
            setIsuserLogin(false)
        }
        else {
            // navigation.navigate('Location');
            const getLoginuserAsyncToken = await AsyncStorage.getItem('LoginUserAsyncToken');
            console.log("Token---->", getLoginuserAsyncToken);
            setLoginusertoken(getLoginuserAsyncToken)
            setIsuserLogin(true)
        }
    }

    //================================ API common Function ===========================================
    const _getUserByTokenAPI = () => {
        // const headers = {
        //     'X-XSRF-TOKEN': ''
        // }
        SetLoad(true)
        const params = {
            "token": isuserLogin ? loginusertoken : getUserLoginToken
        }
        console.log("parms", params);
        try {
            GetUserByToken(params, (result) => {
                console.log("Response on Users-->", result);
                if (result.success) {
                    SetLoad(false)
                    dispatch({
                        type: 'User',
                        data: result.result
                    })
                }
                else {
                    SetLoad(false)
                    consoleLog("Response Fail on UserApi");
                }
            })
        }
        catch (e) {
            SetLoad(false)
            console.log("Error from here")
            console.log(e);
        }
    }
    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            // <RLHeader
            //     isBothImageHeader
            //     appheaderIconwhite={true}
            //     settingWhite={true}
            //     leftImgstyle={{ resizeMode: 'contain' }}
            //     rightImgStyle={{ resizeMode: 'contain' }}
            //     backgroundColor={Colors.violet7}
            // />
            <RLHeader
                isBothImageHeader
                leftImg={Images.appheaderIconwhite}
                rightImg={Images.settingWhite}
                leftImgstyle={{ height: 25, width: 90, resizeMode: 'contain' }}
                rightImgStyle={{ height: 21, width: 17, resizeMode: 'contain' }}
                backgroundColor={Colors.pink2}
            />
        )
    }

    //Render method for logout popup
    const _renderPopupModal = () => {
        return (
            <RLModal
                isLogout={true}
                modalVisible={showLogoutModal}
                btnLeftPress={() => {
                    console.log("Left Btn Press");
                    AsyncStorage.setItem('LoginUserAsync', JSON.stringify(null))
                    navigation.navigate("Login")
                    // alert("ji")
                    SetShowLogoutModal(false);
                }}
                btnRightPress={() => {
                    console.log("Right Btn Press");
                    SetShowLogoutModal(false);
                }}
            />
        );
    }
    //Render method for logout popup

    //Setting FlatList item
    const _renderSettingItem = ({ item, index }) => {
        return (
            <RLProfileSettingList
                itemIcon={item.img}
                title={item.title}
                showSwitch={item.isswitch ? true : false}
                switchVlue={isswitch}
                thumbColor={Colors.violet}
                onValueChange={() => setIsswitch(!isswitch)}
                onPress={() => _onClickItem(item)}
            // dschoolBlue={index == 0 || index == 2 || index == 4 ? true : false}
            // dlocationBlue={index == 1 ? true : false}
            // dloveBlue={index == 3 ? true : false}
            // dnotificationVilote={index == 5 ? true : false}
            // dlogoutBlue={index == 6 ? true : false}
            />
        )
    }
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={{ flex: 1, }}>
                    {showLogoutModal && _renderPopupModal()}
                    {_header()}
                    <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>

                        <View style={{ backgroundColor: Colors.pink2, height: 100 }}></View>

                        <ImageBackground style={{
                            height: 150,
                            width: 150,
                            alignSelf: 'center',
                            backgroundColor: Colors.white,
                            borderRadius: 150 / 2,
                            shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,
                            elevation: 7,
                            justifyContent: 'flex-end',
                            bottom: 60
                        }}
                            // source={Images.userProfileAccount}
                            // source={Images.userProfileAccount}
                            // source={{ uri: _.isNull(getSelctedAdmissionProcess.admissionProcessVideo) ? "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" : getSelctedAdmissionProcess.onlineAdmissionProcess }}
                            source={(_.isEmpty(getUser.profileImage) || _.isUndefined(getUser.profileImage) || _.isNull(getUser.profileImage)) ? Images.userProfileAccount : { uri: getUser.profileImage }}
                        >

                            <TouchableOpacity style={{ height: 30, width: 30, backgroundColor: Colors.blue1, alignSelf: 'flex-end', bottom: 8, borderRadius: 30 / 2, justifyContent: 'center', alignItems: 'center' }}>
                                {/* <Image
                                    source={Images.cameraWhite}
                                    style={{ height: 20, resizeMode: 'contain', width: 20 }}></Image> */}
                                <CameraWhite />
                            </TouchableOpacity>
                        </ImageBackground>

                        {/* {console.log("getUser ", getUser, _.isEmpty(getUser) )} */}

                        {/* Profile Info View */}
                        <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', bottom: 40, }}>
                            <RLText
                                // text={'Hero Bruh'}
                                text={(_.isEmpty(getUser) || _.isUndefined(getUser) || _.isNull(getUser)) ? '' : (`${getUser.firstName}${' '}${getUser.lastName}`)}
                                style={{
                                    textAlign: 'center',
                                    fontSize: 25,
                                    color: Colors.violet,
                                    fontFamily: ENV.mfontFamilyBold,
                                    // marginTop: 8,

                                    alignSelf: 'center'
                                }} />
                            <RLText
                                // text={'Herobruh9447@gmail.com'}
                                text={(_.isEmpty(getUser) || _.isUndefined(getUser) || _.isNull(getUser)) ? '' : getUser.emailAddress}
                                style={{
                                    textAlign: 'center',
                                    fontSize: 13, fontFamily: ENV.mfontFamilyMedium, color: Colors.violet,
                                    paddingTop: 10,
                                    paddingBottom: 5,
                                    alignSelf: 'center'
                                }} />
                            <RLText
                                // text={'+91 98085858888'}
                                text={(_.isEmpty(getUser) || _.isUndefined(getUser) || _.isNull(getUser)) ? '' : (`${'+91 '}${getUser.mobileNumber}`)}
                                style={{
                                    textAlign: 'center',
                                    fontSize: 13, fontFamily: ENV.mfontFamilyMedium, color: Colors.violet,
                                    // paddingVertical: 5,
                                    alignSelf: 'center'
                                }} />
                            <TouchableOpacity
                                style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'center' }}
                                onPress={() => navigation.navigate('EditProfile')}
                            >
                                {/* <Image
                                    source={Images.EditPenPink}
                                    style={{ height: 15, resizeMode: 'contain', width: 15 }} /> */}
                                <EditPenPink style={{ alignSelf: 'center', }} />
                                <RLText
                                    text={BaseText.EditProfile}
                                    style={{
                                        fontSize: 10,
                                        marginLeft: 10,
                                        color: Colors.pink,
                                        fontFamily: ENV.mfontFamilyBlack

                                    }} />
                            </TouchableOpacity>

                        </View>

                        <FlatList
                            style={{ alignSelf: 'center', marginBottom: 50 }}
                            bounces={false}
                            data={SettingDataList}
                            renderItem={({ item, index }) => _renderSettingItem({ item, index })}
                            keyExtractor={item => item.id.toString()}
                        />

                    </ScrollView>
                </View>
                {load && _renderLoader()}
            </SafeAreaView>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Account);