import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import ENV from 'env/index';

import ToogleArrow from 'assets/svg/togglearrowwhite.js';

const RLThreeColFeeStructure = (props) => {

    const {
        child1,
        child2,
        child3,
        isArrow,
        isStart
    } = props;

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                // paddingVertical: 15, 
                // paddingHorizontal: 10, 
                alignItems: isStart ? 'flex-start' : 'center',
            }}
            >
                <View style={{
                    width: '42%',
                    // backgroundColor: 'blue',
                }}
                >
                    {child1}
                </View>
                <View style={{
                    width: '24%',
                    // backgroundColor: 'green',
                    marginHorizontal: 10,
                }}
                >
                    {child2}
                </View>
                <View style={{
                    width: '24%',
                    // backgroundColor: 'red',
                }}
                >
                    {child3}
                </View>
                {isArrow &&
                    <View>
                        <ToogleArrow />
                    </View>
                }
            </View>
        </View>
    );
};
export default RLThreeColFeeStructure;