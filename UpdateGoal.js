import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import { firestore } from './Firebase/Firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const localImage = require('./assets/backgroundImage.jpg');
const logoImage = require('./assets/Logo.jpg');

const UpdateGoal = ({ route, navigation }) => {
  const { goalId } = route.params; // Get the goal ID passed from the GetGoalsScreen
  const [goalType, setGoalType] = useState('');
  const [goalDuration, setGoalDuration] = useState('');
  const [goalTarget, setGoalTarget] = useState('');

  useEffect(() => {
    // Fetch the specific goal details based on the goal ID
    const getGoalDetails = async () => {
      try {
        const goalDoc = await getDoc(doc(firestore, 'goals', goalId));
        if (goalDoc.exists()) {
          const goalData = goalDoc.data();
          setGoalType(goalData.type);
          setGoalDuration(goalData.duration);
          setGoalTarget(goalData.target);
        }
      } catch (error) {
        console.log('Error retrieving goal details:', error);
      }
    };

    getGoalDetails();
  }, [goalId]);

  const handleUpdateGoal = async () => {
    try {
      await updateDoc(doc(firestore, 'goals', goalId), {
        type: goalType,
        duration: goalDuration,
        target: goalTarget,
      });
      console.log('Goal updated');
      navigation.goBack(); // Navigate back to the previous screen (GetGoalsScreen)
    } catch (error) {
      console.log('Error updating goal:', error);
    }
  };

  return (
    <ImageBackground source={localImage} style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
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
      <Button title="Update Goal" onPress={handleUpdateGoal} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginBottom: 80,
    marginRight: 30,
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

export default UpdateGoal;
