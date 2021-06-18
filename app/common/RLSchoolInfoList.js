import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, TouchableWithoutFeedback, Platform } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import ENV from 'env/index';
import { RESULTTYPE } from 'constants/Enum';
import viewstyle from 'theme/component/ViewStyle';
import Tooltip from 'react-native-walkthrough-tooltip';


import SeatIcon from 'assets/svg/seatIcon';
import LovePink from 'assets/svg/lovePink';
import EyePink from 'assets/svg/eyePink';
import MapPink from 'assets/svg/mapPink';
import StdBlue from 'assets/svg/stdBlue';
import FeesBlue from 'assets/svg/feesBlue';
import LinearGradient from "react-native-linear-gradient";

const RLSchoolInfoList = (props) => {

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
        onPressFaviourt,
        favouriteBackground,
        IsfavouriteImage
    } = props;


    const _renderlikeSchoolInfo = () => {
        return (
            <TouchableWithoutFeedback onPress={itemClick} >
                <View style={{
                    width: BaseStyle.DEVICE_WIDTH / 100 * 75,
                    backgroundColor: Colors.white,
                    borderRadius: 30,
                    shadowOffset: { width: 3, height: 3 },
                    shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                    shadowOpacity: 1,
                    elevation: 8,
                    marginRight: 18,
                    marginBottom: 15,
                    marginLeft: marginLeft,

                    // marginLeft: index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * (2) : BaseStyle.DEVICE_WIDTH / 100 * (0)
                }}>

                    <ImageBackground
                        style={{
                            height: BaseStyle.DEVICE_HEIGHT / 100 * 24, width: BaseStyle.DEVICE_WIDTH / 100 * 75, borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,

                        }}
                        imageStyle={{
                            height: BaseStyle.DEVICE_HEIGHT / 100 * 24, width: BaseStyle.DEVICE_WIDTH / 100 * 75, borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,

                        }}
                        source={backgroundImg}
                    // source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==" }}
                    >
                        <LinearGradient
                            // colors={['#7D2B86', '#562380', '#983089',]}
                            colors={['rgba(155, 49, 137,0.1)', 'rgba(114, 36, 101,0.8)']}
                            // start={{ x: 0, y: 0 }}
                            // end={{ x: 1, y: 0 }}
                            style={{
                                height: BaseStyle.DEVICE_HEIGHT / 100 * 24, width: BaseStyle.DEVICE_WIDTH / 100 * 75, borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                            }}>

                            <View style={{
                                // backgroundColor: 'red',
                                justifyContent: 'space-between',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 35,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 30,
                                    paddingVertical: 5,
                                    backgroundColor: Colors.white
                                    // backgroundColor: 'red'
                                }}>
                                    <Text style={{ alignSelf: 'center', fontSize: 10, fontFamily: ENV.mfontFamilyExtraBold, color: Colors.lightgreen }}>Admission Open</Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignSelf: 'center',
                                            alignItems: 'center',
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 30,
                                            justifyContent: 'center',

                                        }}>
                                        <Image
                                            style={{
                                                height: 6,
                                                width: 6,
                                                resizeMode: 'cover',
                                                marginRight: 5

                                            }}
                                            source={Images.seatIconGreen}
                                        />
                                        {/* <SeatIcon /> */}
                                        <Text numberOfLines={1} style={{ color: Colors.lightgreen, fontSize: 8, fontFamily: ENV.mfontFamilyMedium }}>
                                            {seatsLeft + ' Seat Left'}
                                        </Text>
                                    </View>
                                </View>

                                {/* <View style={{
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 10,
                                    height: 30,
                                    backgroundColor: '#F2F3FA',
                                    // paddingVertical: ,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                     marginRight: 25,
                                    borderBottomLeftRadius: 26,
                                    borderBottomRightRadius: 26
                                    // borderBottomLeftRadius: 30,
                                    // borderTopRightRadius: 30,

                                }}>
                                    <Image
                                        source={Images.heart2}
                                        style={{ height: 15, width: 15, resizeMode: 'contain' }}
                                    />
                                    <LovePink />
                                </View> */}
                                <TouchableOpacity style={{
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 10,
                                    height: 30,
                                    // backgroundColor: '#F2F3FA',
                                    backgroundColor: favouriteBackground,
                                    // paddingVertical: ,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 25,
                                    borderBottomLeftRadius: 26,
                                    borderBottomRightRadius: 26
                                    // borderBottomLeftRadius: 30,
                                    // borderTopRightRadius: 30,

                                }}
                                    onPress={onPressFaviourt}
                                >
                                    <Image
                                        // source={Images.heart2}
                                        source={IsfavouriteImage}
                                        style={{ height: 15, width: 15, resizeMode: 'contain' }}
                                    />

                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'row', bottom: 0, position: 'absolute', marginBottom: 8, justifyContent: 'space-between', width: BaseStyle.DEVICE_WIDTH / 100 * 75 }}>
                                <View style={{ maxWidth: BaseStyle.DEVICE_WIDTH / 100 * 35, backgroundColor: Colors.white, paddingVertical: 5, paddingHorizontal: 10, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                    <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 8 }}>{boardType}</Text>
                                </View>
                                <View style={{ maxWidth: BaseStyle.DEVICE_WIDTH / 100 * 35, flexDirection: 'row', backgroundColor: Colors.white, paddingVertical: 3, paddingHorizontal: 12, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
                                    <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 8, }}>{vistor}</Text>
                                    <Image
                                        source={Images.eyeBlue}
                                        style={{
                                            height: 10,
                                            width: 8,
                                            resizeMode: 'contain',
                                            alignSelf: 'center',
                                            marginLeft: 8

                                        }}
                                    />
                                    {/* <EyePink style={{
                                    height: 10,
                                    width: 8,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    marginLeft: 8
                                }} /> */}

                                </View>
                            </View>
                        </LinearGradient>
                    </ImageBackground>


                    <Text style={{ paddingLeft: 15, paddingVertical: 8, width: BaseStyle.DEVICE_WIDTH / 100 * 75, alignSelf: 'center', color: Colors.blue1, fontFamily: ENV.mfontFamilyBold, fontSize: 9 }}>{schoolname}</Text>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, flexDirection: 'row' }}>
                        <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 40, paddingLeft: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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


                        <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 35, }}>
                            {isshowToolTip &&
                                <Tooltip
                                    contentStyle={{ width: BaseStyle.DEVICE_WIDTH / 100 * 60, padding: 15, borderRadius: 12, backgroundColor: toolbackgroundColor }}
                                    animated={true}
                                    // topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                                    // arrowSize={{ width: 20, height: 18, }}
                                    backgroundColor="rgba(0,0,0,0.1)"
                                    isVisible={schoolTolTipShow}
                                    content={
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                color: Colors.white,
                                                fontFamily: ENV.mfontFamilyRegular
                                            }}>
                                            {tooltext}
                                        </Text>
                                    }
                                    placement={placement}
                                    onClose={onCloseToolTip}
                                    showChildInTooltip={false}>
                                    <TouchableOpacity
                                        onPress={onPressToolButton}
                                        style={{
                                            // backgroundColor: 'yellow',
                                            // height: 28,
                                            // bottom: 5,
                                            // borderRadius: 15,
                                            bottom: 5, marginRight: 8, alignSelf: 'flex-end', height: 28, width: 55
                                        }}
                                    >
                                        <Image source={schoolLikeBtnImg} style={{ height: 28, width: 55, resizeMode: 'contain' }} />
                                    </TouchableOpacity>
                                </Tooltip>
                            }

                            {!isshowToolTip &&
                                <TouchableOpacity style={{ bottom: 5, marginRight: 8, alignSelf: 'flex-end', height: 28, width: 55 }}>
                                    <Image source={schoolLikeBtnImg} style={{ height: 28, width: 55, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                            }


                            {/* <TouchableOpacity style={{ backgroundColor: 'yellow', bottom: 5, marginRight: 8, alignSelf: 'flex-end', borderRadius: 15, height: 28, width: 55 }}></TouchableOpacity> */}

                            {/* <TouchableOpacity style={{ backgroundColor: 'yellow', bottom: 5, marginRight: 8, alignSelf: 'flex-end', borderRadius: 15, height: 28, width: 55 }}></TouchableOpacity> */}
                            <View style={{
                                paddingVertical: 8,
                                width: BaseStyle.DEVICE_WIDTH / 100 * 35,
                                borderBottomRightRadius: 32,
                                borderTopLeftRadius: 20,
                                borderWidth: 1,
                                borderColor: Colors.pink
                            }}>
                                <Text style={{ alignSelf: 'center', color: Colors.pink, fontSize: 7, fontFamily: ENV.mfontFamilyBold }}>Check Admission Date</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const _renderResultSchoolInfo = () => {
        return (
            <View style={{
                idth: BaseStyle.DEVICE_WIDTH / 100 * 75,
                backgroundColor: Colors.white,
                borderRadius: 30,
                shadowOffset: { width: 3, height: 3 },
                shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                shadowOpacity: 1,
                elevation: 8,
                // marginRight: 18,
                marginBottom: 15,
                // marginLeft: marginLeft,
                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                alignSelf: 'center',
                // marginLeft: index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * (2) : BaseStyle.DEVICE_WIDTH / 100 * (0)
            }}>
                <ImageBackground
                    style={{
                        height: BaseStyle.DEVICE_HEIGHT / 100 * 20, width: BaseStyle.DEVICE_WIDTH / 100 * 90, borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }}
                    imageStyle={{
                        height: BaseStyle.DEVICE_HEIGHT / 100 * 20, width: BaseStyle.DEVICE_WIDTH / 100 * 90, borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }}
                    source={backgroundImg} >
                    <View
                        style={{
                            borderRadius: 11,
                            backgroundColor: "#ffffff80",
                            flex: 1,
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            borderRadius: 32,
                        }}
                    />
                    <View style={{
                        position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, borderRadius: 32,
                    }}>
                        <View style={{
                            // backgroundColor: 'red',
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                width: BaseStyle.DEVICE_WIDTH / 100 * 35,
                                backgroundColor: Colors.lightgreen,
                                borderBottomRightRadius: 32,
                                borderTopLeftRadius: 30,
                                paddingVertical: 5
                            }}>
                                <Text style={{ alignSelf: 'center', fontSize: 8, fontFamily: ENV.mfontFamilyExtraBold, color: Colors.white1 }}>Admission Open</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 30,

                                        justifyContent: 'center'

                                    }}>
                                    {/* <Image
                                        source={Images.seatIcon}
                                        style={{
                                            height: 10,
                                            width: 10,
                                            resizeMode: 'contain',
                                        }}
                                    /> */}
                                    <SeatIcon />
                                    <Text numberOfLines={1} style={{ color: Colors.white1, fontSize: 8, fontFamily: ENV.mfontFamilyMedium }}>
                                        20 Seat Left
                    </Text>
                                </View>
                            </View>

                            <View style={{
                                width: BaseStyle.DEVICE_WIDTH / 100 * 15,
                                backgroundColor: '#F2F3FA65',
                                paddingVertical: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomLeftRadius: 30,
                                borderTopRightRadius: 30,

                            }}>
                                {/* <Image
                                    source={Images.lovePink}
                                    style={{ height: 18, width: 18, resizeMode: 'contain' }}
                                /> */}
                                <LovePink />
                            </View>

                        </View>
                        <TouchableOpacity
                            onPress={onPressResultButton}
                            style={{
                                backgroundColor: status == RESULTTYPE.FAIL ? Colors.red : status == RESULTTYPE.PENDING ? Colors.yellow : Colors.green,
                                borderRadius: 50,
                                alignSelf: 'center',
                                borderWidth: 1,
                                borderColor: Colors.white,
                                paddingHorizontal: 25,
                                paddingVertical: 10,
                                marginTop: 12,
                            }}
                        >
                            <Text style={{ alignSelf: 'center', fontSize: 10, fontFamily: ENV.mfontFamilyExtraBold, color: Colors.white1 }}>{status == RESULTTYPE.FAIL ? BaseText.failStatusText : status == RESULTTYPE.PENDING ? BaseText.pendStatusText : BaseText.passStatusText}</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', bottom: 0, position: 'absolute', marginBottom: 3, justifyContent: 'space-between', width: BaseStyle.DEVICE_WIDTH / 100 * 90 }}>
                            <View style={{ backgroundColor: Colors.white, opacity: 0.8, paddingVertical: 5, paddingHorizontal: 18, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyBold, fontSize: 8 }}>CBSE</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: Colors.white, opacity: 0.8, paddingVertical: 3, paddingHorizontal: 12, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
                                <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyBold, fontSize: 8 }}>1.2 k</Text>
                                {/* <Image
                                    source={Images.eyePink}
                                    style={{
                                        height: 10,
                                        width: 8,
                                        resizeMode: 'contain',
                                        alignSelf: 'center',
                                        marginLeft: 8

                                    }}
                                /> */}
                                <EyePink style={{
                                    height: 10,
                                    width: 8,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    marginLeft: 8
                                }} />
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <Text style={{ paddingLeft: 15, paddingVertical: 8, width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', color: Colors.blue1, fontFamily: ENV.mfontFamilyBold, fontSize: 9 }}>{schoolname}</Text>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, flexDirection: 'row' }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 50, paddingLeft: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Image
                                source={Images.mapPink}
                                style={{
                                    height: 8,
                                    width: 5,
                                    resizeMode: 'contain',
                                    marginRight: 5

                                }}
                            /> */}
                            <MapPink style={{ marginRight: 5 }} />
                            <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyBold, fontSize: 7 }}>{schoollocation}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                            {/* <Image
                                source={Images.stdBlue}
                                style={{
                                    height: 8,
                                    width: 5,
                                    resizeMode: 'contain',
                                    marginRight: 5

                                }}
                            /> */}
                            <StdBlue style={{ marginRight: 5 }} />
                            <Text style={{ color: Colors.blue1, fontFamily: ENV.mfontFamilyMedium, fontSize: 7 }}>{standard}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Image
                                source={Images.feesBlue}
                                style={{
                                    height: 8,
                                    width: 5,
                                    resizeMode: 'contain',
                                    marginRight: 5

                                }}
                            /> */}
                            <FeesBlue style={{ marginRight: 5 }} />
                            <Text style={{ color: Colors.blue1, fontFamily: ENV.mfontFamilyMedium, fontSize: 7 }}>{fees}</Text>
                        </View>
                    </View>


                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 40, alignSelf: 'flex-end', }}>
                        <View style={{ alignSelf: 'flex-end', bottom: 20, marginRight: 10, }}>
                            {/* <VerifiedIcon /> */}
                            <Image source={Images.schoolVerifyImage} style={{ height: 20, width: 50, }} />
                        </View>


                        <View style={{
                            paddingVertical: 8,
                            width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                            borderBottomRightRadius: 32,
                            borderTopLeftRadius: 30,
                            borderWidth: 1,
                            borderColor: Colors.pink
                        }}>
                            <Text style={{ alignSelf: 'center', color: Colors.pink, fontSize: 8, fontFamily: ENV.mfontFamilyBold }}>Check Admission Date</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }


    const _renderpendingSchoolInfo = () => {
        return (
            <View style={{
                idth: BaseStyle.DEVICE_WIDTH / 100 * 75,
                backgroundColor: Colors.white,
                borderRadius: 30,
                shadowOffset: { width: 3, height: 3 },
                shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                shadowOpacity: 1,
                elevation: 8,
                marginRight: 18,
                marginBottom: 15,
                marginLeft: marginLeft
                // marginLeft: index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * (2) : BaseStyle.DEVICE_WIDTH / 100 * (0)
            }}>
                <ImageBackground
                    style={{
                        height: BaseStyle.DEVICE_HEIGHT / 100 * 20, width: BaseStyle.DEVICE_WIDTH / 100 * 75, borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }}
                    imageStyle={{
                        height: BaseStyle.DEVICE_HEIGHT / 100 * 20, width: BaseStyle.DEVICE_WIDTH / 100 * 75, borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }}
                    source={backgroundImg} >

                    <View style={{
                        // backgroundColor: 'red',
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 35,
                            backgroundColor: Colors.lightgreen,
                            borderBottomRightRadius: 32,
                            borderTopLeftRadius: 30,
                            paddingVertical: 5, justifyContent: 'center'
                        }}>
                            <Text style={{ alignSelf: 'center', fontSize: 8, fontFamily: ENV.mfontFamilyExtraBold, color: Colors.white1 }}>Admission Open</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 30,

                                    justifyContent: 'center'

                                }}>
                                {/* <Image
                                    source={Images.seatIcon}
                                    style={{
                                        height: 10,
                                        width: 10,
                                        resizeMode: 'contain',
                                    }}
                                /> */}
                                <SeatIcon />
                                <Text numberOfLines={1} style={{ color: Colors.white1, fontSize: 8, fontFamily: ENV.mfontFamilyMedium }}>
                                    20 Seat Left
                </Text>
                            </View>
                        </View>

                        <View style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 15,
                            backgroundColor: '#DFAD1A',
                            paddingVertical: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderBottomLeftRadius: 30,
                            borderTopRightRadius: 30,

                        }}>
                            <Text style={{ fontFamily: ENV.mfontFamilyBoldItalic, fontSize: 9, color: Colors.white }}>pending</Text>
                            <Image
                                source={Images.clockWhite}
                                style={{ height: 12, width: 12, resizeMode: 'contain', marginTop: 5 }}
                            />
                        </View>

                        {/* <ImageBackground
                            source={Images.pendingIcon}
                            style={{
                                height: 70,
                                width: 110,
                                resizeMode: 'contain',
                                alignSelf: 'flex-start',
                                borderTopRightRadius: 30,
                                backgroundColor: 'red', justifyContent: 'center', alignItems: 'center '

                            }}
                            imageStyle={{ borderTopRightRadius: 30, }}
                        >
                            <Text>s</Text>
                        </ImageBackground> */}

                    </View>

                    <View style={{ flexDirection: 'row', bottom: 0, position: 'absolute', marginBottom: 3, justifyContent: 'space-between', width: BaseStyle.DEVICE_WIDTH / 100 * 75 }}>
                        <View style={{ backgroundColor: Colors.white, opacity: 0.8, paddingVertical: 5, paddingHorizontal: 18, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                            <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyBold, fontSize: 8 }}>CBSE</Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: Colors.white, opacity: 0.8, paddingVertical: 3, paddingHorizontal: 12, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
                            <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyBold, fontSize: 8 }}>1.2 k</Text>
                            {/* <Image
                                source={Images.eyePink}
                                style={{
                                    height: 10,
                                    width: 8,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    marginLeft: 8

                                }}
                            /> */}
                            <EyePink style={{
                                height: 10,
                                width: 8,
                                resizeMode: 'contain',
                                alignSelf: 'center',
                                marginLeft: 8
                            }} />
                        </View>
                    </View>
                </ImageBackground>

                <Text style={{ paddingLeft: 15, paddingVertical: 8, width: BaseStyle.DEVICE_WIDTH / 100 * 75, alignSelf: 'center', color: Colors.blue1, fontFamily: ENV.mfontFamilyBold, fontSize: 9 }}>{schoolname}</Text>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, flexDirection: 'row' }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 40, paddingLeft: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Image
                                source={Images.mapPink}
                                style={{
                                    height: 8,
                                    width: 5,
                                    resizeMode: 'contain',
                                    marginRight: 5

                                }}
                            /> */}
                            <MapPink style={{ marginRight: 5 }} />
                            <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyBold, fontSize: 7 }}>{schoollocation}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                            {/* <Image
                                source={Images.stdBlue}
                                style={{
                                    height: 8,
                                    width: 5,
                                    resizeMode: 'contain',
                                    marginRight: 5

                                }}
                            /> */}
                            <StdBlue style={{ marginRight: 5 }} />
                            <Text style={{ color: Colors.blue1, fontFamily: ENV.mfontFamilyMedium, fontSize: 7 }}>{standard}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Image
                                source={Images.feesBlue}
                                style={{
                                    height: 8,
                                    width: 5,
                                    resizeMode: 'contain',
                                    marginRight: 5

                                }}
                            /> */}
                            <FeesBlue style={{ marginRight: 5 }} />
                            <Text style={{ color: Colors.blue1, fontFamily: ENV.mfontFamilyMedium, fontSize: 7 }}>{fees}</Text>
                        </View>
                    </View>


                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 35, }}>
                        {isshowToolTip &&
                            <Tooltip
                                contentStyle={{ width: BaseStyle.DEVICE_WIDTH / 100 * 60, padding: 15, borderRadius: 12, backgroundColor: toolbackgroundColor }}
                                animated={true}
                                // topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                                // arrowSize={{ width: 20, height: 18, }}
                                backgroundColor="rgba(0,0,0,0.1)"
                                isVisible={schoolTolTipShow}
                                content={
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color: Colors.white,
                                            fontFamily: ENV.mfontFamilyRegular
                                        }}>
                                        {tooltext}
                                    </Text>
                                }
                                placement={placement}
                                onClose={onCloseToolTip}
                                showChildInTooltip={false}>
                                <TouchableOpacity
                                    onPress={onPressToolButton}
                                    style={{
                                        // backgroundColor: 'yellow',
                                        // height: 28,
                                        // bottom: 5,
                                        // borderRadius: 15,
                                        backgroundColor: 'yellow', bottom: 5, marginRight: 8, alignSelf: 'flex-end', borderRadius: 15, height: 28, width: 55
                                    }}

                                >
                                </TouchableOpacity>
                            </Tooltip>
                        }


                        {!isshowToolTip &&
                            <TouchableOpacity style={{ bottom: 5, marginRight: 8, alignSelf: 'flex-end', height: 28, width: 55 }}>
                                <Image source={schoolLikeBtnImg} style={{ height: 28, width: 55, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        }


                        {/* <TouchableOpacity style={{ backgroundColor: 'yellow', bottom: 5, marginRight: 8, alignSelf: 'flex-end', borderRadius: 15, height: 28, width: 55 }}></TouchableOpacity> */}
                        <View style={{
                            paddingVertical: 8,
                            width: BaseStyle.DEVICE_WIDTH / 100 * 35,
                            borderBottomRightRadius: 32,
                            borderTopLeftRadius: 30,
                            borderWidth: 1,
                            borderColor: Colors.pink
                        }}>
                            <Text style={{ alignSelf: 'center', color: Colors.pink, fontSize: 8, fontFamily: ENV.mfontFamilyBold }}>Check Admission Date</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    //Near School Info
    const _renderNearSchoolInfo = () => {
        return (
            <TouchableWithoutFeedback onPress={itemClick} >
                <View style={{
                    width: BaseStyle.DEVICE_WIDTH / 100 * 42,
                    backgroundColor: Colors.white,
                    borderRadius: 30,
                    shadowOffset: { width: 3, height: 3 },
                    shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                    shadowOpacity: 1,
                    elevation: 8,
                    // marginRight: 18,
                    marginBottom: 15,
                    marginLeft: marginLeft,
                    marginRight: marginRight
                    // marginLeft: index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * (2) : BaseStyle.DEVICE_WIDTH / 100 * (0)
                }}>

                    <ImageBackground
                        style={{
                            height: BaseStyle.DEVICE_HEIGHT / 100 * 20, width: BaseStyle.DEVICE_WIDTH / 100 * 42, borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,

                        }}
                        imageStyle={{
                            height: BaseStyle.DEVICE_HEIGHT / 100 * 20, width: BaseStyle.DEVICE_WIDTH / 100 * 42, borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,

                        }}
                        source={backgroundImg} >
                        <LinearGradient
                            // colors={['#7D2B86', '#562380', '#983089',]}
                            colors={['rgba(155, 49, 137,0.1)', 'rgba(114, 36, 101,0.8)']}
                            // start={{ x: 0, y: 0 }}
                            // end={{ x: 1, y: 0 }}
                            style={{
                                height: BaseStyle.DEVICE_HEIGHT / 100 * 20, width: BaseStyle.DEVICE_WIDTH / 100 * 42, borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                            }}>

                            <View style={{
                                // backgroundColor: 'red',
                                justifyContent: 'space-between',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 30,
                                    paddingVertical: 5,
                                    backgroundColor: Colors.white,
                                    justifyContent: 'center'
                                    // backgroundColor: 'red'
                                }}>
                                    <Text style={{ alignSelf: 'center', fontSize: 7, fontFamily: ENV.mfontFamilyExtraBold, color: Colors.lightgreen }}>Admission Open</Text>

                                </View>

                                {/* <View style={{
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 5,
                                    height: 20,
                                    backgroundColor: '#F2F3FA',
                                    // paddingVertical: ,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 20,
                                    borderBottomLeftRadius: 26,
                                    borderBottomRightRadius: 26
                                    // borderBottomLeftRadius: 30,
                                    // borderTopRightRadius: 30,

                                }}>
                                    <Image
                                        source={Images.heart2}
                                        style={{ height: 10, width: 10, resizeMode: 'contain' }}
                                    />
                                  
                                </View> */}

                                <TouchableOpacity style={{
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 5,
                                    height: 20,
                                    // backgroundColor: '#F2F3FA',
                                    backgroundColor: favouriteBackground,
                                    // paddingVertical: ,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 20,
                                    borderBottomLeftRadius: 26,
                                    borderBottomRightRadius: 26
                                    // borderBottomLeftRadius: 30,
                                    // borderTopRightRadius: 30,

                                }}
                                    onPress={onPressFaviourt}>
                                    <Image
                                        // source={Images.heart2}
                                        source={IsfavouriteImage}
                                        style={{ height: 10, width: 10, resizeMode: 'contain' }}
                                    />

                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'row', bottom: 0, position: 'absolute', marginBottom: 5, justifyContent: 'space-between', width: BaseStyle.DEVICE_WIDTH / 100 * 42 }}>
                                <View style={{ backgroundColor: Colors.white, paddingVertical: 5, paddingHorizontal: 10, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                    <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 7 }}>{boardType}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', backgroundColor: Colors.white, paddingVertical: 3, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
                                    <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 7 }}>{vistor}</Text>
                                    <Image
                                        source={Images.eyeBlue}
                                        style={{
                                            height: 10,
                                            width: 8,
                                            resizeMode: 'contain',
                                            alignSelf: 'center',
                                            marginLeft: 8

                                        }}
                                    />
                                    {/* <EyePink style={{
                                    height: 10,
                                    width: 8,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    marginLeft: 8
                                }} /> */}

                                </View>
                            </View>
                        </LinearGradient>
                    </ImageBackground>


                    <Text style={{ paddingLeft: 10, paddingVertical: 8, width: BaseStyle.DEVICE_WIDTH / 100 * 42, alignSelf: 'center', color: Colors.blue1, fontFamily: ENV.mfontFamilyBold, fontSize: 8 }}>{schoolname}</Text>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 42, flexDirection: 'row', paddingBottom: 8 }}>
                        <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 28, paddingLeft: 10, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                                <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyBold, fontSize: 6 }}>{schoollocation}</Text>
                            </View>

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
                                <Text style={{ color: Colors.blue1, fontFamily: ENV.mfontFamilyMedium, fontSize: 6 }}>{standard}</Text>
                            </View>

                        </View>


                        <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 14, }}>

                            <TouchableOpacity style={{ bottom: 5, marginRight: 8, alignSelf: 'flex-end', height: 28, width: 55 }}>
                                <Image source={schoolLikeBtnImg} style={{ height: 28, width: 55, resizeMode: 'contain' }} />
                            </TouchableOpacity>

                            {/* <TouchableOpacity style={{ backgroundColor: 'yellow', bottom: 5, marginRight: 8, alignSelf: 'flex-end', borderRadius: 15, height: 28, width: 55 }}></TouchableOpacity> */}

                            {/* <TouchableOpacity style={{ backgroundColor: 'yellow', bottom: 5, marginRight: 8, alignSelf: 'flex-end', borderRadius: 15, height: 28, width: 55 }}></TouchableOpacity> */}

                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }


    return (
        <View>
            {IslikeSchoolInfo && _renderlikeSchoolInfo()}
            {IspendingSchoolInfo && _renderpendingSchoolInfo()}
            {isTestResult && _renderResultSchoolInfo()}
            {IsNearSchoolInfo && _renderNearSchoolInfo()}
        </View>
    );
};
export default RLSchoolInfoList;