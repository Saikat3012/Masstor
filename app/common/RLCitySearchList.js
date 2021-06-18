import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import ENV from 'env/index';
import Closepink from 'assets/svg/closepink';

const RLCitySearchList = (props) => {

    const {
        title,
        onPressRemove

    } = props;

    return (
        <View style={{
            paddingVertical: 8, paddingHorizontal: 20, backgroundColor: Colors.gray4, borderRadius: 15, justifyContent: 'center', flexDirection: 'row', marginRight: 10, marginBottom: 10
        }}>
            <Text style={{ color: Colors.violet1, alignSelf: 'center', fontSize: 10, fontFamily: ENV.mfontFamilyMedium, }
            } > {title}</ Text>

            <TouchableOpacity onPress={onPressRemove} style={{ marginLeft: 18, height: 15, width: 15, borderRadius: 15 / 2, alignSelf: 'center', backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }}>
                {/* <Closepink /> */}
                <Image source={Images.closepink} style={{ height: 8, width: 6, resizeMode: 'contain' }} />
            </TouchableOpacity>
        </View>
    );
};
export default RLCitySearchList;