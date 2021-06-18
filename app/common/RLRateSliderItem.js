import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, } from "react-native";
import Colors from "constants/Colors";
import textStyle from 'theme/component/TextStyle';
import BaseStyle from 'constants/BaseStyle'
import Images from 'constants/Images';
import LinearGradient from "react-native-linear-gradient";
import ENV from 'env/index';
import {
    RLText,
} from 'basecomponent';

const RLRateSliderItem = (props) => {

    const {
        value,
        first,
        second,
        label,
    } = props;

    // console.log(value, first, second);

    const checkActive = () => {
        if (value >= first && value <= second)
            return true
        else
            return false
    }

    return (
        <View style={{ marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 2, alignItems: 'center', }}>
            <View style={checkActive() ? styles.activeTextWrapper : styles.inactiveTextWrapper}>
                <Text style={[checkActive() ? styles.active : styles.inactive]}>{value}</Text>
            </View>
            <Text style={styles.labelStyle}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    active: {
        textAlign: 'center',
        fontSize: 12,
        // bottom: 10,
        color: Colors.blue1,
        fontFamily: ENV.mfontFamilyBold,
    },
    inactive: {
        // flex: 1,
        fontSize: 8,
        // textAlignVertical: 'center',
        textAlign: 'center',
        color: Colors.blue1,
        fontFamily: ENV.mfontFamilyBold,
    },
    labelStyle: {
        fontSize: 8,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: Colors.pink,
        fontFamily: ENV.mfontFamilyBold,
        marginTop: 5,
    },
    activeTextWrapper: {
        borderColor: Colors.blue1,
        borderRadius: 500,
        borderWidth: 1,
        height: 25,
        width: 25,
        alignContent: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    inactiveTextWrapper: {
        borderColor: Colors.blue1,
        borderRadius: 500,
        borderWidth: 1,
        height: 20,
        width: 20,
        alignContent: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
});
export default RLRateSliderItem;