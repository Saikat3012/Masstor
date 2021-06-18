import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, FlatList, Platform, KeyboardAvoidingView } from "react-native";
import { connect, useSelector } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import viewstyle from 'theme/component/ViewStyle';
import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLRoundList,
    RLSchoolInfoList
} from 'basecomponent';
import _ from 'lodash';
import CameraBlue from 'assets/svg/cameraBlue';
import EditProPenPink from 'assets/svg/editProPenPink';
import LottieView from 'lottie-react-native';
import { UpdateProfile, GetAllSchoolListByFilter, GetSchoolByName } from 'action/user';
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile = ({ navigation, props }) => {
    let fieldFNameRef = React.createRef();
    let fieldLNameRef = React.createRef();
    let fieldMobileRef = React.createRef();
    let fieldEmailRef = React.createRef();
    const takeImgeDataList = [
        { id: 1, key: 'Take Picture' },
        { id: 2, key: 'Upload  Picture' },
    ]

    // const dispatch = useDispatch(); //Store Redux value using useDispatch

    const getUser = useSelector(state => state.user.ReduxUser)
    const getFirstname = (_.isEmpty(getUser) || _.isUndefined(getUser) || _.isNull(getUser)) ? '' : getUser.firstName;
    const getLastname = (_.isEmpty(getUser) || _.isUndefined(getUser) || _.isNull(getUser)) ? '' : getUser.lastName;
    const getEmail = (_.isEmpty(getUser) || _.isUndefined(getUser) || _.isNull(getUser)) ? '' : getUser.emailAddress;
    const [toolTipVisible, setToolTipVisible] = useState(false); //show toolTip
    const [load, SetLoad] = useState(false);
    const [userId, setUserId] = useState(0);//set Login userId
    const [firstName, setFirstName] = useState(getFirstname);//set Login userId
    const [lastName, setLastName] = useState(getLastname);//set Login userId
    const [email, setEmail] = useState(getEmail);//set Login userId
    useEffect(() => {
        _checkUserLogin()
    }, [userId])
    //================================ Start common Function ===========================================
    // Check user is login or not
    const _checkUserLogin = async () => {
        const isUserLogin = await AsyncStorage.getItem('LoginUserAsync');
        // setUserlogin(isUserLogin)
        console.log("Async Value on Api js", isUserLogin);
        if (isUserLogin == null || isUserLogin == 'null') {
            // navigation.navigate('Login');
            setUserId(0)
        }
        else {
            //Login user Data
            const jsonPassvalue = JSON.parse(isUserLogin);
            console.log("vv", jsonPassvalue.userId);
            setUserId(jsonPassvalue.userId)
        }
    }
    //OnChange TextInput
    const _onChangeTextField = (value, type) => {
        switch (type) {
            case 'fname':
                setFirstName(value)
                break;
            case 'lname':
                setLastName(value)

                break;
            case 'email':
                setEmail(value)
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

    const _onProfileUpdate = () => {
        _updateProfileAPI()
    }
    //================================ API common Function ===========================================
    const _updateProfileAPI = () => {

        SetLoad(true)
        const params = {
            "userName": `${lastName}${firstName}`,
            "name": firstName,
            "surname": lastName,
            "emailAddress": email,
            "id": userId,
            // "token": isuserLogin ? loginusertoken : getUserLoginToken
        }
        console.log("parms update Profile", params);
        try {
            UpdateProfile(params, (result) => {
                console.log("Response on Users Profile Update-->", result);
                if (result.success) {
                    SetLoad(false)
                    // dispatch({
                    //     type: 'User',
                    //     data: result.result
                    // })
                }
                else {
                    SetLoad(false)
                    consoleLog("Response Fail on User Update");
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

    //Item Seprator
    const FlatListItemSeparator = () => {
        return (
            <View style={{ borderBottomWidth: 0.5, borderColor: Colors.gray3 }}></View>
        )
    }


    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' && 'padding'} >
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={{ flex: 1, }}>
                        {_header()}
                        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }} >
                            <View style={{ backgroundColor: Colors.pink2, height: 100 }}></View>

                            <View style={{
                                height: 140,
                                width: 140,
                                alignSelf: 'center',
                                backgroundColor: Colors.white,
                                borderRadius: 140 / 2,
                                shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 7,
                                bottom: 70,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Tooltip
                                    contentStyle={{ borderRadius: 0, padding: 0, }}
                                    animated={true}
                                    // topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                                    // arrowSize={{ width: 20, height: 18, }}
                                    backgroundColor="rgba(0,0,0,0.5)"
                                    isVisible={toolTipVisible}
                                    placement="bottom"
                                    onClose={() => setToolTipVisible(false)}
                                    showChildInTooltip={false}
                                    content={
                                        <FlatList
                                            bounces={false}
                                            data={takeImgeDataList}
                                            ItemSeparatorComponent={FlatListItemSeparator}
                                            renderItem={({ item }) => (
                                                <TouchableOpacity /*onPress={() => { this.setState({ SelectedFilterType: item.id }) }}*/>
                                                    <View
                                                        style={{
                                                            paddingHorizontal: 15,
                                                            paddingVertical: 15,
                                                            alignItems: 'flex-end',
                                                            width: BaseStyle.DEVICE_WIDTH / 100 * 50

                                                        }}>
                                                        <Text style={{ color: Colors.violet6, fontFamily: ENV.mfontFamilyMedium, fontSize: 10 }}>{item.key} </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )}
                                            keyExtractor={item => item.id.toString()}
                                        />
                                    }>
                                    <TouchableOpacity onPress={() => setToolTipVisible(true)}>
                                        {/* <Image
                                        source={Images.CameraBlue}
                                        style={{ height: 61, resizeMode: 'contain', width: 70 }}></Image> */}
                                        <CameraBlue />
                                    </TouchableOpacity>
                                </Tooltip>
                            </View>

                            <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {/* <Image
                                    source={Images.EditPenPink}
                                    style={{ height: 18, resizeMode: 'contain', width: 18 }} /> */}
                                    <EditProPenPink />
                                    <RLText
                                        text={BaseText.EditProfile}
                                        style={{
                                            fontSize: 19,
                                            marginLeft: 15,
                                            color: Colors.pink,
                                            fontFamily: ENV.mfontFamilyBlack
                                        }} />
                                </View>
                                <RLText
                                    text={BaseText.FirstName}
                                    style={{
                                        color: Colors.violet, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        marginVertical: 10

                                    }} />
                                <RLTextInput
                                    SqureTextInput={true}
                                    // placeholder={BaseText.FirstName}
                                    refKey={'fname'}
                                    fieldRef={fieldFNameRef}
                                    onEditTextField={(value) => _onChangeTextField(value, 'fname')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                    defaultValue={firstName}
                                // defaultValue={(_.isEmpty(getUser) || _.isUndefined(getUser) || _.isNull(getUser)) ? '' : getUser.firstName}
                                // value={'4444'}
                                />
                                <RLText
                                    text={BaseText.LastName}
                                    style={{
                                        color: Colors.violet, fontSize: 13, fontFamily: ENV.mfontFamilyMedium, marginVertical: 10
                                    }} />
                                <RLTextInput
                                    SqureTextInput={true}
                                    // placeholder={BaseText.LastName}
                                    refKey={'lname'}
                                    fieldRef={fieldLNameRef}
                                    onEditTextField={(value) => _onChangeTextField(value, 'lname')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldMobileRef)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                    defaultValue={lastName}
                                // defaultValue={(_.isEmpty(getUser) || _.isUndefined(getUser) || _.isNull(getUser)) ? '' : getUser.lastName}
                                />
                                <RLText
                                    text={BaseText.MobileNumber}
                                    style={{
                                        color: Colors.violet, fontSize: 13, fontFamily: ENV.mfontFamilyMedium, marginVertical: 10
                                    }} />
                                <RLTextInput
                                    SqureTextInput={true}
                                    // placeholder={'+91 9808303000'}
                                    refKey={'mobile'}
                                    fieldRef={fieldMobileRef}
                                    keyboardType="decimal-pad"
                                    onEditTextField={(value) => _onChangeTextField(value, 'mobile')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldEmailRef)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                    defaultValue={(_.isEmpty(getUser) || _.isUndefined(getUser) || _.isNull(getUser)) ? '' : (`${'+91 '}${getUser.mobileNumber}`)}
                                />
                                <RLText
                                    text={BaseText.EmailId}
                                    style={{
                                        color: Colors.violet, fontSize: 13, fontFamily: ENV.mfontFamilyMedium, marginVertical: 10
                                    }} />
                                <RLTextInput
                                    SqureTextInput={true}
                                    // placeholder={BaseText.EmailId}
                                    refKey={'email'}
                                    fieldRef={fieldEmailRef}
                                    onEditTextField={(value) => _onChangeTextField(value, 'email')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldEmailRef)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                    defaultValue={email}
                                // defaultValue={(_.isEmpty(getUser) || _.isUndefined(getUser) || _.isNull(getUser)) ? '' : getUser.emailAddress}
                                />
                            </View>

                            <RLButton
                                SimpleButton={true}
                                simplebuttonStyle={[buttonStyle.saveChangeBtnStyle, { alignSelf: 'center', marginVertical: 40 }]}
                                onpress={() => _onProfileUpdate()}
                                simplebuttontextStyle={buttonStyle.submitBtntxtStyle}
                                simplebuttontext={BaseText.SaveChanges}
                            />
                        </ScrollView>
                    </View>
                    {load && _renderLoader()}
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Fragment >
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(EditProfile);