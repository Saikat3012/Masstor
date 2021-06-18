import React, { Fragment, useEffect, useState } from "react";
import { Platform, ImageBackground, View, Image, Text, KeyboardAvoidingView, StatusBar, SafeAreaView, TouchableWithoutFeedback, FlatList, TouchableOpacity, ScrollView, Modal } from "react-native";
import { connect, useSelector, useDispatch } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import viewstyle from 'theme/component/ViewStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import LottieView from 'lottie-react-native';
import { STANDARDTYPE, BOARDTYPE, LEARINGMODETYPE } from 'constants/Enum';
import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLRoundList,
    RLSchoolInfoList,
    RLStandardModal,
    RLSchoolSearchModal,
    RLNoInternet,
    RLProcessTimelineItem,
    RLCustomizeSearchList,
    RLSchoolForYouList
} from 'basecomponent';
import { consoleLog } from 'utils/console';
import PreviousBlue from 'assets/svg/previousBlue';
import Fillter from 'assets/svg/fillter';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { GetAllSchools, CreateFavouriteSchool } from 'action/user';
import _ from 'lodash';

const SchoolForYou = ({ navigation, props, state }) => {
    // const { routes } = state;
    let fieldSearchRef = React.createRef();
    const SchoolTypeDataList = [
        { id: 1, title: 'All', value: BOARDTYPE.ALL },
        { id: 2, title: 'CBSE', value: BOARDTYPE.CBSE },
        { id: 3, title: 'CISCE', value: BOARDTYPE.CISCE },
        { id: 4, title: 'IGCSE', value: BOARDTYPE.IGCSE },
        { id: 5, title: 'IB', value: BOARDTYPE.IB },
        { id: 6, title: 'State Board', value: BOARDTYPE.STATEBOARD },
        { id: 7, title: 'GSEB', value: BOARDTYPE.GSEB }
    ]
    const StandardDataList = [
        { id: 1, title: 'Nur', value: STANDARDTYPE.NUR },
        { id: 2, title: 'KG', value: STANDARDTYPE.KG },
        { id: 3, title: 'I', value: STANDARDTYPE.I },
        { id: 4, title: 'II', value: STANDARDTYPE.II },
        { id: 5, title: 'III', value: STANDARDTYPE.III },
        { id: 6, title: 'IV', value: STANDARDTYPE.IV },
        { id: 7, title: 'V', value: STANDARDTYPE.V },
        { id: 8, title: 'VI', value: STANDARDTYPE.VI },
        { id: 9, title: 'VII', value: STANDARDTYPE.VII },
        { id: 10, title: 'VIII', value: STANDARDTYPE.VIII },
        { id: 11, title: 'IX', value: STANDARDTYPE.IX },
        { id: 12, title: 'X', value: STANDARDTYPE.X },
        { id: 13, title: 'XI', value: STANDARDTYPE.XI },
        { id: 14, title: 'XII', value: STANDARDTYPE.XII }
    ]
    const LearingDataList = [
        { id: 1, title: 'Online', value: LEARINGMODETYPE.ONLINE },
        { id: 2, title: 'Offline', value: LEARINGMODETYPE.OFFLINE },
        { id: 3, title: 'Both', value: LEARINGMODETYPE.BOTH },
    ]
    const SchoolTpDataList = [
        { id: 1, title: 'Private' },
        { id: 2, title: 'Private Aided' },
        { id: 3, title: 'Govt' },
    ]
    const SchoolFormatDataList = [
        { id: 1, title: 'Girls only' },
        { id: 2, title: 'Boys only' },
        { id: 3, title: 'Both' },
    ]
    const CdStatusDataList = [
        { id: 1, title: 'Day School' },
        { id: 2, title: 'Boarding School' },
        { id: 3, title: 'Day Boarding School' },
        { id: 4, title: 'Disabled Friendly School' },
    ]
    const LanguageDataList = [
        { id: 1, title: 'English' },
        { id: 2, title: 'Hindi' },
    ]

    const FillterDataList = [
        { id: 1, key: 'Relevance', isSelected: false },
        { id: 2, key: 'Price - Low to High', isSelected: false },
        { id: 3, key: 'Price High to Low', isSelected: false },
        { id: 4, key: 'Seat availablity', isSelected: false },
        { id: 5, key: 'Admission ongoing', isSelected: false },
    ]
    // get Redux Value
    const dispatch = useDispatch(); //Store Redux value using useDispatch
    const getUserLoginToken = useSelector(state => state.user.ReduxOtpToken)
    const getFilterSchoolValue = useSelector(state => state.user.ReduxFilterSchool)
    const getSchoolListTypeValue = useSelector(state => state.user.ReduxFilterSchooListType)
    const getLoctionTypeValue = useSelector(state => state.user.ReduxLocationType)
    const getLoctionCurrentValue = useSelector(state => state.user.ReduxCurrentCity)
    const getSelctedCityValue = useSelector(state => state.user.ReduxSelectedCity)

    const [filterSchoolDataList, setFilterSchoolDataList] = useState(getFilterSchoolValue)
    const [SelectedFilterType, setSelectedFilterType] = useState(''); //show toolTip
    const [SelectedSchoolType, setSelectedSchoolType] = useState(1) //Select School Type
    const [selectedSchool, setSelectedSchool] = useState('') //Select School Type
    const [showAdvanceSearchModal, setShowAdvanceSearchModal] = useState(false); //show Sucess mOdal
    const [toolTipVisibleFilter, setToolTipVisibleFilter] = useState(false); //show toolTip
    const [load, SetLoad] = useState(false);
    const [isuserLogin, setIsuserLogin] = useState(false);
    const [loginusertoken, setLoginusertoken] = useState();


    useEffect(() => {
        _checkUserLogin()
        // const timeout = setTimeout(() => {
        //     setShowStandardModal(true)
        // }, 5000);
        // return () => clearTimeout(timeout);
        console.log("filterSchoolDataList", filterSchoolDataList);
    }, [selectedSchool, isuserLogin, loginusertoken])

    //Common UseEffect
    // useEffect(() => {
    //     _initSetup();
    // }, [])
    // //Common UseEffect

    // //Initial Setup Method
    // const _initSetup = () => {

    // }
    //Initial Setup Method

    //================================ Start common Function ===========================================
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
    //OnChange TextInput
    const _onChangeTextField = (value, type) => {
    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }

    //Onclick School Type
    const _onClickSchoolType = (item) => {
        // this.setState({ SelectedSchoolType: item.id })
        setSelectedSchoolType(item.id)
    }

    const _onClickAdvanceSerchItem = (item, parms) => {
        switch (parms) {
            case 1:
                dispatch({
                    type: 'Selcted_StdTypeHome',
                    data: item.value
                })
                break;
            case 2:
                dispatch({
                    type: 'Selcted_BoardTypeHome',
                    data: item.value
                })
                break;
            case 3:
                dispatch({
                    type: 'Selcted_LearingModeTypeHome',
                    data: item.value
                })
                break;
            // case 4:
            //     dispatch({
            //         type: 'Selcted_StdTypeHome',
            //         data: item.value
            //     })
            //     break;
            // case 5:
            //     dispatch({
            //         type: 'Selcted_StdTypeHome',
            //         data: item.value
            //     })
            //     break;
            // case 6:
            //     dispatch({
            //         type: 'Selcted_StdTypeHome',
            //         data: item.value
            //     })
            //     break;
            // case 7:
            //     dispatch({
            //         type: 'Selcted_StdTypeHome',
            //         data: item.value
            //     })
            //     break;

            default:
                break;
        }
    }

    const _onClickFaviourtSchool = (schoolId) => {
        console.log("School Id", schoolId);
        if (isuserLogin) {
            _createFavioutAPI(schoolId)
        }
        else {
            alert("You have to do login first")
        }


    }

    //================================ API common Function ===========================================
    const _createFavioutAPI = (schoolId) => {
        SetLoad(true)
        const params = {
            "schoolId": schoolId,
            "token": isuserLogin ? loginusertoken : getUserLoginToken
        }
        console.log("parms on cretae Faviourt SChool");
        try {
            CreateFavouriteSchool(params, (result) => {
                console.log("Response on Create School -->", result);
                if (result.success) {
                    consoleLog("Response On Sucess-->", result.success);
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
                isAdmissionHeader
                leftImg={Images.previousArrow}
                title={getSchoolListTypeValue}
                onpressleft={() => navigation.goBack()}
                roundBackWhite={true}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}
            />
        )
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
    //Render Loading Animation

    //School Type FlatList item
    const _renderSchoolTypeItem = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: item.id == SelectedSchoolType ? Colors.white : Colors.pink
                }}
                customBtnStyle={{ backgroundColor: item.id == SelectedSchoolType ? Colors.pink : Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, }}
                onPress={() => _onClickSchoolType(item)}
            />
        )
    }

    //Item Seprator
    const FlatListItemSeparator = () => {
        return (
            <View style={{ borderBottomWidth: 0.5, borderColor: Colors.gray3 }}></View>
        )
    }

    //School Type FlatList item
    const _rendeAdvanceSearchItem = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
            // onPress={() => _onClickSchoolType(item)}
            />
        )
    }

    const _renderHowItWorks = () => {
        return (
            <ImageBackground
                source={Images.howItWorksImage}
                style={{
                    // height: BaseStyle.DEVICE_HEIGHT / 100 * 75,
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 70,
                    width: BaseStyle.DEVICE_WIDTH,
                    // resizeMode: 'center',
                    marginBottom: 80
                }}
            >
                <View style={{ flex: 1, paddingVertical: BaseStyle.DEVICE_HEIGHT / 100 * 1.5, justifyContent: 'space-between', }}>
                    <View>
                        <RLText
                            text={BaseText.hiwTitle}
                            style={{
                                fontSize: 20,
                                fontFamily: ENV.mfontFamilyBlack,
                                color: Colors.white,
                                textAlign: 'center',
                            }}
                        />
                    </View>
                    <View style={{ alignSelf: 'center', alignItems: 'center', }}>
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.hiwBtnText}
                            simplebuttontextStyle={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyRegular,
                                color: Colors.violet,
                            }}
                            simplebuttonStyle={[{ marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 1, backgroundColor: Colors.white, borderRadius: 50, paddingVertical: 10, paddingHorizontal: 15, }]}
                            onpress={() => {

                            }}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={Images.lightBulbImage} style={{ height: 18, width: 18, }} />
                            <RLText
                                text={BaseText.hiwText}
                                style={{
                                    fontSize: 12,
                                    fontFamily: ENV.mfontFamilyRegular,
                                    color: Colors.white,
                                    marginLeft: 5,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }

    const _renderSimplifiedProcess = () => {
        return (
            <View style={{}}>
                <RLText
                    style={{
                        fontSize: 20,
                        fontFamily: ENV.mfontFamilyBlack,
                        color: Colors.violet,
                        marginBottom: 25,
                        marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 5,
                    }}
                    text={BaseText.simpProText}
                />
                {/* <Image
                    source={Images.tlLineImage}
                    style={{
                        width: BaseStyle.DEVICE_WIDTH - BaseStyle.DEVICE_WIDTH / 100 * 9,
                        height: BaseStyle.DEVICE_HEIGHT / 100 * 19,
                        // resizeMode: 'cover',
                        alignSelf: 'center',
                        marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 5,
                    }}
                /> */}
                <Image
                    source={Images.tlLineImage}
                    style={{
                        width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                        height: 150,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                        marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 5,
                    }}
                />

                {/* <View style={{ marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 5, }}>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: BaseStyle.DEVICE_WIDTH - BaseStyle.DEVICE_WIDTH / 5.5,
                            marginBottom: 5,
                            // backgroundColor: 'yellow',
                        }}
                    >
                        <RLText
                            style={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyBold,
                                color: Colors.violet,
                                width: '20%',
                                textAlign: 'center',
                            }}
                            text={BaseText.spExpl}
                        />
                        <RLText
                            style={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyBold,
                                color: Colors.violet,
                                width: '20%',
                                textAlign: 'center',
                                // marginLeft: '20%',
                            }}
                            text={BaseText.spAdminTra}
                        />
                        <RLText
                            style={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyBold,
                                color: Colors.violet,
                                width: '20%',
                                textAlign: 'center',
                                // marginLeft: '5%',
                            }}
                            text={BaseText.spSingleKYC}
                        />
                    </View>
                    <Image
                        source={Images.tlLineImage}
                        style={{
                            width: BaseStyle.DEVICE_WIDTH - BaseStyle.DEVICE_WIDTH / 6.4,
                            height: BaseStyle.DEVICE_HEIGHT / 100 * 10,
                            // resizeMode: 'cover',
                            alignSelf: 'center',
                        }}
                    />
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // backgroundColor: 'yellow',
                            // marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 9,
                            position: 'absolute',
                            top: BaseStyle.DEVICE_HEIGHT / 100 * 6.5,
                            width: BaseStyle.DEVICE_WIDTH - BaseStyle.DEVICE_WIDTH / 4.3,
                        }}
                    >
                        <RLProcessTimelineItem color={Colors.violet} image={Images.tlSearchImage} isUp />
                        <RLProcessTimelineItem color={Colors.pink} image={Images.tlCompareImage} />
                        <RLProcessTimelineItem color={Colors.violet} image={Images.tlLocationImage} />
                        <RLProcessTimelineItem color={Colors.pink} image={Images.tlResearchImage} />
                        <RLProcessTimelineItem color={Colors.violet} image={Images.tlContactFormImage} />
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: BaseStyle.DEVICE_WIDTH - BaseStyle.DEVICE_WIDTH / 1.85,
                            // backgroundColor: 'yellow',
                            marginTop: 5,
                        }}
                    >
                        <RLText
                            style={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyBold,
                                color: Colors.pink,
                                width: '30%',
                                textAlign: 'center',
                            }}
                            text={BaseText.spCompSch}
                        />
                        <RLText
                            style={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyBold,
                                color: Colors.pink,
                                width: '30%',
                                textAlign: 'center',
                            }}
                            text={BaseText.spResuTra}
                        />
                    </View>
                </View> */}
            </View>
        );
    }

    const _rendeSchoolSForListItem = ({ item, index }) => {
        // console.log(item);
        return (
            <RLSchoolForYouList
                schoolname={item.name}
                schoollocation={item.location}
                standard={`${'Std '}${item.strandardFrom}${'-'}${item.strandardTo}`}
                fees={`${'Rs '}${item.minFees}${'-'}${item.maxFees}`}
                vistor={item.visitCount}
                // boardType={'CBSC'}
                boardType={item.boardType == 0 ? 'CBSE' : item.boardType == 1 ? 'CISCE' : item.boardType == 2 ? 'IGCSE' : item.boardType == 3 ? 'IB' : item.boardType == 4 ? 'STATEBOARD' : item.boardType == 5 ? 'GSEB' : ''}
                schoolImg={item.schoolImageList[0]}
                mainViewStyle={{ borderBottomWidth: 0.5, borderBottomColor: Colors.gray }}
                onPressFaviourt={() => _onClickFaviourtSchool(item.schoolId)}
            />
        )
    }

    //Search School Modal
    const _rendeSchoolNameModal = () => {
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={showAdvanceSearchModal}
                // onRequestClose={() => { setShowStandardModal(false), setShowAdvanceSearchModal(false), setShowsearchModal(false) }}>
                onRequestClose={() => { setShowAdvanceSearchModal(false) }}>



                {_renderShowAdvanceSearch()}

            </Modal>
        )
    }

    //Show AdvanceSearch Modal UI
    const _renderShowAdvanceSearch = () => {
        return (
            <TouchableWithoutFeedback >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(57,57,57,0.80)',
                    justifyContent: 'flex-end',


                }}>
                    {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
                    <View style={{ borderTopLeftRadius: 18, borderTopRightRadius: 18, backgroundColor: Colors.lightViolet, paddingVertical: 20 }}>
                        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={{ alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 90, }}>
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.Standard}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={StandardDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem1({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.Board}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={SchoolTypeDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem2({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.LearningMode}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={LearingDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem3({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.SchoolType}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={SchoolTpDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem4({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.SchoolFormat}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={SchoolFormatDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem5({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.COEDStatus}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={CdStatusDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem6({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.Languageofintruction}</Text>
                                <FlatList
                                    style={{ marginTop: 10, }}
                                    bounces={false}
                                    data={LanguageDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem7({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => { setShowAdvanceSearchModal(false), navigation.navigate('Home') }}>
                                    <Image
                                        source={Images.previousRoundBlue}
                                        style={{ height: 31, width: 31, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    {/* </ScrollView> */}
                </View>
            </TouchableWithoutFeedback>

        )
    }

    //School Type FlatList item
    const _rendeAdvanceSearchItem1 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 1)}
            />
        )
    }
    const _rendeAdvanceSearchItem2 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 2)}
            />
        )
    }
    const _rendeAdvanceSearchItem3 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 3)}
            />
        )
    }
    const _rendeAdvanceSearchItem4 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 4)}
            />
        )
    }
    const _rendeAdvanceSearchItem5 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 5)}
            />
        )
    }
    const _rendeAdvanceSearchItem6 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 6)}
            />
        )
    }
    const _rendeAdvanceSearchItem7 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 7)}
            />
        )
    }

    // console.log("Load: ", load)
    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white, }}>
                    <View style={{ flex: 1, }}>
                        {_rendeSchoolNameModal()}
                        {_header()}
                        <RLNoInternet
                            RefreshClick={() => {
                                // console.log("Refresh Click Home");
                                _initSetup();
                            }}
                            style={{
                                // height: BaseStyle.DEVICE_HEIGHT,
                            }}
                            height={BaseStyle.DEVICE_HEIGHT / 100 * 80}
                        />
                        {/* Search */}
                        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={{ marginTop: 5, }}>
                                <RLTextInput
                                    SearchTextInput={true}
                                    refKey={'search'}
                                    placeholder={'Search School'}
                                    fieldRef={fieldSearchRef}
                                    onEditTextField={(value) => _onChangeTextField(value, 'search')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldSearchRef)}
                                    searchPink={true}
                                    txtInputStyle={{ color: Colors.pink, fontSize: 14, fontFamily: ENV.mpolisfontFamilyRegular }}
                                    placeholderTextColor={Colors.gray8}
                                    hideShowImage={Images.searchGray}
                                    searchCityName={getLoctionTypeValue == 'Allow' ? getLoctionCurrentValue : getSelctedCityValue.cityName}
                                />
                            </View>
                            {/* Scholltype List */}
                            <View style={{ marginVertical: 25, flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', }}>
                                <FlatList
                                    bounces={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={SchoolTypeDataList}
                                    renderItem={({ item, index }) => _renderSchoolTypeItem({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    horizontal={true}
                                />

                                <View style={{
                                    backgroundColor: Colors.white, width: BaseStyle.DEVICE_WIDTH / 100 * 10, alignItems: 'flex-end', justifyContent: 'center',
                                }}>
                                    <Tooltip
                                        contentStyle={{ borderRadius: 0, padding: 0, }}
                                        animated={true}
                                        backgroundColor="rgba(0,0,0,0.5)"
                                        isVisible={toolTipVisibleFilter}
                                        content={
                                            <FlatList
                                                bounces={false}
                                                data={FillterDataList}
                                                ItemSeparatorComponent={FlatListItemSeparator}
                                                renderItem={({ item }) => (
                                                    <TouchableOpacity
                                                        onPress={() => { setSelectedFilterType(item.id) }}>
                                                        <View
                                                            style={{
                                                                flexDirection: 'row',
                                                                alignItems: 'center',
                                                                paddingHorizontal: 10,
                                                                paddingVertical: 15,
                                                                width: 160,
                                                                justifyContent: 'flex-end'
                                                            }}>
                                                            <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilySemiBold, fontSize: 10, }}>{item.key} </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                )}
                                                keyExtractor={item => item.id.toString()}
                                            />
                                        }
                                        placement="bottom"
                                        onClose={() => setToolTipVisibleFilter(false)}
                                        showChildInTooltip={false}>
                                        <TouchableOpacity onPress={() => setToolTipVisibleFilter(true)}>
                                            <Image
                                                style={{ width: 18, height: 15, resizeMode: 'contain' }}
                                                source={Images.fillter}
                                            />
                                        </TouchableOpacity>
                                    </Tooltip>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 5, justifyContent: 'space-between', }}>
                                <TouchableOpacity onPress={() => setShowAdvanceSearchModal(true)}>
                                    <RLText
                                        text={"Advance Search?"}
                                        style={{
                                            fontFamily: ENV.mhelveticafontFamilyRegular,
                                            fontSize: 9,
                                            color: Colors.violet,
                                        }}
                                    />
                                </TouchableOpacity>
                                <RLText
                                    text={`${filterSchoolDataList.length}${' results'}`}
                                    style={{
                                        fontFamily: ENV.mhelveticafontFamilyRegular,
                                        fontSize: 9,
                                        color: Colors.gray8,
                                    }}
                                />
                            </View>
                            {/* {_renderSchoolSForList()} */}
                            <FlatList
                                bounces={false}
                                data={filterSchoolDataList}
                                renderItem={({ item, index }) => _rendeSchoolSForListItem({ item, index })}
                                keyExtractor={({ item, index }) => index}
                            />

                            <TouchableOpacity
                                style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.violet, alignSelf: 'center', paddingVertical: 8, paddingHorizontal: 15, marginVertical: 25 }}
                                onPress={() => { }}>
                                <Text style={{ fontSize: 10, fontFamily: ENV.mfontFamilyRegular, color: Colors.violet }}>{'See More '}<Text style={{ fontSize: 8, fontFamily: ENV.mfontFamilyMedium, color: Colors.pink }}>{'200 School'}</Text></Text>
                            </TouchableOpacity>

                            {_renderSimplifiedProcess()}
                            {_renderHowItWorks()}

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
export default connect(select)(SchoolForYou);