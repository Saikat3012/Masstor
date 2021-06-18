import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import env from 'env/index';
import {
    RLText,
    RLFlatList
} from "basecomponent";

const RLOptions = (props) => {

    const {
        style,
        key,
        selectedOption,
        options,
        isChangeable,
        onSelect
    } = props;

    //Render method for option
    const _renderOption = ({ item, index }) => {
        var isSelected = selectedOption == item.id;
        return (
            <TouchableOpacity style={styles.atRowItem}
                activeOpacity={1}
                onPress={() => {
                    if (isChangeable || selectedOption == -1) {
                        onSelect(item);
                    }
                }}
            >
                <View style={isSelected ? styles.selectedOptionWrapper : styles.optionWrapper}>
                    {isSelected && <View style={styles.option}></View>}
                </View>
                <RLText
                    text={item.text}
                    style={isSelected ? styles.selectedOptionText : styles.optionText}
                />
            </TouchableOpacity>
        );
    }
    //Render method for option

    // console.log("selectedOption ", selectedOption);
    return (
        <View>
            <RLFlatList
                data={options}
                renderItem={({ item, index }) => _renderOption({ item, index })}
            />
        </View>
    );
};
export default RLOptions;

const styles = StyleSheet.create({
    atRowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 1.5,
        marginLeft: 2,
    },
    optionWrapper: {
        borderColor: Colors.pink,
        justifyContent: 'center',
        borderRadius: 7,
        height: 19,
        width: 19,
        borderWidth: 1,
    },
    selectedOptionWrapper: {
        borderColor: Colors.violet,
        justifyContent: 'center',
        borderRadius: 7,
        height: 19,
        width: 19,
        borderWidth: 1,
    },
    option: {
        backgroundColor: Colors.violet,
        borderRadius: 4,
        height: 11,
        width: 11,
        alignSelf: 'center',
    },
    optionText: {
        fontFamily: env.mfontFamilyMedium,
        fontSize: 15,
        color: Colors.pink,
        marginLeft: 10,
    },
    selectedOptionText: {
        fontFamily: env.mfontFamilyMedium,
        fontSize: 15,
        color: Colors.violet,
        marginLeft: 10,
    },
});