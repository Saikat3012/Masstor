import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import BaseStyle from 'constants/BaseStyle'


const RLChatItem = ( props ) => {
    console.log(props)
    const {
        item,
        index,
        userId
    }=props
    
    return (
        <View style={{ marginVertical: 10,alignSelf: userId === item.userId ? 'flex-end' : 'flex-start' }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={item.profilePic} style={{ height: 32, width: 32,marginRight:5 }} />
                <Text style={{color:'#532280',fontSize:15}}>{item.name}</Text>
            </View>
            <Text style={{marginLeft:34,color:'#7C7D7E',fontSize:12}}>{item.message }</Text>
      </View>
    );
}
export default RLChatItem;
