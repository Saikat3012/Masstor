import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Holidays = ({ navigation, props }) => {
    return (
      <View style={styles.container}>
        <Text> Holidays </Text>
      </View>
    );
}
export default Holidays;


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})

