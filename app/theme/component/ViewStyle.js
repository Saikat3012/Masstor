import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';

const viewStyle = StyleSheet.create({
    flex: {
        flex: 1
    },
    flexbgColor: {
        backgroundColor: Colors.white
    },
    selfCenter: {
        alignSelf: 'center'
    },
    rowdirections: {
        flexDirection: 'row'
    },
    centerContain: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    lottieLoadingViewStyle: {
        // height: 200,
        // width: 300,
        // backgroundColor: 'yellow',
    },
    lottieLoadingWrapperStyle: {
        height: BaseStyle.DEVICE_HEIGHT,
        width: BaseStyle.DEVICE_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: Colors.blackOpa80,
    },
})
export default viewStyle
