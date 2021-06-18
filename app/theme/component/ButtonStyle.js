
import { StyleSheet } from 'react-native'
import BaseStyle from 'constants/BaseStyle'
import Colors from 'constants/Colors'
import ENV from 'env/index';

const buttonStyle = StyleSheet.create({
    submitBtnStyle: {
        backgroundColor: Colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        width: 133, height: 42,

    },
    submitmBtntxtStyle: {
        color: Colors.white, fontSize: 10, fontFamily: ENV.mfontFamilyBold,
    },
    denyBtnStyle: {
        backgroundColor: Colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        width: 133, height: 43,
        borderColor: Colors.violet,
        borderWidth: 1
    },
    denytxtStyle: {
        color: Colors.white, fontSize: 10, fontFamily: ENV.mfontFamilyBold
    },
    saveChangeBtnStyle: {
        // backgroundColor: Colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        width: 135, height: 30,
        borderColor: Colors.gray3,
        borderWidth: 1,
    },
    submitBtntxtStyle: {
        color: Colors.violet, fontSize: 13, fontFamily: ENV.mfontFamilyBold
    },
    explorSchoolBtnStyle: {
        // backgroundColor: Colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
        width: 177, height: 42, borderRadius: 21, backgroundColor: Colors.violet,
    },
    explorSchoolBtntxtStyle: {

        color: Colors.white, fontSize: 14, fontFamily: ENV.mfontFamilyMedium
    },
    checkStatusBtnStyle: {
        backgroundColor: Colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
        width: 110, height: 28, borderRadius: 14,
    },
    simpleButtonTextStyle: {
        color: Colors.white,
        fontSize: 15,
        fontFamily: ENV.mfontFamilyBold,
        textAlign: 'center',
    },
    simpleButtonResultTextStyle: {
        color: Colors.violet,
        fontSize: 13,
        fontFamily: ENV.mfontFamilyBold,
        textAlign: 'center',
    },
    simpleButtonInternetStyle: {
        borderColor: Colors.violet,
        borderWidth: 1,
        alignSelf: 'center',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 500,
    },
    simpleButtonInternetTextStyle: {
        color: Colors.violet,
        fontSize: 10,
        fontFamily: ENV.mfontFamilyBold,
        textAlign: 'center',
    },
    simpleButtonPopupStyle: {
        borderColor: Colors.pink,
        borderWidth: 1,
        alignSelf: 'center',
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 500,

    },
    simpleButtonPopupTextStyle: {
        color: Colors.pink,
        fontSize: 14,
        fontFamily: ENV.mfontFamilyMedium,
        textAlign: 'center',
    },
    simpleButtonBackTextStyle: {
        color: Colors.violet,
        fontSize: 13,
        fontFamily: ENV.mfontFamilyMedium,
        textAlign: 'left',
    },
    simpleButtonNextTextStyle: {
        color: Colors.white,
        fontSize: 13,
        fontFamily: ENV.mfontFamilyMedium,
        textAlign: 'center',
    },
    simpleButtonStyle: {
        backgroundColor: Colors.violet,
        alignSelf: 'center',
        paddingHorizontal: 50,
        paddingVertical: 13,
        borderRadius: 500,
    },
    simpleButtonResultStyle: {
        backgroundColor: Colors.white,
        alignSelf: 'center',
        paddingHorizontal: 50,
        paddingVertical: 13,
        borderRadius: 500,
    },
    simpleButtonNext: {
        backgroundColor: Colors.violet,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 13,
        borderRadius: 500,
    },
    simpleButtonBack: {
        backgroundColor: Colors.white,
        alignSelf: 'center',
        paddingHorizontal: 6,
        paddingVertical: 13,
        borderRadius: 500,

    },
    twoBtnStyle: {
        backgroundColor: Colors.violet,
        alignSelf: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 13,
    },
    line2BtnTextStyle: {
        fontFamily: ENV.mfontFamilyRegular,
        color: Colors.white,
        textAlign: 'center',
        fontSize: 7,
        marginTop: 2,
    },
    line1BtnTextStyle: {
        fontFamily: ENV.mfontFamilyBold,
        color: Colors.white,
        textAlign: 'center',
        fontSize: 9,
    },
    twoBtnInvertedStyle: {
        borderColor: Colors.violet,
        borderWidth: 0.5,
        alignSelf: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 13,
        marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 3,
    },
    ContinueKycBtnStyle: {
        backgroundColor: Colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        width: BaseStyle.DEVICE_WIDTH / 100 * 90, height: 42,

    },
    ContinueKycBtntxtStyle: {
        color: Colors.white, fontSize: 14, fontFamily: ENV.mfontFamilyBold,

    },
})
export default buttonStyle
