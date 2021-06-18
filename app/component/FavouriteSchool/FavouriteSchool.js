import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, ImageBackground, Platform } from "react-native";
import { connect, useSelector } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import LottieView from 'lottie-react-native';
import viewstyle from 'theme/component/ViewStyle';
import { STANDARDTYPE, BOARDTYPE, LEARINGMODETYPE } from 'constants/Enum';
import { consoleLog } from 'utils/console';
import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLRoundList,
    RLSchoolInfoList,
    RLProfileSettingList
} from 'basecomponent';
import { GetSchoolFavouriteByToken, DeleteFavouriteSchool } from 'action/user';
import LovePink from 'assets/svg/lovePink';
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from 'lodash';
import { addElementArray, spliceArray, } from 'utils/arrayOperation';

const FavouriteSchool = ({ navigation, props }) => {
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
    const getUserLoginToken = useSelector(state => state.user.ReduxOtpToken)

    const [explorSchool, setExplorSchool] = useState(false) //Select School Type
    const [load, SetLoad] = useState(true);
    const [faviourtSchoolDataList, setFaviourtSchoolDataList] = useState([])
    const [isuserLogin, setIsuserLogin] = useState(false);
    const [loginusertoken, setLoginusertoken] = useState();
    useEffect(() => {
        _checkUserLogin()
        _getSchoolFavouriteByTokenAPI()
    }, [isuserLogin, loginusertoken])


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
            setIsuserLogin(true)
            setLoginusertoken(getLoginuserAsyncToken)
        }
    }

    const _onClickIsFaviourtSchool = (item, index) => {
        // console.log("School Id", schoolId);
        if (isuserLogin) {
            _deleteFavouriteSchoolAPI(item.schoolId, index)

        }
        else {
            alert("You have to do login first")
        }

    }

    //================================ API common Function ===========================================
    const _getSchoolFavouriteByTokenAPI = () => {
        const params = {
            "token": isuserLogin ? loginusertoken : getUserLoginToken
        }
        console.log("parms on get faviourt school", params);
        try {
            GetSchoolFavouriteByToken(params, (result) => {
                console.log("Response on Faviourt School-->", result);
                if (result.success) {
                    SetLoad(false)
                    var res = result.result;
                    if (_.isNull(res)) {
                        setFaviourtSchoolDataList(faviourtSchoolDataList)
                        // faviourtSchoolDataList = [];
                    }
                    else {
                        setFaviourtSchoolDataList(res)
                    }
                    // setFaviourtSchoolDataList(res)
                    console.log("Faviourt School Scusess");
                }
                else {
                    SetLoad(false)
                    consoleLog("Response Fail on Faviourt School");
                }
            })
        }
        catch (e) {
            SetLoad(false)
            console.log("Error from here Faviourt School")
            console.log(e);
        }
    }

    const _deleteFavouriteSchoolAPI = (schoolId, index) => {
        SetLoad(true)
        const params = {
            "schoolid": schoolId,
            "token": isuserLogin ? loginusertoken : getUserLoginToken
        }
        console.log("parms on Delete Faviourt SChool", params);
        try {
            DeleteFavouriteSchool(params, (result) => {
                console.log("Response on Delete School -->", result);
                if (result.success) {
                    consoleLog("Response On Delete Favourite Sucess-->", result.success);
                    var array = [...faviourtSchoolDataList];

                    if (index !== -1) {
                        // array.splice(index, 1)
                        // setLocationDataList(array)
                        spliceArray(array, index, 1)
                        setFaviourtSchoolDataList(array)
                    }
                    SetLoad(false)
                }
                else {
                    SetLoad(false)
                    // setOtpStatus(OTP.FAIL);
                    // SetShowModal(false)
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
                isRadiousHeader
                title={BaseText.Favourite}
                onpressleft={() => navigation.goBack()}
                leftImg={Images.previousArrowWhite}
                rightImg={Images.notificationWhite}
            // roundBackWhite={true}
            // notificationWhite={true}
            />
        )
    }

    //Image Logo
    const _renderLogo = () => {
        return (
            <Image
                source={explorSchool ? Images.faviourtSchoolBook : Images.favouritefamily}
                style={{
                    height: 205,
                    width: 285,
                    alignSelf: 'center',
                    marginTop: 90,
                    marginBottom: 20,
                    resizeMode: 'contain'
                }}
            />
        )
    }

    //ExplorView
    const _renderExploreView = () => {
        return (
            <View>
                <Text style={{ fontSize: 11, fontFamily: ENV.mfontFamilySemiBold, color: Colors.blue1, alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 90, marginVertical: 30 }}>
                    {BaseText.EmptyFaviourtSchoolTitle}
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
                    {/* <TouchableOpacity onPress={() => _onclickBtn('explore')} >
                        <Image
                            source={Images.lovePink}
                            style={{
                                height: 100,
                                // width: 285,
                                width: 100,
                                alignSelf: 'center',
                                resizeMode: 'contain'
                            }}
                        />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => _onclickBtn('explore')} >
                        <ImageBackground
                            style={{ height: 100, width: 100, justifyContent: 'center', alignItems: 'center' }}
                            // imageStyle={{ height: 82, width: 82, }}
                            source={Images.heart2}>
                            <Text style={{ color: Colors.white, fontSize: 17, fontFamily: ENV.mfontFamilySemiBold }}>0</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    {/* <LovePink
                        style={{ height: 200, width: 200 }}
                    /> */}
                </View>
            </View >
        )
    }

    //Check Status View
    const _renderCheckStatusView = () => {
        return (
            <View style={{ marginVertical: 30, justifyContent: 'space-between', flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', }}>
                <Text numberOfLines={1} style={{ fontSize: 11, fontFamily: ENV.mfontFamilySemiBold, color: Colors.blue1, alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 70, }}>
                    {/* You added 2 Schools in you favourite list. */}
                    {`${'You added '}${faviourtSchoolDataList.length}${' Schools in you favourite list.'}`}
                </Text>
                {/* <TouchableOpacity
                    style={{ backgroundColor: Colors.violet, borderRadius: 30, paddingVertical: 10, paddingHorizontal: 25 }}
                >
                    <Text style={{ color: Colors.white, fontSize: 14, fontFamily: ENV.mfontFamilyMedium }}>
                        Check Status
          </Text>
                </TouchableOpacity> */}
                <ImageBackground
                    style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center', }}
                    imageStyle={{ resizeMode: 'contain', alignSelf: 'center' }}
                    source={Images.loveBlue}>
                    <Text numberOfLines={1} style={{ width: 25, fontSize: 8, fontFamily: ENV.mfontFamilySemiBold, color: Colors.white, textAlign: 'center' }}>{`${faviourtSchoolDataList.length}`}</Text>
                </ImageBackground>
            </View>
        )
    }

    //School Info List
    const _renderSchoolInfoItem = ({ item, index }) => {
        return (
            <RLSchoolInfoList
                IslikeSchoolInfo={true}
                seatsLeft={item.numberOfSeats - item.numberOfSeatsFilled}
                boardType={item.boardType == 0 ? 'CBSE' : item.boardType == 1 ? 'CISCE' : item.boardType == 2 ? 'IGCSE' : item.boardType == 3 ? 'IB' : item.boardType == 4 ? 'STATEBOARD' : item.boardType == 5 ? 'GSEB' : ''}
                vistor={item.visitCount}
                schoolname={item.name}
                schoollocation={item.location}
                standard={`${'Std '}${item.strandardFrom}${'-'}${item.strandardTo}`}
                // fees={`${'Rs '}${item.minFees}${'-'}${item.maxFees}`}
                // backgroundImg={item.schoolimage}
                marginLeft={index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 5 : BaseStyle.DEVICE_WIDTH / 100 * 0}
                // schoolLikeBtnImg={item.btnImg}
                schoolLikeBtnImg={Images.VerifyBlue}
                favouriteBackground={item.isFavourite ? Colors.pink : Colors.white}
                IsfavouriteImage={item.isFavourite ? Images.heartwhite : Images.heart2}
                onPressFaviourt={() => _onClickIsFaviourtSchool(item, index)}
            />
        )
    }


    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={{ flex: 1, }}>
                    {_header()}
                    <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ flex: 1 }}>
                            {_renderLogo()}
                        </View>
                        <View style={{
                            borderTopRightRadius: 50,
                            borderTopLeftRadius: 50,
                            shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,
                            elevation: 10,
                            backgroundColor: Colors.white, justifyContent: 'flex-end'
                        }}>
                            {/* working on like Flag Set */}
                            {/* {explorSchool == false &&
                                _renderExploreView()
                            }
                            {explorSchool &&
                                _renderCheckStatusView()
                            }

                            {explorSchool &&
                                <View>
                                    <FlatList
                                        style={{ marginBottom: 30, }}
                                        data={SchoolInfoDataList}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={(item, index) => item.id.toString()}
                                        renderItem={({ item, index }) => _renderSchoolInfoItem({ item, index })}
                                    />
                                </View>
                            } */}

                            {faviourtSchoolDataList.length <= 0 &&
                                _renderExploreView()
                            }
                            {faviourtSchoolDataList.length > 0 &&
                                _renderCheckStatusView()
                            }
                            {faviourtSchoolDataList.length > 0 &&
                                <View>
                                    <FlatList
                                        style={{ marginBottom: 30, }}
                                        data={faviourtSchoolDataList}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={(item, index) => index}
                                        renderItem={({ item, index }) => _renderSchoolInfoItem({ item, index })}
                                    />
                                </View>
                            }
                        </View>
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
export default connect(select)(FavouriteSchool);