import React, { Fragment, useEffect, useState } from "react";
import { View, Image, FlatList, TouchableOpacity, StyleSheet, Text, ScrollView } from "react-native";
import { connect } from 'react-redux';
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Images from 'constants/Images';
import Colors from 'constants/Colors';
import ENV from 'env/index';
import buttonStyle from 'theme/component/ButtonStyle';
import AccessCamera from 'assets/svg/accesscamera.js'
import MathsIcon from 'assets/svg/mathsicon.js'
import EnglishIcon from 'assets/svg/englishicon.js'
import ScienceIcon from 'assets/svg/scienceicon.js'
import TimeIcon from 'assets/svg/timeicon.js'
import TotalMarksIcon from 'assets/svg/totalmarksicon.js'
import SubjectsIcon from 'assets/svg/subjectsicon.js'
import QuestionIcon from 'assets/svg/questionicon.js'
import {
    RLText,
    RLButton,
    RLFlatList,
    RLHeader,
} from "basecomponent";

const EntranceTest = ({ navigation, props }) => {

    const [subjects, SetSubjects] = useState([
        {
            "id": 0,
            "subject": "English",
            "image": <EnglishIcon />
        },
        {
            "id": 1,
            "subject": "Math",
            "image": <MathsIcon />
        },
        {
            "id": 2,
            "subject": "Science",
            "image": <ScienceIcon />
        }
    ]);

    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================

    //================================ Start common componenet =========================================== 

    //Header Render Method
    const _header = () => {
        return (
            <RLHeader
                isLeftImgCompHeader
                leftImg={Images.roundBack}
                title={BaseText.etHeaderTitle}
                onpressleft={() => navigation.goBack()}
                rightComp={_renderTimer()}
                backgroundColor={Colors.violet}
            />
        )
    }
    //Header Render Method

    //Timer Render Method
    const _renderTimer = () => {
        return (
            <View style={styles.timerMainWrapper}>
                <View style={[styles.timerWrapper,]}>
                    <RLText
                        text={'60'}
                        style={styles.timerText}
                    />
                </View>
            </View>
        );
    }
    //Timer Render Method

    return (
        <Fragment>
            <View style={{ flex: 1, backgroundColor: Colors.white, }}>
                {_header()}
                <ScrollView
                    style={{ backgroundColor: Colors.white, flexGrow: 1, }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ backgroundColor: Colors.lightViolet, justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: 20, }}>
                        <View style={{ marginTop: BaseStyle.DEVICE_WIDTH / 100 * 7, }}>
                            <AccessCamera />
                        </View>
                        <View>
                            <RLText
                                text={BaseText.cameraAccessNote}
                                style={{
                                    fontFamily: ENV.mfontFamilyBold,
                                    fontSize: 17,
                                    color: Colors.pink,
                                    marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 7,
                                }}
                            />
                            <RLButton
                                SimpleButton
                                simplebuttontext={BaseText.cameraAccessBtnText}
                                simplebuttontextStyle={buttonStyle.simpleButtonTextStyle}
                                simplebuttonStyle={[buttonStyle.simpleButtonStyle, { marginBottom: BaseStyle.DEVICE_WIDTH / 100 * 3, }]}
                                onpress={() => {
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 8, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 5, }}>
                            <View>
                                <SubjectsIcon />
                            </View>
                            <RLText
                                text={BaseText.etSubjects}
                                style={styles.etNoteText1}
                            />
                        </View>
                        <RLFlatList
                            style={{ flex: 1, marginBottom: 20, }}
                            data={subjects}
                            horizontal={true}
                            renderItem={({ item, index }) => {
                                // console.log(item);
                                return (
                                    <TouchableOpacity
                                        key={"Subject" + index}
                                        style={[styles.etSubjectIcon, { marginLeft: index == 0 ? 5 : 10, }]}
                                        onPress={() => {
                                            navigation.navigate("AdmissionTest", {
                                                sub: item,
                                            });
                                        }}
                                    >
                                        {item.image}
                                    </TouchableOpacity>
                                );
                            }}
                        />
                        <View style={styles.etRowItem}>
                            <View>
                                <TimeIcon />
                            </View>
                            <RLText
                                text={BaseText.etTime}
                                style={styles.etNoteText1}
                            />
                            <RLText
                                text={BaseText.etTime1}
                                style={styles.etNoteText}
                            />
                        </View>
                        <View style={styles.etRowItem}>
                            <View>
                                <QuestionIcon />
                            </View>
                            <RLText
                                text={BaseText.etQues}
                                style={styles.etNoteText1}
                            />
                            <RLText
                                text={BaseText.etQues1}
                                style={styles.etNoteText}
                            />
                        </View>
                        <View style={styles.etRowItem}>
                            <View>
                                <TotalMarksIcon />
                            </View>
                            <RLText
                                text={BaseText.etMarks}
                                style={styles.etNoteText1}
                            />
                            <RLText
                                text={BaseText.etMarks1}
                                style={styles.etNoteText}
                            />
                        </View>
                    </View>
                    <View style={{ marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1, }} />
                </ScrollView>
                <View style={{}}>
                    <RLButton
                        SimpleButton={true}
                        simplebuttontext={BaseText.etBtnText}
                        simplebuttontextStyle={buttonStyle.simpleButtonTextStyle}
                        simplebuttonStyle={[buttonStyle.simpleButtonStyle, { marginBottom: BaseStyle.DEVICE_WIDTH / 100 * 4, marginTop: BaseStyle.DEVICE_WIDTH / 100 * 1, width: BaseStyle.DEVICE_WIDTH - 60, }]}
                        onpress={() => {
                            // console.log("Simple Button Press--");
                            navigation.navigate("AdmissionTest");
                        }}
                    />
                </View>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    etRowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 1,
    },
    etNoteText: {
        fontFamily: ENV.mfontFamilyMedium,
        fontSize: 15,
        color: Colors.pink,
    },
    etNoteText1: {
        fontFamily: ENV.mfontFamilyBold,
        fontSize: 15,
        color: Colors.pink,
        marginLeft: 12,
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
        marginRight: 5,
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: 10,
    },
    timerWrapper: {
        borderRadius: 500,
        // borderWidth: 2,
        backgroundColor: Colors.violet,
        // padding: 5,
        height: 22,
        width: 22,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    timerMainWrapper: {
        borderRadius: 500,
        // borderWidth: 2,
        backgroundColor: Colors.yellowUnderline,
        padding: 2,
        marginLeft: 10,
        height: 26,
        width: 26,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    timerText: {
        fontFamily: ENV.mfontFamilyBold,
        fontSize: 11,
        color: Colors.white,
    },
});

const select = (store) => {
    return store;
}
export default connect(select)(EntranceTest);