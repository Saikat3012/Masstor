import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';

const RLProcessTimelineItem = (props) => {

    const {
        color,
        image,
        isUp,
    } = props;

    return (
        <View>
            {/* {isUp &&
                <View
                    style={{
                        backgroundColor: Colors.white,
                        height: BaseStyle.DEVICE_WIDTH / 100 * 7.5,
                        width: BaseStyle.DEVICE_WIDTH / 100 * 15,
                        marginBottom: 5,
                        borderTopColor: Colors.lightViolet,
                        borderTopLeftRadius: 500,
                        borderTopRightRadius: 500,
                    }}
                >
                </View>
            } */}
            <View
                style={{
                    height: BaseStyle.DEVICE_WIDTH / 100 * 10,
                    width: BaseStyle.DEVICE_WIDTH / 100 * 10,
                    borderColor: color,
                    borderWidth: 1,
                    borderRadius: 500,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        margin: BaseStyle.DEVICE_WIDTH / 100 * 1.5,
                        backgroundColor: color,
                        borderRadius: 500,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={image} style={{ height: '50%', width: '50%', }} />
                </View>
            </View>
        </View>
    );
};
export default RLProcessTimelineItem;