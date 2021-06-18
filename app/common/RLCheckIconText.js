import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import InfoIcon from 'assets/svg/infoicon.js';
import ENV from 'env/index';
import CheckPinkIcon from 'assets/svg/circlecheckiconpink.js'

import {
    RLText,
} from 'basecomponent';

const RLCheckIconText = (props) => {

    const {
        icon,
        text,
    } = props;

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                {icon ? icon : <CheckPinkIcon />}
                <RLText
                    text={text}
                    style={{
                        fontFamily: ENV.mfontFamilyRegulat,
                        fontSize: 11,
                        color: Colors.pink,
                        marginLeft: 5,
                    }}
                />
            </View>
        </View>
    );
};
export default RLCheckIconText;