// using manay thing from the login page but this is registers page.

import React from 'react'
import { Text, View, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

import { LogInStyles } from '../styles/login.styles'
import Button from '../components/shared/Button/Button';




const register = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ImageBackground
      source={require('../assets/backgrounds/main.png')}
      style={LogInStyles.backgroundImage}
    >
      <View style={LogInStyles.container}>
        {/* Header */}
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
          <Text style={LogInStyles.subHeading}>
            Do you have an account? Login
          </Text>
        </View>
        {/* Inputfields */}
        <SafeAreaView style={LogInStyles.inputContainer}>
          <TextInput
            style={LogInStyles.inputField}
            onChangeText={setFirstName}
            value={firstName}
            placeholder="First Name"
          />
          <TextInput
            style={LogInStyles.inputField}
            onChangeText={setLastName}
            value={lastName}
            placeholder="Last Name"
          />
          <TextInput
            style={LogInStyles.inputField}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={LogInStyles.inputField}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
          />
        </SafeAreaView>



        {/* Buttons */}
        <View style={LogInStyles.btnConatiner}>
          <Link href="/" asChild>
            <Button
              title={'Register'}
              color={'#000DAE'}
              textColor={'white'}
              width={310}
            />
          </Link>
        </View>

        {/* Social links */}
        <View style={LogInStyles.socialLinksContainer}>
          <Link href={"#"} style={LogInStyles.socialLink}><Image style={LogInStyles.socialIcon} source={require('../assets/icons/facebook.png')} />    Facebook</Link>
          <Link href={"#"} style={LogInStyles.socialLink}><Image style={LogInStyles.socialIcon} source={require('../assets/icons/gmail.png')} />    Gmail</Link>
        </View>

      </View>
    </ImageBackground>
  )
}

export default register