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

const RLLearningMode = (props) => {

    const {
        color,
        text,
        isLeft,
        isRight
    } = props;

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                {isLeft &&
                    <View style={{ height: 35, width: 35, borderRadius: 50, backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderColor: color, borderWidth: 2.5, marginRight: -20, zIndex: 10, }}>
                        <View style={{ height: 17, width: 17, backgroundColor: color, borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}>
                            <InfoIcon height={8} width={8} />
                        </View>
                    </View>
                }
                <View style={{ width: 80, height: 25, borderRadius: 50, backgroundColor: color, justifyContent: 'center', }}>
                    <RLText
                        text={text}
                        style={{
                            fontSize: 10,
                            fontFamily: ENV.mfontFamilyMedium,
                            color: Colors.white,
                            textAlignVertical: 'center',
                            marginLeft: isLeft ? 25 : 15,
                        }}
                    />
                </View>
                {isRight &&
                    <View style={{ height: 35, width: 35, borderRadius: 50, backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderColor: color, borderWidth: 2.5, marginLeft: -20, zzIndex: 10, }}>
                        <View style={{ height: 17, width: 17, backgroundColor: color, borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}>
                            <InfoIcon height={8} width={8} />
                        </View>
                    </View>
                }
            </View>
        </View>
    );
};
export default RLLearningMode;