import React from "react";
import { View, Text, TouchableOpacity, Image, Switch } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import ENV from 'env/index';

import DschoolBlue from 'assets/svg/dschoolBlue';
import DlocationBlue from 'assets/svg/dlocationBlue';
import DloveBlue from 'assets/svg/dloveBlue';
import DnotificationVilote from 'assets/svg/dnotificationVilote';
import DlogoutBlue from 'assets/svg/dlogoutBlue';

const RLProfileSettingList = (props) => {

    const {
        itemIcon,
        title,
        showSwitch,
        switchVlue,
        thumbColor,
        onValueChange,
        onPress,
        dschoolBlue,
        dlocationBlue,
        dloveBlue,
        dnotificationVilote,
        dlogoutBlue
    } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 85, paddingVertical: 10, }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 70, flexDirection: 'row', }}>
                    <Image
                        source={itemIcon}
                        style={{ height: 25, width: 25, resizeMode: 'contain', marginLeft: 15 }}
                    />
                    {/* {dschoolBlue && <DschoolBlue />}
                    {dlocationBlue && <DlocationBlue />}
                    {dloveBlue && <DloveBlue />}
                    {dnotificationVilote && <DnotificationVilote />}
                    {dlogoutBlue && <DlogoutBlue />} */}
                    <Text style={{ color: Colors.violet, paddingLeft: 17, fontSize: 17, fontFamily: ENV.mfontFamilyBold }}>{title}</Text>
                </View>
                {showSwitch &&
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 15 }}>
                        <Switch
                            trackColor={{ false: Colors.gray1, true: Colors.gray1 }}
                            thumbColor={thumbColor}
                            onValueChange={onValueChange}
                            value={switchVlue}
                        />
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
};
export default RLProfileSettingList;