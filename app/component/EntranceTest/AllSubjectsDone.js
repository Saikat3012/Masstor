import React, { Fragment, useEffect, useState, useRef } from "react";
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, Text } from "react-native";
import { connect } from 'react-redux';
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Images from 'constants/Images';
import Colors from 'constants/Colors';
import ENV from 'env/index';
import {
    RLText,
    RLButton,
    RLFlatList,
    RLHeader,
} from "basecomponent";
import buttonStyle from 'theme/component/ButtonStyle';

import LiveIcon from 'assets/svg/liveicon.js'
import HumanModel from 'assets/svg/humanmodel.js';
import CloseIcon from 'assets/svg/iconclose.js';
import GreenIconCheck from 'assets/svg/greeniconcheck.js';

import _ from 'lodash';

const AllSubjectsDone = ({ route, navigation, props }) => {

    const [subjects, SetSubjects] = useState([
        {
            "id": 0,
            "subject": "English",
            "image": Images.englishIcon,
        },
        {
            "id": 1,
            "subject": "Math",
            "image": Images.mathsIcon,
        },
        {
            "id": 2,
            "subject": "Science",
            "image": Images.scienceIcon,
        }
    ]);
    const [closeCamera, SetCloseCamera] = useState(false);

    useEffect(() => {

    }, [])

    //================================ Start common Function ===========================================

    //================================ Start common componenet ===========================================

    //Header Render Method
    const _header = () => {
        return (
            <RLHeader
                isBothImageTextHeader
                leftImg={Images.roundBack}
                title={BaseText.etHeaderTitle}
                onpressleft={() => navigation.goBack()}
                rightImg={Images.notificationWhite}
                backgroundColor={Colors.violet}
            />
        )
    }
    //Header Render Method

    //Render Method for Displaying Subjects
    _renderSubjects = ({ item, index }) => {
        return (
            <TouchableOpacity
                key={"Subject" + index}
                style={[styles.etSubjectIcon, { marginLeft: index == 0 ? 5 : 10, }]}
                onPress={() => {
                }}
            >
                <View style={styles.checkIconStyle}>
                    <GreenIconCheck />
                </View>
                <Image source={item.image} style={styles.subjectImageStyle} />
            </TouchableOpacity>
        );
    }
    //Render Method for Displaying Subjects

    return (
        <Fragment>
            <View style={{ backgroundColor: Colors.white, flex: 1, }}>
                {_header()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {!closeCamera &&
                        <View style={{ backgroundColor: Colors.lightViolet, paddingHorizontal: 20, }}>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 25, marginHorizontal: 0, }}>
                                <TouchableOpacity onPress={() => {
                                    SetCloseCamera(true);
                                }}>
                                    <CloseIcon />
                                </TouchableOpacity>
                                <LiveIcon />
                            </View>
                            <View style={{ alignSelf: 'center', }}>
                                {/* <HumanModel /> */}
                                <Image source={Images.humanModelImage} style={{
                                    height: 262, width: 145,
                                }} />
                            </View>
                        </View>
                    }
                    <View style={{ paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 8, marginBottom: 50, marginTop: 20, }}>
                        <RLFlatList
                            contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
                            horizontal={true}
                            data={subjects}
                            renderItem={({ item, index }) => _renderSubjects({ item, index })}
                        />
                        <RLText
                            text={BaseText.testCompMsg}
                            style={styles.testCompMsgTextStyle}
                        />
                        <View style={styles.imageWrapper}>
                            <Image source={Images.schoolImage} style={styles.imageBg} />
                            <View style={styles.imageOverlay} />
                            <View style={styles.contentWrapper}>
                                <View style={{ marginLeft: 20, }}>
                                    <Image source={Images.sampleProfilePic} style={{ height: 50, width: 50, borderRadius: 500, }} />
                                </View>
                                <View style={{ marginLeft: 10, width: '65%', }}>
                                    <RLText
                                        text={BaseText.examComp1}
                                        style={{
                                            color: Colors.white,
                                            fontSize: 9,
                                            fontFamily: ENV.mfontFamilyMedium,
                                        }}
                                    />
                                    <RLText
                                        text={'Hero Bruh' + ','}
                                        style={{
                                            color: Colors.white,
                                            fontSize: 9,
                                            fontFamily: ENV.mfontFamilyMedium,
                                        }}
                                    />
                                    <View style={{}}>
                                        <Text
                                            style={{
                                                color: Colors.white,
                                                fontSize: 11,
                                                marginTop: 10,
                                                fontFamily: ENV.mfontFamilyMedium,
                                            }}
                                        >
                                            {BaseText.examComp2}
                                            <Text
                                                style={{
                                                    color: Colors.white,
                                                    fontSize: 11,
                                                    fontFamily: ENV.mfontFamilyBold,
                                                }}
                                            >{'K.R. Mangalam World School' + '. '}</Text>
                                            <Text
                                                style={{
                                                    color: Colors.white,
                                                    fontSize: 11,
                                                    fontFamily: ENV.mfontFamilyMedium,
                                                }}
                                            >{BaseText.examComp3}</Text>
                                        </Text>
                                    </View>
                                    <RLText
                                        text={BaseText.examComp4}
                                        style={{
                                            color: Colors.white,
                                            fontSize: 9,
                                            marginTop: 10,
                                            fontFamily: ENV.mfontFamilyMedium,
                                        }}
                                    />
                                    <RLText
                                        text={'K.R. Mangalam World School'}
                                        style={{
                                            color: Colors.white,
                                            fontSize: 9,
                                            fontFamily: ENV.mfontFamilyMedium,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={[styles.btnWrapper]}>
                    <RLButton
                        SimpleButton
                        simplebuttontext={BaseText.tBtnBack}
                        simplebuttontextStyle={buttonStyle.simpleButtonBackTextStyle}
                        simplebuttonStyle={[buttonStyle.simpleButtonBack,]}
                        onpress={() => {
                            navigation.goBack();
                        }}
                    />
                    <RLButton
                        SimpleButton
                        simplebuttontext={BaseText.testCompleteNextBtn}
                        simplebuttontextStyle={buttonStyle.simpleButtonNextTextStyle}
                        simplebuttonStyle={[buttonStyle.simpleButtonNext,]}
                        onpress={() => {
                            navigation.navigate('TestResult');
                        }}
                    />
                </View>
            </View>
        </Fragment >
    );
};

const styles = StyleSheet.create({
    atRowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 1.5,
    },
    btnWrapper: {
        paddingVertical: BaseStyle.DEVICE_WIDTH / 100 * 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: Colors.white,
        // flex: 1,
        // height: BaseStyle.DEVICE_HEIGHT / 100 * 9,
        bottom: 0,
        position: 'absolute',
        width: BaseStyle.DEVICE_WIDTH,
    },
    subjectImageStyle: {
        resizeMode: 'contain',
        height: 55,
        width: 55,
        marginTop: 10,
    },
    etSubjectIcon: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        height: 70,
        width: 70,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginRight: 15,
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: 10,
    },
    checkIconStyle: {
        position: 'absolute',
        top: -2,
        right: -5,
    },
    testCompMsgTextStyle: {
        fontFamily: ENV.mfontFamilyMedium,
        fontSize: 13,
        color: Colors.violet,
        marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 7,
        textAlign: 'center',
    },
    imageWrapper: {
        borderRadius: 11,
        height: BaseStyle.DEVICE_HEIGHT / 100 * 25,
        width: BaseStyle.DEVICE_WIDTH / 100 * 80,
        alignSelf: 'center',
        backgroundColor: Colors.white,
        marginBottom: 50,
        overflow: 'hidden',
    },
    imageBg: {
        // flex: 1,
        width: '100%',
        height: '100%',
        // borderRadius: 11,
        resizeMode: 'cover',
    },
    imageOverlay: {
        borderRadius: 11,
        backgroundColor: "#00000080",
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    contentWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, right: 0, left: 0, paddingVertical: 10, flexDirection: 'row', alignItems: 'center',
    },
});

const select = (store) => {
    return store;
}
export default connect(select)(AllSubjectsDone);