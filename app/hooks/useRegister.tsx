import React from 'react'

const useRegister = () => {
    const [firstName, setFirstName] = React.useState('');

    const onSubmit = () => {
        console.log(firstName)
    }
    return { firstName, setFirstName, onSubmit }
}

export default useRegister;