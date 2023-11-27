import React from 'react'
import { RegisterUser } from '../services/endpoints/user';
import {ToastAndroid} from 'react-native';
import { router } from 'expo-router';



const useRegister = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmit = async () => {
        const response = await RegisterUser(firstName, lastName, email, password);
        if (response.success = true) {
            ToastAndroid.show('Register Successfully', ToastAndroid.LONG);
            router.replace('/home');
        } else {
            ToastAndroid.show('Something went wrong!', ToastAndroid.LONG);
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
        }
    }
    return { setFirstName, setLastName, setEmail, setPassword, onSubmit }
}

export default useRegister;