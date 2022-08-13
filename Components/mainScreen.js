import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Tweets from './tweets';
import CreateTweets from './createTweet';

const MainScreen = ({tabSelected, isLoggedIn, currentUserEmail}) => {
  // if(!isLoggedIn) {
  //   return(<Text>Please Login first</Text>)
  // }
  // else if(tabSelected == 0) {
  //   return(<Tweets/>)
  // }
  // else {
  //   return(<CreateTweets currentUserEmail={currentUserEmail}/>)
  // }
if(!isLoggedIn) {
  return(<Text>Please Login first</Text>)
}
  return(
    <View>
      <CreateTweets currentUserEmail={currentUserEmail} />
      <Tweets></Tweets>
    </View>
  )
}
export default MainScreen;