import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import { MainView } from './Components/MainView';

const App = () => {

  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentUserEmail, setCurrentUserEmail] = useState('');

  useEffect(() => {
    
  }, [isLoggedin, selectedTab])

  return (
    <View>
      <MainView currentUserEmail={currentUserEmail} selectedTab={selectedTab} setCurrentUserEmail={setCurrentUserEmail} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedin}/>
      
    </View>
  )
}
export default App;