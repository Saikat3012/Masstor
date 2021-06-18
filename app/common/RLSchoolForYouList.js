import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import ENV from 'env/index';
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';

import Agra from 'assets/svg/agra';
import MySchoolPink from 'assets/svg/mySchoolPink';
import { mfontFamilyBold } from "../env";
import LinearGradient from "react-native-linear-gradient";

const RLSchoolForYouList = (props) => {

    const {
        backgroundImg,
        schoolname,
        schoollocation,
        standard,
        fees,
        marginLeft,
        isshowToolTip,
        schoolTolTipShow,
        onCloseToolTip,
        onPressToolButton,
        placement,
        toolbackgroundColor,
        tooltext,
        IslikeSchoolInfo,
        IspendingSchoolInfo,
        isTestResult,
        status,
        onPressResultButton,
        schoolLikeBtnImg,
        itemClick,
        seatsLeft,
        boardType,
        IsNearSchoolInfo,
        marginRight,
        vistor,
        schoolImg,
        borderBottomWidth,
        mainViewStyle,
        onPressFaviourt
    } = props;

    return (
        // <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', borderBottomWidth: 0.5, borderBottomColor: Colors.gray, paddingVertical: 5 }}>
        <View style={[mainViewStyle, { flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', paddingVertical: 5 }]}>
            <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 60, }} >
                <ImageBackground
                    style={{
                        height: 75, width: 70,
                        borderRadius: 5


                    }}
                    imageStyle={{
                        height: 75, width: 70,
                        borderRadius: 5

                    }}
                    source={schoolImg} >
                    <LinearGradient
                        // colors={['#7D2B86', '#562380', '#983089',]}
                        colors={['rgba(155, 49, 137,0.1)', 'rgba(114, 36, 101,0.8)']}
                        // start={{ x: 0, y: 0 }}
                        // end={{ x: 1, y: 0 }}
                        style={{
                            height: 75, width: 70,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <TouchableOpacity onPress={onPressFaviourt}>
                            <Image
                                source={Images.heartwhite}
                                style={{ height: 15, width: 15, resizeMode: 'contain' }} />

                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={onPressFaviourt}>
                            <Image
                                source={require('../assets/CommonIcon/Heart.png')}
                                style={{ height: 15, width: 15, resizeMode: 'contain' }} />

                        </TouchableOpacity> */}

                    </LinearGradient>
                </ImageBackground>

                <View style={{ paddingLeft: 5, justifyContent: 'center' }}>
                    <Text style={{ color: Colors.violet, fontSize: 9, fontFamily: ENV.mfontFamilyBold }}>{schoolname}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>
                        <Image
                            source={Images.mapPink}
                            style={{
                                height: 8,
                                width: 5,
                                resizeMode: 'contain',
                                marginRight: 5

                            }}
                        />
                        {/* <MapPink style={{ marginRight: 5 }} /> */}
                        <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyBold, fontSize: 7 }}>{schoollocation}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                                <Image
                                    source={Images.stdBlue}
                                    style={{
                                        height: 8,
                                        width: 5,
                                        resizeMode: 'contain',
                                        marginRight: 5

                                    }}
                                />
                                {/* <StdBlue style={{ marginRight: 5 }} /> */}
                                <Text style={{ color: Colors.blue1, fontFamily: ENV.mfontFamilyMedium, fontSize: 7 }}>{standard}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={Images.feesBlue}
                                    style={{
                                        height: 8,
                                        width: 5,
                                        resizeMode: 'contain',
                                        marginRight: 5

                                    }}
                                />
                                {/* <FeesBlue style={{ marginRight: 5 }} /> */}
                                <Text style={{ color: Colors.blue1, fontFamily: ENV.mfontFamilyMedium, fontSize: 7 }}>{fees}</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ top: 8, height: 28, width: 55 }}>
                            <Image source={Images.officeadmissionLogo} style={{ height: 28, width: 55, resizeMode: 'contain' }} />
                        </TouchableOpacity>


                    </View>
                </View>


            </View>

            <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 30, }}>
                <Text style={{ alignSelf: 'flex-end', color: Colors.lightgreen, fontSize: 7, fontFamily: ENV.mfontFamilyExtraBold }}>{BaseText.AdmissionOpen}</Text>

                <TouchableOpacity style={{ marginTop: 4, borderTopLeftRadius: 4, borderBottomLeftRadius: 4, alignSelf: 'flex-end', backgroundColor: Colors.gray10, paddingVertical: 5, paddingHorizontal: 10 }}>
                    <Text style={{ color: Colors.white, fontSize: 5, fontFamily: ENV.mfontFamilyBold }}>{boardType}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 4, alignItems: 'center', flexDirection: 'row', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, alignSelf: 'flex-end', backgroundColor: Colors.gray10, paddingVertical: 5, paddingHorizontal: 10 }}>
                    <Text style={{ color: Colors.white, fontSize: 5, fontFamily: ENV.mhelveticafontFamilyBold }}>{vistor}</Text>
                    <Image
                        style={{ resizeMode: 'contain', height: 4, width: 7, marginLeft: 5 }}
                        source={Images.eyeWhite} />
                </TouchableOpacity>

                <TouchableOpacity style={{ borderRadius: 50, borderWidth: 0.5, borderColor: Colors.pink, alignSelf: 'flex-end', paddingVertical: 5, paddingHorizontal: 8, backgroundColor: Colors.pink }}>
                    <Text style={{ color: Colors.white, fontSize: 7, fontFamily: ENV.mfontFamilyBold }}>{BaseText.CheckAdmissionDate}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default RLSchoolForYouList;