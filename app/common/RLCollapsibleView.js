import React, { useState, useEffect } from 'react'
import { View, Text, Platform, Animated, StyleSheet, TouchableOpacity } from 'react-native'
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import ENV from 'env/index';

import ToogleArrow from 'assets/svg/togglearrowwhite.js';

import {
    RLText,
} from 'basecomponent';

const RLCollapsibleView = (props) => {

    const [expanded, setexpanded] = useState(false)
    const [animation, setanimation] = useState(new Animated.Value(0))
    const [maxHeight, setmaxHeight] = useState(0)
    const [minHeight, setminHeight] = useState(0)
    var { active } = props;
    const {
        activeTextStyle,
        inActiveTextStyle,
        activeBGColor,
        inActiveBGColor,
        isSimpleNInverted,
        text,
    } = props;

    useEffect(() => {
        animation.setValue(props.headerheight);
    }, [])

    const _setMaxHeight = (event) => {
        // console.log(event.nativeEvent.layout.height);
        setmaxHeight(isSimpleNInverted ? event.nativeEvent.layout.height + 20 : event.nativeEvent.layout.height)
    }

    const _setMinHeight = (event) => {
        setminHeight(event.nativeEvent.layout.height)
    }

    const changeParentHeight = (newHeight, isExpanded) => {
        let finalValue = expanded
            ? maxHeight + minHeight
            : minHeight;

        animation.setValue(finalValue);

        Animated.spring(animation, {
            toValue: isExpanded ? finalValue + newHeight : finalValue - newHeight,
            useNativeDriver: false,
        }).start();

    }

    const toggle = () => {
        let initialValue = expanded
            ? maxHeight + minHeight
            : minHeight,
            finalValue = expanded
                ? minHeight
                : maxHeight + minHeight;

        const current = !expanded;

        setexpanded(current)

        animation.setValue(initialValue);

        Animated.spring(animation, {
            toValue: finalValue,
            useNativeDriver: false,
        }).start();

        props.changeParentHeight &&
            changeParentHeight(maxHeight, current);
    }



    return (
        <View>
            <Animated.View style={[styles.container, { height: animation }]}>
                <TouchableOpacity
                    style={[styles.titleContainer, { borderRadius: 12, backgroundColor: expanded ? activeBGColor : inActiveBGColor, opacity: active ? 1 : 0.4 }]}
                    onLayout={_setMinHeight}
                    onPress={toggle}
                    underlayColor={'#ffffff'}
                    disabled={!active}>
                    {isSimpleNInverted ?
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            paddingVertical: 15,
                            paddingHorizontal: 10,
                            alignItems: 'center',
                            // borderRadius: 12,
                        }}>
                            <RLText
                                text={text}
                                style={expanded ? activeTextStyle : inActiveTextStyle}
                            />
                            <View style={{

                                transform: [{ rotate: expanded ? '180deg' : '0deg' }],
                            }}>
                                <ToogleArrow color={expanded ? Colors.white1 : Colors.pink} />
                            </View>
                        </View>
                        :
                        <View>
                            {props.header}
                        </View>
                    }
                </TouchableOpacity>
                <View style={[styles.body,]} onLayout={_setMaxHeight}>
                    {/* <View style={[styles.shadowBorder, { top: 0 }]} /> */}
                    <View style={styles.listView}>
                        {props.child}
                    </View>
                    {/* <View style={[styles.shadowBorder, { bottom: 0 }]} /> */}
                </View>
            </Animated.View>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    topShadowBorder: {
        top: 0,
    },
    bottomShadowBorder: {
        bottom: 1,
    },
    shadowBorder: {
        position: 'absolute',
        height: Platform.OS === 'ios' ? 5 : 3,
        left: 0,
        right: 0,
        backgroundColor: Platform.OS === 'ios' ? '#aca7a712' : '#aca7a711',
    },
    listView: {
        flexDirection: 'column',

    },
    body: {
        backgroundColor: Colors.white,
        // marginTop: 10,
        // backgroundColor: 'red'
    },
});

export default RLCollapsibleView