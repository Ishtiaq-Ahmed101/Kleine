// Welcome.js
import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import Button from '../components/shared/Button/Button';
import WelcomeStyles from '../styles/welcome.styles';
import { Link } from 'expo-router';

const Welcome = () => {

  return (
    <ImageBackground
      source={require('../assets/backgrounds/main.png')}
      style={WelcomeStyles.backgroundImage}
    >
      <View style={WelcomeStyles.container}>
        {/* Header */}
        <View style={WelcomeStyles.header}>
          <Image
            source={require('../assets/fragments/half-pie.png')}
            style={WelcomeStyles.headerImage}
          />
          <Text style={WelcomeStyles.headerText}>Kline.</Text>
        </View>

        <View style={WelcomeStyles.mainText}>
          <Text style={WelcomeStyles.heading}>
            The Right Address For Shopping Anyday
          </Text>
          <Text style={WelcomeStyles.subHeading}>
            It is now very easy to reach the best quality among all the
            products on the internet!
          </Text>
        </View>

        {/* Buttons */}
        <View style={WelcomeStyles.buttonView}>
            <Link href="/register" asChild>
                <Button
                    title={'Register'}
                    color={'#000DAE'}
                    textColor={'white'}
                    width={256}
                />
            </Link>
            <Link href="/login" asChild>
                <Button
                    title={'Log In'}
                    color={'#E6E8EF'}
                    textColor={'black'}
                    width={256}
                />
            </Link>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
