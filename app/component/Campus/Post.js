import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, FlatList } from "react-native";
import { connect, useSelector } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import { STANDARDTYPE, BOARDTYPE, LEARINGMODETYPE } from 'constants/Enum';
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import viewstyle from 'theme/component/ViewStyle';
import LottieView from 'lottie-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { consoleLog } from 'utils/console';
import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLNoInternet,
    RLImageTextList,
} from 'basecomponent';


const Post = ({ navigation, props }) => {
    const FilterDataList = [
        { id: 1, key: 'School'},
        { id: 2, key: 'Teachers'},
        { id: 3, key: 'Batchmates'},
    ]
    const [SelectedFilterType, setSelectedFilterType] = useState(FilterDataList[0]);
    const [postText,setPostText] = useState('');
    const [ImageList,setImageList] = useState([
        {
            id:1, image:Images.campusstudent,
        },
        {
            id:2, image:Images.campusstudent,
        },
        {
            id:3, image:Images.campusstudent,
        },
        {
            id:4, image:Images.campusstudent,
        },
        {
            id:5, image:Images.campusstudent,
        },
        {
            id:6, image:Images.campusstudent,
        },
    ]);
    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    const _header = () => {
        return (
            <View>
                <RLHeader
                    isDrop
                    backgroundColor={Colors.violet}
                    leftImg={Images.previousArrowWhite}
                    title={'Your Post'}
                    onpressleft={() => navigation.goBack()}
                    leftImgstyle={{ height: 16, width: 8, resizeMode: 'contain', }}
                    rightImg={Images.settingWhite}
                    onpressright={(item)=>{
                        setSelectedFilterType(item)
                    }}
                    soption={SelectedFilterType}
                    filter={FilterDataList}
                />
            </View>
        )
    }

    //================================ Start common componenet =========================================== 
   
    return (
        // <Fragment>
        <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white, }}>
                <View style={{ flex: 1, }}>
                    {_header()}
                    <ScrollView bounces={false}
                        contentContainerStyle={{ flexGrow: 1 }}>
                        {/* Title View */}
                        <View
                            style={{ 
                                width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', alignItems: 'center', paddingTop: 15,borderRadius:17,
                                // shadowColor: Colors.black,
                                // shadowOffset: {
                                //     width: 0,
                                //     height: 1,
                                // },
                                // shadowOpacity: 0.20,
                                // shadowRadius: 1.41,
                                // elevation: 2,
                                paddingHorizontal:30,
                                paddingVertical:25,
                            }}
                        >
                            <RLTextInput
                                noBorderText
                                value = {postText}
                                onEditTextField={(value,type)=>{
                                    setPostText(value);
                                }}
                                placeholder={'Write your text here.'}
                                onSubmitEditing={(nextRef,refKey)=>{}}
                                textInputViewWidth={BaseStyle.DEVICE_WIDTH/100*80}
                            />
                            <Image
                                source={Images.campusstudent}
                                style={{
                                    height: BaseStyle.DEVICE_HEIGHT / 100 * 50,
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 85,
                                    alignSelf: 'center',
                                    backgroundColor: Colors.red,
                                    borderRadius: 13,
                                    marginTop:10,
                                }}
                            />
                            <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',width:BaseStyle.DEVICE_WIDTH/100*80,}}>
                                <FlatList
                                    data={ImageList}
                                    scrollEnabled={false}
                                    horizontal={true}
                                    contentContainerStyle={{
                                        width:BaseStyle.DEVICE_WIDTH/100*65,
                                        marginVertical:BaseStyle.DEVICE_HEIGHT/100*4,
                                        // backgroundColor:'yellow',
                                    }}
                                    style={{marginLeft:-9,}}
                                    renderItem={({item,index})=>{
                                        return(
                                            <View key={'Image'+index} style={{marginLeft:index == 0 ? 0 : 10,}}>
                                                <Image 
                                                    source={item.image}
                                                    style={{
                                                        borderRadius:7,
                                                        width:BaseStyle.DEVICE_WIDTH/100*14,
                                                        height:BaseStyle.DEVICE_WIDTH/100*14,
                                                    }}
                                                />
                                            </View>
                                        );
                                    }}
                                />
                                <View style={{width:BaseStyle.DEVICE_WIDTH/100*15,}}>
                                    <Text style={{color:Colors.gray7,fontSize:25,textAlign:'center',fontFamily:ENV.poppinsfontFamilySemiBold,}}>{'+'+(ImageList.length - 4)}</Text>
                                </View>
                            </View>
                            <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',width:BaseStyle.DEVICE_WIDTH/100*80,}}>
                                <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',}}>
                                    <View>
                                        <View style={{backgroundColor:Colors.gray6,borderRadius:2,width:BaseStyle.DEVICE_WIDTH/100*8,height:BaseStyle.DEVICE_WIDTH/100*8,justifyContent:'center',alignItems:'center',}}>
                                            <Image source={Images.galleryIcon} style={{height:15,width:15,}} />
                                        </View>
                                        <Text style={{color:Colors.violet,fontFamily:ENV.mpolisfontFamilyMedium,fontSize:10,marginTop:2,}}>Image</Text>
                                    </View>
                                    <View style={{marginHorizontal:BaseStyle.DEVICE_WIDTH/100*4,}}>
                                        <View style={{backgroundColor:Colors.gray6,borderRadius:2,width:BaseStyle.DEVICE_WIDTH/100*8,height:BaseStyle.DEVICE_WIDTH/100*8,justifyContent:'center',alignItems:'center',}}>
                                            <Image source={Images.videoIcon} style={{height:15,width:15,}} />
                                        </View>
                                        <Text style={{color:Colors.violet,fontFamily:ENV.mpolisfontFamilyMedium,fontSize:10,marginTop:2,}}>Video</Text>
                                    </View>
                                    <View>
                                        <View style={{backgroundColor:Colors.gray6,borderRadius:2,width:BaseStyle.DEVICE_WIDTH/100*8,height:BaseStyle.DEVICE_WIDTH/100*8,justifyContent:'center',alignItems:'center',}}>
                                            <Image source={Images.docIcon} style={{height:15,width:7,}} />
                                        </View>
                                        <Text style={{color:Colors.violet,fontFamily:ENV.mpolisfontFamilyMedium,fontSize:10,marginTop:2,}}>File</Text>
                                    </View>
                                </View>
                                <View 
                                    style={{
                                        flexDirection:'row',
                                        alignItems:'center'
                                    }}
                                >
                                    <RLButton
                                        SimpleButton={true}
                                        simplebuttontext={'Preview'}
                                        simplebuttontextStyle={[{color:Colors.violet,fontFamily:ENV.mpolisfontFamilySemiBold,fontSize:10,}]}
                                        simplebuttonStyle={[{ marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, borderColor:Colors.violet,borderWidth:0.5,borderRadius:11,paddingHorizontal:20,paddingVertical:10,}]}
                                        onpress={() => {
                                            
                                        }}
                                    />
                                    <RLButton
                                        SimpleButton={true}
                                        simplebuttontext={'Post'}
                                        simplebuttontextStyle={[{color:Colors.white,fontFamily:ENV.mpolisfontFamilySemiBold,fontSize:10,}]}
                                        simplebuttonStyle={[{ marginLeft:10,marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1, backgroundColor:Colors.violet,borderWidth:0.5,borderRadius:11,paddingHorizontal:20,paddingVertical:10,}]}
                                        onpress={() => {
                                            
                                        }}
                                    />
                                </View> 
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>

        // </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Post);