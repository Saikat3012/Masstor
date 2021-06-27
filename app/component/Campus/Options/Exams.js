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

const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];


const Exams = ({ navigation, props }) => {

    const [liveUsers, setLiveUsers] = useState( 100 )
    const [selectedMenu, setSelectedMenu] = useState( 3 )
    const [zoomedOut, setZoomedOut] = useState( true )
    const [userId, setUserId] = useState( 101 )
    const [message, setMessage] = useState( '' )
    const [calendarOpen, setCalenderOpen] = useState( false )
    const [todayExam, setTodayExam] = useState( false )
    const [upComminExam, setUpCommingExam] = useState(false)
    
    const today = new Date()

    const curdate = `${today.getDate()} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`
    
    const examList = [
        
        {
            id: 1,
            date: `${today.getDate()} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`,
            subject: 'Mathematics',
            period: 'II',
            examtype: 'Weekly',
            teacherName:'Saikat sarkar'
        },
        {
            id: 2,
            date: `${today.getDate() + 1} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`,
            subject: 'Mathematics',
            period: 'II',
            examtype: 'Monthly',
            teacherName:'Mr.Satyam'
        },
        {
            id: 3,
            date: `${today.getDate() + 1} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`,
            subject: 'Mathematics',
            period: 'V',
            examtype: 'Weekly',
            teacherName:'Mr.Satyam'
        },
        {
            id: 4,
            date: `${today.getDate() + 2} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`,
            subject: 'Mathematics',
            period: 'III',
            examtype: 'Monthly',
            teacherName:'Mr.Satyam'
        },
        {
            id: 5,
            date: `${today.getDate() + 3} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`,
            subject: 'Mathematics',
            period: 'I',
            examtype: 'Monthly',
            teacherName:'Mr.Satyam'
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
                title={'Exams'}
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

    const handleExamView = (exam) => {
        consoleLog(exam)
    }

    const RenderExamCard = ( {eachExam} ) => {
        return(
            <View style={styles.examCard}>
                <View>
                    <Text style={{
                        color: Colors.pink,
                        fontSize: 16,
                    }}>{eachExam.subject}</Text>
                    <Text style={{
                        color: Colors.pink,
                        fontSize: 12,
                    }}>{`Period ${eachExam.period}`}</Text>
                    <Text style={{
                        color: '#7C7D7E',
                        fontSize: 8,
                    }}>{eachExam.date}</Text>
                    <View style={{
                        width: BaseStyle.DEVICE_WIDTH * 0.25,
                        alignItems: 'center',
                        backgroundColor: Colors.pink,
                        borderRadius: 20,
                        padding: 2,
                        flexDirection: 'row',
                        marginTop:8
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
                        <Text>{eachExam.teacherName[0]}</Text>
                    </View>
                        <Text style={{color:'#fff',fontSize:11}}>{eachExam.teacherName}</Text>
                    </View>
                </View>
                <ImageBackground
                    source={Images.logo}
                    style={{
                        height: BaseStyle.DEVICE_HEIGHT * 0.12,
                        width: BaseStyle.DEVICE_WIDTH * 0.27,
                        alignItems: 'flex-end',
                        justifyContent: 'space-around',
                        
                    }}
                    imageStyle={{
                        resizeMode: 'contain',
                        transform: [{ rotate: '320deg' }],
                    }}
                >
                    <Text style={{
                        color: '#7C7D7E',
                        fontSize:14
                    }}>{eachExam.examtype}</Text>
                    <RLButton
                        SimpleButton
                        simplebuttontext={'View'}
                        simplebuttonStyle={{
                            height: 30,
                            width: 60,
                            backgroundColor: '#7C7D7E',
                            borderRadius: 8,
                            alignItems: 'center',
                            justifyContent:'center'
                        }}
                        simplebuttontextStyle={{
                            color:Colors.white
                        }}
                        onpress={()=>handleExamView(eachExam)}
                    />
                </ImageBackground>
            </View>
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
                        {examList.length > 0 ? <View>
                            {todayExam && <Text style={{
                                color: Colors.gray3,
                                marginTop: BaseStyle.DEVICE_HEIGHT * 0.02,
                                marginLeft: BaseStyle.DEVICE_WIDTH * 0.1,
                                fontSize: 20,
                                marginBottom:10,

                            }}>Today</Text>}

                            {examList.map( ( eachExam ) => {
                                if ( eachExam.date === curdate ) {
                                    if(!todayExam) setTodayExam(true)
                                    return (
                                        <RenderExamCard eachExam={eachExam }/>
                                    )
                                }
                            } )}
                            {!upComminExam && <Text style={{
                                color: Colors.gray3,
                                marginTop: BaseStyle.DEVICE_HEIGHT * 0.02,
                                marginLeft: BaseStyle.DEVICE_WIDTH * 0.1,
                                marginBottom:10,
                                fontSize:20
                            }}>Upcomming</Text>}
                    
                            {examList.map( ( eachExam ) => {
                                if ( eachExam.date !== curdate ) {
                                    if(!todayExam) setTodayExam(true)
                                    return (
                                        <RenderExamCard eachExam={eachExam}/>
                                    )
                                }
                            } )}
                            
                        </View> : <Text style={{
                                color: Colors.gray3,
                                alignSelf: 'center',
                                marginTop: BaseStyle.DEVICE_HEIGHT * 0.3
                        }}> No Exams Found</Text>

                        }


                        
                        
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
export default connect( select )( Exams );

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