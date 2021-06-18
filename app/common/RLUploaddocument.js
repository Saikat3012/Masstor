import React from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import ENV from 'env/index';


const RLUploaddocument = (props) => {

    const {
        title,
        btnColor,
        btntxtColor,
        progressWidth,
        progressValue,
        showProgressBar,
        onPressUpload,
        btnText,
        uploadfilename
    } = props;

    return (
        <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center' }}>
            <Text style={{ color: Colors.pink, fontSize: 10, fontFamily: ENV.mfontFamilyRegular }}>{title}<Text style={{ color: 'red' }}>{'*'}</Text></Text>

            <View style={{ paddingVertical: 20 }}>
                <View style={{ backgroundColor: Colors.lightViolet, height: 39, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ paddingLeft: 15, width: BaseStyle.DEVICE_WIDTH / 100 * 60, alignSelf: 'center', color: Colors.green1, fontSize: 10, fontFamily: ENV.mfontFamilyRegular }}>{uploadfilename}</Text>
                    <TouchableOpacity onPress={onPressUpload} style={{ width: 96, backgroundColor: btnColor, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: btntxtColor, fontSize: 12, fontFamily: ENV.mfontFamilySemiBold, }}>{btnText}</Text>
                    </TouchableOpacity>
                </View>
                {showProgressBar &&
                    <View>
                        <View style={{ flexDirection: 'row', height: 6, borderRadius: 6, backgroundColor: Colors.lightViolet, marginTop: 10, width: '100%' }}>
                            <Animated.View style={{ borderRadius: 6, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: Colors.green1, width: progressWidth }} />
                        </View>
                        <Text style={{ alignSelf: 'flex-end', color: Colors.violet, fontSize: 8, fontFamily: ENV.mfontFamilySemiBold, paddingTop: 5 }}>{progressValue}</Text>
                    </View>
                }

            </View>
        </View>
    );
};
export default RLUploaddocument;