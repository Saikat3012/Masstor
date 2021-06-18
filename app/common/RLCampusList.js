import React from "react";
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, ImageBackground } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import ENV from 'env/index';
import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLRoundList,
    RLSchoolInfoList,
    RLStandardModal,
    RLSchoolSearchModal,
    RLNoInternet,
    RLProcessTimelineItem,
    RLCustomizeSearchList,
    RLAutoComplete,
    RLNotification,
    RLImageTextList,

    RLViewMore
} from 'basecomponent';


const RLCampusList = (props) => {

    const {
        marginTop,
        title,
        description,
        time
    } = props;

    return (

        <View style={{
            width: BaseStyle.DEVICE_WIDTH / 100 * 90,
            borderRadius: 20,
            backgroundColor: Colors.white,
            // backgroundColor: 'pink',
            marginBottom: 15,
            paddingBottom: 15,
            paddingVertical: 10, shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
            // shadowColor: Platform.OS == 'ios' ? 'gray' : 'black',
            shadowColor: 'gray',
            alignSelf: 'center'

        }}>
            <View style={{ marginVertical: 10, width: BaseStyle.DEVICE_WIDTH / 100 * 85, flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 70, }}>
                    <ImageBackground style={{
                        height: 34,
                        width: 34,
                        alignSelf: 'center',
                        backgroundColor: Colors.red,
                        borderRadius: 34 / 2,
                        // justifyContent: 'flex-end',
                    }}
                        imageStyle={{
                            height: 34,
                            width: 34,
                            alignSelf: 'center',
                            backgroundColor: Colors.red,
                            borderRadius: 34 / 2,

                        }}
                        source={Images.schoolImage}
                    >
                        <View style={{ right: 5, height: 4, width: 4, backgroundColor: Colors.green, alignSelf: 'flex-end', borderRadius: 4 / 2, justifyContent: 'center', alignItems: 'center' }}></View>
                    </ImageBackground>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: Colors.gray8, fontSize: 12, fontFamily: ENV.mpolisfontFamilySemiBold }}>{'Aman Sagar'}</Text>
                        <Text style={{ color: Colors.gray8, fontSize: 12, fontFamily: ENV.mpolisfontFamilySemiBold }}>{'Student | 08:58 AM'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={Images.campusSend}
                        style={{ height: 15, width: 15, resizeMode: 'contain', alignSelf: 'center', }} />
                    <Image
                        source={Images.campusOption}
                        style={{ height: 15, width: 15, resizeMode: 'contain', alignSelf: 'center', marginLeft: 10 }} />
                </View>
            </View>
            {/* ImageBackgrounds */}
            <ImageBackground style={{
                height: BaseStyle.DEVICE_HEIGHT / 100 * 50,
                width: BaseStyle.DEVICE_WIDTH / 100 * 85,
                alignSelf: 'center',
                backgroundColor: Colors.red,
                borderRadius: 13,


                // justifyContent: 'flex-end',
            }}
                imageStyle={{
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 50,
                    width: BaseStyle.DEVICE_WIDTH / 100 * 85,
                    alignSelf: 'center',
                    backgroundColor: Colors.red,
                    borderRadius: 13,

                }}
                source={Images.campusstudent}
            >

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ marginRight: BaseStyle.DEVICE_WIDTH / 100 * 5, marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 5, alignSelf: 'flex-end', backgroundColor: 'transparent', borderRadius: 20, paddingVertical: 5, paddingHorizontal: 20, backgroundColor: "rgba(0,0,0,0.50)" }}>
                            <Text style={{ color: Colors.white }}>{'1/3'}</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ justifyContent: 'flex-end', bottom: 10 }}>
                        <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 80, justifyContent: 'space-between', alignSelf: 'center', flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ height: 29, width: 29, backgroundColor: Colors.red2, borderRadius: 29 / 2, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={Images.heartwhite}
                                        style={{ height: 13, width: 13, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: 10, alignSelf: 'center', backgroundColor: 'transparent', borderRadius: 20, paddingVertical: 5, paddingHorizontal: 18, backgroundColor: "rgba(225,225,225,0.50)" }}>
                                    <Text>{'4455'}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ height: 29, width: 29, backgroundColor: Colors.white, borderRadius: 29 / 2, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={Images.blueChat}
                                    style={{ height: 13, width: 13, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>


            <Text style={{ paddingVertical: 5, width: BaseStyle.DEVICE_WIDTH / 100 * 85, alignSelf: 'center', color: Colors.gray8, fontSize: 12, fontFamily: ENV.mpolisfontFamilySemiBold }}>{'Liked by '}
                <Text style={{ color: Colors.violet }}>{'Aman Sagar '}
                </Text>
                <Text>{'and'}
                </Text>
                <Text style={{ color: Colors.violet }}>{' 4558 '}
                </Text>
                <Text>{'others'}
                </Text>
            </Text>
            <RLViewMore
                numOLin={2}
                textStyle={{
                    fontFamily: ENV.mfontFamilyRegular,
                    fontSize: 11,
                    color: Colors.gray7,
                    alignSelf: 'center',
                    width: BaseStyle.DEVICE_WIDTH / 100 * 85,
                }}
                rmTextLess={'see less.....'}
                rmTextMore={'see more.....'}
                rmTextLessStyle={{
                    fontFamily: ENV.mfontFamilyBold,
                    fontSize: 11,
                    color: Colors.gray7,
                    width: BaseStyle.DEVICE_WIDTH / 100 * 85,
                    alignSelf: 'center'


                }}
                rmTextMoreStyle={{
                    fontFamily: ENV.mfontFamilyBold,
                    fontSize: 11,
                    color: Colors.gray7,
                    width: BaseStyle.DEVICE_WIDTH / 100 * 85,
                    alignSelf: 'center'

                }}
                // text={schoolData.details}
                text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed aliqudfdip ex ea commodo consequat. Duis auteaaaaaa'}
            />

        </View>
    );
};
export default RLCampusList;