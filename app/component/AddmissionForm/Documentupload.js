import React, { Fragment, useEffect, useState, useRef } from "react";
import { Animated, View, Text, StyleSheet, StatusBar, SafeAreaView, KeyboardAvoidingView, ScrollView, Keyboard, FlatList } from "react-native";
import { connect } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from 'react-native-actionsheet'
import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLRoundList,
    RLSchoolInfoList,
    RLStandardModal,
    RLSchoolSearchModal,
    RLUploaddocument

} from 'basecomponent';
function useInterval(callback, delay) {
    const savedCallback = useRef();


    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Documentupload = ({ navigation, props }) => {
    const actionRef = useRef(); //viewPagger Ref

    const UploadDocumentDatalist = [
        { id: 1, title: 'Birth Certificate', showSlider: true },
        { id: 2, title: 'Aadhar Card/Passport' },
        { id: 3, title: 'Progress Report of Previous class (Class I upwards)' },
        { id: 4, title: 'Two latest passport size-coloured photographs (Parents)' },
        { id: 5, title: 'Transfer Certificate (from Class I onwards)' }
    ]

    let animation = useRef(new Animated.Value(0));
    const [progress, setProgress] = useState(0);
    const [showSliderBar, setShowSliderBar] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');


    useInterval(() => {
        if (progress < 100) {
            setProgress(progress + 5);
        }
    }, 1000);

    useEffect(() => {
        // console.log("Progress value", progress);
        Animated.timing(animation.current, {
            toValue: progress,
            duration: 100
        }).start();
    }, [progress])

    //================================ Start common Function ===========================================
    //Progress With Update
    const width = animation.current.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
    })

    //Show ActionSheet
    const showActionSheet = (item) => {
        actionRef.current.show()
        setSelectedItem(item.id)
    }

    const _onSelectCamera = () => {
        ImagePicker.openCamera({
            mediaType: 'photo',
            width: 300,
            height: 400,
            cropping: true
        }).then(response => {
            console.log('response>>>>>respons Camera', response)
            setShowSliderBar(true)
            // const source = { uri: response.path };
            // const mime = { mimetype: response.mime }
            // this.setState({
            //     avatarSource: source,
            //     // profilePhoto: `data:image/jpeg;base64,${base64String}`,
            //     ImageUriPath: source.uri,
            //     ImageTypes: mime.mimetype,
            //     IsImageSelect: true
            // })
        });
    }

    const _onSelectFile = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(response => {
            console.log("response from Gallry>>>>>>", response)
            setShowSliderBar(true)
            // const source = { uri: response.path };
            // const mime = { mimetype: response.mime }
            // this.setState({
            //     avatarSource: source,
            //     // profilePhoto: `data:image/jpeg;base64,${base64String}`,
            //     ImageUriPath: source.uri,
            //     ImageTypes: mime.mimetype,
            //     IsImageSelect: true
            // })
        });
    }
    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            // <RLHeader
            //     isAdmissionHeader
            //     leftImg={Images.showdocumentBoy}
            //     title={BaseText.CompleteKYCProcess}
            //     onpressleft={() => navigation.goBack()}
            //     showrightImg={true}
            //     rightImg={Images.previousRoundBlue}
            //     roundBackWhite={true}
            //     backgroundColor={Colors.lightViolet}
            //     onpressright={() => navigation.goBack()}

            // />
            <RLHeader
                isAdmissionHeader
                backgroundColor={Colors.lightViolet}
                leftImg={Images.previousArrow}
                title={BaseText.spSingleKYC}
                onpressleft={() => navigation.goBack()}
                showrightImg={true}
                rightImg={Images.infoBlue}
                roundBackWhite={true}
                leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}

            />
        )
    }


    //School Info List
    const _renderUploadDocumentItem = ({ item, index }) => {
        return (
            <RLUploaddocument
                title={item.title}
                btnColor={(item.id == selectedItem && progress == 100) ? Colors.lightViolet : Colors.pink}
                btntxtColor={(item.id == selectedItem && progress == 100) ? Colors.violet : Colors.white}
                progressWidth={width}
                progressValue={`${progress}%`}
                // showProgressBar={(item.id == selectedItem && progress != 100) ? true : false}
                showProgressBar={(showSliderBar == true && item.showSlider == true && progress != 100) ? true : false}
                onPressUpload={() => showActionSheet(item)}
                btnText={(item.id == selectedItem && progress == 100) ? 'Remove' : 'Upload'}
                uploadfilename={(item.id == selectedItem && progress == 100) ? '/certificate.jpeg' : ''}
            />
        )
    }

    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={{ flex: 1 }}>
                        {_header()}
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                            <RLText
                                text={BaseText.SubmityourbelowDocuments}
                                style={{
                                    color: Colors.violet, fontSize: 14, fontFamily: ENV.mfontFamilyBold,
                                    paddingVertical: 20,
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center'
                                }} />

                            <FlatList
                                // style={{ marginBottom: 50, }}
                                data={UploadDocumentDatalist}
                                renderItem={({ item, index }) => _renderUploadDocumentItem({ item, index })}
                                keyExtractor={(item, index) => item.id.toString()}
                            />
                        </ScrollView>


                        <View style={{
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                            elevation: 10,
                            shadowColor: 'black',
                            backgroundColor: Colors.white, paddingVertical: 15
                        }}>
                            <RLButton
                                SimpleButton={true}
                                simplebuttonStyle={[buttonStyle.ContinueKycBtnStyle, { alignSelf: 'center' }]}
                                onpress={() => navigation.navigate('ScheduleTest')}
                                simplebuttontextStyle={buttonStyle.ContinueKycBtntxtStyle}
                                simplebuttontext={BaseText.SubmitApproval}
                            />
                        </View>

                        <ActionSheet
                            ref={actionRef}
                            title={'Which one do you like ?'}
                            options={['Camera', 'Gallery', 'cancel']}
                            cancelButtonIndex={2}
                            // destructiveButtonIndex={1}
                            onPress={(index) => {
                                if (index == 0) {
                                    _onSelectCamera()
                                }

                                if (index == 1) {
                                    _onSelectFile()
                                }
                            }}
                        />

                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Documentupload);