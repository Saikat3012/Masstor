import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, KeyboardAvoidingView, ScrollView, Image } from "react-native";
import { connect, useSelector } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import Tooltip from 'react-native-walkthrough-tooltip';

import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLRoundList,
    RLSchoolInfoList,
    RLProfileSettingList,
    RLLocalitiesCityList
} from 'basecomponent';

const CompareSchool = ({ navigation, props }) => {
    let fieldSearch1Ref = React.createRef();
    let fieldSearch2Ref = React.createRef();

    const [search1, setSearch1] = useState('')
    const [search2, setSearch2] = useState('')

    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    //OnChange TextInput
    const _onChangeTextField = (value, type) => {
        if (type == 'search1') {
            setSearch1(value)
        } else if (type == 'search2') {
            setSearch2(value)
        }
    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }

    const _onClickCompare = () => {
        navigation.navigate('CompareSchoolWise')
    }

    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            <RLHeader
                isRadiousHeader
                title={BaseText.CompareSchool}
                onpressleft={() => navigation.goBack()}
                leftImg={Images.previousArrowWhite}
                rightImg={Images.notificationWhite}
            // roundBackWhite={true}
            // notificationWhite={true}
            // roundBackWhite={true}
            // notificationWhite={true}

            />
        )
    }

    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' && 'padding'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={{ flex: 1 }}>
                        {_header()}
                        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                            <RLText
                                text={BaseText.ComapreSchoolTitle}
                                style={{
                                    color: Colors.gray7,
                                    paddingTop: 30,
                                    fontSize: 13, fontFamily: ENV.mfontFamilySemiBold,
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                    alignSelf: 'center'
                                }}
                            />

                            <View style={{ marginTop: 30 }}>
                                <RLTextInput
                                    PrefixImageTextInput={true}
                                    refKey={'search1'}
                                    placeholder={'Search School'}
                                    fieldRef={fieldSearch1Ref}
                                    onEditTextField={(value) => _onChangeTextField(value, 'search1')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldSearch2Ref)}
                                    txtInputStyle={{ color: Colors.pink, fontSize: 14, fontFamily: ENV.mfontFamilyMedium }}
                                    placeholderTextColor={Colors.gray8}
                                    // textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 90}
                                    // textInputSubViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 85}
                                    // textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 75}
                                    hideShowImage={Images.searchGray}
                                />
                            </View>
                            <View style={{ marginTop: 30 }}>
                                <RLTextInput
                                    PrefixImageTextInput={true}
                                    refKey={'search2'}
                                    placeholder={'Search School'}
                                    fieldRef={fieldSearch2Ref}
                                    onEditTextField={(value) => _onChangeTextField(value, 'search2')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldSearch2Ref)}
                                    // searchPink={true}
                                    txtInputStyle={{ color: Colors.pink, fontSize: 14, fontFamily: ENV.mfontFamilyMedium }}
                                    placeholderTextColor={Colors.gray8}
                                    // textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 90}
                                    // textInputSubViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 85}
                                    // textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 75}
                                    hideShowImage={Images.searchGray}
                                />
                            </View>

                            <RLButton
                                SimpleButton={true}
                                simplebuttonStyle={[buttonStyle.submitBtnStyle, { alignSelf: 'center', marginTop: 50, marginBottom: 70, backgroundColor: search1.length && search2.length > 0 ? Colors.pink : Colors.violet }]}
                                onpress={() => _onClickCompare()}
                                simplebuttontextStyle={buttonStyle.submitmBtntxtStyle}
                                simplebuttontext={BaseText.Compare}
                            />

                            <Image
                                source={Images.compareSchool}
                                style={{ alignSelf: 'center', resizeMode: 'contain', marginBottom: 10 }}
                            />
                            <RLText
                                text={BaseText.Weareready}
                                style={{
                                    alignSelf: 'center',
                                    color: Colors.violet,
                                    fontSize: 13,
                                    fontFamily: ENV.mfontFamilyBold,
                                }}
                            />

                            <RLText
                                text={BaseText.SelectSchools}
                                style={{
                                    alignSelf: 'center',
                                    color: Colors.pink1,
                                    fontSize: 11,
                                    fontFamily: ENV.mfontFamilyMedium,
                                    marginBottom: 30
                                }}
                            />
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
export default connect(select)(CompareSchool);