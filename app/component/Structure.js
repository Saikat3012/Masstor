import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { connect, useSelector } from 'react-redux';
import {
    RLAppIntroList
} from 'basecomponent';

const Structure = ({ navigation, props }) => {

    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    //================================ Start common componenet =========================================== 

    return (
        <Fragment>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Structure);