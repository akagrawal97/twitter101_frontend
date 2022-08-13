import React, {useState} from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { tweetService } from '../services/service';

const CreateTweets = ({currentUserEmail}) => {

    const [inputTweet, setInputTweet] = useState('');

    const changeinputTweet = (text) => {
        setInputTweet(text);
    }

    const handleTweet = () => {
        console.log("Tweet it pressed");
        console.log("current User: "+currentUserEmail);
        var tweetResult = null;
        tweetService(currentUserEmail, inputTweet).then((res) => {
            tweetResult = res;
            console.log("tweetResult: "+tweetResult);
            if(tweetResult == 1)
            alert("tweet added successfully")
            else
            alert("can not be tweeted")
        })
        .catch(err => {
            console.log("Error tweeting: "+err)
            alert("error tweeting")
        })
        console.log("tweetResult: "+tweetResult);
    }
    return (
        <View>
        <TextInput placeholder='Enter your tweet' value={inputTweet} onChangeText={(text)=>changeinputTweet(text)}/>
        <Button onPress={handleTweet} title='Tweet it'/>
        </View>
    )
}
export default CreateTweets;