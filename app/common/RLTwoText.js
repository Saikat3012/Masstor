import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';

import {
    RLText,
} from 'basecomponent';

const RLTwoText = (props) => {

    const {
        text,
        text1,
        textStyle,
        text1Style
    } = props;

    return (
        <View>
            <Text style={[text1Style]}>
                <Text style={[textStyle]}>{text}</Text>
                {text1}
            </Text>
            {/* <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
                <RLText
                    text={text}
                    // RlnumberOfLines={3}
                    style={[textStyle, {
                        // flexWrap: 'wrap', flex: 1, 
                        // flexShrink: 2,
                    }]}
                />
                <RLText
                    // RlnumberOfLines={3}
                    text={text1}
                    style={[text1Style, {
                        // flexWrap: 'wrap', flex: 1, 
                        // flexShrink: 2,
                    }]}
                />
            </View> */}
        </View>
    );
};
export default RLTwoText;