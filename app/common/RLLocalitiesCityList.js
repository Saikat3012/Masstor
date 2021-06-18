import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import ENV from 'env/index';
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';

import Agra from 'assets/svg/agra';
import MySchoolPink from 'assets/svg/mySchoolPink';

const RLLocalitiesCityList = (props) => {

    const {
        itemImg,
        title
    } = props;

    return (
        <View style={{
            paddingVertical: 12,
            paddingHorizontal: 10,
            marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 3.5,
            marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 1,
            width: BaseStyle.DEVICE_WIDTH / 100 * 25, borderWidth: 1, borderColor: Colors.blue1, borderRadius: 17,

        }}>
            {/* <Image
                source={itemImg}
                style={{
                    resizeMode: 'contain',
                    height: 50,
                    width: 75,
                    alignSelf: 'center'

                }}
            /> */}
            <Agra style={{ alignSelf: 'center' }} />
            <Text numberOfLines={1} style={{ paddingTop: 10, color: Colors.pink, fontFamily: ENV.mfontFamilyBold, alignSelf: 'center', fontSize: 10 }}>{title}</Text>
        </View >
    );
};
export default RLLocalitiesCityList;