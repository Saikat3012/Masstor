import React, { Fragment, useEffect, useState, useCallback } from "react";
import { ImageBackground, View, Text, StyleSheet, BackHandler, StatusBar, SafeAreaView, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, FlatList, Platform } from "react-native";
import { connect, useSelector, useDispatch } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import {
    RLText,
    RLTextInput,
    RLButton,
    RLCitySearchList,
    RLCitySuggestionList,
    RLHeader
} from 'basecomponent';
import Bubbleicon from 'assets/svg/bubbleicon';
import PreviousBlue from 'assets/svg/previousBlue';
import NextRound from 'assets/svg/nextRound';
import { consoleLog } from 'utils/console';
import { addElementArray, spliceArray, } from 'utils/arrayOperation';
import { GetAllCity } from 'action/user';
import LottieView from 'lottie-react-native';
import viewstyle from 'theme/component/ViewStyle';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";

const AllowDenyLocation = ({ navigation, props, route }) => {
    let fieldMobileRef = React.createRef();
    const dispatch = useDispatch(); //Store Redux value using useDispatch

    const getLoctionTypeValue = useSelector(state => state.user.ReduxLocationType)
    const getLoctionCurrentValue = useSelector(state => state.user.ReduxCurrentCity)
    const getSelctedCityValue = useSelector(state => state.user.ReduxSelectedCity)
    // const LocationDataList = [
    //     // { id: 1, title: 'Noida, UP' },
    //     // { id: 2, title: 'Caneda, Usa' },
    //     // { id: 3, title: 'Noida, UP' },
    //     // { id: 4, title: 'Caneda, Usa' },
    //     // { id: 5, title: 'Califo, Usa' },
    // ]
    // const CitySugesstionDataList = [
    //     { id: 1, title: 'Surat ,Guj' },
    //     { id: 2, title: 'Ahmedabad, Guj' },
    //     { id: 3, title: 'Noida, Guj' },
    //     { id: 4, title: 'Vadodara, Guj' },
    //     { id: 5, title: 'Rajkot, Guj' },
    // ]
    const [LocationDataList, setLocationDataList] = useState([

    ]);
    const [CitySugesstionDataList, setCitySugesstionDataList] = useState([
        // { id: 1, title: 'Surat ,Guj' },
        // { id: 2, title: 'Ahmedabad, Guj' },
        // { id: 3, title: 'Noida, Guj' },
        // { id: 4, title: 'Vadodara, Guj' },
        // { id: 5, title: 'Rajkot, Guj' },
    ]);
    const [arrayholder, setArrayholder] = useState([
        // { id: 1, title: 'Surat ,Guj' },
        // { id: 2, title: 'Ahmedabad, Guj' },
        // { id: 3, title: 'Noida, Guj' },
        // { id: 4, title: 'Vadodara, Guj' },
        // { id: 5, title: 'Rajkot, Guj' },
    ]);
    const [showSearch, setShowSearch] = useState(false);
    const [load, SetLoad] = useState(false);


    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                return true;
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, []),

    )
    useEffect(() => {
        // console.log("loadpage", CitySugesstionDataList);
        // console.log("loadpagearray", arrayholder);
        _getCityListAPI()
    }, [LocationDataList])

    //================================ Start common Function ===========================================
    //Render Loading Animation
    const _renderLoader = () => {
        return (
            <View style={viewstyle.lottieLoadingWrapperStyle}>
                <LottieView
                    source={Images.loadingJson}
                    style={viewstyle.lottieLoadingViewStyle}
                    autoPlay={true}
                />
            </View>
        );
    }
    //OnChange TextInput
    const _onChangeTextField = (value, type) => {
        if (type == 'location') {
            searchCity(value)
        }
    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }

    const searchCity = (value) => {
        console.log(value.length);
        if (value.length > 0) {
            setShowSearch(true)
            const newData = arrayholder.filter(function (item) {
                const itemData = `${item.cityName.toLowerCase()}`;
                const textData = value.toLowerCase();
                return itemData.indexOf(textData) > -1;
                // return true
            });

            setArrayholder(newData)
            console.log("ArrayHolder", arrayholder);
        }
        else {
            setShowSearch(false)
            setCitySugesstionDataList(CitySugesstionDataList)
            setArrayholder(CitySugesstionDataList)
            console.log("CitySugesstionDataList111", CitySugesstionDataList);
        }
    }

    const _onClickSearchCity = (item, index) => {
        // console.log(item);
        // Working Code of add Multiple city
        // setArrayholder([])
        // const tempCityArray = LocationDataList;
        // addElementArray(tempCityArray, item)
        // setLocationDataList(tempCityArray)
        // setShowSearch(false)

        //  Working Code of add single city
        dispatch({
            type: 'Selected_City',
            data: item
        })
        setArrayholder([])
        const tempCityArray = [];
        addElementArray(tempCityArray, item)
        setLocationDataList(tempCityArray)
        setShowSearch(false)
    }

    const _removeAddCity = (item, index) => {
        var array = [...LocationDataList];

        if (index !== -1) {
            // array.splice(index, 1)
            // setLocationDataList(array)
            spliceArray(array, index, 1)
            setLocationDataList(array)
        }
        console.log(LocationDataList);
    }
    //================================ API common Function ===========================================
    const _header = () => {
        return (
            <RLHeader
                isAdmissionHeader
                leftImg={Images.previousArrow}
                title={BaseText.EnterYourLocation}
                onpressleft={() => navigation.goBack()}
                // showrightImg={true}
                // rightImg={Images.infoBlue}
                roundBackWhite={true}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}
            // backgroundColor={Colors.lightViolet}

            />
        )
    }

    const _getCityListAPI = () => {
        SetLoad(true)
        // const params = {
        //     Sorting: '',
        //     SkipCount: '',
        //     MaxResultCount: ''
        // }
        try {
            GetAllCity({}, (result) => {
                console.log("Response on City-->", result);
                if (result.success) {
                    consoleLog("Response On Sucess-->", result);
                    var response = result.result;
                    console.log(response.items);
                    setCitySugesstionDataList(response.items)
                    setArrayholder(response.items)
                    // console.log("ppppp---->", CitySugesstionDataList);
                    SetLoad(false)
                }
                else {
                    SetLoad(false)
                    consoleLog("Response Fail City");
                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    //================================ Start common componenet =========================================== 

    const _renderLocationItem = ({ item, index }) => {

        return (
            <RLCitySearchList
                title={item.cityName}
                onPressRemove={() => _removeAddCity(item, index)}
            />

        )
    }

    const _renderSugesstionItem = ({ item, index }) => {
        return (
            <RLCitySuggestionList
                cityName={item.cityName}
                cityOnpress={() => _onClickSearchCity(item, index)}
            />
        )
    }

    const _onNavigationHome = (parms) => {

        switch (parms) {
            case 'Deny':
                consoleLog("Redux selected City", getSelctedCityValue)
                AsyncStorage.setItem('LoginUserSelectedCityAsync', JSON.stringify(getSelctedCityValue))
                navigation.navigate('Home')
                break;
            case 'Allow':
                AsyncStorage.setItem('LoginUserSelectedCityAsync', JSON.stringify(getSelctedCityValue))
                navigation.navigate('Home')
                break;

            default:
                break;
        }


    }
    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <ImageBackground style={{
                        flex: 1,
                        resizeMode: 'cover',

                    }} source={Images.allowLoctionBackground} >
                        <View style={{ flex: 1, }}>
                            {_header()}
                            <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                                <View style={{ flex: 1 }}>
                                    {/* <RLText
                                    text={BaseText.EnterYourLocation}
                                    style={{
                                        fontSize: 14, color: Colors.violet, fontFamily: ENV.mfontFamilySemiBold,
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 80,
                                        alignSelf: 'center',
                                    }}
                                /> */}

                                    <View style={{ alignSelf: 'center', marginBottom: 30 }}>
                                        {getLoctionTypeValue == 'Allow' &&
                                            <RLTextInput
                                                ImageTextInput={true}
                                                refKey={'mobile'}
                                                fieldRef={fieldMobileRef}
                                                onEditTextField={(value) => _onChangeTextField(value, 'location')}
                                                onSubmitEditing={() => _onSubmitEditing(fieldMobileRef)}
                                                hideShowImage={Images.direction}
                                                direction={true}
                                                txtInputStyle={{ color: Colors.gray8, fontSize: 14, fontFamily: ENV.mpolisfontFamilyRegular }}
                                                placeholderTextColor={Colors.pink}
                                                placeholder={getLoctionCurrentValue}

                                            />
                                        }

                                        {getLoctionTypeValue == 'Deny' &&
                                            <RLTextInput
                                                PrefixImageTextInput={true}
                                                refKey={'mobile'}
                                                placeholder={'Search Location'}
                                                fieldRef={fieldMobileRef}
                                                onEditTextField={(value) => _onChangeTextField(value, 'location')}
                                                onSubmitEditing={() => _onSubmitEditing(fieldMobileRef)}
                                                hideShowImage={Images.searchGray}
                                                search={true}
                                                txtInputStyle={{ color: Colors.gray8, fontSize: 14, fontFamily: ENV.mpolisfontFamilyRegular }}
                                                placeholderTextColor={Colors.gray8}
                                            />
                                        }

                                    </View>

                                    {(getLoctionTypeValue == 'Deny' && showSearch == true) &&
                                        <View style={{ alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 80, }}>
                                            <FlatList
                                                bounces={false}
                                                style={{ alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 80, marginBottom: 15 }}
                                                data={showSearch ? arrayholder : CitySugesstionDataList}
                                                renderItem={({ item, index }) => _renderSugesstionItem({ item, index })}
                                                keyExtractor={item => item.id.toString()}
                                            />
                                        </View>
                                    }

                                    {(getLoctionTypeValue == 'Deny' && LocationDataList.length > 0) &&
                                        <View style={{ alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 80, }}>
                                            <FlatList
                                                bounces={false}
                                                style={{ alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 80, }}
                                                data={LocationDataList}
                                                renderItem={({ item, index }) => _renderLocationItem({ item, index })}
                                                keyExtractor={item => item.id.toString()}
                                                numColumns={2}
                                                horizontal={false}
                                                columnWrapperStyle={{ flexWrap: "wrap" }}

                                            />
                                        </View>
                                    }

                                </View>
                                <View style={{ justifyContent: 'flex-end', paddingBottom: 40 }}>
                                    {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
                                    <TouchableOpacity onPress={() => _onNavigationHome(getLoctionTypeValue)}>
                                        {/* <Image
                                        style={{ width: 41, height: 41, resizeMode: 'contain', alignSelf: 'flex-end', marginRight: BaseStyle.DEVICE_WIDTH / 100 * 10 }}
                                        source={Images.nextRound}
                                    /> */}
                                        <NextRound style={{ alignSelf: 'flex-end', marginRight: BaseStyle.DEVICE_WIDTH / 100 * 10 }} />
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </ImageBackground>
                </SafeAreaView>
            </KeyboardAvoidingView>
            {load && _renderLoader()}
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(AllowDenyLocation);