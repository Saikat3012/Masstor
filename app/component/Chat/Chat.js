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


const Chat = ({ navigation, props }) => {

    const [liveUsers, setLiveUsers] = useState( 100 )
    const [selectedMenu, setSelectedMenu] = useState( 3 )
    const [zoomedOut, setZoomedOut] = useState( true )
    const [userId, setUserId] = useState( 101 )
    const [message, setMessage] = useState( '' )
    const [calendarOpen, setCalenderOpen] = useState( false )
    const [todayExam, setTodayExam] = useState( false )
    const [upComminExam, setUpCommingExam] = useState( false )
    
    
    const today = new Date()

    const curdate = `${today.getDate()} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`
    
    const userList = [
        
        {
            id: 1,
            name: 'Saikat sarkar',
            profilePic: Images.sampleProfilePic,
            status: 'Busy',
            unRead: 33,
            date:new Date()
        },
        {
            id: 2,
            name: 'Ashu',
            profilePic: Images.sampleProfilePic,
            status: 'Busy',
            unRead: 4,
            date:new Date()
        },
        {
            id: 3,
            name: 'Rachit',
            profilePic: Images.sampleProfilePic,
            status: 'Busy',
            unRead: 0,
            date:new Date()
        },
        {
            id: 4,
            name: 'Rachit',
            profilePic: Images.sampleProfilePic,
            status: 'Busy',
            unRead: 0,
            date:new Date()
        },
        {
            id: 5,
            name: 'Rachit',
            profilePic: Images.sampleProfilePic,
            status: 'Busy',
            unRead: 0,
            date:new Date()
        },
        {
            id: 6,
            name: 'Rachit',
            profilePic: Images.sampleProfilePic,
            status: 'Busy',
            unRead: 0,
            date:new Date("July 21, 2020 01:15:00")
        },
        

    ]

    const handleSearch = () => {
        alert('search')
    }


    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    const _header = () => {

        return (
            <RLHeader
                isBothImageTextHeader
                backgroundColor={Colors.violet}
                title={'Chat'}
                leftImg={Images.previousArrowWhite}
                onpressleft={() => navigation.goBack()}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}
                isNoti={true}
                rightImg={Images.searchWhite}
                onpressnoti={()=>{}}
                // isSearch={true}
                onpressright={() => {handleSearch() }}
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

    const RenderUserList = ( { data } ) => {

        const chatTime = `${ data.date.getHours() }:${data.date.getMinutes()}:${ data.date.getSeconds()}`
        const chatDate = `${ data.date.getDate() } ${ monthNames[data.date.getMonth()] }, ${ data.date.getFullYear() }`
        const chatTimeToShow = chatDate === curdate ? chatTime : chatDate
        return(
            <View style={styles.cardContainer}>
                <View style={{flexDirection:'row'}}>
                    <Image source={data.profilePic} style={{
                        height: 50,
                        width: 50,
                        resizeMode:'contain'
                    }} />
                    <View style={{
                        marginLeft:5
                    }}>
                        <Text style={{
                            color: '#532280',
                            fontSize: 16,
                            fontWeight: 'bold',
                            fontFamily:'Montserrat'
                        }}>{data.name}</Text>
                        <Text style={{
                            color: '#7C7D7E',
                            fontFamily: 'Montserrat',
                            fontSize: 12,
                        }}>{data.status}</Text>
                    </View>
                </View>
                <View>
                    {data.unRead > 0 ?
                        <View style={{
                            backgroundColor: '#00BBFF',
                            height: 25,
                            width:25,
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent:'center'
                        }}>
                            <Text style={{color:Colors.white} }>{data.unRead}</Text>
                        </View> :
                        <View>
                            <Text style={{
                                color: '#7B8793',
                                fontSize:12
                            }}>{chatTimeToShow}</Text>
                        </View>
                    }
                </View>
                
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
                        <View style={{
                            marginTop:10
                        }}>
                            {userList.map( (each) => {
                                return (
                                    <RenderUserList data={each} key={each.id }/>
                                )
                            })

                            }
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
export default connect( select )( Chat );

const styles = StyleSheet.create( {
    cardContainer: {
        width: BaseStyle.DEVICE_WIDTH * 0.9,
        borderRadius: 15,
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:'#fff',
        alignSelf: 'center',
        marginTop: 1,
        marginBottom:5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
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