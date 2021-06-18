//TabNavigator File
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardStackNavigator, NotificationStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import Images from "constants/Images";
import Home from "component/Home/Home";
import MySchool from "component/MySchool/MySchool";
import Account from "component/Account/Account";
import TabSchoolButton from "./TabSchoolButton";
import Campus from "component/Campus/Campus";

import Colors from 'constants/Colors'
import ENV from 'env/index';
const activeColor = Colors.pink;
const deactiveColor = Colors.gray8;

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: activeColor,
                inactiveTintColor: deactiveColor,
                style: {
                    backgroundColor: Colors.violet,
                    height: 81,
                    borderTopEndRadius: 40,
                    borderTopStartRadius: 40
                },
                labelStyle: {
                    marginVertical: 2,
                    fontSize: 12,
                    fontFamily: ENV.mfontFamilyBold
                },
                // tabStyle: { backgroundColor: 'red', }
            }}>
            <Tab.Screen
                name="Campus"
                component={Campus}

                options={{

                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        // <Image source={Images.homeTab} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
                        <Image source={focused ? Images.homeTab : Images.dactivehome} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                    ),

                }}
            />
            <Tab.Screen
                name="Test1"
                component={Campus}

                options={{

                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        // <Image source={Images.homeTab} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
                        <Image source={focused ? Images.homeTab : Images.dactivehome} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                    ),

                }}
            />
            <Tab.Screen
                name="MySchool"

                component={MySchool}
                options={{
                    // tabBarLabel: 'My School',
                    tabBarIcon: ({ color, focused }) => (
                        <TabSchoolButton />
                    ),
                }} />
            <Tab.Screen
                name="Test2"
                component={Campus}

                options={{

                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        // <Image source={Images.homeTab} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
                        <Image source={focused ? Images.homeTab : Images.dactivehome} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                    ),

                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    // tabBarLabel: 'Account',
                    tabBarIcon: ({ color, focused }) => (
                        // <View style={{ height: 25, width: 25, backgroundColor: 'white', borderRadius: 25 / 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={focused ? Images.tabuser : Images.dactivetabuser} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                        // </View>

                    ),
                }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;