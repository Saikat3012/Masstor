import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import ENV from 'env/index';

const RLCustomizeSearchList = (props) => {

    const {
        icon, title
    } = props;

    return (
        <ImageBackground
            style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 21, height: 78, borderRadius: 7, justifyContent: 'center', alignItems: 'center', marginRight: BaseStyle.DEVICE_WIDTH / 100 * 2 }}
            source={Images.customizeBack}
            imageStyle={{ width: BaseStyle.DEVICE_WIDTH / 100 * 21, height: 78, borderRadius: 7, justifyContent: 'center', alignItems: 'center', marginRight: BaseStyle.DEVICE_WIDTH / 100 * 2 }}>
            <Image
                source={icon}
                style={{
                    height: 33,
                    width: 23,
                    resizeMode: 'contain',
                }} />
            <Text style={{ color: Colors.white, fontFamily: ENV.mfontFamilyBold, fontSize: 9, textAlign: 'center' }}>{title}</Text>
        </ImageBackground>
    );
};
export default RLCustomizeSearchList;