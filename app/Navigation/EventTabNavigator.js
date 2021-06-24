//TabNavigator File
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DashboardStackNavigator, NotificationStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import Images from "constants/Images";


import Events from "EventTabScreens/Events";
import BirthDay from "EventTabScreens/BirthDay";
import Attendance from "EventTabScreens/Attendance";
import Holidays from "EventTabScreens/Holidays";

import Colors from 'constants/Colors'
import ENV from 'env/index';
const activeColor = Colors.pink;
const deactiveColor = Colors.gray8;

const Tab = createMaterialTopTabNavigator();

const EventTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: Colors.pink,
            labelStyle: {
                textTransform:'none',
                marginVertical: 2,
                fontSize: 11,
                fontFamily: ENV.mfontFamilyBold
            },
            inactiveTintColor: Colors.gray3,
            indicatorStyle: {
                height: null,
                top: '5%',
                bottom: '5%',
                width: '25%',
                left: '1%',
                borderRadius: 100,
                backgroundColor: Colors.white,
            },
            style: {
                alignSelf: "center",
                width: '100%',
                borderRadius: 100,
                borderColor: "blue",
                backgroundColor: Colors.gray,
                elevation: 5, // shadow on Android
                shadowOpacity: .10, // shadow on iOS,
                shadowRadius: 4, // shadow blur on iOS
                borderRadius : 40
            },
            tabStyle: {
                borderRadius: 100,
            },
        }}
        swipeEnabled={true}>
            <Tab.Screen name="Holidays" component={Holidays} />
            <Tab.Screen name="Events" component={Events} />
            <Tab.Screen name="Attendance" component={Attendance} />
            <Tab.Screen name="BirthDay" component={BirthDay} />
        </Tab.Navigator>
    );
};

export default EventTabNavigator;