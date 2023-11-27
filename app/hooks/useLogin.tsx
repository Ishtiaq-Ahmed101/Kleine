import React from 'react'
import LoginUser from '../services/endpoints/LoginUser'
import {ToastAndroid} from 'react-native';
import { router } from 'expo-router';


const UseLogin = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmit = async () => {
        const response = await LoginUser(email, password);
        if (response.success = true) {
            ToastAndroid.show('Login Successfully', ToastAndroid.LONG);
            router.replace('/home');
        } else {
            ToastAndroid.show('Something went wrong!', ToastAndroid.LONG);
            setEmail("")
            setPassword("")
        }
    }
    return {setEmail, setPassword, onSubmit }
}


export default UseLogin