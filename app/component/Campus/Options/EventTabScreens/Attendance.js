import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Attendance = ({ navigation, props }) => {
    return (
      <View style={styles.container}>
        <Text> Attendance </Text>
      </View>
    );
}
export default Attendance;


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})

