import React, { Fragment, useEffect, useState,useCallback } from "react";
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

import {
    GiftedChat,
    Bubble,
    InputToolbar,
    Send
} from 'react-native-gifted-chat'
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
import GroupMembers from "./GroupMembers";
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
import { TextInput } from "react-native-gesture-handler";

const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];


const ChatScreen = ({ navigation, props }) => {

    const [liveUsers, setLiveUsers] = useState( 100 )
    const [selectedMenu, setSelectedMenu] = useState( 3 )
    const [zoomedOut, setZoomedOut] = useState( true )
    const [userId, setUserId] = useState( 1 )
    const [messageText, setMessageText] = useState( '' )
    const [messages, setMessages] = useState( [] );
    const [name, setName] = useState( 'Saikat' )
    const [group, setGroup] = useState( true )
    const [isGroup,setIsGroup] = useState(true)
    const groupName = 'BatchMates'
    const groupChat = false

    const groupMemberList = [
        {
            name: 'Saikat',
            profilePic: Images.sampleProfilePic
        }
    ]
    
    


    

    useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

    
    const [ChatUserName, setChatUserName] = useState('Saikat')

    
    const today = new Date()

    const curdate = `${today.getDate()} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`
    
    
    
    const groupButtonPressed = () => {
        setIsGroup(!isGroup)
    }



    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    const _header = () => {
        if(groupChat){
            return (
                <RLHeader
                    isGroup
                    backgroundColor={Colors.violet}
                    title={groupName}
                    groupCount={32}
                    leftImg={Images.previousArrowWhite}
                    leftDownImage={Images.previousArrowWhite}
                    onpressleft={() => navigation.goBack()}
                    leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}
                    groupButtonPressed={() => groupButtonPressed()}
                    leftDownImageStyle={{ height: 15,weight:15, transform:[{rotate:isGroup? '90deg' : '270deg'}],marginLeft:8}}
                />
            )} else {
        return (
            <RLHeader
                isBothImageTextHeader
                backgroundColor={Colors.violet}
                title={ChatUserName}
                leftImg={Images.previousArrowWhite}
                onpressleft={() => navigation.goBack()}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}
            />
        )}
    }
    const handleAddAttachment = (  ) => {
        alert('ADD')
    }
    const handleSend = () =>{
        const curMessage = {
            id: chatList.length,
            message: messageText,
            name: 'Saikat',
            profilePic: Images.sampleProfilePic,
            date: new Date(),
            uId: 101
        }
        const prevChat = chatList
        prevChat.push( curMessage )
        console.log(prevChat)
        setChatList(prevChat)
    }
    //================================ Start common componenet =========================================== 


    const  renderBubble=(props) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: '#fff',
          },
          left: {
            color: '#7B8793',
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: '#F2F2F2',
          },
          right: {
            backgroundColor: '#7C7D7E',
          },
        }}
      />
    );
    }
    const renderInputToolbar = ( props ) => {
        consoleLog(props)
        return (
            <InputToolbar
                {...props}
                containerStyle={{
                    backgroundColor: "white",
                    borderTopColor: "#E8E8E8",
                    borderTopWidth: 1,

                }}
                />
        )
    }

    const renderSendButton = ( props ) => {
        const {text,messageIdGenerator,user, onSend} = props
        return(
            <TouchableOpacity onPress= {
            ()=>{
                if (text && onSend) {
                    onSend({ text: text.trim(), user:user,_id:messageIdGenerator()}, true);
                }
                }
            } style={styles.sendButton}
            >
                <Send />
                <Image source={Images.campusSend} style={{
                        height: 30,
                        width: 30
                    }} />
            </TouchableOpacity>
        )
    }
    const onSend = useCallback( ( messages = [] ) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [] )
    const renderAction = ( props ) =>{
        return (
            
        <Text>HGi</Text>
        )
    }
    if ( groupChat && isGroup ) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
            }}>
                {_header()}

                <View style={{
                    width: BaseStyle.DEVICE_WIDTH * 0.9,
                    elevation: 5,
                    alignSelf: 'center',
                    paddingHorizontal: 15,
                    paddingVertical: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}> 
                    <Image source={groupMemberList[0].profilePic} style={{ height: 50, width: 50 }} />
                    <Text style={{
                        fontSize: 17,
                        color: '#532280',
                        marginLeft:25
                    }}>{groupMemberList[0].name}</Text>
                    <Image source={Images.chatGray} style={{ height: 25, width: 25, position:'absolute',right:10}} />
                </View>
                
            </View>

        )
    }
    else {
        return (
            // <Fragment>
            <View style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                {_header()}
                <GiftedChat
                    // renderMessage={renderMessage}
                    renderBubble={renderBubble}
                    renderInputToolbar={renderInputToolbar}
                    messages={messages}
                    onSend={messages => onSend( messages )}
                    user={{
                        _id: 1,
                        name: 'Saikat',
                        avatar: 'https://placeimg.com/140/140/any',
                    }}
                    renderSend={( props ) => renderSendButton( props )}
                    renderActions={( props ) => { renderAction( props ) }}
                />
            </View>

            // </Fragment>
        );
    }
};

const select = (store) => {
    return store;
}
export default connect( select )( ChatScreen );

const styles = StyleSheet.create( {
    cardContainerSelf: {
        borderRadius: 15,
        paddingHorizontal:20,
        paddingVertical:5,
        // backgroundColor:'#7C7D7E',
        alignSelf: 'flex-end',
        marginTop: 1,
        alignItems: 'center',
        flexDirection:'row-reverse'
    },
    cardContainerOth: {
        borderRadius: 15,
        paddingHorizontal:20,
        paddingVertical:5,
        // backgroundColor:'#F2F2F2',
        alignSelf: 'flex-start',
        marginTop: 1,
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
    },
    messageContainerSelf: {
        margin: 5,
        backgroundColor: '#7C7D7E',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius:10, 
    },
    messageContainerOth: {
        margin: 5,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        
    },
    sendButton: {
        position: 'absolute',
        right: 8,
        alignSelf:'center'
    }

})