import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  styles,
  Image,
  flexDirection,
  ImageBackground,
  useState,
} from 'react-native';

export default function Level({navigation}) {
  const localImage = require('./assets/backgroundImage.jpg');
  const logoImage = require('./assets/Logo.jpg');

  const [level, setLevel] = React.useState('');

  return (
    <View style={{}}>
      <ImageBackground
        source={localImage}
        style={{justifyContent: 'center', width: 380, height: 720}}>
        <View style={{marginTop: -250, alignItems: 'center'}}>
          <Image
            source={logoImage}
            style={{
              resizeMode: 'contain',
              width: 50,
              paddingTop: 50,
              marginTop: 100,
            }}
          />
        </View>
        <View style={{marginTop: 0}}>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              fontStyle: 'italic',
              paddingBottom: 80,
              marginBottom: 30,
              fontWeight: 'bold',
              flexDirection: 'row',
              textAlign: 'center',
            }}>
            {' '}
            Select Your
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              fontStyle: 'italic',
              fontWeight: 'bold',
              marginTop: -120,
              flexDirection: 'row',
              textAlign: 'center',
            }}>
            Level
          </Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: -40,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginTop: -20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PushUp')}
              style={{
                color: '#d7a825',
                backgroundColor: '#9f0500',
                borderRadius: 20,
                paddingTop: 30,
                paddingBottom: 30,
                marginTop: 50,
                paddingLeft: 30,
                paddingRight: 30,
                borderWidth: 1,
                borderColor: 'white',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Beginner
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Shoulder')}
              style={{
                color: '#d7a825',
                backgroundColor: '#9f0500',
                borderRadius: 20,
                paddingTop: 30,
                paddingBottom: 30,
                marginTop: 50,
                paddingLeft: 35,
                paddingRight: 35,
                borderWidth: 1,
                borderColor: 'white',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Medium
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              style={{
                color: '#d7a825',
                backgroundColor: 'red',
                borderRadius: 50,
                paddingTop: 17,
                paddingBottom: 25,
                marginTop: 80,
                paddingLeft: 60,
                paddingRight: 60,
                borderWidth: 2,
                borderColor: 'white',
              }}
              onPress={()=>
              navigation.navigate("Back")}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Extreme
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
