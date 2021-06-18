import React, { Fragment, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar, 
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import { connect, useSelector } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import { STANDARDTYPE, BOARDTYPE, LEARINGMODETYPE } from 'constants/Enum';
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import viewstyle from 'theme/component/ViewStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import LottieView from 'lottie-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { consoleLog } from 'utils/console';
import moment from 'moment';
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
    RLAutoComplete,
    RLNotification,
    RLImageTextList,
    RLCampusList
} from 'basecomponent';


const Campus = ({ navigation, props }) => {
    const NotificationDataList = [
        { id: 1, title: 'School Metting', icon: Images.schoolmeeting, isShowLive: true },
        { id: 2, title: 'Time Table', icon: Images.campustimetables },
        { id: 3, title: 'Exams', icon: Images.campusExam},
        { id: 4, title: 'Events', icon: Images.campusEvent },
    ]
    const [selectedMenu, setSelectedMenu] = useState(3)
    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    const _header = () => {
        return (
            <RLHeader
                isNotiCal
                backgroundColor={Colors.violet}
                title={'Campus'}
                isNoti={true}
                notiImg={Images.headerNoti}
                onpressnoti={()=>{}}
                isSearch={true}
                searchImg={Images.headerSearch}
                onpresssearch={()=>{}}
                isCalendar={true}
                dateTitle={'Today'}
                date={moment().format('DD MMM')}
            />

        )
    }
    const handleTopMenuSelection = ( id ) => {
        setSelectedMenu(id)
    }

    //================================ Start common componenet =========================================== 
    const _rendeActivityItem = ( { item, index } ) => {

        return (
            <RLImageTextList
                id = {item.id}
                title={item.title}
                icon={item.icon}
                isShowLive={item.isShowLive}
                isSelected={selectedMenu == item.id}
                handleOnPress={handleTopMenuSelection}
            />
        )
    }

    const _rendeCampusItem = ({ item, index }) => {
        return (
            <RLCampusList

            />
        )
    }
    return (
        // <Fragment>
        <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white, }}>
                <View style={{ flex: 1, }}>
                    {_header()}
                    <ScrollView bounces={false}
                        contentContainerStyle={{ flexGrow: 1 }}>
                        {/* Title View */}
                        <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, justifyContent: 'space-between', alignSelf: 'center', alignItems: 'center', paddingTop: 15 }}>
                            <RLText
                                text={'Welcome, Admin'}
                                style={{
                                    fontSize: 14,
                                    color: Colors.gray7,
                                    fontFamily: ENV.poppinsfontFamilySemiBold,

                                }}
                            />
                            <Image
                                source={Images.chatGray}
                                style={{ height: 17, width: 17, resizeMode: 'contain' }} />
                        </View>

                        {/* WelcomeList */}
                        <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.gray6, alignSelf: 'center', borderRadius: 6, }}>
                            <FlatList
                                style={{ marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 1 }}
                                data={NotificationDataList}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item, index }) => _rendeActivityItem({ item, index })}
                                showsVerticalScrollIndicator={false}
                                horizontal={true}

                            />
                        </View>

                        {/* School activity */}
                        <View style={{ paddingVertical: 15, flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, justifyContent: 'space-between', alignSelf: 'center', alignItems: 'center' }}>
                            <RLText
                                text={'School Activity'}
                                style={{
                                    fontSize: 14,
                                    color: Colors.gray7,
                                    fontFamily: ENV.poppinsfontFamilySemiBold,

                                }}
                            />
                            <TouchableOpacity
                                style={{ flexDirection: 'row', }}
                                onPress={()=>{navigation.navigate('Post')}}
                            >
                                <Image
                                    source={Images.addPost}
                                    style={{ height: 17, width: 17, resizeMode: 'contain', alignSelf: 'center', }} />
                                <RLText
                                    text={'Post'}
                                    style={{
                                        fontSize: 9,
                                        color: Colors.gray7,
                                        fontFamily: ENV.mfontFamilyBold,
                                        alignSelf: 'center',
                                        paddingLeft: 5

                                    }}
                                />

                            </TouchableOpacity>
                        </View>


                        <FlatList
                            style={{ backgroundColor: Colors.white, alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 95, }}
                            data={NotificationDataList}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => _rendeCampusItem({ item, index })}
                            showsVerticalScrollIndicator={false}

                        />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>

        // </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Campus);