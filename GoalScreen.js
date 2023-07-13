import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ImageBackground, Image } from 'react-native';
import { firestore } from './Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const localImage = require('./assets/backgroundImage.jpg');
const logoImage = require('./assets/Logo.jpg');

const GoalScreen = () => {
  const [goalType, setGoalType] = useState('');
  const [goalDuration, setGoalDuration] = useState('');
  const [goalTarget, setGoalTarget] = useState('');

  const navigation = useNavigation();

  const createGoal = async () => {
    try {
      await addDoc(collection(firestore, 'goals'), {
        type: goalType,
        duration: goalDuration,
        target: goalTarget,
      });
      console.log('Goal created successfully');
      Alert.alert('Goal Added Successfully');
      navigation.navigate('GetGoal');
    } catch (error) {
      console.log('Error creating goal:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={localImage} style={styles.imageBackground}>
        <Image source={logoImage} style={styles.logoImage} />
        <TextInput
          style={styles.input}
          placeholder="Goal Type"
          value={goalType}
          onChangeText={setGoalType}
        />
        <TextInput
          style={styles.input}
          placeholder="Goal Duration (in days, weeks, or months)"
          value={goalDuration}
          onChangeText={setGoalDuration}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Goal Target"
          value={goalTarget}
          onChangeText={setGoalTarget}
        />
        <Button title="Set Goal" onPress={createGoal} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoImage: {
    height: 60,
    width: 60,
    marginBottom: 80,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
});

export default GoalScreen;
