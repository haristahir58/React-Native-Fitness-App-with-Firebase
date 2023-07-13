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

const localImage = require('./assets/backgroundImage.jpg');
const logoImage = require('./assets/Logo.jpg');
export default function Shoulder ({navigation}) {
  return (
    <ScrollView>
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
                marginBottom: 100,
                marginRight: 30,
                marginTop: 20,
              }}
            />
          </View>
          <Text style={styles.text1}>Shoulder</Text>
          <View style={{marginRight: 50, marginLeft: 20}}>
            <Text style={styles.text2}>
              Standing, hold dumbbells with your palms facing each other.
            </Text>
            <Text style={styles.text3}>
              Bend your torso forward, forming a 45-Degree angle with the floor.
              With elbows slightly bent, raise the dumbbells up and out to the sides
              until they are parallel to the floor. As you lift the weights, focus
              on squeezing your Shoulder blades together.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',marginRight: 35 }}>
            <View>
              <Image
                source={require('./assets/Capture.jpg')}
                style={styles.image1}
              />

              <Image
                source={require('./assets/Capture1.jpg')}
                style={styles.image1}
              />
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbellshoulderpress-1457041578.gif?resize=1200:*',
                }}
                style={{ width: 150, height: 205 }}
              />
            </View>
            <View>
              <Image
                source={require('./assets/Capture3.jpg')}
                style={styles.image1}
              />

              <Image
                source={require('./assets/Capture5.jpg')}
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
    marginTop: -80,
    marginBottom: 0,
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
  text3: {
    fontSize: 20,
    color: 'white',
    marginBottom: 40,
  },
  image1: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});
