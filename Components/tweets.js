import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, FlatList, Button } from 'react-native';
import { getAllTweets } from '../services/service';

const Tweets = () => {

  const renderItem = ({ item }) => {

    return (
      <View>
        <Text>{item.message}</Text>
      </View>
    );
  };


  const [allTweets, setAllTweets] = useState([{message: "Hello World!!"},
  {message: "Hi World!!"},
  {message: "how are you"},
  {message: "Heyy"}]);

  const fetchAllTweets = () => {
    getAllTweets().then((response) => {
      
      console.log("res: "+JSON.stringify(response));
      if(response == null)
      console.log("null received in tweets.js");
      else
      console.log("response in tweets.js: "+response);
      setAllTweets(response);
    }, (err) => {
      if(err) {
        console.log("err1111: "+err);
      }
    })
    .catch(err => {
      console.log("cant fetch for all tweets: "+err);
    })
  }

  return (
    <View>
      <Button title='fetch all tweets' onPress={fetchAllTweets}></Button>
      <FlatList data={allTweets} renderItem={renderItem} ></FlatList>
    </View>
  )
}


export default Tweets;