import React from "react";
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import ENV from 'env/index';

const RLNotification = (props) => {

    const {
        marginTop,
        title,
        description,
        time,
        unReaded
    } = props;

    const _handleOnPress = () => {
        alert(title)
    }

    return (
        <TouchableWithoutFeedback
            onPress={_handleOnPress}
        >
            <View style={{
                alignSelf: 'center',
                marginBottom: 12,
                marginTop: marginTop,
                marginVertical: 10,
                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                borderRadius: 10, paddingVertical: 10, shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 10,
                // shadowColor: Platform.OS == 'ios' ? 'gray' : 'black',
                shadowColor: 'gray',
                backgroundColor: Colors.white


            }}>
                {/* <View style={{ backgroundColor: Colors.pink, height: 10, width: 10, borderRadius: 20 / 2, alignSelf: 'center' }}></View> */}
                <Text style={{ paddingLeft: 28, color: Colors.gray7, fontSize: 14, fontFamily: ENV.mpolisfontFamilySemiBold }}>{title}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ backgroundColor: unReaded ? Colors.pink : Colors.white, height: 10, width: 10, borderRadius: 10 / 2, marginLeft: 8, marginTop: 4 }}></View>
                    <Text style={{ paddingLeft: 10, lineHeight: 20, color: Colors.gray7, fontSize: 14, fontFamily: ENV.mpolisfontFamilySemiBold }}>{description}</Text>
                </View>
                <Text style={{ paddingTop: 2, paddingLeft: 28, color: Colors.gray8, fontSize: 12, fontFamily: ENV.mpolisfontFamilySemiBold }}>{time}</Text>
            </View>
        </TouchableWithoutFeedback >
    );
};
export default RLNotification;