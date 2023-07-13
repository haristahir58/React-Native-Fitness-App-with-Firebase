import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const logoImage = require('./assets/Logo.jpg');
const localImage = require('./assets/backgroundImage.jpg');

export default function Basic({ navigation }) {
  const [checked, setChecked] = useState('');

  return (
    <View>
      <ImageBackground source={localImage} style={{ justifyContent: 'center', width: 320, height: 520 }}>
        <View>
          <Image source={logoImage} style={{ height: 60, width: 60, marginLeft: 130 }} />
        </View>
        <Text style={styles.text1}>Basic</Text>

        <View style={styles.radio}>
          <TouchableOpacity
            style={[styles.radioButton, checked === 'third' && styles.radioButtonSelected]}
            onPress={() => setChecked('third')}
          />
          <Text style={styles.text2}>Chin up</Text>
        </View>

        <View style={styles.radio}>
          <TouchableOpacity
            style={[styles.radioButton, checked === 'fourth' && styles.radioButtonSelected]}
            onPress={() => setChecked('fourth')}
          />
          <Text style={styles.text2}>Pull up </Text>
        </View>

        <View style={styles.radio}>
          <TouchableOpacity
            style={[styles.radioButton, checked === 'sixth' && styles.radioButtonSelected]}
            onPress={() => setChecked('sixth')}
          />
          <Text style={styles.text2}>Push up</Text>
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
  text2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginRight: 5,
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
