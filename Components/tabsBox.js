import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const TabsBox = ({setSelectedTab, isLoggedIn}) => {
  if(!isLoggedIn) {
    return(<View></View>)
  }
  return (
    <View style = {styles.container}>
      <Button onPress={setSelectedTab(0)} title="View Tweets" />
      <Button onPress={setSelectedTab(1)} title="Create Tweets" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  }
})

export default TabsBox;