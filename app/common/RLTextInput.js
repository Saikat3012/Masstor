import React from "react";
import { View, TextInput, TouchableOpacity, Image, Text } from "react-native";
import Images from "constants/Images";
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import textInputStyle from 'theme/component/TextInputStyle';
import ENV from 'env/index';
import Search from 'assets/svg/search';
import Direction from 'assets/svg/direction';
import SearchPink from 'assets/svg/searchPink';

const RLTextInput = (props) => {
    const {
        height,
        textInputViewWidth,
        PlainImageTextInput,
        autoFocus,
        PlainTextInput,
        fontSize,
        textInputWidth,
        placeholderTextColor,
        keyboardType,
        placeholder,
        secureTextEntry,
        maxLength,
        plainTextInputViewStyle,
        plainTextInputStyle,
        txtColor,
        borderRadius,
        txtInputStyle,
        fontFamily,
        ImageTextInput,
        opacity,
        hideShowImage,
        textInputSubViewWidth,
        SqureTextInput,
        defaultValue,
        search,
        direction,
        searchPink,
        backgroundColor,
        SqureImageTextInput,
        edittextStyle,
        isShowEdittext,
        isTwoImage,
        leftImage,
        rightImage,
        borderC,
        borderW,
        value,
        showPerfixtxt,
        prefixtxtStyle,
        prefixtxtx,
        PrefixImageTextInput,
        SearchTextInput,
        editable,
        searchCityName,
        onFocus,
        AddmissionTextInput,
        onPressImg,
        postFixImg,
        noBorderText,
    } = props;

    //Onchnage Props
    const _onEditText = (value, type) => {
        props.onEditTextField(value, type);
    }

    //Plain TextInput with shdow
    const _renderPlainWithshdowTextInput = () => {
        return (
            <View style={{
                borderRadius: borderRadius ? borderRadius : 28,
                alignSelf: 'center',
                width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 90,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 10,
                shadowColor: 'black',
                backgroundColor: Colors.gray6,
                flexDirection: 'row',
                justifyContent: 'center'


            }}>
                {/* {showPerfixtxt &&
                    <Text style={prefixtxtStyle}>{prefixtxtx}</Text>
                } */}
                <TextInput
                    style={[txtInputStyle, { height: 45, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 85, alignSelf: 'center', color: txtColor ? txtColor : Colors.violet1, paddingVertical: 1, }]}
                    ref={props.fieldRef}
                    placeholder={placeholder}
                    onSubmitEditing={(event) => {
                        props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                    }}
                    onChangeText={(value, type) => _onEditText(value, type)}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    placeholderTextColor={placeholderTextColor}
                    value={value}
                    autoFocus={autoFocus}
                    editable={editable}
                />
            </View>
        )
    }

    //Image TextInput with shdow
    const _renderImageTextInput = () => {
        return (
            <View style={{
                borderRadius: borderRadius ? borderRadius : 28,
                alignSelf: 'center',
                width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 90,
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.2,
                // shadowRadius: 3,
                // elevation: 10,
                // shadowColor: 'black',
                // backgroundColor: backgroundColor ? backgroundColor : Colors.white
                backgroundColor: backgroundColor ? backgroundColor : Colors.gray6
            }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', width: textInputSubViewWidth ? textInputSubViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 85, }}>
                    <TextInput
                        style={[txtInputStyle, { paddingVertical: 1, height: 45, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 75, alignSelf: 'center', color: txtColor ? txtColor : Colors.violet1, }]}
                        ref={props.fieldRef}
                        placeholder={placeholder}
                        onSubmitEditing={(event) => {
                            props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                        }}
                        onChangeText={(value, type) => _onEditText(value, type)}
                        secureTextEntry={secureTextEntry}
                        maxLength={maxLength}
                        keyboardType={keyboardType ? keyboardType : 'default'}
                        placeholderTextColor={placeholderTextColor}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        {/* {search &&
                            <Search />
                        }
                        {direction &&
                            <Direction />
                        }
                        {searchPink &&
                            <SearchPink />
                        } */}
                        <Image
                            source={hideShowImage}
                            style={{
                                resizeMode: 'contain',
                                height: 22,
                                width: 22,
                            }} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    //Image TextInput with shdow
    const _renderPrefixImageTextInput = () => {
        return (
            <View style={{
                borderRadius: borderRadius ? borderRadius : 28,
                alignSelf: 'center',
                width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 90,
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.2,
                // shadowRadius: 3,
                // elevation: 10,
                // shadowColor: 'black',
                // backgroundColor: backgroundColor ? backgroundColor : Colors.white
                backgroundColor: backgroundColor ? backgroundColor : Colors.gray6
            }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', width: textInputSubViewWidth ? textInputSubViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 85, }}>
                    <TouchableOpacity style={{ alignSelf: 'center', }}>
                        {/* {search &&
                            <Search />
                        }
                        {direction &&
                            <Direction />
                        }
                        {searchPink &&
                            <SearchPink />
                        } */}
                        <Image
                            source={hideShowImage}
                            style={{
                                resizeMode: 'contain',
                                height: 22,
                                width: 22,

                            }} />
                    </TouchableOpacity>
                    <TextInput
                        style={[txtInputStyle, { paddingLeft: 0, paddingVertical: 1, height: 45, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 75, alignSelf: 'center', color: txtColor ? txtColor : Colors.violet1, }]}
                        ref={props.fieldRef}
                        placeholder={placeholder}
                        onSubmitEditing={(event) => {
                            props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                        }}
                        onChangeText={(value, type) => _onEditText(value, type)}
                        secureTextEntry={secureTextEntry}
                        maxLength={maxLength}
                        keyboardType={keyboardType ? keyboardType : 'default'}
                        placeholderTextColor={placeholderTextColor}
                    />

                </View>

            </View>
        )
    }

    const _renderSqureTextInput = () => {
        return (
            <View style={{
                alignSelf: 'center',
                width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 90,
                borderColor: Colors.gray3,
                borderWidth: 0.5,
            }}>
                <TextInput
                    style={[txtInputStyle, { paddingVertical: 1, height: 37, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 85, alignSelf: 'center', color: txtColor ? txtColor : Colors.violet1, alignItems: 'center' }]}
                    ref={props.fieldRef}
                    placeholder={placeholder}
                    onSubmitEditing={(event) => {
                        props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                    }}
                    onChangeText={(value, type) => _onEditText(value, type)}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    placeholderTextColor={placeholderTextColor}
                    defaultValue={defaultValue}
                    value={value}
                />
            </View>
        )
    }

    const _renderPlainImageTextInput = () => {
        return (
            <View style={{
                borderRadius: borderRadius ? borderRadius : 19,
                alignSelf: 'center',
                width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 80,
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.2,
                // shadowRadius: 3,
                // elevation: 10,
                // shadowColor: 'black',
                borderColor: Colors.white,
                borderWidth: 1.5,
                backgroundColor: backgroundColor ? backgroundColor : Colors.white
            }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', width: textInputSubViewWidth ? textInputSubViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 75, }}>
                    <TextInput
                        style={[txtInputStyle, { paddingVertical: 1, height: 37, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 65, alignSelf: 'center', color: txtColor ? txtColor : Colors.violet1, }]}
                        ref={props.fieldRef}
                        placeholder={placeholder}
                        onSubmitEditing={(event) => {
                            props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                        }}
                        onChangeText={(value, type) => _onEditText(value, type)}
                        secureTextEntry={secureTextEntry}
                        maxLength={maxLength}
                        keyboardType={keyboardType ? keyboardType : 'default'}
                        placeholderTextColor={placeholderTextColor}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        {/* {search &&
                            <Search />
                        }
                        {direction &&
                            <Direction />
                        }
                        {searchPink &&
                            <SearchPink />
                        } */}
                        <Image
                            source={hideShowImage}
                            style={{
                                resizeMode: 'contain',
                                height: 20,
                                width: 21,
                            }} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }


    const _renderSqureImageTextInput = () => {
        return (
            <View style={{
                alignSelf: 'center',
                width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 90,
                borderColor: Colors.gray3,
                borderWidth: 0.5,
            }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', width: textInputSubViewWidth ? textInputSubViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 85, }}>
                    <TextInput
                        style={[txtInputStyle, { paddingVertical: 1, height: 37, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 75, alignSelf: 'center', color: txtColor ? txtColor : Colors.violet1, }]}
                        ref={props.fieldRef}
                        placeholder={placeholder}
                        onSubmitEditing={(event) => {
                            props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                        }}
                        onChangeText={(value, type) => _onEditText(value, type)}
                        secureTextEntry={secureTextEntry}
                        maxLength={maxLength}
                        keyboardType={keyboardType ? keyboardType : 'default'}
                        placeholderTextColor={placeholderTextColor}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        {isShowEdittext &&
                            <Text style={[edittextStyle, { fontSize: 10, fontFamily: ENV.mfontFamilyBold }]}>Edit</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //Text Input With 2 Images
    const _renderTwoImageTextInput = () => {
        return (
            <View style={{
                borderRadius: borderRadius ? borderRadius : 19,
                alignSelf: 'center',
                width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 80,
                borderColor: borderC ? borderC : Colors.white,
                borderWidth: borderW ? borderW : 1.5,
                backgroundColor: backgroundColor ? backgroundColor : Colors.white
            }}>
                <View style={{
                    justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', width: textInputSubViewWidth ? textInputSubViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 75,
                }}
                >
                    <TouchableOpacity style={{ alignSelf: 'center', }}>
                        <Image
                            source={leftImage}
                            style={{
                                resizeMode: 'cover',
                                height: 20,
                                width: 20,
                                marginLeft: 10,
                                backgroundColor: Colors.lightViolet,
                                borderRadius: 500,
                            }} />
                    </TouchableOpacity>
                    <TextInput
                        style={[txtInputStyle, {
                            paddingVertical: 1, height: 37, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 65, alignSelf: 'center', color: txtColor ? txtColor : Colors.violet1,
                            // backgroundColor: 'yellow',
                        }]}
                        value={value}
                        ref={props.fieldRef}
                        placeholder={placeholder}
                        onSubmitEditing={(event) => {
                            // props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                        }}
                        onChangeText={(value, type) => _onEditText(value, type)}
                        secureTextEntry={secureTextEntry}
                        maxLength={maxLength}
                        keyboardType={keyboardType ? keyboardType : 'default'}
                        placeholderTextColor={placeholderTextColor}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Image
                            source={rightImage}
                            style={{
                                resizeMode: 'contain',
                                height: 12,
                                width: 12,
                                marginRight: 10,
                            }} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    //search  TextInput with Location
    const _renderSearchTextInput = () => {
        return (
            <View style={{
                borderRadius: borderRadius ? borderRadius : 28,
                alignSelf: 'center',
                width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 90,
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.2,
                // shadowRadius: 3,
                // elevation: 10,
                // shadowColor: 'black',
                // backgroundColor: backgroundColor ? backgroundColor : Colors.white
                backgroundColor: backgroundColor ? backgroundColor : Colors.gray6

            }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', width: textInputSubViewWidth ? textInputSubViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 85, }}>
                    <TouchableOpacity style={{ alignSelf: 'center', }}>
                        <Image
                            source={hideShowImage}
                            style={{
                                resizeMode: 'contain',
                                height: 22,
                                width: 22,
                            }} />
                    </TouchableOpacity>
                    <TextInput
                        style={[txtInputStyle, { paddingVertical: 1, height: 45, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 50, alignSelf: 'center', color: txtColor ? txtColor : Colors.violet1, }]}
                        ref={props.fieldRef}
                        placeholder={placeholder}
                        onSubmitEditing={(event) => {
                            props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                        }}
                        onChangeText={(value, type) => _onEditText(value, type)}
                        secureTextEntry={secureTextEntry}
                        maxLength={maxLength}
                        keyboardType={keyboardType ? keyboardType : 'default'}
                        placeholderTextColor={placeholderTextColor}
                        onFocus={onFocus}
                        // value={value}
                        defaultValue={defaultValue}
                    />
                    <TouchableOpacity style={{ maxWidth: BaseStyle.DEVICE_WIDTH / 100 * 28, borderRadius: 20, alignSelf: 'center', backgroundColor: Colors.violet, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>

                        <Image
                            source={Images.searchLocation}
                            style={{
                                resizeMode: 'contain',
                                height: 11,
                                width: 11,
                            }} />
                        <Text numberOfLines={1} style={{ paddingLeft: 5, fontSize: 10, fontFamily: ENV.mfontFamilySemiBold, color: Colors.white, }}>{searchCityName}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const _renderAddmissionTextInput = () => {
        return (
            <View style={{
                alignSelf: 'center',
                borderRadius: 7,
                // borderTopLeftRadius,
                // borderBottomLeftRadius,
                // borderTopRightRadius,
                // borderBottomRightRadius
                width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 90,
                backgroundColor: Colors.lightViolet,
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                {showPerfixtxt &&
                    <Text style={prefixtxtStyle}>{prefixtxtx}</Text>
                }
                <TextInput
                    style={[txtInputStyle, { paddingVertical: 1, height: height ? height : 45, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 85, alignSelf: 'center', color: txtColor ? txtColor : Colors.violet, opacity: opacity ? opacity : 0.7 }]}
                    ref={props.fieldRef}
                    placeholder={placeholder}
                    onSubmitEditing={(event) => {
                        props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                    }}
                    onChangeText={(value, type) => _onEditText(value, type)}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    placeholderTextColor={placeholderTextColor}
                    defaultValue={defaultValue}
                    onFocus={onFocus}
                    editable={editable}
                    value={value}
                />
                {hideShowImage &&
                    <TouchableOpacity style={{ alignSelf: 'center', height: 45, justifyContent: 'center', }} onPress={onPressImg}>
                        <Image source={postFixImg} style={{ height: 14, width: 13, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                }
            </View>
        )
    }

    //No border and BG text input
    const _renderNoBorderTextInput = () => {
        return(
            <View style={{
                borderRadius: borderRadius ? borderRadius : 28,
                alignSelf: 'center',
                width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 90,
                backgroundColor: Colors.white,
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <TextInput
                    style={[txtInputStyle, { height: 45, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 85, alignSelf: 'center', color: txtColor ? txtColor : Colors.violet1, paddingVertical: 1, }]}
                    ref={props.fieldRef}
                    placeholder={placeholder}
                    onSubmitEditing={(event) => {
                        props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                    }}
                    onChangeText={(value, type) => _onEditText(value, type)}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    placeholderTextColor={placeholderTextColor}
                    value={value}
                    autoFocus={autoFocus}
                    editable={editable}
                />
            </View>
        );
    }

    return (
        <View>
            {/* {PlainTextInput && _renderPlainTextInput()} */}
            {PlainTextInput && _renderPlainWithshdowTextInput()}
            {ImageTextInput && _renderImageTextInput()}
            {PrefixImageTextInput && _renderPrefixImageTextInput()}
            {SqureTextInput && _renderSqureTextInput()}
            {SqureImageTextInput && _renderSqureImageTextInput()}
            {PlainImageTextInput && _renderPlainImageTextInput()}
            {isTwoImage && _renderTwoImageTextInput()}
            {SearchTextInput && _renderSearchTextInput()}
            {AddmissionTextInput && _renderAddmissionTextInput()}
            {noBorderText && _renderNoBorderTextInput()}
        </View>
    );
};
export default RLTextInput;