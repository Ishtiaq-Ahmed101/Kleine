import React from 'react'
import LoginUser from '../services/endpoints/LoginUser'
import {ToastAndroid} from 'react-native';
import { router } from 'expo-router';
import { axiosClient } from "../services/apiClient";


const UseLogin = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmit = async () => {
        if (!email || !password) {
            ToastAndroid.show('Please fill the required fields', ToastAndroid.LONG);
            setEmail("")
            setPassword("")
            return;
        }
        try {
            const response = await axiosClient().post("/users/login/", {
                email,
                password,
            });
            ToastAndroid.show('Login Successfully', ToastAndroid.LONG);
            router.replace('/home');
        } catch (error) {
            ToastAndroid.show('Something went wrong!', ToastAndroid.LONG);
            setEmail("")
            setPassword("")
        }
    }
    return {email, setEmail, password, setPassword, onSubmit }
}


export default UseLogin