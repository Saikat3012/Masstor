import React, { Fragment, useEffect, useState, useRef } from "react";
import { Animated, View, Text, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, KeyboardAvoidingView, ScrollView, Keyboard, FlatList } from "react-native";
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
    RLUploaddocument

} from 'basecomponent';

import moment from "moment";


const ScheduleTest = ({ navigation, props }) => {
    let fieldDateRef = React.createRef();
    let fieldTimeRef = React.createRef();

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
                title={BaseText.ScheduleTest}
                onpressleft={() => navigation.goBack()}
                showrightImg={true}
                rightImg={Images.infoBlue}
                roundBackWhite={true}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}

            />
        )
    }

    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={{ flex: 1 }}>
                        {_header()}
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                            {showDatePicker &&
                                <DateTimePicker
                                    testID="date"
                                    value={new Date()}
                                    mode={'date'}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                />
                            }
                            {showTimePicker &&
                                <DateTimePicker
                                    testID="time"
                                    value={new Date()}
                                    mode={'time'}
                                    is24Hour={false}
                                    display="default"
                                    onChange={onTime}
                                />
                            }
                            <RLText
                                text={BaseText.ScheduleAdmissionTest}
                                style={{
                                    color: Colors.violet, fontSize: 14, fontFamily: ENV.mfontFamilyBold,
                                    paddingTop: 20,
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center'
                                }} />

                            <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center' }}>
                                <RLText
                                    text={BaseText.SelectDate}
                                    style={{
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 90, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyRegular, marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 3
                                    }} />

                                <RLTextInput
                                    AddmissionTextInput={true}
                                    refKey={'date'}
                                    editable={false}
                                    fieldRef={fieldDateRef}
                                    placeholder={'MM-DD-YYYY'}
                                    placeholderTextColor={Colors.violet}
                                    // onEditTextField={(value) => _onChangeTextField(value, 'dob')}
                                    // onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyRegular }}
                                    textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 80}
                                    hideShowImage
                                    postFixImg={Images.upArrowBlue}
                                    onPressImg={() => {
                                        console.log("calendar click")
                                        setShowDatePicker(true);
                                    }}

                                    value={examDate}
                                />
                                <RLText
                                    text={BaseText.SelectTime}
                                    style={{
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 90, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyRegular, marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 3
                                    }} />


                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                                        <RLTextInput
                                            AddmissionTextInput={true}
                                            refKey={'time'}
                                            fieldRef={fieldTimeRef}
                                            placeholder={'00:00'}
                                            height={38}
                                            placeholderTextColor={Colors.violet}
                                            // onEditTextField={(value) => _onChangeTextField(value, 'fname')}
                                            // onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                            txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyRegular, textAlign: 'center' }}
                                            textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 25}
                                            textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 20}
                                            editable={false}
                                            value={time}
                                        />
                                    </TouchableOpacity>
                                    <View style={{ borderRadius: 8, backgroundColor: Colors.lightViolet, marginLeft: 15, flexDirection: 'row' }}>
                                        <RLButton
                                            SimpleButton={true}
                                            simplebuttonStyle={{ borderRadius: 8, backgroundColor: selectedTimeType == TIMETYPE.AM ? Colors.violet : Colors.lightViolet, width: BaseStyle.DEVICE_WIDTH / 100 * 11, height: 38, justifyContent: 'center' }}
                                            onpress={() => _onTimeType(TIMETYPE.AM)}
                                            simplebuttontextStyle={{ fontSize: 11, color: selectedTimeType == TIMETYPE.AM ? Colors.lightViolet : Colors.violet, fontFamily: ENV.mfontFamilyRegular, alignSelf: 'center' }}
                                            simplebuttontext={'AM'}
                                        />
                                        <RLButton
                                            SimpleButton={true}
                                            simplebuttonStyle={{ borderRadius: 8, backgroundColor: selectedTimeType == TIMETYPE.PM ? Colors.violet : Colors.lightViolet, width: BaseStyle.DEVICE_WIDTH / 100 * 11, height: 38, justifyContent: 'center' }}
                                            onpress={() => _onTimeType(TIMETYPE.PM)}
                                            simplebuttontextStyle={{ fontSize: 11, color: selectedTimeType == TIMETYPE.PM ? Colors.lightViolet : Colors.violet, fontFamily: ENV.mfontFamilyRegular, alignSelf: 'center' }}
                                            simplebuttontext={'PM'}
                                        />

                                    </View>

                                </View>

                                <Text style={{ paddingVertical: 15, width: BaseStyle.DEVICE_WIDTH / 100 * 90, color: Colors.blue6, fontSize: 11, fontFamily: ENV.mfontFamilyBold, marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}
                                    onPress={() => console.log("k")} >
                                    {'Reschedule '}
                                    <Text style={{ color: Colors.pink, }}>
                                        {'your admission test timeing'}
                                    </Text>

                                </Text>


                            </View>

                        </ScrollView>

                        <View style={{
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                            elevation: 10,
                            shadowColor: 'black',
                            backgroundColor: Colors.white, paddingVertical: 15
                        }}>
                            <RLButton
                                SimpleButton={true}
                                simplebuttonStyle={[buttonStyle.ContinueKycBtnStyle, { alignSelf: 'center' }]}
                                onpress={() => navigation.navigate('FeesPaymentMethod')}
                                simplebuttontextStyle={buttonStyle.ContinueKycBtntxtStyle}
                                simplebuttontext={BaseText.Proceed}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(ScheduleTest);