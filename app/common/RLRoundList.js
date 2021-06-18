import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';

const RLRoundList = (props) => {

    const {
        title, titleStyle, customBtnStyle, onPress
    } = props;

    return (
        <TouchableOpacity
            style={[customBtnStyle, { paddingVertical: 8, paddingHorizontal: 15, borderWidth: 1, }]}
            onPress={onPress}>
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    );
};
export default RLRoundList;