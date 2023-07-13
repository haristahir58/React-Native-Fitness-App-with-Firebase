import React, { useState } from 'react';
import { Text, View, TextInput, CheckBox, TouchableOpacity, Button, ImageBackground, Image, ScrollView } from 'react-native';

const FirstPage = ({ navigation }) => {
  const [checked, setChecked] = useState('');
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(20);
  const [height, setHeight] = useState('');
  const [calories, setCalories] = useState();

  const logoImage = require('./assets/Logo.jpg');
  const bgImage = require('./assets/backgroundImage.jpg');

  return (
    <ImageBackground source={bgImage} style={{ justifyContent: 'center', width: 380, height: 650 }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', backgroundColor: '#41454B', height: 150 }}>
            <Image source={logoImage} style={{ height: 60, width: 60, marginTop: 20 }} />
            <Text style={{ color: 'white', fontSize: 30, paddingTop: 10 }}>Diet Plan</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                backgroundColor: '#41454B',
                marginLeft: 30,
                padding: 30,
                marginTop: 30,
                width: 110,
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  checked === 'male' && styles.radioButtonSelected,
                ]}
                onPress={() => {
                  setChecked('male');
                  setCalories(2500);
                }}
              />
              <Text style={{ color: 'white', paddingTop: 8, fontWeight: 'bold' }}>Male</Text>
            </View>
            <View
              style={{
                backgroundColor: '#41454B',
                marginLeft: 50,
                marginRight: 30,
                padding: 30,
                marginTop: 30,
                width: 110,
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  checked === 'female' && styles.radioButtonSelected,
                ]}
                onPress={() => {
                  setChecked('female');
                  setCalories(2000);
                }}
              />
              <Text style={{ color: 'white', paddingTop: 8, fontWeight: 'bold' }}>Female</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                backgroundColor: '#41454B',
                marginLeft: 30,
                padding: 30,
                marginTop: 30,
                width: 110,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', paddingBottom: 10, fontWeight: 'bold' }}>Weight</Text>
              <Text style={{ color: 'white', paddingBottom: 10 }}>{weight}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Button
                  title="-"
                  onPress={() => {
                    setWeight(weight - 1);
                    setCalories(calories - 10);
                  }}
                />
                <Button
                  title="+"
                  onPress={() => {
                    setWeight(weight + 1);
                    setCalories(calories + 10);
                  }}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#41454B',
                marginLeft: 50,
                marginRight: 30,
                padding: 30,
                marginTop: 30,
                width: 110,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', paddingBottom: 10, fontWeight: 'bold' }}>Age</Text>
              <Text style={{ color: 'white', paddingBottom: 10 }}>{age}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Button
                  title="-"
                  onPress={() => {
                    setAge(age - 1);
                    setCalories(calories - 20);
                  }}
                />
                <Button
                  title="+"
                  onPress={() => {
                    setAge(age + 1);
                    setCalories(calories + 20);
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: '#41454B', margin: 30, padding: 20, alignItems: 'center' }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Height</Text>
            <TextInput
              style={{ backgroundColor: '#425A7E', fontSize: 10, padding: 10, color: 'white' }}
              placeholder="Enter height in cm"
              onChangeText={setHeight}
            />
          </View>

          <Button
            title="Calculate"
            onPress={() => {
              navigation.navigate('SecondPage', {
                calories: calories,
              });
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = {
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
};

export default FirstPage;
