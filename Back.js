import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
const localImage = require('./assets/backgroundImage.jpg') 
 const logoImage = require('./assets/Logo.jpg')
export default function Back({navigation}) {
  return (
    <View>
      <ImageBackground
        source={localImage}
        style={{ justifyContent: 'center', width: 380, height: 720 }}>
        <View>
          <Image
            source={logoImage}
            style={{
              height: 60,
              width: 60,
              alignSelf: 'center',
              marginBottom: 100,
              marginRight: 30,
              marginTop: 10,
            }}
          />
        </View>
        <Text style={styles.text1}>Back</Text>
        <View style={{ marginRight: 50, marginLeft: 20 }}>
          <Text style={styles.text2}>
            1. Grasp the bar with an overhand grip. Fully extend your arms and relax your shoulders to stretch your lats in the bottom position.
          </Text>
         
          <Text style={styles.text2}>
            3. Pull yourself up as high as possible to fully stimulate your lats.
          </Text>
          
          <Text style={styles.text3}>5. Repeat.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginRight: 35,
          }}>
          <View>
            <Image
              source={require('./assets/back1.jpg')}
              style={styles.image1}
            />

            <Image
              source={require('./assets/back2.jpg')}
              style={styles.image1}
            />
          </View>
          <View>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              style={{ width: 150, height: 205 }}
            />
          </View>
          <View>
            <Image
              source={require('./assets/back3.jpg')}
              style={styles.image1}
            />

            <Image
              source={require('./assets/back4.jpg')}
              style={styles.image1}
            />
          </View>
        </View>
<View style={{ justifyContent: 'center', alignItems: 'center' }}>
  <TouchableOpacity
    onPress={() => navigation.navigate('Leg')}
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
  );
}

const styles = StyleSheet.create({
  text1: {
    marginTop: -80,
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
    marginBottom: 10,
  },
  image1: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
