import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";



  const eventList = [
  {
      id: 1,
      name: 'Saikat Sarkar',
      type: 'Student',
      class: 'III',
      profilePic: Images.sampleProfilePic
  },
  {
      id: 2,
      name: 'Ashu',
      type: 'Student',
      class: 'II',
      profilePic: Images.sampleProfilePic
  },
]
  


const BirthDay = ( { navigation, props } ) => {

  const handleBirthDayWish = (data) => {
    alert(data.name)
  }




  const RenderEventCard = ( {data} ) => {
        return(
          <View style={styles.card}>
            <ImageBackground
              source={Images.logo}
              style={{
                height: BaseStyle.DEVICE_HEIGHT * 0.12,
                justifyContent: 'space-between',
                alignItems:'center',
                flexDirection: 'row',
                width: BaseStyle.DEVICE_WIDTH * 0.7,
              }}
              imageStyle={{
                resizeMode: 'contain',
                transform: [{ rotate: '320deg' }],
                position: 'absolute',
                left: BaseStyle.DEVICE_WIDTH * 0.45,
                width: BaseStyle.DEVICE_WIDTH * 0.35,
                top:10
                  
              }}>
              <View style={{
                flexDirection:'row'
              }}>
                <Image source={data.profilePic} style={{
                  height: 30,
                  width: 30,
                  resizeMode:'contain',
                  marginRight: 5,
                  justifyContent:'space-between'
                }} />
                <View>
                  <Text style={{
                    color: '#532280',
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily:'Montserrat'
                  }}>{data.name}</Text>
                  <View style={{
                    flexDirection:'row'
                  }}>
                    <Text style={{
                      color: '#532280',
                      fontSize: 14,
                      fontFamily: 'Montserrat',
                      marginRight:5,
                  }}>{`${data.class} Std.`}</Text>
                    <Text style={{
                    color: '#532280',
                    fontSize: 14,
                    fontFamily:'Montserrat'
                  }}>{`(${data.type})`}</Text>
                  </View>
                </View>
                
              </View>

              <TouchableOpacity onPress={() => handleBirthDayWish( data )}>
                <Text style={{
                  color: '#00BBFF',
                  fontSize: 12,
                  fontWeight: 'bold',
                  fontFamily:'Montserrat'
                }}>Wish</Text>

              </TouchableOpacity>
            </ImageBackground>
          </View>
        )
    }
  

    return (
      <View style={styles.container}>
        {eventList.map( ( each ) => {
          return (
            <RenderEventCard data={each} key={each.id}/>
          )
      } )}
      </View>
    );
}
export default BirthDay;


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:BaseStyle.DEVICE_HEIGHT * 0.02
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: BaseStyle.DEVICE_WIDTH * 0.85,
    borderRadius:16,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor:'#fff',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    
  }
})

