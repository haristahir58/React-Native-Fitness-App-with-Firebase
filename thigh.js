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
export default function Thigh ({navigation}) {
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
              marginTop: 0,
            }}
          />
        </View>
        <Text style={styles.text1}>Thigh</Text>
        <View style={{ marginRight: 50, marginLeft: 20 }}>
          <Text style={styles.text2}>
            1.  Stand with feet together and arms by sides. Shuffle swiftly to the right by taking three quick steps to the side (right foot, left foot, right foot).
          </Text>
          <Text style={styles.text2}>2. At the last step, lift left knee up with right knee bent, swinging right arm forward.</Text>
          <Text style={styles.text3}>3. Repeat.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginRight: 35,
          }}>
          <View>
            <Image
              source={require('./assets/thigh1.jpg')}
              style={styles.image1}
            />

            <Image
              source={require('./assets/thigh2.jpg')}
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
              source={require('./assets/thigh3.jpg')}
              style={styles.image1}
            />

            <Image
              source={require('./assets/thigh4.jpg')}
              style={styles.image1}
            />
          </View>
        </View><View>
        <TouchableOpacity
        onPress={()=> navigation.navigate("Level")} style={{backgroundColor:"white"}}>
          <Text>Change Level </Text></TouchableOpacity>
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
    marginBottom: 30,
  },
  image1: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});
