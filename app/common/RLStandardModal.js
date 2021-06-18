import React from "react";
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, FlatList, ImageBackground } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';

const RLStandardModal = (props) => {
    // const StandardDataList = [
    //     { id: 1, title: 'Nur' },
    //     { id: 2, title: 'KG' },
    //     { id: 3, title: 'I' },
    //     { id: 4, title: 'II' },
    //     { id: 5, title: 'III' },
    //     { id: 6, title: 'IV' },
    //     { id: 7, title: 'V' },
    //     { id: 8, title: 'VI' },
    //     { id: 9, title: 'VII' },
    //     { id: 10, title: 'VIII' },
    //     { id: 11, title: 'IX' },
    //     { id: 12, title: 'X' },
    //     { id: 13, title: 'XI' },
    //     { id: 14, title: 'XII' }
    // ]
    const {
        onPress,
        outsideModal,
        StandardDataList,
        onpressItem,
        renderItem,
        keyExtractor
    } = props;

    // const _rendeStandardItem = ({ item, index }) => {
    //     return (
    //         <TouchableOpacity onPress={onpressItem} style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 20, height: 56, alignItems: 'center', marginVertical: 10 }}>
    //             <ImageBackground
    //                 style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: 68, }}
    //                 source={Images.standardtabWhite}
    //             >
    //                 <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBlack, fontSize: 14 }}>{item.title}</Text>
    //                 <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyMedium, fontSize: 10 }}>{'Std'}</Text>

    //             </ImageBackground>
    //         </TouchableOpacity>
    //         // <ImageBackground
    //         //     style={{ height: 56, width: 69, justifyContent: 'center', alignItems: 'center', marginVertical: 8 }}
    //         //     source={Images.standardtabWhite}
    //         // >
    //         //     <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBlack, fontSize: 14 }}>{item.title}</Text>
    //         //     <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyMedium, fontSize: 10 }}>{'Std'}</Text>

    //         // </ImageBackground>
    //     )
    // }

    return (
        <TouchableWithoutFeedback onPress={outsideModal}>
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(57,57,57,0.80)',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <View style={{
                    width: BaseStyle.DEVICE_WIDTH / 100 * 90, backgroundColor: Colors.white,
                    borderRadius: 15,
                }}>
                    <Text style={{ marginVertical: 25, alignSelf: 'center', color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 21 }}>{BaseText.Chooseyourstandard}</Text>
                    <FlatList
                        style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 80, alignSelf: 'center', marginBottom: 30 }}
                        bounces={false}
                        data={StandardDataList}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        // renderItem={({ item, index }) => _rendeStandardItem({ item, index })}
                        // keyExtractor={item => item.id.toString()}
                        // numColumns={4}
                        // contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                        // columnWrapperStyle={{ flexWrap: "wrap" }}
                        contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row' }}
                    />

                    {/* <TouchableOpacity onPress={onPress} style={{ marginVertical: 30, alignSelf: 'center', width: 167, height: 42, backgroundColor: Colors.pink, borderRadius: 21, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: Colors.white, fontFamily: ENV.mfontFamilyMedium, fontSize: 14 }} >{BaseText.Continue}</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
export default RLStandardModal;