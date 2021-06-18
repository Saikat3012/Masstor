import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import env from 'env/index';
import {
    RLText,
    RLButton
} from "basecomponent";

import { useNetInfo } from "@react-native-community/netinfo";
import _ from 'lodash';
import { useIsFocused } from '@react-navigation/native';

const RLNoInternet = (props) => {

    const {
        RefreshClick,
        style,
        height,
    } = props;

    const [isC, SetIsC] = useState(false);
    const [isInit, SetIsInit] = useState(false);

    const netInfo = useNetInfo();
    const isFocused = useIsFocused();

    useEffect(() => {
        // console.log(netInfo);
        if (isFocused) {
            if (!_.isNull(netInfo.isConnected) && !_.isNull(netInfo.details) && !_.isNull(isC)) {
                if (!netInfo.isConnected && !_.isNull(netInfo.details)) {
                    // isC = false;
                    SetIsC(netInfo.isConnected);
                    // console.log("Internet is gone");
                }
                else if (netInfo.isConnected && !_.isNull(netInfo.details) && !_.isNull(isC)) {
                    SetIsC(netInfo.isConnected);
                    // console.log("Internet is back");
                    if (!isInit) {
                        SetIsInit(true);
                        RefreshClick();
                    }
                }
            }
            else {
                SetIsC(netInfo.isConnected);
            }
        }
    }, [netInfo.isConnected])

    return (
        <View
            style={[style, {
                // height: (!netInfo.isConnected && !_.isNull(netInfo.details)) ? BaseStyle.DEVICE_HEIGHT : 0,
                backgroundColor: Colors.white,
                height: (!netInfo.isConnected && !_.isNull(netInfo.details)) ? height : 0,
            }]}
        >
            {(!netInfo.isConnected && !_.isNull(netInfo.details)) ?
                <View>
                    <View style={styles.imageWrapper}>
                        <Image source={Images.noInternetImage} style={styles.imageStyle} />
                    </View>
                    <RLText style={styles.titleTextStyle} text={BaseText.noInternetTitle} />
                    <RLText style={styles.msgTextStyle} text={BaseText.noInternetMsg} />
                    <RLButton
                        SimpleButton={true}
                        simplebuttontext={BaseText.noInternetBtnText}
                        simplebuttontextStyle={buttonStyle.simpleButtonInternetTextStyle}
                        simplebuttonStyle={[buttonStyle.simpleButtonInternetStyle, { marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 4, }]}
                        onpress={() => {
                            // RefreshClick();
                            if (!isInit) {
                                SetIsInit(true);
                                RefreshClick();
                            }
                        }}
                    />
                </View>
                :
                null
            }
        </View>
    );
};
export default RLNoInternet;

const styles = StyleSheet.create({
    titleTextStyle: {
        fontFamily: env.mfontFamilyBold,
        color: Colors.violet,
        fontSize: 21,
        textAlign: 'center',
    },
    msgTextStyle: {
        fontFamily: env.mfontFamilySemiBold,
        color: Colors.gray7,
        fontSize: 13,
        textAlign: 'center',
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 3,
        marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 5,
    },
    imageWrapper: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 68,
        height: BaseStyle.DEVICE_HEIGHT / 100 * 40,
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 4,
        // backgroundColor:'yellow',
        alignSelf: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
});