import React from 'react';
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import ENV from 'env/index';


const RLImageTextList = (props) => {

    const {
        id,
        title,
        icon,
        isShowLive,
        styles,
        isSelected,
        handleOnPress
    } = props;

    return (
        <TouchableWithoutFeedback
        onPress={()=>{handleOnPress(id)}}
        >
            <View style={{
                width: BaseStyle.DEVICE_WIDTH / 100 * 20,
                borderRadius: 8,
                backgroundColor: isSelected ? Colors.violet : Colors.white,

                marginBottom: 2,
                marginLeft: BaseStyle.DEVICE_WIDTH / 100 * 2,
                justifyContent: 'center'

            }}>
                {isShowLive &&
                    <View style={{ backgroundColor: Colors.sky, paddingVertical: 3, borderTopLeftRadius: 8, borderBottomRightRadius: 8, width: BaseStyle.DEVICE_WIDTH / 100 * 8, justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 8, fontFamily: ENV.mfontFamilyBold, color: Colors.white }}>Live</Text>
                    </View>
                }
                {/* {!isShowLive &&
                    <View style={{ paddingVertical: 3, borderTopLeftRadius: 8, borderBottomRightRadius: 8, width: BaseStyle.DEVICE_WIDTH / 100 * 8, justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 8, fontFamily: ENV.mfontFamilyBold, color: Colors.white }}>Live</Text>
                    </View>
                } */}
                <Image
                    source={icon}
                    style={{ height: 25, width: 25, resizeMode: 'contain', alignSelf: 'center', marginTop: 2, }} />
                {/* <View style={{ backgroundColor: Colors.pink, height: 10, width: 10, borderRadius: 20 / 2, alignSelf: 'center' }}></View> */}
                <Text style={{
                    paddingHorizontal: 10,
                    color: isSelected ? Colors.white : Colors.gray7,
                    fontSize: 9,
                    fontFamily: ENV.mfontFamilyBold,
                    textAlign: 'center',
                    alignSelf: 'center',
                    paddingVertical: 8
                }}>{title}</Text>
            </View>
        </TouchableWithoutFeedback >
    );
};
export default RLImageTextList;