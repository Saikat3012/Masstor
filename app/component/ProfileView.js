import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground } from "react-native";
import { connect, useSelector } from 'react-redux';
import {
    RLAppIntroList
} from 'basecomponent';

const ProfileView = ({ navigation, props }) => {

    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    //================================ Start common componenet =========================================== 

    return (
        <Fragment>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>

                <ImageBackground style={{ height: 150, width: 150, backgroundColor: 'red', borderRadius: 150 / 2, justifyContent: 'flex-end' }}>
                    <View style={{ height: 30, width: 30, backgroundColor: 'green', alignSelf: 'flex-end', bottom: 5, borderRadius: 360 }}></View>

                </ImageBackground>

            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(ProfileView);