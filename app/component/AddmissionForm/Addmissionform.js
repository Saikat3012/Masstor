import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, KeyboardAvoidingView, ScrollView, Keyboard, TouchableOpacity, Platform } from "react-native";
import { connect } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import Validation from 'utils/BaseValidation';
import { Picker } from '@react-native-picker/picker';
import { STANDARDTYPE, BOARDTYPE, LEARINGMODETYPE } from 'constants/Enum';
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
    RLDropDownPicker,
    RLSchoolForYouList
} from 'basecomponent';

let validField = "";

const Addmissionform = ({ navigation, props }) => {
    let fieldFNameRef = React.createRef();
    let fieldLNameRef = React.createRef();
    let fieldDOBRef = React.createRef();
    let fieldBlGroupRef = React.createRef();
    let fieldBMarkRef = React.createRef();
    let fieldMobileRef = React.createRef();
    let fieldHeightRef = React.createRef();
    let fieldEmailRef = React.createRef();
    let fieldCurSchoolRef = React.createRef();
    let fieldFatherNameRef = React.createRef();
    let fieldMotherNameRef = React.createRef();
    let fieldFatherMobileRef = React.createRef();
    let fieldMotherMobileRef = React.createRef();
    let fieldFatherOccuRef = React.createRef();
    let fieldMotherOccuRef = React.createRef();
    let fieldFatherIncomRef = React.createRef();
    let fieldMotherIncomRef = React.createRef();

    let fieldAdd1Ref = React.createRef();
    let fieldAdd2Ref = React.createRef();
    let fieldCityRef = React.createRef();
    let fieldPinCodeRef = React.createRef();


    const relationShipPicker = [
        { id: 1, label: '*Applicant', value: 0 },
        { id: 2, label: 'Self', value: 1 },
        { id: 3, label: 'Parent', value: 2 }
    ]
    const statePicker = [
        { id: 1, label: 'State', value: 0 },
        { id: 2, label: 'GUj', value: 1 },
        { id: 3, label: 'Up', value: 2 },
        { id: 3, label: 'MH', value: 2 }
    ]
    const genderPicker = [
        { id: 1, label: 'Gender', value: 0 },
        { id: 2, label: 'Male', value: 1 },
        { id: 3, label: 'Female', value: 2 },
        { id: 3, label: 'Others', value: 3 }
    ]
    const standardPicker = [
        { id: 0, label: 'Admission In', value: -1 },
        { id: 1, label: 'Nur', value: STANDARDTYPE.NUR },
        { id: 2, label: 'KG', value: STANDARDTYPE.KG },
        { id: 3, label: 'I', value: STANDARDTYPE.I },
        { id: 4, label: 'II', value: STANDARDTYPE.II },
        { id: 5, label: 'III', value: STANDARDTYPE.III },
        { id: 6, label: 'IV', value: STANDARDTYPE.IV },
        { id: 7, label: 'V', value: STANDARDTYPE.V },
        { id: 8, label: 'VI', value: STANDARDTYPE.VI },
        { id: 9, label: 'VII', value: STANDARDTYPE.VII },
        { id: 10, label: 'VIII', value: STANDARDTYPE.VIII },
        { id: 11, label: 'IX', value: STANDARDTYPE.IX },
        { id: 12, label: 'X', value: STANDARDTYPE.X },
        { id: 13, label: 'XI', value: STANDARDTYPE.XI },
        { id: 14, label: 'XII', value: STANDARDTYPE.XII }
    ]
    const standardPreviousPicker = [
        { id: 1, label: 'Nur', value: STANDARDTYPE.NUR },
        { id: 2, label: 'KG', value: STANDARDTYPE.KG },
        { id: 3, label: 'I', value: STANDARDTYPE.I },
        { id: 4, label: 'II', value: STANDARDTYPE.II },
        { id: 5, label: 'III', value: STANDARDTYPE.III },
        { id: 6, label: 'IV', value: STANDARDTYPE.IV },
        { id: 7, label: 'V', value: STANDARDTYPE.V },
        { id: 8, label: 'VI', value: STANDARDTYPE.VI },
        { id: 9, label: 'VII', value: STANDARDTYPE.VII },
        { id: 10, label: 'VIII', value: STANDARDTYPE.VIII },
        { id: 11, label: 'IX', value: STANDARDTYPE.IX },
        { id: 12, label: 'X', value: STANDARDTYPE.X },
        { id: 13, label: 'XI', value: STANDARDTYPE.XI },
        { id: 14, label: 'XII', value: STANDARDTYPE.XII }
    ]
    const [showButton, setshowButton] = useState(true);
    const [fName, setFName] = useState('');
    const [isfNameFail, setIsfNameFail] = useState(false);
    const [lName, setLName] = useState('');
    const [islNameFail, setIslNameFail] = useState(false);
    const [isdobFail, setIsdobFail] = useState();
    const [bloodg, setBloodg] = useState('');
    const [isbloodgFail, setIsbloodgFail] = useState();
    const [bornmark, setBornmark] = useState('');
    const [isbbornmarkFail, setIsbornmarkFail] = useState();
    const [mobile, setMobile] = useState('');
    const [ismobileFail, setIsmobileFail] = useState(false);
    const [height, setHeight] = useState('');
    const [isheightFail, setIsheightFail] = useState(false);
    const [email, setEmail] = useState('');
    const [isemailFail, setIsemailFail] = useState(false);
    const [currentSchool, setCurrentSchool] = useState('');
    const [iscurrentSchoolFail, setIscurrentSchoolFail] = useState(false);
    const [fatherName, setFatherName] = useState('');
    const [isfatherNameFail, setIsfatherNameFail] = useState(false);
    const [motherName, setMotherName] = useState('');
    const [ismotherNameFail, setIsmotherNameFail] = useState(false);
    const [fatherMobile, setFatherMobile] = useState('');
    const [isfatherMobileFail, setIsfatherMobileFail] = useState(false);
    const [motherMobile, setMotherMobile] = useState('');
    const [ismotherMobileFail, setIsmotherMobileFail] = useState(false);
    const [fatherOccu, setFatherOccu] = useState('');
    const [isfatherOccuFail, setIsfatherOccuFail] = useState(false);
    const [motherOccu, setMotherOccu] = useState('');
    const [ismotherOccuFail, setIsmotherOccuFail] = useState(false);
    const [fatherIncom, setFatherIncom] = useState('');
    const [isfatherIncomFail, setIsfatherIncomFail] = useState(false);
    const [motherIncom, setmotherIncom] = useState('');
    const [ismotherIncomFail, setIsmotherIncomFail] = useState(false);
    const [address1, setAddress1] = useState('');
    const [isaddress1Fail, setIsaddress1Fail] = useState(false);
    const [address2, setAddress2] = useState('');
    const [isaddress2Fail, setIsaddress2Fail] = useState(false);
    const [city, setCity] = useState('');
    const [iscityFail, setIscityFail] = useState(false);
    const [pincode, setPincode] = useState('');
    const [ispincodeFail, setIspincodeFail] = useState(false);


    const [otp, setOtp] = useState('');
    const [isotpFail, setIsotpFail] = useState(false);
    const [qulification, setQulification] = useState('');
    const [isqulificationFail, setIsqulificationFail] = useState(false);
    const [std, setStd] = useState('');
    const [isstdFail, setIsstdFail] = useState(false);
    const [iam, setIam] = useState('');
    const [isiamFail, setIsiamFail] = useState(false);
    const [gMobile, setGMobile] = useState('');
    const [isgMobileFail, setIsgMobileFail] = useState(false);
    const [occupation, setOccupation] = useState('');
    const [isoccupationFail, setIsoccupationFail] = useState(false);
    const [state, setState] = useState('');
    const [isstateFail, setIsstateFail] = useState(false);

    const [selectedRelation, setSelectedRelation] = useState(); //Realtion Picker
    const [selectedGender, setSelectedGender] = useState(); //Gender Picker
    const [selectedInStd, setSelectedInStd] = useState(); //Standard In Picker
    const [selectedPreviousStd, setSelectedPreviousStd] = useState(); //Standard Previous Picker
    const [selectedState, setSelectedState] = useState(); //Standard Previous Picker
    const [showDate, setShowDate] = useState(false); //Show date Picker
    const [dob, setDob] = useState(''); //Show date Picker


    useEffect(() => {
        console.log(showDate);
        if (validField == "fname" && fName != "") {
            _validateInputFields('fname')
        }
        if (validField == "lname" && lName != "") {
            _validateInputFields('lname')
        }
        if (validField == "mobile" && mobile != "") {
            _validateInputFields('mobile')
        }
        if (validField == "otp" && otp != "") {
            _validateInputFields('otp')
        }
        if (validField == "quli" && qulification != "") {
            _validateInputFields('quli')
        }
        if (validField == "std" && std != "") {
            _validateInputFields('std')
        }
        if (validField == "iam" && iam != "") {
            _validateInputFields('iam')
        }
        if (validField == "gmobile" && gMobile != "") {
            _validateInputFields('gmobile')
        }
        if (validField == "occu" && occupation != "") {
            _validateInputFields('occu')
        }
        if (validField == "state" && state != "") {
            _validateInputFields('state')
        }
        if (validField == "city" && city != "") {
            _validateInputFields('city')
        }
        console.log("Picker", selectedPreviousStd);
        console.log("Picker", typeof selectedRelation);
        // consle.log("Validation", Validation.emailPatternvalidtion);
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        };


    }, [fName, lName, mobile, otp, qulification, std, iam, gMobile, occupation, state, city, selectedRelation])
    //================================ Start common Function ===========================================
    //OnChange TextInput


    const _onChangeTextField = (value, type) => {
        if (type == "fname") {
            setFName(value)
            // validField = "fname";
        }
        else if (type == "lname") {
            setLName(value)
            // validField = "lname";
        }
        else if (type == "dob") {
            setDob(value)
            // validField = "lname";
        }
        else if (type == "bloodgroup") {
            setBloodg(value)
            // validField = "lname";
        }
        else if (type == "bornmark") {
            setBornmark(value)
            // validField = "lname";
        }
        else if (type == "mobile") {
            setMobile(value)
            // validField = "lname";
        }
        else if (type == "height") {
            setHeight(value)
            // validField = "lname";
        }
        else if (type == "email") {
            console.log("Email,", value);
            setEmail(value)
            validField = "lname";
        }
        else if (type == "currentSchool") {
            setCurrentSchool(value)
            // validField = "lname";
        }
        else if (type == "fatherName") {
            setFatherName(value)
            // validField = "lname";
        }
        else if (type == "motherName") {
            setMotherName(value)
            // validField = "mobile";
        }
        else if (type == "fatherMobile") {
            setFatherMobile(value)
            // validField = "mobile";
        }
        else if (type == "motherMobile") {
            setMotherMobile(value)
            // validField = "mobile";
        }
        else if (type == "fatherOccu") {
            setFatherOccu(value)
            // validField = "mobile";
        }
        else if (type == "motherOccu") {
            setMotherOccu(value)
            // validField = "mobile";
        }
        else if (type == "fatherIncom") {
            setFatherIncom(value)
            // validField = "mobile";
        }
        else if (type == "motherIncom") {
            setmotherIncom(value)
            // validField = "mobile";
        }
        else if (type == "address1") {
            setAddress1(value)
            // validField = "mobile";
        }
        else if (type == "address2") {
            setAddress2(value)
            // validField = "mobile";
        }
        else if (type == "city") {
            setCity(value)
            // validField = "mobile";
        }

        else if (type == "pincode") {
            setPincode(value)
            // validField = "mobile";
        }


        else if (type == "otp") {
            setOtp(value)
            validField = "otp";
        }
        else if (type == "quli") {
            setQulification(value)
            validField = "quli";
        }
        else if (type == "std") {
            setStd(value)
            validField = "std";
        }
        else if (type == "iam") {
            setIam(value)
            validField = "iam";
        }
        else if (type == "gmobile") {
            setGMobile(value)
            validField = "gmobile";
        }
        else if (type == "occu") {
            setOccupation(value)
            validField = "occu";
        }
        else if (type == "state") {
            setState(value)
            validField = "state";
        }
        else if (type == "city") {
            setCity(value)
            validField = "city";
        }
    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }

    const _isEmailCheck = (mobile) => {
        if (Validation.emailPatternvalidtion.test(mobile)) {
            return false;
        }
        else {
            return true;
        }
    }
    const _isMobileCheck = (mobile) => {
        if (Validation.phonenumbervalidtion.test(mobile)) {
            return false;
        }
        else {
            return true;
        }
    }
    const _validateInputFields = (type) => {
        if (type == 'All') {
            if ((fName.length == 0 || !Validation.namePatternvalidtion.test(fName)) || (lName.length == 0 || !Validation.namePatternvalidtion.test(lName)) || (dob == '') || (bloodg.length == 0) || (bornmark.length == 0) || (mobile.length == 0) || (height.length == 0) || (email.length == 0 || !Validation.emailPatternvalidtion.test(email)) || (currentSchool.length == 0) || (fatherName.length == 0 || !Validation.namePatternvalidtion.test(fatherName)) || (motherName.length == 0 || !Validation.namePatternvalidtion.test(motherName)) || (fatherMobile.length == 0) || (motherMobile.length == 0) || (fatherOccu.length == 0) || (motherOccu.length == 0) || (fatherIncom.length == 0) || (motherIncom.length == 0) || (address1.length == 0) || (address2.length == 0) || (city.length == 0) || (pincode.length == 0) || (selectedRelation == 0 || selectedRelation == undefined) || (selectedGender == 0 || selectedGender == undefined) || (selectedInStd == -1 || selectedInStd == undefined) || (selectedState == 0 || selectedState == undefined)) {
                // setIsfNameFail(true)
                // setIslNameFail(true)
                // setIsdobFail(true)
                // setIsbloodgFail(true)
                // setIsbornmarkFail(true)
                // setIsmobileFail(true)
                // setIsheightFail(true)
                // setIsemailFail(true)
                // setIscurrentSchoolFail(true)
                // setIsfatherNameFail(true)
                // setIsmotherNameFail(true)
                // setIsfatherMobileFail(true)
                // setIsmotherMobileFail(true)
                // setIsfatherOccuFail(true)
                // setIsmotherOccuFail(true)
                // setIsfatherIncomFail(true)
                // setIsmotherIncomFail(true)
                // setIsaddress1Fail(true)
                // setIsaddress2Fail(true)
                // setIscityFail(true)
                // setIspincodeFail(true)
                return true
            }
            else {
                return false
            }
        }
    }
    //Validation Test
    const _validateInputFields1 = (type) => {
        if (type == 'All') {
            if ((city.length == 0) || (state.length == 0) || (occupation.length == 0) || (gMobile.length == 0) || (iam.length == 0) || (std.length == 0) || (qulification.length == 0) || (otp.length == 0 || otp.length != 6) || (mobile.length == 0) || (fName.length == 0 || !Validation.namePatternvalidtion.test(fName)) || (lName.length == 0 || !Validation.namePatternvalidtion.test(lName))) {
                setIsfNameFail(true)
                setIslNameFail(true)
                setIsmobileFail(true)
                setIsotpFail(true)
                setIsqulificationFail(true)
                setIsstdFail(true)
                setIsiamFail(true)
                setIsgMobileFail(true)
                setIsoccupationFail(true)
                setIsstateFail(true)
                setIscityFail(true)

                if (fName.length == 0 || !Validation.namePatternvalidtion.test(fName)) {
                    setIsfNameFail(true)
                } else {
                    setIsfNameFail(false)
                }

                if (lName.length == 0 || !Validation.namePatternvalidtion.test(lName)) {
                    setIslNameFail(true)
                } else {
                    setIslNameFail(false)
                }

                // if (mobile.length == 0) {
                //     setIsmobileFail(true)
                // } else {
                //     setIsmobileFail(false)
                // }
                if (!_isEmailCheck(mobile)) {
                    // console.log("yes email wrong");
                    setIsmobileFail(false)
                }
                else if (!_isMobileCheck(mobile)) {
                    // console.log("yes mobile wrong");
                    setIsmobileFail(false)
                }
                else {
                    setIsmobileFail(true)
                    // console.log("no");
                }

                if (otp.length == 0 || otp.length != 6) {
                    setIsotpFail(true)
                } else {
                    setIsotpFail(false)
                }

                if (qulification.length == 0) {
                    setIsqulificationFail(true)
                } else {
                    setIsqulificationFail(false)
                }

                if (std.length == 0) {
                    setIsstdFail(true)
                } else {
                    setIsstdFail(false)
                }

                if (iam.length == 0) {
                    setIsiamFail(true)
                } else {
                    setIsiamFail(false)
                }

                if (gMobile.length == 0) {
                    setIsgMobileFail(true)
                } else {
                    setIsgMobileFail(false)
                }

                if (occupation.length == 0) {
                    setIsoccupationFail(true)
                } else {
                    setIsoccupationFail(false)
                }
                if (state.length == 0) {
                    setIsstateFail(true)
                } else {
                    setIsstateFail(false)
                }
                if (city.length == 0) {
                    setIscityFail(true)
                } else {
                    setIscityFail(false)
                }
                return true
            } else {
                return false
            }
        } else {
            if (type == 'fname') {
                setIsfNameFail(fName.length == 0 || !Validation.namePatternvalidtion.test(fName))
            } else if (type == 'lname') {
                setIslNameFail(lName.length == 0 || !Validation.namePatternvalidtion.test(lName))
            } else if (type == 'mobile') {
                // setIsmobileFail(mobile.length == 0)
                if (!_isEmailCheck(mobile)) {
                    // console.log("yes email wrong");
                    setIsmobileFail(false)
                }
                else if (!_isMobileCheck(mobile)) {
                    // console.log("yes mobile wrong");
                    setIsmobileFail(false)
                }
                else {
                    setIsmobileFail(true)
                    // console.log("no");
                }
            } else if (type == 'otp') {
                setIsotpFail(otp.length == 0 || otp.length != 6)
            } else if (type == 'quli') {
                setIsqulificationFail(qulification.length == 0)
            } else if (type == 'std') {
                setIsstdFail(std.length == 0)
            } else if (type == 'iam') {
                setIsiamFail(iam.length == 0)
            } else if (type == 'gmobile') {
                setIsgMobileFail(gMobile.length == 0)
            } else if (type == 'occu') {
                setIsoccupationFail(occupation.length == 0)
            } else if (type == 'state') {
                setIsstateFail(state.length == 0)
            } else if (type == 'city') {
                setIscityFail(city.length == 0)
            }
        }
    }
    const _keyboardDidShow = () => {
        setshowButton(false);
    };

    const _keyboardDidHide = () => {
        setshowButton(true);
    };

    const _onClickKycProcess = () => {
        if (!_validateInputFields('All')) {
            navigation.navigate("Documentupload");
        }
        else {
            alert("Please fill up All detail")
        }
    }
    //get Calender Selcted Date
    const onChange = (event, selectedDate) => {
        setShowDate(false);
        var YYYY = selectedDate.getFullYear();
        var MM = selectedDate.getMonth() + 1;
        var DD = selectedDate.getDate();
        if (DD < 10) {
            DD = `0${DD}`;
        }

        if (MM < 10) {
            MM = `0${MM}`;
        }
        setDob(`${DD}-${MM}-${YYYY}`)
    };
    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            <RLHeader
                isAdmissionHeader
                backgroundColor={Colors.lightViolet}
                leftImg={Images.previousArrow}
                title={BaseText.spSingleKYC}
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
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' && 'padding'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={{ flex: 1, backgroundColor: Colors.white }}>
                        {_header()}
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                            {showDate &&
                                <DateTimePicker
                                    testID="date"
                                    value={new Date()}
                                    mode={'date'}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                />
                            }

                            <View style={{
                                // shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                                // shadowOffset: { width: 0, height: 0 },
                                // shadowOpacity: 0.5,
                                // shadowRadius: 2,
                                // elevation: 7,
                                backgroundColor: Colors.white,
                                paddingVertical: 18
                                // marginVertical: 10
                                // marginBottom: 10
                            }}>
                                <RLSchoolForYouList
                                    schoolname={'K.R. Mangalam World School'}
                                    schoollocation={'Noida, UP'}
                                    standard={'Std 4th-10th'}
                                    fees={'Rs 500-10000 '}
                                    vistor={'0'}
                                    boardType={'CBSC'}
                                    schoolImg={Images.schoolImage}

                                />
                            </View>
                            <View style={{
                                shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 7,
                                backgroundColor: Colors.white,
                                paddingVertical: 20

                            }}>
                                <RLText
                                    text={BaseText.Completeyourapplicationform}
                                    style={{
                                        alignSelf: 'center', color: Colors.violet, fontSize: 14, fontFamily: ENV.mfontFamilyBold, width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                    }} />
                                <RLText
                                    text={BaseText.admissioniFormInfo}
                                    style={{
                                        paddingTop: 10,
                                        alignSelf: 'center', color: Colors.gray7, fontSize: 13, fontFamily: ENV.poppinsfontFamilyMedium, width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                    }} />

                                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row', marginTop: 5, }}>
                                    <RLDropDownPicker
                                        selectedValue={selectedRelation}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setSelectedRelation(itemValue),
                                                console.log(itemValue)
                                        }
                                        }
                                        pickerArray={relationShipPicker}
                                    />
                                    <RLText
                                        text={BaseText.selectRelationShipSelect}
                                        style={{
                                            marginLeft: BaseStyle.DEVICE_WIDTH / 100 * 5,
                                            alignSelf: 'center', color: Colors.gray7, fontSize: 11, fontFamily: ENV.poppinsfontFamilyMedium, width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                        }} />
                                </View>
                            </View>

                            <RLText
                                text={BaseText.studentInfomation}
                                style={{
                                    alignSelf: 'center', color: Colors.violet, fontSize: 14, fontFamily: ENV.mfontFamilyBold, width: BaseStyle.DEVICE_WIDTH / 100 * 90, paddingTop: 22, paddingBottom: 5
                                }} />

                            <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}>
                                    <RLText
                                        text={BaseText.FirstName}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                    <RLText
                                        text={BaseText.LastName}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                            color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'fname'}
                                        fieldRef={fieldFNameRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'fname')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                    />
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'lname'}
                                        fieldRef={fieldLNameRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'lname')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}>
                                    <RLText
                                        text={BaseText.dateofBirth}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                    <RLText
                                        text={BaseText.gender}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                            color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'dob'}
                                        fieldRef={fieldDOBRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'dob')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        // defaultValue={'Aman'}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 32}
                                        hideShowImage
                                        // onPressImg={() => alert("jj")}
                                        // onFocus={() => alert("lll")}
                                        editable={false}
                                        onPressImg={() => {
                                            console.log("calendar click")
                                            setShowDate(true)
                                        }}
                                        postFixImg={Images.calendar}
                                        // defaultValue={'111'}
                                        value={dob}
                                    />

                                    <RLDropDownPicker
                                        selectedValue={selectedGender}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setSelectedGender(itemValue),
                                                console.log(itemValue)
                                        }
                                        }
                                        pickerArray={genderPicker}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}>
                                    <RLText
                                        text={BaseText.bloodGroup}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                    <RLText
                                        text={BaseText.birthMark}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                            color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'bloodgroup'}
                                        fieldRef={fieldBlGroupRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'bloodgroup')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldBMarkRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                    />
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'bornmark'}
                                        fieldRef={fieldBMarkRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'bornmark')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldMobileRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}>
                                    <RLText
                                        text={BaseText.MobileNumber}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                    <RLText
                                        text={BaseText.heighcm}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                            color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'mobile'}
                                        fieldRef={fieldMobileRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'mobile')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldHeightRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                        keyboardType="phone-pad"
                                        maxLength={10}
                                        showPerfixtxt={true}
                                        prefixtxtx={'+91'}
                                        prefixtxtStyle={{ color: Colors.violet, opacity: 0.7, alignSelf: 'center' }}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 29}
                                    />
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'height'}
                                        fieldRef={fieldHeightRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'height')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldEmailRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}

                                    />
                                </View>

                                <RLText
                                    text={BaseText.emailAddress}
                                    style={{
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium, marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2
                                    }} />
                                <RLTextInput
                                    AddmissionTextInput={true}
                                    refKey={'email'}
                                    fieldRef={fieldEmailRef}
                                    onEditTextField={(value) => _onChangeTextField(value, 'email')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldEmailRef)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                    keyboardType="email-address"
                                />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}>
                                    <RLText
                                        text={BaseText.admissionIn}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                    <RLText
                                        text={BaseText.previousStd}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                            color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLDropDownPicker
                                        selectedValue={selectedInStd}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setSelectedInStd(itemValue),
                                                console.log(itemValue)
                                        }
                                        }
                                        pickerArray={standardPicker}
                                    />
                                    <RLDropDownPicker
                                        mode={'dialog'}
                                        selectedValue={selectedPreviousStd}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setSelectedPreviousStd(itemValue),
                                                console.log(itemValue)
                                        }
                                        }
                                        pickerArray={standardPreviousPicker}
                                    />
                                </View>

                                <RLText
                                    text={BaseText.currentSchool}
                                    style={{
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium, marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2
                                    }} />
                                <RLTextInput
                                    AddmissionTextInput={true}
                                    refKey={'currentSchool'}
                                    fieldRef={fieldCurSchoolRef}
                                    onEditTextField={(value) => _onChangeTextField(value, 'currentSchool')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldFatherNameRef)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}>
                                    <RLText
                                        text={BaseText.fatherName}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                    <RLText
                                        text={BaseText.motherName}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                            color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'fatherName'}
                                        fieldRef={fieldFatherNameRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'fatherName')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldMotherNameRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}

                                    />
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'motherName'}
                                        fieldRef={fieldMotherNameRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'motherName')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldFatherMobileRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}

                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}>
                                    <RLText
                                        text={BaseText.fatherMobileNo}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                    <RLText
                                        text={BaseText.motherMobileNo}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                            color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'fatherMobile'}
                                        fieldRef={fieldFatherMobileRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'fatherMobile')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldMotherMobileRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                        keyboardType="phone-pad"
                                        maxLength={10}
                                        showPerfixtxt={true}
                                        prefixtxtx={'+91'}
                                        prefixtxtStyle={{ color: Colors.violet, opacity: 0.7, alignSelf: 'center' }}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 29}
                                    />
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'motherMobile'}
                                        fieldRef={fieldMotherMobileRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'motherMobile')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldFatherOccuRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                        keyboardType="phone-pad"
                                        maxLength={10}
                                        showPerfixtxt={true}
                                        prefixtxtx={'+91'}
                                        prefixtxtStyle={{ color: Colors.violet, opacity: 0.7, alignSelf: 'center' }}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 29}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}>
                                    <RLText
                                        text={BaseText.Occupation}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                    <RLText
                                        text={BaseText.Occupation}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                            color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'fatherOccu'}
                                        fieldRef={fieldFatherOccuRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'fatherOccu')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldMotherOccuRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                    />
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'motherOccu'}
                                        fieldRef={fieldMotherOccuRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'motherOccu')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldFatherIncomRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}>
                                    <RLText
                                        text={BaseText.annualIncome}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                    <RLText
                                        text={BaseText.annualIncome}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                            color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'fatherIncom'}
                                        fieldRef={fieldFatherIncomRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'fatherIncom')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldMotherIncomRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                        keyboardType="numeric"
                                    />
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'motherIncom'}
                                        fieldRef={fieldMotherIncomRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'motherIncom')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldAdd1Ref)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                        keyboardType="numeric"
                                    />
                                </View>

                                <RLText
                                    text={BaseText.address1}
                                    style={{
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium, marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2
                                    }} />
                                <RLTextInput
                                    AddmissionTextInput={true}
                                    refKey={'address1'}
                                    fieldRef={fieldAdd1Ref}
                                    onEditTextField={(value) => _onChangeTextField(value, 'address1')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldAdd2Ref)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                />

                                <RLText
                                    text={BaseText.address2}
                                    style={{
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium, marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2
                                    }} />
                                <RLTextInput
                                    AddmissionTextInput={true}
                                    refKey={'address2'}
                                    fieldRef={fieldAdd2Ref}
                                    onEditTextField={(value) => _onChangeTextField(value, 'address2')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldAdd2Ref)}
                                    txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2 }}>
                                    <RLText
                                        text={BaseText.State}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                    <RLText
                                        text={BaseText.City}
                                        style={{
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                            color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium,
                                        }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <RLDropDownPicker
                                        selectedValue={selectedState}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setSelectedState(itemValue),
                                                console.log(itemValue)
                                        }
                                        }
                                        pickerArray={statePicker}
                                    />
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'city'}
                                        fieldRef={fieldCityRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'city')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldPinCodeRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        // defaultValue={'Aman'}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                    />
                                </View>

                                <RLText
                                    text={BaseText.pincode}
                                    style={{
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 40, color: Colors.pink, fontSize: 13, fontFamily: ENV.mfontFamilyMedium, marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2
                                    }} />
                                <View style={{ alignItems: 'flex-start', marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 3 }}>
                                    <RLTextInput
                                        AddmissionTextInput={true}
                                        refKey={'pincode'}
                                        fieldRef={fieldPinCodeRef}
                                        onEditTextField={(value) => _onChangeTextField(value, 'pincode')}
                                        onSubmitEditing={() => _onSubmitEditing(fieldLNameRef)}
                                        txtInputStyle={{ fontSize: 13, fontFamily: ENV.mfontFamilyMedium }}
                                        // defaultValue={'Aman'}
                                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 40}
                                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 35}
                                        keyboardType="numeric"
                                        maxLength={6}
                                    />
                                </View>
                            </View>
                            <View style={{ /*borderTopWidth: 1, borderTopColor: Colors.gray3,*/ shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 3,
                                elevation: 10,
                                // shadowColor: 'black',
                                shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                                backgroundColor: Colors.white,
                                paddingVertical: 10

                            }}>
                                <RLText
                                    text={BaseText.chancesadmission}
                                    style={{

                                        alignSelf: 'center', color: Colors.gray7, fontSize: 13, fontFamily: ENV.poppinsfontFamilyMedium, width: BaseStyle.DEVICE_WIDTH / 100 * 90, textAlign: 'center'
                                    }} />
                            </View>
                        </ScrollView>
                        {showButton &&
                            <View style={{ /*borderTopWidth: 1, borderTopColor: Colors.gray3,*/ paddingVertical: 15, shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 3,
                                elevation: 10,
                                // shadowColor: 'black',
                                shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                                backgroundColor: Colors.white
                            }}>
                                <RLButton
                                    SimpleButton={true}
                                    simplebuttonStyle={[buttonStyle.ContinueKycBtnStyle, { alignSelf: 'center' }]}
                                    onpress={() => _onClickKycProcess()}
                                    simplebuttontextStyle={buttonStyle.ContinueKycBtntxtStyle}
                                    simplebuttontext={BaseText.ContinueKYCProcess}
                                />
                            </View>
                        }
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Addmissionform);