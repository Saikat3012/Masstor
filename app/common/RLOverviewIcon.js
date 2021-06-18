import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import InfoIcon from 'assets/svg/infoicon.js';
import ENV from 'env/index';

import {
    RLText,
} from 'basecomponent';

const RLOverviewIcon = (props) => {

    const {
        icon,
        text,
        text1,
    } = props;

    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.lightViolet, borderRadius: 12, padding: 10, height: BaseStyle.DEVICE_HEIGHT / 100 * 12, width: BaseStyle.DEVICE_WIDTH / 100 * 18, }}>
                {icon}
                <RLText
                    text={text}
                    style={{
                        fontFamily: ENV.mfontFamilyMedium,
                        fontSize: 9,
                        color: Colors.violet,
                        textAlign: 'center',
                        marginTop: 5,
                    }}
                />
                <RLText
                    text={text1}
                    style={{
                        fontFamily: ENV.mfontFamilyMedium,
                        fontSize: 9,
                        color: Colors.violet,
                        textAlign: 'center',
                        marginTop: 1,
                    }}
                />
            </View>
        </View>
    );
};
export default RLOverviewIcon;