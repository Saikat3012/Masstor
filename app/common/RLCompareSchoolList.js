import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import ENV from 'env/index';
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';

const RLCompareSchoolList = (props) => {

    const {
        IsCompareList,
        IsSelectionTitleList,
        schoolImg,
        schoolname,
        schoollocation,
        IsSelectionDetailList,
        key1,
        key2,
        key3,
        selectionTitle,
        showcheckmark

    } = props;

    const _renderCompareList = () => {
        return (
            <ImageBackground style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 43, marginRight: BaseStyle.DEVICE_WIDTH / 100 * 2, }}
                source={schoolImg}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 10, }}>
                    <Text style={{ color: Colors.white, fontFamily: ENV.mfontFamilyBold, fontSize: 8 }}>{schoolname}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={Images.mapWhite}
                            style={{
                                height: 8,
                                width: 5,
                                resizeMode: 'contain',
                                marginRight: 5

                            }}
                        />
                        <Text style={{ color: Colors.white, fontFamily: ENV.mfontFamilyMedium, fontSize: 7 }}>{schoollocation}</Text>
                    </View>

                    <View style={{ marginTop: 40, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ borderRadius: 10, height: 20, width: 66, backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 8, fontFamily: ENV.mfontFamilyBold, color: Colors.violet }}>{BaseText.ApplyNow}</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={{ borderWidth: 1, borderRadius: 15 / 2, height: 15, width: 15, borderColor: Colors.white, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ height: 7, width: 7, resizeMode: 'contain', alignSelf: 'center' }}
                                source={Images.loveWhite} />
                        </TouchableOpacity> */}
                        <Image
                            style={{ height: 20, width: 20, resizeMode: 'contain', alignSelf: 'center' }}
                            source={Images.roundWhiteLove} />
                    </View>
                </View>
            </ImageBackground>
        )
    }

    const _renderSelectionTitleList = () => {
        return (
            <View style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.violet, paddingVertical: 10, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 11, fontFamily: ENV.mfontFamilyBold, color: Colors.white }}>{selectionTitle}</Text>
            </View>

        )
    }

    const _renderSelectionDetailList = () => {
        return (
            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderBottomColor: Colors.gray, borderLeftColor: Colors.gray, borderRightColor: Colors.gray, alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 90, }}>
                <View style={{ justifyContent: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 40, paddingVertical: 8 }}>
                    <Text style={{ fontSize: 8, fontFamily: ENV.mfontFamilyMedium, color: Colors.violet, paddingLeft: 10 }}>{key1}</Text>
                </View>
                <View style={{ justifyContent: 'center', paddingVertical: 8, width: BaseStyle.DEVICE_WIDTH / 100 * 25, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderLeftColor: Colors.gray, borderRightColor: Colors.gray }}>
                    {showcheckmark &&
                        <View style={{ paddingVertical: 3, flexDirection: 'row', alignSelf: 'center', borderStyle: 'dashed', borderWidth: 1, borderColor: Colors.gray, borderRadius: 1 }}>
                            <Text style={{ fontSize: 6, fontFamily: ENV.mfontFamilyBold, color: Colors.pink, textAlign: 'center', paddingHorizontal: 10, }}>{key2}</Text>
                            <Image source={Images.greenCheckmark} style={{ left: 4, width: 10, height: 10, resizeMode: 'contain', }} />
                        </View>
                    }
                    {!showcheckmark &&
                        <Text style={{ fontSize: 6, fontFamily: ENV.mfontFamilyBold, color: Colors.pink, textAlign: 'center', paddingHorizontal: 10, }}>{key2}</Text>
                    }


                </View>
                <View style={{ justifyContent: 'center', paddingVertical: 8, width: BaseStyle.DEVICE_WIDTH / 100 * 25 }}>
                    <Text style={{ fontSize: 6, fontFamily: ENV.mfontFamilyBold, color: Colors.pink, textAlign: 'center', paddingHorizontal: 10 }}>{key3}</Text>
                </View>
            </View >

        )
    }

    return (
        <View>
            {IsCompareList && _renderCompareList()}
            {IsSelectionTitleList && _renderSelectionTitleList()}
            {IsSelectionDetailList && _renderSelectionDetailList()}
        </View>
    );
};
export default RLCompareSchoolList;