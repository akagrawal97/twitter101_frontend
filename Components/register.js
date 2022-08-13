import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { registerService } from '../services/service';

const Register = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputName, setInputName] = useState('');

    const changeInputEmail = (text) => {
        setInputEmail(text);
    }

    const changeInputName = (text) => {
        setInputName(text);
    }

    const changeInputPassword = (text) => {
        setInputPassword(text);
    }

    const handleSubmit = () => {
        console.log("Register pressed");
        var registerResult = null;
        registerService(inputEmail, inputPassword, inputName).then((res) => {
            registerResult = res;
            console.log("registerResult: "+registerResult);
            if(registerResult == 1)
            alert("register successful")
            else
            alert("register failed")
        })
        .catch(err => {
            console.log("Error registering")
        })
        console.log("registerResult: "+registerResult);
    }

    return (
        <View>
            <TextInput placeholder='Enter your Name' value={inputName} onChangeText={(text)=>changeInputName(text)}/>
            <TextInput placeholder='Enter your Email' value={inputEmail} onChangeText={(text)=>changeInputEmail(text)}/>
            <TextInput placeholder='Enter your Password' value={inputPassword} onChangeText={(text)=>changeInputPassword(text)}/>
            <Button onPress={handleSubmit} title='Register'/>
        </View>
    )
}
export default Register;