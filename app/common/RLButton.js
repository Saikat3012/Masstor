import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
// import buttonStyle from 'theme/component/ButtonStyle';
import ENV from 'env/index';

const RLButton = (props) => {

    const {
        simplebuttonStyle,
        onpress,
        RlnumberOfLines,
        simplebuttontextStyle,
        simplebuttontext,
        SimpleButton,
        TwoTextBtn,
        text,
        text1,
        textStyle,
        text1Style,
        disabled
    } = props;

    //plain Button
    const _renderSimpleButton = () => {
        return (
            <TouchableOpacity disabled={disabled} style={simplebuttonStyle} onPress={onpress}>
                <Text numberOfLines={RlnumberOfLines} style={simplebuttontextStyle}>
                    {simplebuttontext}
                </Text>
            </TouchableOpacity>
        )
    }

    //Two Vertical Text Button
    const _renderTwoTextButton = () => {
        return (
            <TouchableOpacity style={simplebuttonStyle} onPress={onpress}>
                <Text style={textStyle}>
                    {text}
                </Text>
                <Text style={text1Style}>
                    {text1}
                </Text>
            </TouchableOpacity>
        )
    }

    // //Image Button
    // const _renderImageButton = () => {
    //     return (
    //         <TouchableOpacity style={simplebuttonStyle} onPress={onpress}>
    //             <Image
    //                 source={image}
    //                 style={buttonStyle.imgbtnImgStyle} />
    //             <Text style={[simplebuttontextStyle, { fontFamily: ENV.qfontFamilyBold }]}>
    //                 {simplebuttontext}
    //             </Text>
    //         </TouchableOpacity>
    //     )
    // }

    return (
        <View>
            { SimpleButton && _renderSimpleButton()}
            { TwoTextBtn && _renderTwoTextButton()}
            {/* { ImageButton && _renderImageButton()} */}
        </View>
    );
};
export default RLButton;