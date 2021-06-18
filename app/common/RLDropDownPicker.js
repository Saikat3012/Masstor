import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import InfoIcon from 'assets/svg/infoicon.js';
import ENV from 'env/index';
import { Picker } from '@react-native-picker/picker';

import {
    RLText,
} from 'basecomponent';

const RLDropDownPicker = (props) => {

    const {
        selectedValue,
        onValueChange,
        pickerArray,
        prompt,
        mode
    } = props;

    return (
        <View style={{ borderRadius: 7, width: BaseStyle.DEVICE_WIDTH / 100 * 40, height: 45, justifyContent: 'center', backgroundColor: Colors.lightViolet }}>
            <Picker
                prompt={prompt}
                mode={mode ? mode : 'dropdown'}
                dropdownIconColor={Colors.violet}
                selectedValue={selectedValue}
                onValueChange={onValueChange}>
                {pickerArray.map((item) => {
                    return (
                        <Picker.Item label={item.label} value={item.value} color={Colors.violet} key={item.value} fontFamily={ENV.mfontFamilyMedium} style={{ fontSize: 12 }} />
                    );
                })}
            </Picker>
        </View>
    );
};
export default RLDropDownPicker;