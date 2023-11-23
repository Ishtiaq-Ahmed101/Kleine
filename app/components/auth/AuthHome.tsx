import React from 'react'
import {Text, View, ImageBackground, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Btn from '../shared/Button/Button';


const AuthHome = () => {
    function onPress(){
        console.log('pressed')
    }
  return (
    <ImageBackground source={require('../../assets/backgrounds/main.png')} style={styles.backgroundImage} >

    <View style={styles.view}>
        <View style={styles.textview}>
            <Image source={require('../../assets/fragments/half-pie.png')} style={styles.textviewImg}/>
        <Text style={styles.textviewText}>
            Kline.
        </Text>
        </View>
        {/* main text */}
        <View style={styles.mainText}>
            <Text style={styles.mainText1}>
            The Right Address  {'\n'}
            For Shopping  {'\n'}
            Anyday {'\n'}

            </Text>
            <Text style={styles.mainText2}>
            It is now very easy to reach the{'\n'} best quality among all the{'\n'} products on the internet!

            </Text>
        </View>
        {/* buttonsview */}
        <View style={styles.buttonview}>
        <Btn title={'Register'} color={'#000DAE'}  onpress={onPress} textcolor={"white"}  />
        <Btn title={'Log In'} color={'#E6E8EF'} onpress={onPress} textcolor={"black"}  />
        </View>


       
    </View>
    </ImageBackground>
  )
}

export default AuthHome

const styles = StyleSheet.create({
    backgroundImage: {
        width:"100%",
        height:'100%',
        
      },
      
    view:{
        width:"100%",
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        gap:50,

    },
    textview:{
        display:"flex",
        flexDirection:'row',
        gap:8,
        justifyContent:'center',
        alignItems:'center'

    },
    textviewImg:{
        height:16.02,
        width:16.02,
        marginTop:5,
    },
    textviewText:{
        fontSize:25,
    },

    // main text styles
    mainText:{
        height:214,
        width:304,
        
        alignItems:'center',
        textAlign:'center',
    },
    mainText1:{
        fontSize:30,
        textAlign:'center'
    },
    mainText2:{
        textAlign:"center",

    },
    // buttons
    buttonview:{
        display:'flex',
        flexDirection: 'column',
        gap:10,
        alignItems:'center',
    },
})