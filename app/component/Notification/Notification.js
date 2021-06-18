import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, ScrollView } from "react-native";
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
    RLNotification
} from 'basecomponent';




const Notification = ({ navigation, props }) => {
    const NotificationDataList = [
        { id: 1, title: 'Thanks for downloading masstor!', description: 'Check out schools near by your location by using our simplified tools.', time: 'Now' },
        { id: 2, title: 'Thanks for downloading masstor!', description: 'Check out schools near by your location by using our simplified tools.', time: 'Now' },
        { id: 3, title: 'Thanks for downloading masstor!', description: 'Check out schools near by your location by using our simplified tools.', time: 'Now' },
        { id: 4, title: 'Thanks for downloading masstor!', description: 'Check out schools near by your location by using our simplified tools.', time: 'Now' },
        { id: 5, title: 'Thanks for downloading masstor!', description: 'Check out schools near by your location by using our simplified tools.', time: 'Now' },
        { id: 5, title: 'Thanks for downloading masstor!', description: 'Check out schools near by your location by using our simplified tools.', time: 'Now' },
    ]

    const [isSwitch, setIsSwitch] = useState(false)
    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    const _onswitch = () => {
        setIsSwitch(!isSwitch)
    }
    //================================ Start common componenet =========================================== 
    //School Type FlatList item
    const _rendeNotificationItem = ({ item, index }) => {
        return (
            <RLNotification
                marginTop={index == 0 ? 25 : 0}
                title={item.title}
                description={item.description}
                time={item.time}
            />
        )
    }

    const _header = () => {
        return (
            <RLHeader
                isCampusSwitchHeader
                backgroundColor={Colors.violet}
                leftImg={Images.previousArrowWhite}
                title={BaseText.Notifications}
                onpressleft={() => navigation.goBack()}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}
                showrightSwitch={true}
                onValueChange={() => _onswitch()}
                value={isSwitch}
            // showarrow={item.showswitch == false ? true : false}
            // arrowImg={Images.nextarrowicongray}
            // titlecolor={theme.themeMode == 'dark' ? Colors.white : Colors.black}
            />
        )
    }

    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white, }}>
                <View style={{ flex: 1, backgroundColor: Colors.white, }}>
                    {_header()}
                    <ScrollView bounces={false}
                        contentContainerStyle={{ flexGrow: 1 }}>
                        <FlatList
                            style={{ backgroundColor: Colors.white, alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 95, }}
                            data={NotificationDataList}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => _rendeNotificationItem({ item, index })}
                            showsVerticalScrollIndicator={false}
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
export default connect(select)(Notification);