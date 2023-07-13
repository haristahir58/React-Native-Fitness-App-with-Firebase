import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

const localImage = require('./assets/backgroundImage.jpg') 
 const logoImage = require('./assets/Logo.jpg')
export default function Pushup ({navigation}) {
  return (
    <View>
      <ScrollView>
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
                marginTop: -120,
              }}
            />
          </View>
          <Text style={styles.text1}>Push up</Text>
          <View style={{ marginRight: 50, marginLeft: 20 }}>
            <Text style={styles.text2}>
              1. Get down on all fours, placing your hands slightly wider than your shoulders.
            </Text>
            <Text style={styles.text2}>          
2. Straighten your arms and legs.</Text><Text style={styles.text2}>
3. Lower your body until your chest nearly touches the floor.</Text><Text style={styles.text2}>
4. Pause, then push yourself back up.</Text><Text style={styles.text3}>
5. Repeat.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginRight: 35,
            }}>
            <View>
              <Image
                source={require('./assets/push1.jpg')}
                style={styles.image1}
              />

              <Image
                source={require('./assets/push2.jpg')}
                style={styles.image1}
              />
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://thumbs.gfycat.com/GlossySkinnyDuckbillcat-max-1mb.gif',
                }}
                style={{ width: 150, height: 205 }}
              />
            </View>
            <View>
              <Image
                source={require('./assets/push3.jpg')}
                style={styles.image1}
              />

              <Image
                source={require('./assets/push4.jpg')}
                style={styles.image1}
              />
            </View>
          </View>
<View style={{ justifyContent: 'center', alignItems: 'center' }}>
  <TouchableOpacity
    onPress={() => navigation.navigate('PullUp')}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    marginTop: -10,
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
    marginBottom: 80,
  },
  image1: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});