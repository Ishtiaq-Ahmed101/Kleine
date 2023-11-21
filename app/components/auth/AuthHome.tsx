import React from 'react'
import {Text, View, ImageBackground, StyleSheet } from 'react-native';

const AuthHome = () => {
  return (
    <ImageBackground source={require('../../assets/backgrounds/main.png')} style={styles.backgroundImage} >

    <View style={styles.view}>
        <Text>
            hello world
        </Text>
    </View>
    </ImageBackground>
  )
}

export default AuthHome

const styles = StyleSheet.create({
    backgroundImage: {
        width:"100%",
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        
      },
      
    view:{

    }

      
})