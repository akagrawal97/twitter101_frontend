import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, Button, Keyboard } from 'react-native';
import { loginService } from '../services/service';

const Login = ({setIsLoggedIn, setCurrentUserEmail}) => {
    const [inputEmail, setInputEmail] = useState('1');
    const [inputPassword, setInputPassword] = useState('1');

    const changeInputEmail = (text) => {
        setInputEmail(text);
    }

    const changeInputPassword = (text) => {
        setInputPassword(text);
    }

    const handleSubmit = async() => {
        setIsLoggedIn(false)
        console.log("Login pressed");
        Keyboard.dismiss();
        var loginResult = null;
        loginService(inputEmail, inputPassword).then((res) => {
            loginResult = res;
            console.log("loginResult in handleSubmit: "+loginResult);
            if(loginResult == 1) {
                setCurrentUserEmail(inputEmail);
                setIsLoggedIn(true);
            }
            else {
                setCurrentUserEmail('');
                setIsLoggedIn(false);
            }
            
        })
        .catch(err => {
            console.log("Error logging in")
        })        
    }

    return (
        <View>
            <TextInput placeholder='Enter your Email' value={inputEmail} onChangeText={(text)=>changeInputEmail(text)}/>
            <TextInput placeholder='Enter your Password' value={inputPassword} onChangeText={(text)=>changeInputPassword(text)}/>
            <Button onPress={handleSubmit} title='Login'/>
        </View>
    )
}
export default Login;