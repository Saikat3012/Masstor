import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Image, ScrollView } from "react-native";
import { connect, useSelector } from 'react-redux';
import {
    RLButton,
    RLText,
} from 'basecomponent';
import Images from 'constants/Images';
import Colors from 'constants/Colors';
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';
import buttonStyle from 'theme/component/ButtonStyle';
import LocationPink from 'assets/svg/pinklocation.js';
import _ from 'lodash';

const ThankForInterest = ({ navigation, props }) => {

    const [submit, setSubmit] = useState(false);
    const getSelctedSchool = useSelector(state => state.user.ReduxSelctedSchool)
    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    //================================ Start common componenet =========================================== 

    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white, }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            // shadowColor: "#000",
                            // shadowOffset: {
                            //     width: 0,
                            //     height: 2,
                            // },
                            // shadowOpacity: 0.25,
                            // shadowRadius: 3.84,
                            // elevation: 5,
                            borderRadius: 17,
                        }}
                    >
                        <Image
                            source={Images.thankForInterestImage}
                            style={{
                                height: BaseStyle.DEVICE_HEIGHT / 100 * 60,
                                width: BaseStyle.DEVICE_WIDTH,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            backgroundColor: Colors.white,
                            height: BaseStyle.DEVICE_HEIGHT / 100 * 21,
                            width: BaseStyle.DEVICE_HEIGHT / 100 * 21,
                            borderRadius: 500,
                            alignSelf: 'center',
                            marginTop: -BaseStyle.DEVICE_HEIGHT / 100 * 11,
                            overflow: 'hidden',
                        }}
                    >
                        <Image source={Images.schoolImage} style={{ height: '100%', width: '100%', }} />
                    </View>
                    <RLText
                        // text={'K.R. Mangalam World School'}
                        text={getSelctedSchool.name}
                        style={{
                            fontFamily: ENV.mfontFamilyBold,
                            textAlign: 'center',
                            fontSize: 17,
                            color: Colors.violet,
                            marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 2,
                            // marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 1,
                        }}
                    />
                    <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 66, alignItems: 'center', paddingLeft: 10, flex: 1, alignSelf: 'center', justifyContent: 'center', }}>
                        <LocationPink />
                        <Text numberOfLines={1} style={{
                            // flex: 1,
                            flexWrap: 'wrap',
                            fontSize: 13, fontFamily: ENV.mfontFamilyMedium, color: Colors.pink, paddingLeft: 5,
                        }}>{`${getSelctedSchool.location}`}</Text>
                    </View>
                    <RLText
                        text={submit ? BaseText.thankIntMsg1 : BaseText.thankIntMsg}
                        style={{
                            fontFamily: ENV.mfontFamilyMedium,
                            textAlign: 'center',
                            fontSize: 14,
                            color: Colors.pink,
                            marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 3,
                            marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 2,
                            marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 10,
                        }}
                    />
                    {!submit &&
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.thankIntBtnText}
                            simplebuttontextStyle={[buttonStyle.simpleButtonPopupTextStyle, { color: Colors.violet, }]}
                            simplebuttonStyle={[buttonStyle.simpleButtonPopupStyle, { paddingHorizontal: 15, borderColor: Colors.violet, marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 3, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 2, }]}
                            onpress={() => {
                                setSubmit(true);
                            }}
                        />
                    }
                </ScrollView>
            </SafeAreaView>
        </Fragment >
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(ThankForInterest);