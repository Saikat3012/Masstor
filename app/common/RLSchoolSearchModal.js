import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback, ScrollView } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import ENV from 'env/index';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import {
    RLTextInput,
} from 'basecomponent';

const RLSchoolSearchModal = (props) => {

    const {
        fieldRef,
        onEditTextField,
        onSubmitEditing,
        outsideModal,
        onPressAdvanceSearch,
        keyExtractor,
        renderItem,
        datalist,
        schoolImage,
        value
    } = props;
    const SchoolInfoDataList1 = [
        {
            id: 1,
            schoolname: 'K.R. Mangal World School',
            schoollocation: 'Noida, UP',
            standard: 'Std 4th  to 10th',
            fees: 'Rs- 500-10000 ',

        },
        {
            id: 2,
            schoolname: 'Delhi Public Rayan School (DPS)',
            schoollocation: 'Delhi',
            standard: 'Std 1st  to 10th',
            fees: 'Rs- 500-10000 ',
        },
    ]

    const _renderSchoolInfoItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 18 }}>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 25, justifyContent: 'center', }}>
                    {/* <View style={{
                        height: 49, width: 49, shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        elevation: 10,
                        shadowColor: Colors.gray3,
                        backgroundColor: 'white',
                        borderRadius: 49 / 2,
                        alignSelf: 'center'
                    }}>
                        <Image
                            source={Images.schoolImage}
                            style={{ height: 49, width: 49, borderRadius: 49 / 2, alignSelf: 'center', }} />
                    </View> */}
                    <Image
                        source={schoolImage}
                        style={{ height: 49, width: 49, borderRadius: 49 / 2, alignSelf: 'center', }} />

                </View>
                <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, borderBottomWidth: 0.5, borderBottomColor: Colors.gray5, justifyContent: 'center' }}>
                    <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyBold, fontSize: 13 }}>{'K.R. Mangalam World School'}</Text>
                    <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyMedium, fontSize: 10 }}>{'Noida, UP'}</Text>
                </View>
            </View>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={outsideModal}>
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(57,57,57,0.20)',
            }}>
                <View style={{ marginTop: 65 }}>
                    <RLTextInput
                        PrefixImageTextInput={true}
                        refKey={'searchschool'}
                        placeholder={'Search School'}
                        fieldRef={fieldRef}
                        onEditTextField={onEditTextField}
                        onSubmitEditing={onSubmitEditing}
                        hideShowImage={Images.searchGray}
                        search={true}
                        txtInputStyle={{ color: Colors.gray8, fontSize: 14, fontFamily: ENV.mpolisfontFamilyRegular }}
                        placeholderTextColor={Colors.gray8}
                    />
                </View>

                <ScrollView style={{ backgroundColor: Colors.lightViolet, borderRadius: 24, marginTop: 40, }}>
                    <FlatList
                        style={{ marginTop: 30, marginBottom: 45, }}
                        data={datalist}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                    <Text onPress={onPressAdvanceSearch} style={{ paddingBottom: 40, marginLeft: BaseStyle.DEVICE_WIDTH / 100 * 5, color: Colors.violet, fontFamily: ENV.mfontFamilyBoldItalic, fontSize: 14, }}>{BaseText.AdvanceSearch}</Text>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
};
export default RLSchoolSearchModal;