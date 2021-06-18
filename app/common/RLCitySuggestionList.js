import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';

const RLCitySuggestionList = (props) => {

    const {
        cityName,
        cityOnpress
    } = props;

    return (
        <TouchableOpacity onPress={cityOnpress}>
            <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, backgroundColor: Colors.gray4, alignSelf: 'center', paddingVertical: 5 }}>
                <Text style={{ color: Colors.violet }}>{cityName}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default RLCitySuggestionList;