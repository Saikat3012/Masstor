import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, FlatList } from "react-native";
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
    RLLocalitiesCityList,
    RLCompareSchoolList
} from 'basecomponent';

const CompareSchoolWise = ({ navigation, props }) => {
    const SchoolInfoDataList = [
        {
            id: 1,
            schoolimage: Images.schoolImage,
            schoolname: 'K.R. Mangalam World School',
            schoollocation: 'Noida, UP',
            standard: 'Std 4th  to 10th',
            fees: 'Rs- 500-10000 ',
        },
        {
            id: 2,
            schoolimage: Images.schoolImageDelhi,
            schoolname: 'Delhi Public School (DPS)',
            schoollocation: 'Delhi',
            standard: 'Std 1st  to 10th',
            fees: 'Rs- 500-10000 ',
        },
    ]

    const KeySchoolDataList = [
        { id: 1, title: 'Ownership', info1: 'Private', info2: 'Private' },
        { id: 2, title: 'Board', info1: 'CBSE', info2: 'CBSE' },
        { id: 3, title: 'Year of Establishment', info1: '2016', info2: '2010' },
        { id: 4, title: 'Co-Ed Status', info1: 'Co-Education', info2: 'Co-Education' },
        { id: 5, title: 'Campus Size', info1: '20 Acres', info2: '10 Acres', showSqure: true },
        { id: 6, title: 'School Type', info1: 'Urban', info2: 'Rural', showSqure: true },
        { id: 7, title: 'Awards to School', info1: '-', info2: '-' },
    ]
    const FeesStructureDataList = [
        { id: 1, title: 'Registration Fees ', info1: 'Rs 2,000', info2: 'Rs 2,000' },
        { id: 2, title: 'Annual Charges', info1: 'Rs 2,79,000', info2: 'Rs 2,79,000' },
        { id: 3, title: 'Monthly Charges', info1: 'Rs 13,270', info2: 'Rs 13,270' }

    ]
    const KeySchoolData1List = [
        // { id: 1, title: 'Classes Offered', info1: 'Pre-Nursery-Std 12', info2: 'Nursery-Std 12' },
        // { id: 2, title: 'Language of Instruction', info1: 'English', info2: 'English' },
        // { id: 3, title: 'Academic Session', info1: '-', info2: 'April to March' },
        // { id: 4, title: 'Student Faculty ', info1: '-', info2: '-' },
        // { id: 5, title: 'Total Faculty', info1: '-', info2: '-' },
        { id: 1, title: 'Documents Required', info1: '8', info2: '8' },
        { id: 2, title: 'Written Test', info1: '-', info2: '-' },
        { id: 3, title: 'Student Interaction', info1: '-', info2: '-' },
        { id: 4, title: 'Parents Interaction', info1: '-', info2: '-' },
        { id: 5, title: 'Form Submission Mode', info1: 'Online, Offline', info2: 'Online, Offline' },
        // { id: 6, title: 'Form Fee Payment Mode', info1: 'Online, Offline', info2: 'Online, Offline' },

    ]
    const AdmissionDataList = [
        { id: 1, title: 'Documents Required', info1: '8', info2: '8' },
        { id: 2, title: 'Written Test', info1: '-', info2: '-' },
        { id: 3, title: 'Student Interaction', info1: '-', info2: '-' },
        { id: 4, title: 'Parents Interaction', info1: '-', info2: '-' },
        { id: 5, title: 'Form Submission Mode', info1: 'Online, Offline', info2: 'Online, Offline' },
        { id: 6, title: 'Form Fee Payment Mode', info1: 'Online, Offline', info2: 'Online, Offline' },

    ]
    const FacilitiesDataList = [
        { id: 1, title: 'Class', info1: '-', info2: '-' },
        { id: 2, title: 'Boarding', info1: '-', info2: '-' },
        { id: 3, title: 'Infrastructure', info1: '-', info2: '-' },
        { id: 4, title: 'Safety & Security', info1: '-', info2: '-' },
        { id: 5, title: 'Advance Facilities', info1: '-', info2: '-' },
        { id: 6, title: 'Extra-Curricular Activities', info1: '-', info2: '-' },
        { id: 7, title: 'Sports & Fitness', info1: '-', info2: '-' },
        { id: 8, title: 'Labs', info1: '-', info2: '-' },
        { id: 9, title: 'Disable Friendly', info1: '-', info2: '-' },
    ]

    const AdditionalDataList = [
        { id: 1, title: 'Total Views', info1: '600', info2: '300', showSqure: true },

    ]

    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            <RLHeader
                isRadiousHeader
                // roundBackWhite={true}
                // notificationWhite={true}
                title={BaseText.CompareSchool}
                onpressleft={() => navigation.goBack()}
                leftImg={Images.previousArrowWhite}
                rightImg={Images.notificationWhite}
            />
        )
    }

    //School Info List
    const _renderCompareSchoolItem = ({ item, index }) => {
        return (
            <RLCompareSchoolList
                IsCompareList={true}
                schoolImg={item.schoolimage}
                schoolname={item.schoolname}
                schoollocation={item.schoollocation}
            />
        )
    }

    const _renderTitle = (parms) => {
        return (
            <RLCompareSchoolList
                IsSelectionTitleList={true}
                selectionTitle={parms == 1 ? 'Key School Stats' : parms == 2 ? 'Fee Structure' : parms == 3 ? 'Admission Criteria & Eligibility' : parms == 4 ? 'Facilities' : parms == 5 ? 'Additional Information' : 'k'}
            />
        )
    }

    const _renderInfoDataItem = ({ item }) => {
        return (
            <RLCompareSchoolList
                IsSelectionDetailList={true}
                key1={item.title}
                key2={item.info1}
                key3={item.info2}
                showcheckmark={item.showSqure ? true : false}
            />
        )
    }

    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={{ flex: 1 }}>
                    {_header()}
                    <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>

                        <FlatList
                            style={{ alignSelf: 'center', marginVertical: 25, width: BaseStyle.DEVICE_WIDTH / 100 * 90, }}
                            data={SchoolInfoDataList}
                            horizontal={true}
                            // showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => _renderCompareSchoolItem({ item, index })}
                            keyExtractor={(item, index) => item.id.toString()}
                        />

                        {_renderTitle(1)}
                        <FlatList
                            style={{ marginBottom: 28 }}
                            contentContainerStyle={{ paddingBottom: 2 }}
                            data={KeySchoolDataList}
                            renderItem={({ item, index }) => _renderInfoDataItem({ item, index })}
                            keyExtractor={(item, index) => item.id.toString()}
                        />

                        {_renderTitle(2)}

                        <FlatList
                            style={{ marginBottom: 28 }}
                            contentContainerStyle={{ paddingBottom: 2 }}
                            data={FeesStructureDataList}
                            renderItem={({ item, index }) => _renderInfoDataItem({ item, index })}
                            keyExtractor={(item, index) => item.id.toString()}
                        />

                        {_renderTitle(1)}

                        <FlatList
                            style={{ marginBottom: 28 }}
                            contentContainerStyle={{ paddingBottom: 2 }}
                            data={KeySchoolData1List}
                            renderItem={({ item, index }) => _renderInfoDataItem({ item, index })}
                            keyExtractor={(item, index) => item.id.toString()}
                        />
                        {_renderTitle(3)}

                        <FlatList
                            style={{ marginBottom: 28 }}
                            contentContainerStyle={{ paddingBottom: 2 }}
                            data={AdmissionDataList}
                            renderItem={({ item, index }) => _renderInfoDataItem({ item, index })}
                            keyExtractor={(item, index) => item.id.toString()}
                        />

                        {_renderTitle(4)}

                        <FlatList
                            style={{ marginBottom: 28 }}
                            contentContainerStyle={{ paddingBottom: 2 }}
                            data={FacilitiesDataList}
                            renderItem={({ item, index }) => _renderInfoDataItem({ item, index })}
                            keyExtractor={(item, index) => item.id.toString()}
                        />

                        {_renderTitle(5)}

                        <FlatList
                            style={{ marginBottom: 28 }}
                            contentContainerStyle={{ paddingBottom: 2 }}
                            data={AdditionalDataList}
                            renderItem={({ item, index }) => _renderInfoDataItem({ item, index })}
                            keyExtractor={(item, index) => item.id.toString()}
                        />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(CompareSchoolWise);