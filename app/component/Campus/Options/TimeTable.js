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
import { color } from "react-native-reanimated";


const TimeTable = ({ navigation, props }) => {

    const [liveUsers, setLiveUsers] = useState( 100 )
    const [selectedMenu, setSelectedMenu] = useState( 3 )
    const [zoomedOut, setZoomedOut] = useState( true )
    const [userId, setUserId] = useState( 101 )
    const [message, setMessage] = useState( '' )
    const [calendarOpen,setCalenderOpen] = useState(false)
    
    const classes = [
        
        {
            id: 1,
            period:'I',
            subject: 'English',
            teacherName: 'Mr. Satyam',
            status:'Ended',
        },
        {
            id: 2,
            period:'I',
            subject: 'English',
            teacherName: 'Mr. Satyam',
            status:'Ended',
        },
        {
            id: 3,
            period:'I',
            subject: 'English',
            teacherName: 'Tr',
            status:'Ended',
        },
        {
            id: 4,
            period:'I',
            subject: 'English',
            teacherName: 'Mr. Satyam',
            status:'Ended',
        },
        {
            id: 5,
            period:'I',
            subject: 'English',
            teacherName: 'Saikat Sarkar Saikat',
            status:'Ended',
        },
        {
            id: 6,
            period:'I',
            subject: 'English',
            teacherName: 'Mr. Satyam',
            status:'Ended',
        },

    ]


    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    const _header = () => {
        return (
            <RLHeader
                isLeftImgNotiCal
                backgroundColor={Colors.violet}
                title={'Time Table'}
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
    const handleTopMenuSelection = ( id ) => {
        setSelectedMenu(id)
    }

    //================================ Start common componenet =========================================== 

    const _rendeChatItem = ({ item, index }) => {
        return (
            <RLChatItem
                item={item}
                index={index}
                userId={userId}
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
                        <View style={styles.classList}>
                            <View style={{
                                height: 36,
                                backgroundColor: Colors.violet,
                                width: BaseStyle.DEVICE_WIDTH * 0.8,
                                borderTopLeftRadius:15,
                                borderTopRightRadius: 15,
                                alignItems: 'center',
                                justifyContent:'center'
                            }}>
                                <Text style={{color:'#fff'}}>V std.</Text>
                            </View>
                            <View style={{ flexDirection: 'row',justifyContent:'space-between', width:BaseStyle.DEVICE_WIDTH * 0.8,paddingHorizontal:5  }}>
                                <View style={{width:BaseStyle.DEVICE_WIDTH * 0.15,alignItems:'center'}}>
                                    <Text style={styles.headingText}>Periods</Text>
                                </View>
                                <View style={{width:BaseStyle.DEVICE_WIDTH * 0.18,alignItems:'center'}}>
                                    <Text style={styles.headingText}>Subjects</Text>
                                </View>
                                <View style={{width:BaseStyle.DEVICE_WIDTH * 0.25,alignItems:'center'}}>
                                    <Text style={styles.headingText}>Teachers</Text>
                                </View>
                                <View style={{width:BaseStyle.DEVICE_WIDTH * 0.19,alignItems:'center'}}>
                                    <Text style={styles.headingText}>Status</Text>
                                </View>
                            </View>
                            <View>
                                {classes.map( (eachClass) => {
                                    return (
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            width: BaseStyle.DEVICE_WIDTH * 0.8,
                                            paddingHorizontal: 5,
                                            borderTopColor: Colors.gray,
                                            borderTopWidth: 1,
                                            marginBottom:7
                                        }}>
                                            <View style={{width:BaseStyle.DEVICE_WIDTH * 0.15,alignItems:'center'}}>
                                                <Text style={styles.listText}>{eachClass.period}</Text>
                                            </View>
                                            <View style={{width:BaseStyle.DEVICE_WIDTH * 0.18,alignItems:'center'}}>
                                                <Text style={styles.listText}>{eachClass.subject}</Text>
                                            </View>
                                            <View style={{
                                                width: BaseStyle.DEVICE_WIDTH * 0.25,
                                                alignItems: 'center',
                                                backgroundColor: Colors.pink,
                                                borderRadius: 20,
                                                padding: 2,
                                                flexDirection:'row'
                                            }}>
                                                <View style={{
                                                    backgroundColor: Colors.white,
                                                    borderRadius: 50,
                                                    marginRight: 2,
                                                    height: 20,
                                                    width: 20,
                                                    alignItems: 'center',
                                                    justifyContent:'center'
                                                }}>
                                                    <Text>{eachClass.teacherName[0]}</Text>
                                                </View>
                                                <Text style={{color:'#fff',fontSize:11}}>{eachClass.teacherName}</Text>
                                            </View>
                                            <View style={{width:BaseStyle.DEVICE_WIDTH * 0.19,alignItems:'center'}}>
                                                <Text style={styles.listText}>{eachClass.status}</Text>
                                            </View>
                                        </View>
                                    )
                                })}

                            </View>

                        </View>
                        
                        
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
export default connect( select )( TimeTable );

const styles = StyleSheet.create( {
    classList: {
        width: BaseStyle.DEVICE_WIDTH * 0.8,
        borderRadius: 15,
        paddingBottom:15,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
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