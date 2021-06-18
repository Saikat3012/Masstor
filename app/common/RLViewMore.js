import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';

import _ from 'lodash';

const RLViewMore = (props) => {

    const [textShown, SetTextShown] = useState(false);
    const [numOfLines, SetNumOfLines] = useState(undefined);

    const {
        text,
        numOLin,
        textStyle,
        rmTextLess,
        rmTextMore,
        rmTextLessStyle,
        rmTextMoreStyle,
    } = props;

    // console.log(text);

    return (
        <View>
            <View>
                <Text
                    numberOfLines={textShown ? undefined : numOLin}
                    style={textStyle}
                    onLayout={(e) => {
                        // console.log(e.nativeEvent.layout.height);
                        SetNumOfLines(e.nativeEvent.layout.height > 14 * numOLin ? 50000 : 1);
                    }
                    }
                    ellipsizeMode={'clip'}
                >
                    {text}
                </Text>
                {!_.isNull(text) && !_.isUndefined(text) &&
                    <Text
                        onPress={() => {
                            SetTextShown(!textShown)
                        }}
                        style={[
                            {
                                // position: 'absolute',
                                // bottom: 0,
                                // right: 0,
                                // marginLeft: 10,
                                backgroundColor: Colors.white,
                                // backgroundColor: 'yellow',
                                alignSelf: 'flex-start',
                            },
                            (textShown ? rmTextLessStyle : rmTextMoreStyle),
                        ]}
                    >
                        {textShown ? rmTextLess : rmTextMore}
                    </Text>
                }
            </View>
        </View>
    );
};
export default RLViewMore;