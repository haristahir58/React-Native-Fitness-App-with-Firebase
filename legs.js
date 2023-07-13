import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

const localImage = require('./assets/backgroundImage.jpg');
const logoImage = require('./assets/Logo.jpg');

export default function Legs({ navigation }) {
  return (
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
        <Text style={styles.text1}>Legs</Text>
        <View style={{ marginRight: 50, marginLeft: 20 }}>
          <Text style={styles.text2}>
            1. Load a barbell on your traps and stand with your feet shoulder-width apart.
          </Text>
          <Text style={styles.text2}>
            2. Your gaze should be ahead, your chest should be proud, and your toes should be pointed slightly out.
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
              source={require('./assets/leg1.jpg')}
              style={styles.image1}
            />

            <Image
              source={require('./assets/leg2.jpg')}
              style={styles.image1}
            />
          </View>
          <View>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqzSWWUGfvgvONCAE5PqqY3TKlCSA1y_TW-xhScW1MUBMXLSdLxdmGOtx4VJlOVX5EkA&usqp=CAU',
              }}
              style={{ width: 150, height: 205 }}
            />
          </View>
          <View>
            <Image
              source={require('./assets/leg3.jpg')}
              style={styles.image1}
            />

            <Image
              source={require('./assets/leg4.jpg')}
              style={styles.image1}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Thigh')}
          style={{ backgroundColor: 'white' }}
        >
          <Text>More Exercises</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    marginTop: -60,
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
    marginBottom: 30,
  },
  image1: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});
