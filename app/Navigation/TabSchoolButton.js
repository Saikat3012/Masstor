import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Images from "constants/Images";
import Colors from 'constants/Colors'

const TabSchoolButton = (props) => {
    const {

    } = props;

    return (
        <View
            style={{
                height: 81,
                width: 81,
                borderRadius: 500,
                backgroundColor: Colors.violet,
                justifyContent: 'center',
                alignItems: 'center',
                bottom: 0,
                position: 'absolute',
                marginBottom: 4,
                // backgroundColor: 'transparent'

            }}
        >
            {/* <View style={{
                height: 58,
                width: 64,
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'green',

            }}  ></View> */}

            <View style={{
                height: 48,
                width: 48,
                borderRadius: 48 / 2,
                backgroundColor: Colors.pink,
                justifyContent: 'center',
                alignItems: 'center',

            }}>

                <Image source={Images.tabSchool} style={{ height: 30, width: 30, resizeMode: 'contain' }} />

            </View>
        </View>
    );
};
export default TabSchoolButton;