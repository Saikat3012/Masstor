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

const GroupMembers = () => {
    return (
        <Text>Saikat</Text>
    )
}
export default GroupMembers