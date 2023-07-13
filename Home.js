import React, { useEffect } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { auth } from './Firebase/Firebase';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const dietImage = require('./assets/diet.png');
  const watchImage = require('./assets/watch.png');
  const searchImage = require('./assets/search.png');
  const workoutImage = require('./assets/workout.png');
  const homeImage = require('./assets/home.png');
  const stopwatchImage = require('./assets/stopwatch.gif');
  const deadliftImage = require('./assets/deadlift.gif');
  const newworkoutImage = require('./assets/newworkout.jpeg');
  const supplementImage = require('./assets/supplement.png');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout}>
          <Image
            source={{
              uri: 'https://www.nicepng.com/png/detail/271-2715115_exit-logout-comments-logout-icon-png-transparent.png',
            }}
            style={{ height: 30, width: 30, marginRight: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => alert(error.message));
  };

  return (
    <ScrollView style={{ backgroundColor: '#cccccc', marginBottom: 50 }}>
      <View
        style={{
          backgroundColor: '#b80000',
          padding: 50,
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={homeImage}
          style={{ resizeMode: 'contain', width: 100 }}
        />
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
          Home
        </Text>
      </View>
      <View style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            marginRight: 220,
            marginLeft: 20,
            marginTop: 50,
            padding: 40,
            borderColor: '#7b1fa2',
            borderWidth: 2,
            paddingTop: 20,
            paddingLeft: 30,
            paddingBottom: 10,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Level')}
        >
          <Image
            source={workoutImage}
            style={{ resizeMode: 'contain', width: 70, marginTop: -10 }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#b80000',
              borderRadius: 10,
              marginTop: 12,
            }}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                width: 90,
              }}
            >
              workout
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            marginRight: 20,
            marginLeft: 220,
            padding: 40,
            borderColor: '#7b1fa2',
            borderWidth: 2,
            paddingTop: 0,
            paddingLeft: 30,
            paddingBottom: 8,
            marginBottom: 200,
            marginTop: -128,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('StopWatch')}
        >
          <Image
            source={watchImage}
            style={{
              resizeMode: 'contain',
              width: 70,
              marginTop: -10,
              marginBottom: -15,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#b80000',
              borderRadius: 10,
              marginTop: -2,
            }}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                width: 90,
              }}
            >
              Timer
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            marginRight: 220,
            marginLeft: 20,
            marginTop: -150,
            padding: 40,
            borderColor: '#7b1fa2',
            borderWidth: 2,
            paddingTop: -5,
            paddingLeft: 30,
            paddingBottom: 0,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('FirstPage')}
        >
          <Image
            source={dietImage}
            style={{ resizeMode: 'contain', width: 70, marginTop: -20 }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#b80000',
              borderRadius: 10,
              marginTop: -15,
              marginBottom: 6,
            }}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                width: 90,
              }}
            >
              Diet Plan
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            marginRight: 20,
            marginLeft: 220,
            marginTop: -125,
            padding: 25,
            borderColor: '#7b1fa2',
            borderWidth: 2,
            paddingTop: 3,
            paddingLeft: 30,
            paddingBottom: -5,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('GoalScreen')}
        >
          <Image
            source={supplementImage}
            style={{ resizeMode: 'contain', width: 70, marginTop: 20 }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#b80000',
              borderRadius: 10,
              marginTop: 15,
              marginBottom: 6,
            }}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                width: 90,
              }}
            >
              Set Goal
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
