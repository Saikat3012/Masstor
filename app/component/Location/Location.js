import React, { Fragment, useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, StatusBar, BackHandler, SafeAreaView, TouchableOpacity, Image, ScrollView, Platform, PermissionsAndroid } from "react-native";
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
    RLHeader
} from 'basecomponent';
import PreviousBlue from 'assets/svg/previousBlue';
import Locationcenter from 'assets/svg/locationcenter';
import { PERMISSIONS, request, check } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import _, { indexOf, lowerFirst, now } from "lodash";
import { useFocusEffect } from "@react-navigation/core";

const Location = ({ navigation, props }) => {
    const dispatch = useDispatch(); //Store Redux value using useDispatch
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

    }, [])
    //================================ Start common Function ===========================================
    // const _onClickLocation = (parms) => {
    //     switch (parms) {
    //         case 1:
    //             navigation.navigate('AllowDenyLocation', { LoctionType: 'Deny' })
    //             break;
    //         case 2:
    //             navigation.navigate('AllowDenyLocation', { LoctionType: 'Allow' })
    //             break;

    //         default:
    //             break;
    //     }
    // }

    const _onClickLocation = (parms) => {
        switch (parms) {
            case 1:
                dispatch({
                    type: 'Loction_Type',
                    data: 'Deny'
                })
                navigation.navigate('AllowDenyLocation')
                break;
            case 2:
                dispatch({
                    type: 'Loction_Type',
                    data: 'Allow'
                } )
                
                // Platform.OS === 'ios' ? _onCLickAllowIOSLocation() : _onClickAllowAndroidLocation()
                navigation.navigate('AllowDenyLocation')

                break;

            default:
                break;
        }
    }

    //Get latitute Longitute
    const callLocation = async () => {
        Geolocation.getCurrentPosition(
            (position) => {
                // console.log('got position : ' + JSON.stringify(position))
                const currentLongitude = JSON.stringify(position.coords.longitude);
                console.log(currentLongitude);
                //getting the Longitude from the location json
                const currentLatitude = JSON.stringify(position.coords.latitude);
                console.log(currentLatitude);
                Geocoder.init(BaseText.GoogleLocationAuthKey);
                Geocoder.from(currentLatitude, currentLongitude)
                    .then(json => {
                        console.log("Adress Search", json);
                        // var addressComponent = json.results[0].address_components[0];
                        var city = json.plus_code.compound_code;
                        console.log("c========>", json.plus_code.compound_code);


                        dispatch({
                            type: 'Current_Location',
                            data: city
                        })

                        GetCity(currentLatitude, currentLatitude)
                        // console.log("Addresss----->", addressComponent);
                    })
                    .catch(error => console.warn(error));
                navigation.navigate('AllowDenyLocation')
            },
            (error) => {
                console.log("permission :--> ", error.message)
                alert("Please Start You Location")
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        );
    }


    // const GetCity = (currentLatitude, currentLongitude) => {
    //     console.log("Call the GetCity");
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=AIzaSyCMT8zR6HF-43OOX0PcRB3yCJ4LYv9KdyU&lat=" + currentLatitude + "&lon=" + currentLongitude + "&format=json", true);
    //     xhr.send();
    //     xhr.onreadystatechange = processRequest;
    //     xhr.addEventListener("readystatechange", processRequest, false);
    //     console.log("City------> ::: " + JSON.stringify(xhr));
    //     function processRequest(e) {
    //         if (xhr.readyState == 4 && xhr.status == 200) {
    //             var response = JSON.parse(xhr.responseText);
    //             var city = response.address.city;
    //             console.log("City------>", city);
    //             return;
    //         }
    //     }

    // }

    //Location Acess For IOS
    const _onCLickAllowIOSLocation = () => {
        Geolocation.requestAuthorization()
        callLocation()
    }

    //Location Acess For Android
    const _onClickAllowAndroidLocation = async () => {
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
            console.log('Result of location permission is android : ' + JSON.stringify(result))
            if (result == 'blocked') {
                console.log("Block");
            } else if (result == 'granted') {
                console.log('Permission granted')
                callLocation()
            } else if (result == 'denied') {
                navigation.navigate('AllowDenyLocation')
            }
        }).catch((err) => {
            console.log("Catch Call", err);
        })
    }

    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            <RLHeader
                isAdmissionHeader
                leftImg={Images.previousArrow}
                // title={BaseText.Applyforaddmission}
                onpressleft={() => navigation.goBack()}
                // showrightImg={true}
                // rightImg={Images.infoBlue}
                roundBackWhite={true}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}
            // backgroundColor={Colors.lightViolet}

            />
        )
    }


    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={{ flex: 1, }}>
                    {_header()}
                    <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ alignSelf: 'flex-end', resizeMode: 'contain', width: '60%', height: '30%' }}
                            source={Images.locationbackGround}
                        />
                        {/* <Image
                            style={{ height: 180, width: 368, resizeMode: 'contain', alignSelf: 'flex-end' }}
                            source={Images.locationbackGround}
                        /> */}

                        {/* <Locationcenter style={{ alignSelf: 'flex-end' }} /> */}
                        <RLText
                            text={BaseText.Weaccesslocation}
                            style={{
                                color: Colors.violet, fontSize: 18, fontFamily: ENV.mfontFamilyBold,
                                alignSelf: 'center',
                                paddingVertical: 25
                            }}
                        />

                        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                            <RLButton
                                SimpleButton={true}
                                simplebuttonStyle={[buttonStyle.denyBtnStyle, { alignSelf: 'center', backgroundColor: Colors.white, marginRight: 10 }]}
                                onpress={() => _onClickLocation(1)}
                                simplebuttontextStyle={[buttonStyle.denytxtStyle, { color: Colors.violet, }]}
                                simplebuttontext={BaseText.Deny}
                            />
                            <RLButton
                                SimpleButton={true}
                                simplebuttonStyle={[buttonStyle.denyBtnStyle, { alignSelf: 'center', backgroundColor: Colors.violet, marginLeft: 10, borderWidth: 0 }]}
                                onpress={() => _onClickLocation(2)}
                                simplebuttontextStyle={[buttonStyle.denytxtStyle, { color: Colors.white, }]}
                                simplebuttontext={BaseText.Allow}
                            />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Location);