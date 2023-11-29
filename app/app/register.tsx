import React from 'react'
import { useEffect } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { LogInStyles } from '../styles/login.styles'
import Button from '../components/shared/Button/Button';
import { Link } from 'expo-router';
import useRegister from '../hooks/useRegister';
import axios from 'axios';


const register = () => {
  
  const {setFirstName, setLastName, setEmail, setPassword, onSubmit } = useRegister()
  
  return (
    <ImageBackground
      source={require('../assets/backgrounds/main.png')}
      style={LogInStyles.backgroundImage}
    >
      <View style={LogInStyles.container}>
        <View style={LogInStyles.header}>
          <Image
            source={require('../assets/fragments/half-pie.png')}
            style={LogInStyles.headerImage}
          />
          <Text style={LogInStyles.headerText}>Kline.</Text>
        </View>
        <View style={LogInStyles.mainText}>
          <Text style={LogInStyles.heading}>
            Let's Register.
          </Text>
          <Link href="/login">
            <Text style={LogInStyles.subHeading}>
              Already have an account? Login
            </Text>
          </Link>
        </View>
        <SafeAreaView style={LogInStyles.inputContainer}>
          <TextInput
            style={LogInStyles.inputField}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
          <TextInput
            style={LogInStyles.inputField}
            onChangeText={setLastName}
            placeholder="Last Name"
          />
          <TextInput
            style={LogInStyles.inputField}
            onChangeText={setEmail}
            placeholder="Email"
            inputMode='email'
          />
          <TextInput
            style={LogInStyles.inputField}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            />
        </SafeAreaView>
        <View>
            <Button
              title={'Register'}
              color={'#000DAE'}
              textColor={'white'}
              width={310}
              onPress={onSubmit}
            />
        </View>
      </View>
    </ImageBackground>
  )
}

export default register