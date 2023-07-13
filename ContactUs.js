import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  timeron,
  time,
} from 'react-native';

export default function Contact() {
  

  const contactImage = require('./assets/contact.png');
  const harisImage = require('./assets/haris.jpg');
  const hassanImage = require('./assets/hassan.jpg');

  return (
    <View style={{backgroundColor: 'white', marginbottom: 50, flex: 1}}>
      <View
        style={{
          backgroundColor: '#b80000',
          padding: 40,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={contactImage}
          style={{resizeMode: 'contain', width: 100}}
        />
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20,
          }}>
          Contact Us
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#cfd8dc',
          marginLeft: 20,
          paddingLeft: -20,
          marginRight: 30,
          marginTop: 20,
          paddingBottom: 20,
          borderRadius: 20,
          paddingTop: -20,
        }}>
        <Image
          source={hassanImage}
          style={{
            resizeMode: 'contain',
            width: 100,
            marginBottom: 50,
            marginTop: 20,
            height: 70,
          }}
        />
        <Text
          style={{
            backgroundColor: '#073276',
            marginLeft: 100,

            marginRight: 20,
            borderRadius: 10,
            color: 'white',
            paddingBottom: 20,

            paddingTop: 20,
            textAlign: 'center',
            marginTop: -120,
          }}>
          Email: hassanamber@icloud.com
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#cfd8dc',
          marginLeft: 20,
          paddingLeft: -20,
          marginRight: 30,
          marginTop: 20,
          paddingBottom: 20,
          borderRadius: 20,
          paddingTop: -20,
        }}>
        <Image
          source={harisImage}
          style={{
            resizeMode: 'contain',
            width: 100,
            marginBottom: 50,
            marginTop: 20,
            height: 70,
          }}
        />
        <Text
          style={{
            backgroundColor: '#073276',
            marginLeft: 100,

            marginRight: 20,
            borderRadius: 10,
            color: 'white',
            paddingBottom: 20,

            paddingTop: 20,
            textAlign: 'center',
            marginTop: -120,
          }}>
          Email: haris01@gmail.com
        </Text>
      </View>



     
    </View>
  );
}
