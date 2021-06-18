import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAAX_WIDTH = 414;
const XSMAAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

let isPhonex = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAAX_WIDTH && W_HEIGHT === XSMAAX_HEIGHT

const STATUSBAR_HEIGHT = (Platform.OS === 'ios' && isPhonex) ? 44 : (Platform.OS === 'ios' && !isPhonex) ? 20 : StatusBar.currentHeight;
export default StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});