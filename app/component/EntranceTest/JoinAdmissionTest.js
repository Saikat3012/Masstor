import React, { Fragment, useEffect, useState, useRef } from "react";
import { Animated, View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, SafeAreaView, KeyboardAvoidingView, ScrollView, Keyboard, FlatList } from "react-native";
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


const JoinAdmissionTest = ({ navigation, props }) => {
    let fieldDateRef = React.createRef();
    let fieldTimeRef = React.createRef();

    const [selectedItem, setSelectedItem] = useState('');
    const [selectedTimeType, setSelectedTimeType] = useState(TIMETYPE.AM);
    const [showDatePicker, setShowDatePicker] = useState(false); //Show date Picker
    const [showTimePicker, setShowTimePicker] = useState(false); //Show date Picker
    const [examDate, setExamDate] = useState(''); //Show date Picker

    useEffect(() => {

    }, [])

    //================================ Start common Function ===========================================



    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            <RLHeader
                isAdmissionHeader
                backgroundColor={Colors.lightViolet}
                leftImg={Images.previousArrow}
                title={BaseText.ScheduleEntranceTest}
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
                            <View style={{ flex: 1 }}>

                                <RLText
                                    text={BaseText.TimeLeft}
                                    style={{
                                        color: Colors.violet, fontSize: 31, fontFamily: ENV.mfontFamilyLight,
                                        paddingTop: 35,
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', textAlign: 'center'
                                    }} />
                                <RLText
                                    text={`${2} Days ${23} Mins`}
                                    style={{
                                        color: Colors.pink, fontSize: 31, fontFamily: ENV.mfontFamilyBold,
                                        paddingTop: 10,
                                        paddingBottom: 5,
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', textAlign: 'center'
                                    }} />
                                <Image
                                    source={Images.exmaTimeicon}

                                    style={{ marginVertical: 40, height: 178, width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', resizeMode: 'contain' }} />

                                <RLText
                                    text={BaseText.TimeLeftTitle}
                                    style={{
                                        color: Colors.gray7, fontSize: 11, fontFamily: ENV.mfontFamilySemiBold,

                                        width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', textAlign: 'center'
                                    }} />
                            </View>

                            <View style={{ justifyContent: 'flex-end', paddingVertical: 40 }}>

                                <RLButton
                                    SimpleButton={true}
                                    simplebuttonStyle={[buttonStyle.ContinueKycBtnStyle, { alignSelf: 'center', backgroundColor: Colors.lightViolet }]}
                                    // onpress={() => _onClickSubmit()}
                                    simplebuttontextStyle={[buttonStyle.ContinueKycBtntxtStyle, { color: Colors.violet }]}
                                    simplebuttontext={BaseText.AttemptTest}
                                />
                                <RLButton
                                    SimpleButton={true}
                                    simplebuttonStyle={[buttonStyle.ContinueKycBtnStyle, { alignSelf: 'center', marginTop: 10 }]}
                                    // onpress={() => _onClickSubmit()}
                                    simplebuttontextStyle={buttonStyle.ContinueKycBtntxtStyle}
                                    simplebuttontext={BaseText.PreviewTest}
                                />
                            </View>
                        </ScrollView>
                    </View>

                </SafeAreaView>
            </KeyboardAvoidingView>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(JoinAdmissionTest);