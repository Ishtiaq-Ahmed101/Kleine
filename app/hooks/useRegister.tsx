import React from 'react'
import { RegisterUser } from '../services/endpoints/RegisterUser';
import {ToastAndroid} from 'react-native';
import { router } from 'expo-router';
import { axiosClient } from "../services/apiClient";
import { err } from 'react-native-svg/lib/typescript/xml';
import { storeData } from '../utils/storage';



const useRegister = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmit = async () => {

        if (!firstName || !lastName || !email || !password) {
            ToastAndroid.show('Please fill all the required fields', ToastAndroid.LONG);
            return;
        }

        try {
            const response = await axiosClient().post("/users/", {
                firstName,
                lastName,
                email,
                password,
            });
            ToastAndroid.show('Registered Successfully', ToastAndroid.LONG);
            storeData(response.data.data);
            router.replace('/home');
        } catch (error) {
            ToastAndroid.show('Something went wrong! Please try again', ToastAndroid.LONG);
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
        }
    }
    return { setFirstName, setLastName, setEmail, setPassword, onSubmit }
}

export default useRegister;