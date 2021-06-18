import React from "react";
import { View, Text, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from "react-native";

const RLActivityIndicator = (props) => {

    const {
        text
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.overlay}>
                <ActivityIndicator
                    style={styles.indicator}
                    animating={true}
                    size="small"
                    color="white"
                />
                <Text style={{ color: 'white', fontWeight: '500' }}>{text}</Text>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 5
    },
    indicator: {
        height: 20,
        width: 20,
        paddingRight: 15
    },
    text: {

    }
});
export default RLActivityIndicator;