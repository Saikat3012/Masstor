import React from "react";
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, FlatList } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';

const RLAdvanceSearchModal = (props) => {

    const {
        onPress,
        outsideModal,
        stdDatalist,
        renderItem,
        keyExtractor
    } = props;

    return (
        <TouchableWithoutFeedback onPress={outsideModal}>
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(57,57,57,0.80)',
                justifyContent: 'flex-end',

            }}>
                <View style={{ borderTopLeftRadius: 18, borderTopRightRadius: 18, backgroundColor: Colors.lightViolet, }}>
                    <View style={{ alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 90, }}>

                        <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.Standard}</Text>

                        <FlatList
                            bounces={false}
                            data={stdDatalist}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                            // numColumns={2}
                            horizontal={false}
                        // columnWrapperStyle={{ flexWrap: "wrap" }}
                        />

                    </View>

                </View>
                {/* <Text style={{ color: Colors.white, fontFamily: ENV.mfontFamilyMedium, fontSize: 14 }} >{BaseText.Continue}</Text> */}
                {/* <View style={{
                    width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    borderRadius: 15,
                }}>
                    <Text style={{ marginVertical: 25, alignSelf: 'center', color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 21 }}>{BaseText.Chooseyourstandard}</Text>
                    <TouchableOpacity onPress={onPress} style={{ marginVertical: 30, alignSelf: 'center', width: 167, height: 42, backgroundColor: Colors.pink, borderRadius: 21, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: Colors.white, fontFamily: ENV.mfontFamilyMedium, fontSize: 14 }} >{BaseText.Continue}</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </TouchableWithoutFeedback>
    );
};
export default RLAdvanceSearchModal;