import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

const localImage = require('./assets/backgroundImage.jpg');
const logoImage = require('./assets/Logo.jpg');

export default function Pullup({ navigation }) {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={localImage}
          style={{ justifyContent: 'center', width: 380, height: 720 }}
        >
          <View>
            <Image
              source={logoImage}
              style={{
                height: 60,
                width: 60,
                alignSelf: 'center',
                marginBottom: 100,
                marginRight: 30,
                marginTop: 0,
              }}
            />
          </View>
          <Text style={styles.text1}>Pull up</Text>
          <View style={{ marginRight: 50, marginLeft: 20 }}>
            <Text style={styles.text2}>
              1. Start with your hands on the bar approximately shoulder-width apart with your palms facing forward.
            </Text>
            <Text style={styles.text2}>
              2. With arms extended above you, stick your chest out and curve your back slightly. That is your starting position.
            </Text>
            <Text style={styles.text3}>5. Repeat.</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginRight: 35,
            }}
          >
            <View>
              <Image
                source={require('./assets/pull1.jpg')}
                style={styles.image1}
              />

              <Image
                source={require('./assets/pull2.jpg')}
                style={styles.image1}
              />
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://thumbs.gfycat.com/LonelyBlondEstuarinecrocodile-max-1mb.gif',
                }}
                style={{ width: 150, height: 205 }}
              />
            </View>
            <View>
              <Image
                source={require('./assets/pull3.jpg')}
                style={styles.image1}
              />

              <Image
                source={require('./assets/pull4.jpg')}
                style={styles.image1}
              />
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Biceps')}
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                marginTop: 20,
              }}
            >
              <Text style={{ textAlign: 'center' }}>More Exercises</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text1: {
    marginTop: -50,
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    color: 'white',
    marginRight: 30,
  },
  text2: {
    fontSize: 20,
    color: 'white',
  },
  text3: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  image1: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});
