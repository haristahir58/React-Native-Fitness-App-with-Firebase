import React from 'react';
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
  timeron,
  SafeAreaView,
  color,
} from 'react-native';

export default function StopWatch({navigation}) {
  const [time, setTime] = React.useState(0);
  const [timeron, setTimeon] = React.useState(false);
  const localImage = require('./assets/backgroundImage.jpg');
  const logoImage = require('./assets/Logo.jpg');
  const pauseImage = require('./assets/pause.jpg');
  const resumeImage = require('./assets/resume.jpg');

  React.useEffect(() => {
    let interval = null;
    if (timeron) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeron]);

  return (
    <View>
      <ImageBackground
        source={localImage}
        style={{justifyContent: 'center', width: 380, height: 720}}>
        <View style={{alignItems: 'center'}}>
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
        <View style={{marginTop: -70, alignItems: 'center'}}>
          <Text
            style={{
              color: '#d7a825',
              fontSize: 40,
              fontStyle: 'italic',
              paddingBottom: 80,
              marginBottom: 30,
              fontWeight: 'bold',
            }}>
          
            StopWatch
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 45,
            marginTop: -100,
            alignItems: 'center',
          }}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 50}}>
          
            {('0' + Math.floor((time / 60000) % 60)).slice(-2)} :
          </Text>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 50}}>
          
            {('0' + Math.floor((time / 1000) % 60)).slice(-2)} :
          </Text>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 50}}>
        
            {('0' + Math.floor((time / 10) % 100)).slice(-2)}
          </Text>
        </View>
        <View style={{marginBottom: 200}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              marginTop: 10,
              borderRadius: 20,
              marginLeft: 80,
              marginRight: 80,
            }}
            onPress={() => setTimeon(true)}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 10,
                paddingBottom: 12,
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                paddingRight: 3,
                paddingLeft: 3,
              }}>
          
              Start
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: -20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                marginTop: 40,
                borderRadius: 100,
                marginLeft: 50,
                borderRightColor: 'white',
                borderStartColor: 'white',
              }}
              onPress={() => setTimeon(false)}>
          
              <Image
                source={pauseImage}
                style={{
                  resizeMode: 'contain',
                  borderRadius: 50,
                  width: 50,
                  marginTop: 0,
                  marginBottom: 0,
                  marginLeft: 8,
                  marginRight: 8,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                marginTop: 40,
                borderRightColor: 'white',
                borderStartColor: 'white',
                borderRadius: 100,
                borderTopColor: 'white',
                borderBottomColor: 'white',
                marginRight: 50,
              }}
              onPress={() => setTimeon(true)}>
        
              <Image
                source={resumeImage}
                style={{
                  resizeMode: 'contain',
                  borderRadius: 25,
                  width: 50,
                  marginLeft: 8,
                  marginRight: 8,
                  paddingRight: 5,
                }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              marginTop: 40,
              borderRadius: 20,
              marginLeft: 120,
              marginRight: 120,
            }}
            onPress={() => setTime(0)}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 10,
                paddingBottom: 12,
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                paddingRight: 6,
              }}>
        
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
