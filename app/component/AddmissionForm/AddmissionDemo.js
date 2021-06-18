import React, { Fragment, useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, Animated, KeyboardAvoidingView, ScrollView, SafeAreaView } from "react-native";
import { connect } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
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
import { TouchableOpacity } from "react-native-gesture-handler";
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

const AddmissionDemo = ({ navigation, props }) => {
    let animation = useRef(new Animated.Value(0));
    const [progress, setProgress] = useState(0);
    useInterval(() => {
        if (progress < 100) {
            setProgress(progress + 5);
        }
    }, 1000);
    const UploadDocumentDatalist = [
        { id: 1, title: 'Birth Certificate' },
        { id: 2, title: 'Aadhar Card/Passport' },
        { id: 3, title: 'Progress Report of Previous class (Class I upwards)' },
        { id: 4, title: 'Two latest passport size-coloured photographs (Parents)' },
        { id: 5, title: 'Transfer Certificate (from Class I onwards)' }
    ]


    useEffect(() => {
        Animated.timing(animation.current, {
            toValue: progress,
            duration: 100
        }).start();
    }, [progress])
    //================================ Start common Function ===========================================

    const width = animation.current.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
    })
    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            <RLHeader
                isAdmissionHeader
                leftImg={Images.showdocumentBoy}
                title={BaseText.CompleteKYCProcess}
                onpressleft={() => navigation.goBack()}
                showrightImg={true}
                rightImg={Images.previousRoundBlue}
                roundBackWhite={true}
                backgroundColor={Colors.lightViolet}

            />
        )
    }


    //School Info List
    const _renderUploadDocumentItem = ({ item, index }) => {
        return (
            <RLUploaddocument
                title={item.title}
                btnColor={Colors.pink}
                btntxtColor={Colors.white}
            />
        )
    }

    return (
        <Fragment>
            <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={{ flex: 1 }}>

                        <Text>
                            Loading…..
      </Text>
                        <View style={styles.progressBar}>
                            <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#8BED4F", width }} />
                        </View>
                        <Text>
                            {`${progress}%`}
                        </Text>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
const styles = StyleSheet.create({

    progressBar: {
        flexDirection: 'row',
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
    }
});

export default connect(select)(AddmissionDemo);