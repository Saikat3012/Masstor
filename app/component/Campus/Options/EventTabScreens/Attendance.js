import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";



  const eventList = [
  {
    id: 1,
    event: 'English',
    color:'#00BBFF'
  },
  {
    id: 2,
    event: 'Science',
    color:'#00BBFF'
  },
  {
    id: 3,
    event: 'Social',
    color:'#FF0000'
  },
  {
    id: 4,
    event: 'Hindi',
    color:'#00BBFF'
  },
  {
    id: 5,
    event: 'Maths',
    color:'#FF0000'
  },
  {
    id: 6,
    event: 'Moral',
    color:'#00BBFF'
  },
]
  


const Attendance = ( { navigation, props } ) => {

  const handleAttendanceView = (data) => { // handels attendence view click
    alert(data.event)
  }




  const RenderAttendanceCard = ( {data} ) => {
        return(
          <View style={styles.card}>
            <View style={{
                backgroundColor: data.color,
                height: 6,
                width: 6,
                borderRadius: 10,
                marginRight:5
              }}/>
            <View style={styles.subCard}>
                <Text style={{
                  color: '#7C7D7E',
                  fontSize: 12,
                  fontWeight:'bold'
                }}>{data.event}</Text>
                <TouchableOpacity
                  onPress={()=>handleAttendanceView(data)}
                >
                    <Text style={{
                    color: '#7C7D7E',
                    fontSize: 10,
                    fontWeight:'bold'
                  }}>View</Text>
                </TouchableOpacity>
            </View>
          </View>
        )
    }
  

    return (
      <View style={styles.container}>
        <View style={styles.imageBackgroundStyle}>
          <ImageBackground
            source={Images.logo}
            style={{
                justifyContent: 'space-between',
                width: BaseStyle.DEVICE_WIDTH * 0.8,
                flexWrap: 'wrap',
                paddingVertical: 20,
                flexDirection: 'row',
                paddingLeft: 20
                
            }}
            imageStyle={{
                resizeMode: 'contain',
                width: BaseStyle.DEVICE_WIDTH *0.8 ,
                transform: [{ rotate: '320deg' }],
                marginLeft: BaseStyle.DEVICE_WIDTH * 0.2,
                marginTop: BaseStyle.DEVICE_WIDTH * 0.2
            }}
          >

            {eventList.map( ( each ) => {
              return (
                <RenderAttendanceCard data={each} key={each.id}/>
              )
            } )}
              <View style={{
                alignSelf: 'flex-end',
                }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginEnd: 5
                    
                }}>
                    <View style={{
                        height: 6,
                        width: 6,
                        backgroundColor: '#00BBFF',
                        borderRadius: 10,
                        marginRight:4
                    }} />
                    <Text style={{
                        color: '#7C7D7E',
                        fontSize: 8,
                        fontWeight:'bold'
                    }}>Attended</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        height: 6,
                        width: 6,
                        backgroundColor: '#FF0000',
                        borderRadius: 10,
                        marginRight:4
                    }} />
                    <Text style={{
                        color: '#7C7D7E',
                        fontSize: 8,
                        fontWeight:'bold'
                    }}>Absent</Text>
                </View>
              </View>
          </ImageBackground>
          </View>
      </View>
    );
}
export default Attendance;


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: BaseStyle.DEVICE_HEIGHT * 0.01,
    alignItems:'center'
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    borderColor: Colors.pink,
    paddingHorizontal: 15,
    paddingVertical: 8,
    
  },
  subCard: {
    flexDirection: 'row',
    width: BaseStyle.DEVICE_WIDTH * 0.28,
    justifyContent:'space-between',
  },
  imageBackgroundStyle:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: 15,
    width:BaseStyle.DEVICE_WIDTH * 0.9
  }
})

