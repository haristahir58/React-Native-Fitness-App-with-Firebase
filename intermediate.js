import React, { useState } from 'react';
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

export default function Intermediate({ navigation }) {
  const [checked, setChecked] = useState('');

  return (
    <View>
      <ImageBackground
        source={localImage}
        style={{ justifyContent: 'center', width: 320, height: 520 }}
      >
        <View>
          <Image
            source={logoImage}
            style={{
              height: 60,
              width: 60,
              marginLeft: 130,
            }}
          />
        </View>
        <Text style={styles.text1}>Intermediate</Text>

        <View style={styles.radio}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              checked === 'first' && styles.radioButtonSelected,
            ]}
            onPress={() => setChecked('first')}
          />
          <Text style={styles.text2}>Shoulder</Text>
        </View>
        <View style={styles.radio}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              checked === 'second' && styles.radioButtonSelected,
            ]}
            onPress={() => setChecked('second')}
          />
          <Text style={styles.text2}>Triceps</Text>
        </View>
        <View style={styles.radio}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              checked === 'fifth' && styles.radioButtonSelected,
            ]}
            onPress={() => setChecked('fifth')}
          />
          <Text style={styles.text2}>Biceps </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity style={styles.button}>
            <Text>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    color: 'white',
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 30,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  radioButtonSelected: {
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'white',
    width: 120,
    fontWeight: 'bold',
    borderRadius: 9,
    textAlign: 'center',
    margin: 20,
    marginTop: 50,
    padding: 20,
  },
});
