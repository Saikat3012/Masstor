import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, } from "react-native";
import Colors from "constants/Colors";
import textStyle from 'theme/component/TextStyle';
import BaseStyle from 'constants/BaseStyle'
import Images from 'constants/Images';
import LinearGradient from "react-native-linear-gradient";
import ENV from 'env/index';
import {
    RLText,
} from 'basecomponent';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

const { width, height } = Dimensions.get('window');

const RLSlider = (props) => {

    const {
        min,
        max,
        single,
        callback,
        LRpadding,
        emptySliderStyle,
        filledSliderStyle,
        isTopLabel,
        isBottomLabel,
        sliderHeight,
        sliderItems,
    } = props;

    const [multiSliderValue, SetMultiSliderValue] = useState([min, max])
    const [first, SetFirst] = useState(min)
    const [second, SetSecond] = useState(max)

    // console.log(first, second, max);

    const multiSliderValuesChange = values => {
        // console.log(values)
        if (single) {
            SetMultiSliderValue(values)
            SetFirst(values[0])
            SetSecond(values[0])
        } else {
            SetMultiSliderValue(values)
            SetFirst(values[0])
            SetSecond(values[1])
        }
        callback(values)
    }

    // const renderScale = () => {
    //     const items = [];
    //     for (let i = min; i <= max; i++) {
    //         items.push(
    //             sliderItem
    //         );
    //     }
    //     return items;
    // }

    return (
        <View>
            {isTopLabel &&
                <View style={[styles.column, { marginLeft: LRpadding ? LRpadding : 0, marginRight: LRpadding ? LRpadding : 0 }]}>
                    {sliderItems}
                </View>
            }
            <View style={styles.container}>
                <MultiSlider
                    trackStyle={emptySliderStyle}
                    selectedStyle={filledSliderStyle}
                    values={single ?
                        [multiSliderValue[0]] :
                        [multiSliderValue[0], multiSliderValue[1]]}
                    sliderLength={LRpadding ? (width - LRpadding * 2) : (width / 100 * 85)}
                    onValuesChange={values => multiSliderValuesChange(values)}
                    min={min}
                    max={max}
                    step={1}
                    smoothSnapped={true}
                    containerStyle={{ marginVertical: 5, height: sliderHeight, alignItems: 'center', }}
                    allowOverlap={false}
                    customMarker={() => {
                        return (
                            <View style={{ width: 15, height: 15, borderRadius: 500, borderColor: Colors.white, borderWidth: 1, backgroundColor: Colors.pink, marginTop: sliderHeight ? sliderHeight - 3 : 10, }}>
                            </View>
                        );
                    }}
                />
            </View>
            {isBottomLabel &&
                <View style={[styles.column, { marginLeft: LRpadding ? LRpadding : 0, marginRight: LRpadding ? LRpadding : 0 }]}>
                    {sliderItems}
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 5,
        // backgroundColor: 'yellow',
        // bottom: -20,
    },
    active: {
        textAlign: 'center',
        fontSize: 20,
        color: '#5e5e5e',
    },
    inactive: {
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#bdc3c7',
    },
    line: {
        textAlign: 'center',
    }
});
export default RLSlider;