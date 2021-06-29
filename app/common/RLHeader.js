import React, { Fragment, useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Text, Switch, FlatList } from "react-native";
import Colors from "constants/Colors";
import textStyle from 'theme/component/TextStyle';
import BaseStyle from 'constants/BaseStyle'
import Images from 'constants/Images';
import LinearGradient from "react-native-linear-gradient";
import ENV from 'env/index';
import {
    RLText,
    RLTextInput
} from 'basecomponent';

import FontAnt from 'react-native-vector-icons/AntDesign';

import AppheaderIcon from 'assets/svg/appheaderIcon';
import NotificationBlue from 'assets/svg/notificationBlue';
import AppheaderIconwhite from 'assets/svg/appheaderIconwhite';
import SettingWhite from 'assets/svg/settingWhite';
import RoundBackWhite from 'assets/svg/roundBackWhite';
import NotificationWhite from 'assets/svg/notificationWhite';
import BackViolet from 'assets/svg/violetback.js';
import LocationPink from 'assets/svg/pinklocation.js';
import Tooltip from 'react-native-walkthrough-tooltip';

const RLHeader = (props) => {
    const {
        isLeftImgNotiCal,
        isBothImageHeader,
        leftImg,//1
        rightImg,//1
        onpressleft,//1
        onpressright,//1
        leftImgstyle,//1
        rightImgStyle,//1
        backgroundColor,
        isRadiousHeader,
        title,
        subtitle,
        isBothImageTextHeader,
        isLeftImgCompHeader,
        rightComp,
        appheaderIcon,
        notificationBlue,
        appheaderIconwhite,
        settingWhite,
        roundBackWhite,
        notificationWhite,
        isSchoolDetailHeader,
        isAdmissionHeader,
        showrightImg,
        isCampusSwitchHeader,
        showrightSwitch,
        value,
        onValueChange,
        isSearch,
        isCalendar,
        isNoti,
        isNotiCal,
        notiImg,
        searchImg,
        onpressnoti,
        onpresssearch,
        onpresscal,
        date,
        dateTitle,
        isDrop,
        soption,
        filter,
        isGroup,
        groupName,
        leftDownImageStyle,
        groupCount,
        groupButtonPressed,
        leftDownImage
    } = props;

    const [toolTipVisibleFilter, setToolTipVisibleFilter] = useState(false);

    //Item Seprator
    const FlatListItemSeparator = () => {
        return (
            <View style={{ borderBottomWidth: 0.5, borderColor: Colors.gray3 }}></View>
        )
    }

    //Both Image Header
    const _renderBothImageHeader = () => {
        return (
            <View style={{ backgroundColor: backgroundColor }}>
                <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20 }}>
                    {/* {appheaderIcon &&
                        <AppheaderIcon />
                    } */}
                    {/* {notificationBlue &&
                        <NotificationBlue />
                    } */}

                    {/* {appheaderIconwhite &&
                        <AppheaderIconwhite />
                    }
                    {settingWhite &&
                        <SettingWhite />
                    } */}

                    <Image
                        source={leftImg}
                        style={leftImgstyle}
                    />
                    <TouchableOpacity>
                        <Image
                            source={rightImg}
                            style={rightImgStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //Header With 2 Image And Text
    const _renderBothImageTextHeader = () => {
        return (
            <View style={{ backgroundColor: backgroundColor }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row', paddingVertical: 20 }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={onpressleft}>
                            <Image
                                source={leftImg}
                                style={{
                                    height: 28,
                                    width: 28,
                                    resizeMode: 'contain',
                                }}
                            />
                        </TouchableOpacity>

                        <Text numberOfLines={1} style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 66,
                            fontSize: 17, fontFamily: ENV.mfontFamilyBold, color: Colors.white, paddingLeft: 10,
                        }}>{title}</Text>
                    </View>

                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 15, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={onpressright}>
                            <Image
                                source={rightImg}
                                style={{
                                    height: 18,
                                    width: 18, resizeMode: 'contain'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    const _renderGroupTextHeader = () => {
        return (
            <View style={{ backgroundColor: backgroundColor }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row', paddingVertical: 20 }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={onpressleft}>
                            <Image
                                source={leftImg}
                                style={{
                                    height: 28,
                                    width: 28,
                                    resizeMode: 'contain',
                                }}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text numberOfLines={1} style={{
                                width: BaseStyle.DEVICE_WIDTH / 100 * 66,
                                fontSize: 15, fontFamily: ENV.mfontFamilyBold, color: Colors.white, paddingLeft: 10,
                            }}>{title}</Text>
                            <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }}
                                onPress={groupButtonPressed}
                            >
                                <Image source={Images.dactivetabuser} style={{height:18,width:12,resizeMode:'contain'} }/>
                                <Text style={{
                                fontSize: 11, fontFamily: ENV.mfontFamilyBold, color: Colors.white,marginLeft:8
                                }}>{`${ groupCount } Students`}</Text>
                                <Image source={leftDownImage} style={leftDownImageStyle }/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 15, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={onpressright}>
                            <Image
                                source={rightImg}
                                style={{
                                    height: 18,
                                    width: 18, resizeMode: 'contain'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    //Header for School Detail
    const _renderSchoolDetailHeader = () => {
        return (
            <View style={{ backgroundColor: Colors.lightViolet }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row', paddingVertical: 5, }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={onpressleft}>
                            <View style={{ height: 20, width: 20, marginTop: -BaseStyle.DEVICE_HEIGHT / 100 * 1, }}>
                                <BackViolet />
                            </View>
                        </TouchableOpacity>

                        <View>
                            <Text numberOfLines={1} style={{
                                width: BaseStyle.DEVICE_WIDTH / 100 * 66,
                                fontSize: 13, fontFamily: ENV.mfontFamilyExtraBold, color: Colors.violet, paddingLeft: 10,
                            }}>{title}</Text>
                            <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 66, alignItems: 'center', paddingLeft: 10, }}>
                                <LocationPink />
                                <Text numberOfLines={1} style={{
                                    flex: 1,
                                    flexWrap: 'wrap',
                                    fontSize: 13, fontFamily: ENV.mfontFamilyMedium, color: Colors.pink, paddingLeft: 5,
                                }}>{subtitle}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 15, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={onpressright}>
                            <Image
                                source={Images.schoolVerifyImage}
                                style={{
                                    height: 50,
                                    width: 50, resizeMode: 'contain'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    //Header With Left Image & Right Component And Text
    const _renderLeftImgCompHeader = () => {
        return (
            <View style={{ backgroundColor: backgroundColor }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row', paddingVertical: 20 }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={onpressleft}>
                            <Image
                                source={leftImg}
                                style={{
                                    height: 28,
                                    width: 28,
                                    resizeMode: 'contain',
                                }}
                            />
                        </TouchableOpacity>

                        <Text numberOfLines={1} style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 66,
                            fontSize: 17, fontFamily: ENV.mfontFamilyBold, color: Colors.white, paddingLeft: 10,
                        }}>{title}</Text>
                    </View>

                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 15, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={onpressright}>
                            {rightComp}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    //Radious Header
    const _renderRadiousHeader = () => {
        return (
            <LinearGradient
                // colors={['#9266BA', '#4B286C']}
                colors={[Colors.pink2, Colors.pink2]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    paddingVertical: 30,


                }}>

                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row' }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={onpressleft}>
                            <Image
                                source={leftImg}
                                style={{
                                    height: 18,
                                    width: 18,
                                    resizeMode: 'contain',
                                }}
                            />
                            {/* {roundBackWhite && <RoundBackWhite />} */}
                        </TouchableOpacity>

                        <Text numberOfLines={1} style={{

                            width: BaseStyle.DEVICE_WIDTH / 100 * 66,
                            fontSize: 17, fontFamily: ENV.mfontFamilyBold, color: Colors.white, paddingLeft: 10,
                        }}>{title}</Text>
                    </View>

                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 15, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={onpressright}>
                            <Image
                                source={rightImg}
                                style={{
                                    height: 18,
                                    width: 18, resizeMode: 'contain',

                                }}
                            />
                            {/* {notificationWhite && <NotificationWhite />} */}
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        )
    }


    //Without Linera
    const _renderAdmissionHeader = () => {
        return (
            <View style={{ backgroundColor: backgroundColor }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row', paddingVertical: 30, }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={onpressleft}>
                            {/* <Image
                                source={leftImg}
                                style={[{
                                    height: 21,
                                    width: 21,
                                    resizeMode: 'contain',
                                }]}
                            /> */}
                            <Image
                                source={leftImg}
                                style={leftImgstyle}
                            />

                        </TouchableOpacity>

                        {/* <Text numberOfLines={1} style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 66,
                            fontSize: 17, fontFamily: ENV.mfontFamilyBold, color: Colors.violet, paddingLeft: 10,
                        }}>{title}</Text> */}
                        <Text numberOfLines={1} style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 66,
                            fontSize: 21, fontFamily: ENV.mfontFamilyBold, color: Colors.violet, paddingLeft: 15,
                        }}>{title}</Text>
                    </View>

                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 15, alignItems: 'flex-end', justifyContent: 'center' }}>
                        {showrightImg &&
                            <TouchableOpacity onPress={onpressright}>
                                <Image
                                    source={rightImg}
                                    style={{
                                        height: 15,
                                        width: 15, resizeMode: 'contain'
                                    }}
                                />
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>

        )
    }

    const _renderCampusSwitchHeader = () => {
        return (
            <View style={{ backgroundColor: backgroundColor }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row', paddingVertical: 20, }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={onpressleft}>
                            {/* <Image
                                source={leftImg}
                                style={[{
                                    height: 21,
                                    width: 21,
                                    resizeMode: 'contain',
                                }]}
                            /> */}
                            <Image
                                source={leftImg}
                                style={leftImgstyle}
                            />

                        </TouchableOpacity>

                        {/* <Text numberOfLines={1} style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 66,
                            fontSize: 17, fontFamily: ENV.mfontFamilyBold, color: Colors.violet, paddingLeft: 10,
                        }}>{title}</Text> */}
                        <Text numberOfLines={1} style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 66,
                            fontSize: 21, fontFamily: ENV.mfontFamilyBold, color: Colors.white, paddingLeft: 15,
                        }}>{title}</Text>
                    </View>

                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 15, alignItems: 'flex-end', justifyContent: 'center' }}>
                        {showrightImg &&
                            <TouchableOpacity onPress={onpressright}>
                                <Image
                                    source={rightImg}
                                    style={{
                                        height: 15,
                                        width: 15, resizeMode: 'contain'
                                    }}
                                />
                            </TouchableOpacity>
                        }
                        {showrightSwitch &&
                            <Switch
                                style={{ transform: [{ scaleX: Platform.OS == 'ios' ? 0.80 : 1.2 }, { scaleY: Platform.OS == 'ios' ? 0.58 : 1.2 }] }}
                                ios_backgroundColor="#767577"
                                value={value}
                                onValueChange={onValueChange}
                                thumbColor={Colors.white}
                                trackColor={{ false: Colors.gray6, true: Colors.gray6 }}
                            />
                        }

                    </View>
                </View>
            </View>

        )
    }

    //Header with Notification, Calendar and Search
    const _renderNotiCal = () => {
        return(
            <View style={{ backgroundColor: backgroundColor }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row', paddingVertical: 20, }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 53, flexDirection: 'row', alignItems: 'center' }}>
                        <Text numberOfLines={1} style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 45,
                            fontSize: 21, fontFamily: ENV.mfontFamilyBold, color: Colors.white,
                        }}>{title}</Text>
                    </View>

                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 40, alignItems: 'flex-end', justifyContent: 'center',flexDirection:'row', }}>
                        {isSearch &&
                            <TouchableOpacity onPress={onpresssearch}>
                                <Image
                                    source={searchImg}
                                    style={{
                                        height: 20,
                                        width: 20, resizeMode: 'contain'
                                    }}
                                />
                            </TouchableOpacity>
                        }
                        {isCalendar &&
                            <TouchableOpacity onPress={onpresscal} style={{marginHorizontal:BaseStyle.DEVICE_WIDTH/100*4,flexDirection:'row',alignItems:'flex-end',}}>
                                <View>
                                    <Text style={{fontFamily:ENV.mpolisfontFamilyMedium,fontSize:10,color:Colors.white,textAlign:'right',}}>{dateTitle}</Text>
                                    <Text style={{fontFamily:ENV.mpolisfontFamilyBold,fontSize:12,color:Colors.white,textAlign:'right',}}>{date}</Text>
                                </View>
                                <View>
                                    <FontAnt name={'caretdown'} style={{color:Colors.white,marginLeft:BaseStyle.DEVICE_WIDTH/100*1,fontSize:10,marginBottom:2,}}/>
                                </View>
                            </TouchableOpacity>
                        }
                        {isNoti &&
                            <TouchableOpacity onPress={onpressnoti}>
                                <Image
                                    source={notiImg}
                                    style={{
                                        height: 20,
                                        width: 20, resizeMode: 'contain'
                                    }}
                                />
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        );
    }
    const _renderLeftImgNotiCal = () => {
        return(
            <View style={{ backgroundColor: backgroundColor }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row', paddingVertical: 20, alignItems:'center' }}>
                    <TouchableOpacity onPress={onpressleft}>
                            <Image
                                source={leftImg}
                                style={{
                                    height: 20,
                                    width: 20,
                                    resizeMode: 'contain',
                                    marginRight : 10
                                }}
                            />
                        </TouchableOpacity>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 53, flexDirection: 'row', alignItems: 'center' }}>
                        <Text numberOfLines={1} style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 45,
                            fontSize: BaseStyle.DEVICE_WIDTH * 0.04, fontFamily: ENV.mfontFamilyBold, color: Colors.white,
                        }}>{title}</Text>
                    </View>

                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 40, alignItems: 'flex-end', justifyContent: 'center',flexDirection:'row', }}>
                        {isSearch &&
                            <TouchableOpacity onPress={onpresssearch}>
                                <Image
                                    source={searchImg}
                                    style={{
                                        height: 20,
                                        width: 20, resizeMode: 'contain'
                                    }}
                                />
                            </TouchableOpacity>
                        }
                        {isCalendar &&
                            <TouchableOpacity onPress={onpresscal} style={{marginHorizontal:BaseStyle.DEVICE_WIDTH/100*4,flexDirection:'row',alignItems:'flex-end',}}>
                                <View>
                                    <Text style={{fontFamily:ENV.mpolisfontFamilyMedium,fontSize:10,color:Colors.white,textAlign:'right',}}>{dateTitle}</Text>
                                    <Text style={{fontFamily:ENV.mpolisfontFamilyBold,fontSize:12,color:Colors.white,textAlign:'right',}}>{date}</Text>
                                </View>
                                <View>
                                    <FontAnt name={'caretdown'} style={{color:Colors.white,marginLeft:BaseStyle.DEVICE_WIDTH/100*1,fontSize:10,marginBottom:2,}}/>
                                </View>
                            </TouchableOpacity>
                        }
                        {isNoti &&
                            <TouchableOpacity onPress={onpressnoti}>
                                <Image
                                    source={notiImg}
                                    style={{
                                        height: 20,
                                        width: 20, resizeMode: 'contain',
                                        marginRight : 15
                                    }}
                                />
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        );
    }

    //Header with dropdown
    const _renderDropdownHeader = () => {
        return (
            <View style={{ backgroundColor: backgroundColor }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', flexDirection: 'row', paddingVertical: 20, justifyContent:'space-between', }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 55, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={onpressleft}>
                            <Image
                                source={leftImg}
                                style={leftImgstyle}
                            />

                        </TouchableOpacity>
                        <Text numberOfLines={1} style={{
                            width: BaseStyle.DEVICE_WIDTH / 100 * 50,
                            fontSize: 21, fontFamily: ENV.mfontFamilyBold, color: Colors.white, paddingLeft: 15,
                        }}>{title}</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',alignItems:'center', justifyContent: 'center',
                        borderRadius:21,
                        borderColor:Colors.white,borderWidth:1,
                        paddingVertical:BaseStyle.DEVICE_HEIGHT/100*1, 
                        paddingHorizontal:BaseStyle.DEVICE_WIDTH/100*2,
                        // width: BaseStyle.DEVICE_WIDTH / 100 * 25, 
                    }}>
                        <Tooltip
                            contentStyle={{ borderRadius: 0, padding: 0, width:100, }}
                            animated={true}
                            backgroundColor="rgba(0,0,0,0.5)"
                            isVisible={toolTipVisibleFilter}
                            content={
                                <FlatList
                                    bounces={false}
                                    data={filter}
                                    ItemSeparatorComponent={FlatListItemSeparator}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            onPress={() => { onpressright(item); setToolTipVisibleFilter(false); }}>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    paddingHorizontal: 10,
                                                    paddingVertical: 15,
                                                    width: 100,
                                                    justifyContent: 'flex-end',
                                                    // backgroundColor:'yellow',
                                                }}>
                                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilySemiBold, fontSize: 10, }}>{item.key} </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={item => item.id.toString()}
                                />
                            }
                            placement="bottom"
                            onClose={() => setToolTipVisibleFilter(false)}
                            showChildInTooltip={false}>
                            <TouchableOpacity 
                                onPress={()=>{
                                    setToolTipVisibleFilter(true)
                                }} 
                                style={{ 
                                    // width: BaseStyle.DEVICE_WIDTH / 100 * 25, 
                                    flexDirection:'row',alignItems:'center', 
                                    justifyContent: 'center',
                                    // borderRadius:21,
                                    // borderColor:Colors.white,borderWidth:1,
                                    // paddingVertical:BaseStyle.DEVICE_HEIGHT/100*1, 
                                }}
                            >
                                <Image
                                    source={rightImg}
                                    style={{
                                        height: 10,
                                        width: 10, resizeMode: 'contain'
                                    }}
                                />
                                <Text style={{fontFamily:ENV.mfontFamilyMedium,fontSize:12,color:Colors.white,marginHorizontal:BaseStyle.DEVICE_WIDTH/100*1,}}>{soption.key}</Text>
                                <FontAnt name={'caretdown'} style={{color:Colors.white,marginLeft:BaseStyle.DEVICE_WIDTH/100*1,fontSize:10,marginBottom:2,}}/>
                            </TouchableOpacity>
                        </Tooltip>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            {isBothImageHeader && _renderBothImageHeader()}
            {isLeftImgCompHeader && _renderLeftImgCompHeader()}
            {isRadiousHeader && _renderRadiousHeader()}
            {isBothImageTextHeader && _renderBothImageTextHeader()}
            {isSchoolDetailHeader && _renderSchoolDetailHeader()}
            {isAdmissionHeader && _renderAdmissionHeader()}
            {isCampusSwitchHeader && _renderCampusSwitchHeader()}
            {isNotiCal && _renderNotiCal()}
            {isDrop && _renderDropdownHeader()}
            {isLeftImgNotiCal && _renderLeftImgNotiCal()}
            {isGroup && _renderGroupTextHeader()}
        </View>
    );
};
export default RLHeader;