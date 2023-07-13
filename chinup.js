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
export default function Biceps ({navigation}) {
  return (
    <View>
     <ImageBackground
        source={localImage}
        style={{ justifyContent: 'center', width: 380, height: 720, }}>
        <View>
          <Image
            source={logoImage}
            style={{
              height: 60,
              width: 60,
              alignSelf: "center",
              marginBottom: 80,
              marginRight: 30,
             
            }}
          />
        </View>
        <Text style={styles.text1}>Biceps</Text>
      <View style={{marginRight: 50, marginLeft: 20}}>
        <Text style={styles.text2}>
          Stand straight while doing this exercise.    
        </Text>
        <Text style={styles.text3}>
           1. Hold a pair of dumbbells by your side while standing up straight and upper back engaged. </Text><Text style={styles.text3}>
2. Curl the dumbbells up towards your shoulders while rotating your forearms so your palms are facing your shoulders.</Text>
      </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',marginRight: 35 }}>
          <View>
            <Image
              source={require('./assets/bicep1.jpg')}
              style={styles.image1}
            />

            <Image
              source={require('./assets/bicep2.jpg')}
              style={styles.image1}
            />
          </View>
          <View>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/34/ad/48/34ad48265227d1741ea2943068f0facd.gif',
              }}
              style={{ width: 150, height: 205 }}
            />
          </View>
          <View>
            <Image
              source={require('./assets/bicep3.jpg')}
              style={styles.image1}
            />

            <Image
              source={require('./assets/bicep4.jpg')}
              style={styles.image1}
            />
          </View>
        </View>
<View style={{ justifyContent: 'center', alignItems: 'center' }}>
  <TouchableOpacity
    onPress={() => navigation.navigate('Level')}
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
    marginTop: -70,
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    color: 'white',
    marginRight: 30
  },
  text2: {
    fontSize: 20,
    color: 'white',
  },
  text4: {
    fontSize: 20,
    color: 'white',
    marginBottom: 50,
  },
    text3: {
    fontSize: 20,
    color: 'white',
  },
  image1: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});