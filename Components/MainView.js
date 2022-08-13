import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import Login from '../Components/login';
import Register from '../Components/register';
import MainScreen from '../Components/mainScreen';

export const MainView = ({setCurrentUserEmail, setIsLoggedIn, selectedTab, isLoggedIn, currentUserEmail}) => {
    return(
        <View>
            <Login setIsLoggedIn={setIsLoggedIn} setCurrentUserEmail={setCurrentUserEmail}/>
            <Register/>
            <MainScreen tabSelected={selectedTab} isLoggedIn={isLoggedIn} currentUserEmail={currentUserEmail}/>
        </View>
    )
}