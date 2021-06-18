import React, { Fragment, useEffect, useState, useRef } from "react";
import { Animated, View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, SafeAreaView, KeyboardAvoidingView, ScrollView, Keyboard, FlatList } from "react-native";
import { connect } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from 'react-native-actionsheet'
import { TIMETYPE } from 'constants/Enum';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLRoundList,
    RLSchoolInfoList,
    RLStandardModal,
    RLSchoolSearchModal,
    RLUploaddocument,
    RLCollapsibleView,
    RLFlatList,

} from 'basecomponent';

import moment from "moment";


const FeesPaymentMethod = ({ navigation, props }) => {
    let fieldDateRef = React.createRef();
    let fieldTimeRef = React.createRef();
    const paymentMethods = [
        { id: 1, title: 'Credit/Debit Card' },
        { id: 2, title: 'Net Banking' },
        { id: 3, title: 'UPI' },
    ]
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedTimeType, setSelectedTimeType] = useState(TIMETYPE.AM);
    const [showDatePicker, setShowDatePicker] = useState(false); //Show date Picker
    const [showTimePicker, setShowTimePicker] = useState(false); //Show date Picker
    const [examDate, setExamDate] = useState(''); //Show date Picker
    const [time, setTime] = useState(''); //Show date Picker

    useEffect(() => {

    }, [])

    //================================ Start common Function ===========================================
    const _onTimeType = (btnType) => {
        switch (btnType) {
            case TIMETYPE.AM:
                setSelectedTimeType(TIMETYPE.AM)
                break;
            case TIMETYPE.PM:
                setSelectedTimeType(TIMETYPE.PM)
                break;
            default:
                break;
        }
    }

    //get Calender Selcted Date
    const onChange = (event, selectedDate) => {
        setShowDatePicker(false);
        var YYYY = selectedDate.getFullYear();
        var MM = selectedDate.getMonth() + 1;
        var DD = selectedDate.getDate();
        if (DD < 10) {
            DD = `0${DD}`;
        }

        if (MM < 10) {
            MM = `0${MM}`;
        }
        setExamDate(`${MM}-${DD}-${YYYY}`)
    };

    const onTime = (event, selectedDate) => {
        setShowTimePicker(false);
        setTime(moment(selectedDate).format("hh:mm"))
        // console.log(moment(selectedDate).format("hh:mm"))
    };
    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            <RLHeader
                isAdmissionHeader
                backgroundColor={Colors.lightViolet}
                leftImg={Images.previousArrow}
                title={BaseText.EntranceFees}
                onpressleft={() => navigation.goBack()}
                showrightImg={true}
                rightImg={Images.infoBlue}
                roundBackWhite={true}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}

            />
        )
    }

    //Render Fee Structure Item
    const _renderPymentMethodItem = ({ item, index }) => {
        return (
            <View style={styles.cardView}>
                <RLCollapsibleView
                    active={true}
                    activeBGColor={Colors.blue1}
                    inActiveBGColor={Colors.lightViolet}
                    isSimpleNInverted
                    text={item.title}
                    // text={'hhhhh'}
                    headerheight={45}
                    activeTextStyle={[styles.fsHeaderTextStyle, { color: Colors.white1 }]}
                    inActiveTextStyle={[styles.fsHeaderTextStyle, { color: Colors.pink }]}
                    child={
                        <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white1, }}>
                            <Text style={{ paddingVertical: 10, fontFamily: ENV.mfontFamilyRegular, fontSize: 13, color: Colors.violet }}>{'Card Number'}<Text style={{ color: Colors.red1 }} >{'*'}</Text></Text>

                            <View style={{ flexDirection: 'row', }}>
                                <RLTextInput
                                    AddmissionTextInput={true}
                                    // refKey={'date'}
                                    editable={true}
                                    // fieldRef={fieldDateRef}
                                    placeholder={'0000  0000  0000  0000'}
                                    placeholderTextColor={Colors.pink}
                                    onEditTextField={(value) => console.log(value)}
                                    // onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyRegular }}
                                    textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 84}
                                    textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 88}
                                    txtColor={Colors.pink}
                                // opacity={1}
                                // hideShowImage
                                // postFixImg={Images.greenCheckmark}
                                // onPressImg={() => {
                                //     console.log("calendar click")
                                //     setShowDatePicker(true);
                                // }}

                                // value={examDate}
                                />
                                <Image source={Images.greenCheckmark} style={{ right: 6, alignSelf: 'center', height: 14, width: 13, resizeMode: 'contain', justifyContent: 'flex-end' }} />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 30, }}>
                                    <Text style={{ paddingVertical: 10, width: BaseStyle.DEVICE_WIDTH / 100 * 30, fontFamily: ENV.mfontFamilyRegular, fontSize: 13, color: Colors.violet }}>{'Expiration Date'}<Text style={{ color: Colors.red1 }} >{'*'}</Text></Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <RLTextInput
                                            AddmissionTextInput={true}
                                            // refKey={'date'}
                                            editable={false}
                                            // fieldRef={fieldDateRef}
                                            placeholder={'MM / YY'}
                                            placeholderTextColor={Colors.pink}
                                            // onEditTextField={(value) => _onChangeTextField(value, 'dob')}
                                            // onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                            txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyRegular }}
                                            textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 24}
                                            textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 30}
                                            txtColor={Colors.pink}
                                        // hideShowImage
                                        // postFixImg={Images.greenCheckmark}
                                        // onPressImg={() => {
                                        //     console.log("calendar click")
                                        //     setShowDatePicker(true);
                                        // }}

                                        // value={examDate}
                                        />
                                        <Image source={Images.greenCheckmark} style={{ right: 6, alignSelf: 'center', height: 14, width: 13, resizeMode: 'contain', justifyContent: 'flex-end' }} />
                                    </View>
                                </View>
                                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 25, marginRight: 8 }}>
                                    <Text style={{ paddingVertical: 10, width: BaseStyle.DEVICE_WIDTH / 100 * 25, fontFamily: ENV.mfontFamilyRegular, fontSize: 13, color: Colors.violet }}>{'CVV'}<Text style={{ color: Colors.red1 }} >{'*'}</Text></Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <RLTextInput
                                            AddmissionTextInput={true}
                                            // refKey={'date'}
                                            editable={false}
                                            // fieldRef={fieldDateRef}
                                            placeholder={'***'}
                                            secureTextEntry={true}
                                            placeholderTextColor={Colors.pink}
                                            // onEditTextField={(value) => _onChangeTextField(value, 'dob')}
                                            // onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                            txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyRegular }}
                                            textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 21}
                                            textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 25}
                                            txtColor={Colors.pink}
                                        // hideShowImage
                                        // postFixImg={Images.greenCheckmark}
                                        // onPressImg={() => {
                                        //     console.log("calendar click")
                                        //     setShowDatePicker(true);
                                        // }}

                                        // value={examDate}
                                        />
                                        <Image source={Images.greenCheckmark} style={{ right: 6, alignSelf: 'center', height: 14, width: 13, resizeMode: 'contain', justifyContent: 'flex-end' }} />
                                    </View>
                                </View>
                            </View>
                            <Text style={{ paddingVertical: 10, fontFamily: ENV.mfontFamilyRegular, fontSize: 13, color: Colors.violet }}>{`${`Card Holder's Name`}`}<Text style={{ color: Colors.red1 }} >{'*'}</Text></Text>
                            <View style={{ flexDirection: 'row', }}>
                                <RLTextInput
                                    AddmissionTextInput={true}
                                    // refKey={'date'}
                                    editable={false}
                                    // fieldRef={fieldDateRef}
                                    placeholder={'Enter Card Holder Name'}
                                    placeholderTextColor={Colors.pink}
                                    // onEditTextField={(value) => _onChangeTextField(value, 'dob')}
                                    // onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyRegular }}
                                    textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 84}
                                    textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 88}
                                    txtColor={Colors.pink}
                                // hideShowImage
                                // postFixImg={Images.greenCheckmark}
                                // onPressImg={() => {
                                //     console.log("calendar click")
                                //     setShowDatePicker(true);
                                // }}

                                // value={examDate}
                                />
                                <Image source={Images.greenCheckmark} style={{ right: 6, alignSelf: 'center', height: 14, width: 13, resizeMode: 'contain', justifyContent: 'flex-end' }} />
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }

    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={{ flex: 1 }}>
                        {_header()}
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

                            <RLText
                                text={BaseText.Checkout}
                                style={{
                                    color: Colors.violet, fontSize: 14, fontFamily: ENV.mfontFamilyBold,
                                    paddingTop: 20,
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center'
                                }} />
                            <RLButton
                                SimpleButton={true}
                                simplebuttonStyle={{
                                    backgroundColor: Colors.pink, alignSelf: 'center', borderRadius: 12, fontSize: 16, justifyContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: 20,
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 90, height: 45
                                }}
                                // onpress={() => _onClickSubmit()}
                                simplebuttontextStyle={[buttonStyle.ContinueKycBtntxtStyle, { fontFamily: ENV.mfontFamilyMedium, }]}
                                simplebuttontext={BaseText.OrderSummary}
                            />
                            <RLText
                                text={BaseText.ChoosePaymentMethods}
                                style={{
                                    color: Colors.violet, fontSize: 14, fontFamily: ENV.mfontFamilyBold,
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center'
                                }} />

                            <View style={{ alignSelf: 'center', }}>
                                <RLFlatList
                                    key={'payment'}
                                    data={paymentMethods}
                                    style={{ flex: 1, marginTop: 10, }}
                                    renderItem={({ item, index }) => _renderPymentMethodItem({ item, index })}
                                />
                            </View>

                        </ScrollView>

                        <View style={{
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                            elevation: 10,
                            shadowColor: 'black',
                            backgroundColor: Colors.white, paddingVertical: 15,

                        }}>
                            <RLButton
                                SimpleButton={true}
                                simplebuttonStyle={[buttonStyle.ContinueKycBtnStyle, { alignSelf: 'center' }]}
                                onpress={() => navigation.navigate('JoinAdmissionTest')}
                                simplebuttontextStyle={buttonStyle.ContinueKycBtntxtStyle}
                                simplebuttontext={'Pay Rs. 500'}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        height: BaseStyle.DEVICE_HEIGHT / 100 * 30,
    },
    sectionWrapper: {
        alignItems: 'flex-start',
        // marginHorizontal: 15,
        marginVertical: 15,
        alignContent: 'center',
    },
    selectedSectionTitle: {
        fontFamily: ENV.mfontFamilyBold,
        fontSize: 13,
        color: Colors.pink,
    },
    unSelectedSectionTitle: {
        fontFamily: ENV.mfontFamilySemiBold,
        fontSize: 13,
        color: Colors.violet,
    },
    sectionUnderline: {
        backgroundColor: Colors.pink,
        borderRadius: 50,
        marginVertical: 2,
        height: 2,
        width: '100%',
    },
    titleText: {
        fontFamily: ENV.mfontFamilyExtraBold,
        fontSize: 13,
        color: Colors.violet,
    },
    btnWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 7,
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2,
    },
    backgroundVideo: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        height: BaseStyle.DEVICE_HEIGHT / 100 * 25,
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        // backgroundColor: 'yellow',
        borderRadius: 20,
        marginTop: 10,
        alignSelf: 'center',
    },
    cardView: {
        borderRadius: 12,
        width: BaseStyle.DEVICE_WIDTH / 100 * 90,
        // height: BaseStyle.DEVICE_HEIGHT / 100 * 40,
        backgroundColor: Colors.white,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 2.00,
        // elevation: 5,
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 1.5,
        // marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 1,
        overflow: 'hidden',
    },
    fsHeaderTextStyle: {
        fontSize: 11,
        fontFamily: ENV.mfontFamilyBold,
        color: Colors.white,
        // flex: 1,
        // flexWrap: 'wrap',
    },
    fsLabelTextStyle: {
        fontSize: 9,
        fontFamily: ENV.mfontFamilyBold,
        color: Colors.blue1,
        // flex: 1,
        // flexWrap: 'wrap',
    },
    fsValueTextStyle: {
        fontSize: 9,
        fontFamily: ENV.mfontFamilySemiBold,
        color: Colors.pink,
        // flex: 1,
        // flexWrap: 'wrap',
    },
    ansTextStyle: {
        fontSize: 8,
        fontFamily: ENV.mfontFamilyRegular,
        color: Colors.pink,
    },
    stuImageStyle: {
        height: 40,
        width: 40,
        borderRadius: 500,
        marginRight: 5,
        backgroundColor: Colors.lightViolet,
    },
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: Colors.white1Opa50,
        width: BaseStyle.DEVICE_WIDTH,
        height: BaseStyle.DEVICE_HEIGHT,
    },
    modalWrapper: {
        backgroundColor: Colors.white,
        // flex: 1,
        minHeight: BaseStyle.DEVICE_HEIGHT,
        borderRadius: 50,
        padding: 20,
        // height: BaseStyle.DEVICE_HEIGHT,
    },
    optionWrapper: {
        borderColor: Colors.pink,
        justifyContent: 'center',
        borderRadius: 50,
        height: 18,
        width: 18,
        borderWidth: 2,
    },
    selectedOptionWrapper: {
        borderColor: Colors.green2,
        justifyContent: 'center',
        borderRadius: 50,
        height: 19,
        width: 19,
        borderWidth: 2,
    },
    option: {
        backgroundColor: Colors.green2,
        borderRadius: 50,
        height: 10,
        width: 10,
        alignSelf: 'center',
    },
    learningOptionWrapper: {
        height: BaseStyle.DEVICE_WIDTH / 100 * 25,
        width: BaseStyle.DEVICE_HEIGHT / 100 * 22,
        borderRadius: 16,
        borderColor: Colors.black,
        borderWidth: 0.3,
        // padding: 10,
        overflow: 'hidden',
    },
});
const select = (store) => {
    return store;
}
export default connect(select)(FeesPaymentMethod);