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


const SchoolMeeting = ({ navigation, props }) => {

    const [liveUsers, setLiveUsers] = useState( 100 )
    const [selectedMenu, setSelectedMenu] = useState( 3 )
    const [zoomedOut, setZoomedOut] = useState( true )
    const [userId, setUserId] = useState( 101 )
    const [message, setMessage] = useState( '' )
    const [calendarOpen,setCalenderOpen] = useState(false)
    
    const chats = [
        
        {
            id:2,
            userId: 102,
            name: 'Ashu',
            message: 'Good Morning Everyone',
            profilePic: Images.sampleProfilePic
        },
        {
            id:3,
            userId: 103,
            name: 'Rachit',
            message: 'Good Morning',
            profilePic: Images.sampleProfilePic
        },
        {
            id:1,
            userId: 101,
            name: 'Saikat Sarkar',
            message: 'Hello Sir!',
            profilePic: Images.sampleProfilePic
        },
        {
            id:4,
            userId: 102,
            name: 'Ashu',
            message: 'Present Sir',
            profilePic: Images.sampleProfilePic
        },
        {
            id:5,
            userId: 102,
            name: 'Ashu',
            message: 'Present Sir',
            profilePic: Images.sampleProfilePic
        },
        {
            id:6,
            userId: 102,
            name: 'Ashu',
            message: 'Present Sir',
            profilePic: Images.sampleProfilePic
        },
        {
            id:7,
            userId: 102,
            name: 'Ashu',
            message: 'Present Sir',
            profilePic: Images.sampleProfilePic
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
                title={'School Meeting'}
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
                        {calendarOpen ? <View style={{
                            height:BaseStyle.DEVICE_HEIGHT * 0.42
                        }}>
                            <Calendar
                                markingType={"period"}
                                markedDates={{
                                    "2012-05-15": { marked: true, dotColor: "#50cebb" },
                                    "2012-05-16": { marked: true, dotColor: "#50cebb" },
                                    "2012-05-21": {
                                        startingDay: true,
                                        color: "#50cebb",
                                        textColor: "white",
                                    },
                                    "2012-05-22": { color: "#70d7c7", textColor: "white" },
                                    "2012-05-23": {
                                        color: "#70d7c7",
                                        textColor: "white",
                                        marked: true,
                                        dotColor: "white",
                                    },
                                    "2012-05-24": { color: "#70d7c7", textColor: "white" },
                                    "2012-05-25": {
                                        endingDay: true,
                                        color: "#50cebb",
                                        textColor: "white",
                                    },
                                }}
                            />
                        </View> :
                        
                            <View style={styles.meetingView}>
                            
                                <ImageBackground
                                    source={Images.schoolImage}
                                    style={styles.meetingImage}
                                >
                                    <View style={styles.liveElement}>
                                        <Text style={{
                                            alignSelf: 'center',
                                            fontSize: 8,
                                            fontFamily: ENV.mfontFamilyBold,
                                            color: Colors.white
                                        }}>Live</Text>
                                    </View>
                                    <View style={styles.meetingBottom}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 21 }}>
                                            <IconEvilIcons name='eye' size={25} color={Colors.white} />
                                            <Text style={{ fontSize: 10, color: Colors.white }}>{liveUsers}</Text>
                                        </View>
                                        <View style={{ marginRight: 15 }}>
                                            {zoomedOut ? <IconMaterialIcons name='zoom-out-map' size={22} color={Colors.white} /> :
                                                <IconFeather name='minimize' size={22} color={Colors.white} />}
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>}
                        
                        <View style ={styles.bottomSection}>
                            <View style={styles.meetingInformation}>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    fontFamily: 'Montserrat',
                                }}>
                                    Meeting Information
                                </Text>
                                <View style={styles.profileContainer}>
                                    <View style={{
                                        height: 36,
                                        width: 80,
                                        backgroundColor: '#00BBFF',
                                        borderTopLeftRadius: 20,
                                        borderBottomLeftRadius: 20,
                                        alignItems: 'center',
                                        justifyContent:'center'
                                    }}>
                                        <Text style={{fontSize:BaseStyle.DEVICE_WIDTH * 0.015, color:Colors.white,fontWeight: "bold", fontFamily: 'Montserrat'}}>Dr.Aman Sagar</Text>
                                        <Text style={{fontSize:BaseStyle.DEVICE_WIDTH * 0.015, color:Colors.white, fontWeight: "bold", fontFamily: 'Montserrat'}}>Principal</Text>
                                    </View>
                                    <Image source={Images.sampleProfilePic} style={{height:40,width:40,resizeMode:'contain', marginLeft:-10 }}/>
                                </View>
                            </View>
                            <View style={styles.meetingDesc}>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscin g elit, sed diam nonummy nibh euis mod tincidunt ut laoreet dolore magna aliqua
                                </Text>
                            </View>
                            <View style={{ marginHorizontal: 30, marginTop: 20, height: BaseStyle.DEVICE_HEIGHT * 0.37 }}>
                                <FlatList
                                    data={chats}
                                    renderItem={({ item,index }) => (
                                        _rendeChatItem({item},index)
                                    )}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                            <View style={{
                                height: BaseStyle.DEVICE_HEIGHT * 0.08,
                                width: BaseStyle.DEVICE_WIDTH,
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                position: 'absolute',
                                bottom: 15,
                            }}>
                                <RLTextInput
                                    PlainTextInput
                                    value = {message}
                                    onEditTextField={(value,type)=>{
                                        setMessage(value);
                                    }}
                                    borderRadius={28}
                                    placeholder={'Write here.'}
                                    onSubmitEditing={(nextRef,refKey)=>{}}
                                    textInputViewWidth={BaseStyle.DEVICE_WIDTH * 0.8}
                                    textInputWidth={BaseStyle.DEVICE_WIDTH * 0.78}
                                    plainTextInputStyle={{

                                    }}
                                />
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log(message)
                                    }}
                                    disabled={!message.length > 0}
                                >
                                    <Image source={Images.clapping} style={{height:30,width:30, marginRight:5}} />
                                </TouchableOpacity>
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
export default connect( select )( SchoolMeeting );

const styles = StyleSheet.create( {
    meetingView: {
        marginTop : 1,
        
    },
    meetingImage: {
        height: BaseStyle.DEVICE_HEIGHT * 0.25,
        width: BaseStyle.DEVICE_WIDTH * 0.99,
        alignSelf:'center'
    },
    liveElement: {
        backgroundColor: Colors.sky,
        paddingVertical: 3,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        width: 32,
        height: 14,
        justifyContent: 'center',
        position: 'absolute',
        top: 15,
        left: 15
    },
    meetingBottom: {
        height: 34,
        width: BaseStyle.DEVICE_WIDTH * 0.99,
        backgroundColor: 'rgba(0,0,0,0.39)',
        position: 'absolute',
        bottom: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    bottomSection: {
        flex:1
    },
    meetingInformation: {
        flexDirection: 'row',
        width: BaseStyle.DEVICE_WIDTH,
        height: 40,
        marginTop: 15,
        justifyContent: 'space-between',
        paddingHorizontal: 21,
    },
    profileContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height:40
    },
    meetingDesc: {
        marginTop:4,
        shadowColor: "#000",
        backgroundColor:Colors.white,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        width: BaseStyle.DEVICE_WIDTH,
        height: BaseStyle.DEVICE_HEIGHT * 0.1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 12,
    }

})