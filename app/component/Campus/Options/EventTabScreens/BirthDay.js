import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const BirthDay = ({ navigation, props }) => {
    return (
      <View style={styles.container}>
        <Text> BirthDay </Text>
      </View>
    );
}
export default BirthDay;


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})



