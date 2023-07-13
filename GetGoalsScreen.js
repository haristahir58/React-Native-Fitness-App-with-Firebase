import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import { firestore } from './Firebase/Firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const localImage = require('./assets/backgroundImage.jpg');
const logoImage = require('./assets/Logo.jpg');

const GetGoalsScreen = () => {
  const [goals, setGoals] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchGoals = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'goals'));
      const goalsData = [];
      querySnapshot.forEach((doc) => {
        goalsData.push({ id: doc.id, ...doc.data() });
      });
      setGoals(goalsData);
    };

    fetchGoals();
  }, []);

  const handleDeleteGoal = async (id) => {
    try {
      await deleteDoc(doc(firestore, 'goals', id));
      console.log('Goal deleted:', id);
      Alert.alert('Goal Deleted Successfully');
      // Update the goals state after successful deletion
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    } catch (error) {
      console.log('Error deleting goal:', error);
    }
  };

  const handleUpdateGoal = (id) => {
    navigation.navigate('UpdateGoal', { goalId: id });
  };

  return (
    <ImageBackground source={localImage} style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Text style={styles.title}>Goals List</Text>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text>Type: {item.type}</Text>
            <Text>Duration: {item.duration}</Text>
            <Text>Target: {item.target}</Text>
            <Button
              title="Delete"
              onPress={() => handleDeleteGoal(item.id)}
              color="red"
              style={styles.deleteButton}
            />
            <Button
              title="Update"
              onPress={() => handleUpdateGoal(item.id)}
              color="blue"
              style={styles.updateButton}
            />
          </View>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginBottom: 80,
    marginRight: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  goalItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  deleteButton: {
    marginTop: 8,
  },
  updateButton: {
    marginTop: 8,
  },
});

export default GetGoalsScreen;
