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
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import IconEvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import IconFeather from 'react-native-vector-icons/dist/Feather';
import IconMaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
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
import EventTabNavigator from '../../../Navigation/EventTabNavigator'
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
    RLCampusList,
    RLChatItem
} from 'basecomponent';



const Events = ({ navigation, props }) => {

    const [liveUsers, setLiveUsers] = useState( 100 )
    const [selectedMenu, setSelectedMenu] = useState( 3 )
    const [zoomedOut, setZoomedOut] = useState( true )
    const [userId, setUserId] = useState( 101 )
    const [message, setMessage] = useState( '' )
    const [calendarOpen, setCalenderOpen] = useState( false )
    const [todayExam, setTodayExam] = useState( false )
    const [upComminExam, setUpCommingExam] = useState(false)
    



    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    const _header = () => {
        return (
            <RLHeader
                isLeftImgNotiCal
                backgroundColor={Colors.violet}
                title={'Events'}
                leftImg={Images.previousArrowWhite}
                onpressleft={() => navigation.goBack()}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}
                isNoti={true}
                notiImg={Images.headerNoti}
                onpressnoti={()=>{}}
                // isSearch={true}
                onpresssearch={() => { }}
                onpresscal={() => {
                    setCalenderOpen(!calendarOpen)
                }}
                isCalendar={true}
                dateTitle={'Today'}
                date={moment().format('DD MMM')}
            />

        )
    }

    //================================ Start common componenet =========================================== 


   
    return (
        // <Fragment>
        <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white, }}>
                <View style={{
                    flex: 1,
                }}>
                    {_header()}
                    <ScrollView bounces={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={{
                            paddingTop : !calendarOpen ? 15 : 0
                        }}
                    >
                        {/* Title View */}
                        {calendarOpen && <View style={{
                            height: BaseStyle.DEVICE_HEIGHT * 0.42
                        }}>
                            <Calendar
                                // markingType={"period"}
                                markedDates={{
                                    "2021-06-25": { marked: true, dotColor: "#50cebb" },
                                    '2021-06-22': {selected: true, marked: true, selectedColor: 'blue',dotColor: "blue"},
                                }}
                                onDayPress={( day ) => { console.log( 'selected day', day ) }}
                            />
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: 'flex-end',
                                marginEnd: 20
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginEnd: 15
                                    
                                }}>
                                    <View style={{
                                        height: 6,
                                        width: 6,
                                        backgroundColor: '#04F192',
                                        borderRadius: 10,
                                        marginRight:4
                                    }} />
                                    <Text style={{
                                        color: '#7C7D7E',
                                        fontSize: 8
                                    }}>Holidays</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={{
                                        height: 6,
                                        width: 6,
                                        backgroundColor: '#04F192',
                                        borderRadius: 10,
                                        marginRight:4
                                    }} />
                                    <Text style={{
                                        color: '#00BBFF',
                                        fontSize: 8
                                    }}>Exams</Text>
                                </View>

                            </View>
                        </View>}
                        
                        
                        <EventTabNavigator/>



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
export default connect( select )( Events );

const styles = StyleSheet.create( {
    examCard: {
        width: BaseStyle.DEVICE_WIDTH * 0.8,
        borderRadius: 15,
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:'#fff',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 1,
        marginBottom:5,
        flexDirection: 'row',


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    headingText: {
        color: '#7C7D7E',
        fontSize:15
    },
    listText: {
        color: '#7C7D7E',
        fontSize:11
    }

})