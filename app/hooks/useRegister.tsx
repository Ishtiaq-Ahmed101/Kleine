import React from 'react'
import { RegisterUser } from '../services/endpoints/user';

const useRegister = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmit = () => {
        RegisterUser(firstName, lastName, email, password)
    }
    return { setFirstName, setLastName, setEmail, setPassword, onSubmit }
}

export default useRegister;