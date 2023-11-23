import React from 'react'
import { Text, View, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

import { LogInStyles } from '../styles/login.styles'
import Button from '../components/shared/Button/Button';




const register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPasword] = React.useState('');

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
            Let's Login.
          </Text>
          <Text>
            or
          </Text>
          <Text style={LogInStyles.subHeading}>
            <Link href="/register">
              Create an account today!              
             </Link>
          </Text>
        </View>
        {/* Inputfields */}
        <SafeAreaView style={LogInStyles.inputContainer}>
          <TextInput
            style={LogInStyles.inputField}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={LogInStyles.inputField}
            onChangeText={setPasword}
            value={password}
            placeholder="Password"
          />
        </SafeAreaView>



        {/* Buttons */}
        <View>
            <Button
              title={'Login'}
              color={'#000DAE'}
              textColor={'white'}
              width={310}
            />
        </View>

      </View>
    </ImageBackground>
  )
}

export default register