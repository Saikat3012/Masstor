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
    event: 'Design Webiner'
  },
  {
    id: 2,
    event: 'Mental Helth'
  },
]
  


const Events = ( { navigation, props } ) => {

  const handleEventView = (data) => {
    alert(data.event)
  }




  const RenderEventCard = ( {data} ) => {
        return(
            <View style={styles.card}>
            <Text style={{
              color: '#7C7D7E',
              fontSize: 12,
              fontWeight:'bold'
            }}>{data.event}</Text>
            <TouchableOpacity
              onPress={()=>handleEventView(data)}
            >
                <Text style={{
                color: '#7C7D7E',
                fontSize: 10,
                fontWeight:'bold'
              }}>View</Text>
            </TouchableOpacity>
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
export default Events;


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingLeft: BaseStyle.DEVICE_WIDTH * 0.1,
    paddingTop: BaseStyle.DEVICE_HEIGHT * 0.05
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: BaseStyle.DEVICE_WIDTH * 0.8,
    borderWidth: 0.3,
    borderColor: Colors.pink,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius:16
    
  }
})

