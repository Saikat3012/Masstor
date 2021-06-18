import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, FlatList, Image, Platform, KeyboardAvoidingView } from "react-native";
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

const Localities = ({ navigation, props }) => {
    let fieldSearchRef = React.createRef();

    const cityDataList = [
        { id: 1, title: 'Agra', img: require('../../assets/StaticIcon/agra.png') },
        { id: 2, title: 'Noida', img: require('../../assets/StaticIcon/noida.png') },
        { id: 3, title: 'Delhi', img: require('../../assets/StaticIcon/delhi.png') },
        { id: 4, title: 'Mumbai', img: require('../../assets/StaticIcon/mumbai.png') },
        { id: 5, title: 'Ahmedabad', img: require('../../assets/StaticIcon/ahemdabad.png') },
        { id: 6, title: 'Chennai', img: require('../../assets/StaticIcon/chenai.png') },
        { id: 7, title: 'Pune', img: require('../../assets/StaticIcon/pune.png') },
        { id: 8, title: 'Banglore', img: require('../../assets/StaticIcon/banglor.png') },
        { id: 9, title: 'Kolkata', img: require('../../assets/StaticIcon/kolkata.png') },

    ]
    const SchoolInfoDataList = [
        {
            id: 1,
            schoolimage: Images.school1,
            schoolname: 'K.R. Mangalam World School',
            schoollocation: 'Noida, UP',
            standard: 'Std 4th  to 10th',
            fees: 'Rs- 500-10000 ',
            btnImg: Images.verifyWhite
        },
        {
            id: 2,
            schoolimage: Images.school2,
            schoolname: 'Delhi Public School (DPS)',
            schoollocation: 'Delhi',
            standard: 'Std 1st  to 10th',
            fees: 'Rs- 500-10000 ',
            btnImg: Images.verifyWhite
        },
    ]
    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    //OnChange TextInput
    const _onChangeTextField = (value, type) => {
    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }
    //================================ Start common componenet ===========================================     
    const _header = () => {
        return (
            <RLHeader
                isRadiousHeader
                title={BaseText.localitiesTitle}
                onpressleft={() => navigation.goBack()}
                leftImg={Images.previousArrowWhite}
                rightImg={Images.notificationWhite}
            />
        )
    }

    //cityList  Item
    const _renderItemCityList = ({ item, index }) => {
        return (
            <RLLocalitiesCityList
                itemImg={item.img}
                title={item.title} />
        )
    }

    //School Info List
    const _renderSchoolInfoItem = ({ item, index }) => {
        return (
            <RLSchoolInfoList
                IslikeSchoolInfo={true}
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
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={{ flex: 1, }}>
                        {_header()}
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={{ marginTop: 40, }}>
                                <RLTextInput
                                    PrefixImageTextInput={true}
                                    refKey={'search'}
                                    placeholder={'Search Cities'}
                                    fieldRef={fieldSearchRef}
                                    onEditTextField={(value) => _onChangeTextField(value, 'search')}
                                    onSubmitEditing={() => _onSubmitEditing(fieldSearchRef)}
                                    hideShowImage={Images.searchGray}
                                    search={true}
                                    txtInputStyle={{ color: Colors.gray8, fontSize: 14, fontFamily: ENV.mpolisfontFamilyRegular }}
                                    placeholderTextColor={Colors.gray8}
                                />
                            </View>

                            <FlatList
                                scrollEnabled={false}
                                style={{ marginTop: 15, alignSelf: 'center', }}
                                // contentContainerStyle={{  }}
                                bounces={false}
                                // data={this.formatData(this.state.cityDataList, 3)}
                                data={cityDataList}
                                renderItem={({ item, index }) => _renderItemCityList({ item, index })}
                                numColumns={3}
                                keyExtractor={item => item.id.toString()}
                            />

                            <RLText
                                text={BaseText.LocalitywiseSchool}
                                style={{
                                    fontSize: 16,
                                    color: Colors.violet,
                                    fontFamily: ENV.mfontFamilyBlack,
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                    alignSelf: 'center',

                                    marginTop: 15,
                                    marginBottom: 20
                                }}
                            />
                            <View>
                                <FlatList
                                    style={{ marginBottom: 50, }}
                                    data={SchoolInfoDataList}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) => item.id.toString()}
                                    renderItem={({ item, index }) => _renderSchoolInfoItem({ item, index })}
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
export default connect(select)(Localities);