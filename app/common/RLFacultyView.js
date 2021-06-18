import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import InfoIcon from 'assets/svg/infoicon.js';
import ENV from 'env/index';

import {
    RLText,
} from 'basecomponent';

const RLFacultyView = (props) => {

    const {
        profile,
        name,
        sub,
        desig,
        exp,
        rate,
        std
    } = props;

    return (
        <View>
            <View style={styles.wrapperStyle}>
                <View style={{ backgroundColor: Colors.lightViolet, height: '35%', }}>
                    <View style={styles.profileWrapper}>
                        <Image source={profile} style={styles.profileStyle} />
                        <View style={styles.rateWrapper}>
                            <RLText
                                text={rate}
                                style={{
                                    fontSize: 7,
                                    color: Colors.white,
                                    fontFamily: ENV.mfontFamilyMedium,
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: '24%', alignSelf: 'center', }}>
                    <RLText
                        text={name}
                        style={{
                            fontSize: 11,
                            color: Colors.blue1,
                            fontFamily: ENV.mfontFamilyBold,
                            textAlign: 'center',
                        }}
                    />
                    <RLText
                        text={desig}
                        style={{
                            fontSize: 11,
                            color: Colors.blue1,
                            fontFamily: ENV.mfontFamilyBold,
                            textAlign: 'center',
                            marginVertical: 5,
                        }}
                    />
                    <RLText
                        text={"Std. " + std + " | Exp " + exp + "y" + " | " + sub}
                        style={{
                            fontSize: 10,
                            color: Colors.blue1,
                            fontFamily: ENV.mfontFamilyMedium,
                            textAlign: 'center',
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapperStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 50,
        height: BaseStyle.DEVICE_HEIGHT / 100 * 30,
        backgroundColor: Colors.white,
        borderRadius: 18,
        overflow: 'hidden',
        marginVertical: 10,
        marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.00,
        elevation: 5,
    },
    profileWrapper: {
        height: 65,
        width: 65,
        alignSelf: 'center',
        marginTop: '18%',
    },
    profileStyle: {
        height: 65,
        width: 65,
        borderRadius: 500,
        backgroundColor: Colors.white,
    },
    rateWrapper: {
        height: 15,
        width: 15,
        borderRadius: 500,
        backgroundColor: Colors.blue5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 5,
        right: 2,
    },
});
export default RLFacultyView;