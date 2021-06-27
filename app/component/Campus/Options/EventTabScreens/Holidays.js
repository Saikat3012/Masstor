import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";



const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];
const today = new Date() // date of today


  


const Holidays = ( { navigation, props } ) => {

  const holidayList = [
  {
    id: 1,
    date: `${ today.getDate() } ${ monthNames[today.getMonth()] }`,
    event: 'Diwali'
  },
  {
    id: 2,
    date: `${ today.getDate()+2 } ${ monthNames[today.getMonth()] }`,
    event: 'Bhai Dhoj'
  },
]


  const RenderHolidayCard = ( {data} ) => {
        return(
            <View style={styles.card}>
            <Text style={{
              color: '#7C7D7E',
              fontSize: 12,
              fontWeight:'bold'
              }}>{`${data.date } - ${data.event }`}</Text>
            </View>
        )
    }
  

    return (
      <View style={styles.container}>
        {holidayList.map( ( each ) => {
          return (
            <RenderHolidayCard data={each}/>
          )
      } )}
      </View>
    );
}
export default Holidays;


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingLeft: BaseStyle.DEVICE_WIDTH * 0.1,
    paddingTop: BaseStyle.DEVICE_HEIGHT * 0.05
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15
  }
})

