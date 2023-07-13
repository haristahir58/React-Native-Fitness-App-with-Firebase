import React, {useEffect}from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {auth} from './Firebase/Firebase';

import StopWatch from './stopwatch';
import Home from './Home';
import Back from './Back';
import Basic from './basic';
import Biceps from './biceps';
import Chinup from './chinup';
import Extreme from './extreme';
import Intermediate from './intermediate';
import Legs from './legs';
import Pullup from './pullup';
import Pushup from './pushup';
import SearchProduct from './searchProduct';
import Shoulder from './shoulder';
import Thigh from './thigh';
import Wishlist from './wishList';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Level from './level';
import Contact from './ContactUs'
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './LoginScreen';
import GoalScreen from './GoalScreen';
import GetGoalsScreen from './GetGoalsScreen';
import UpdateGoal from './UpdateGoal';



export default function App() {
// useEffect( () => {
//     SplashScreen.name
//   },[]);
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Login'>
        <Stack.Screen name="StopWatch" component={StopWatch} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Level" component={Level} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Basic" component={Basic} />
        <Stack.Screen name="Intermediate" component={Intermediate} />
        <Stack.Screen name="Extreme" component={Extreme} />
        <Stack.Screen name="Shoulder" component={Shoulder} />
        <Stack.Screen name="Back" component={Back} />
        <Stack.Screen name="Biceps" component={Biceps} />
        <Stack.Screen name="Chinup" component={Chinup} />
        <Stack.Screen name="PullUp" component={Pullup} />
        <Stack.Screen name="PushUp" component={Pushup} />
        <Stack.Screen name="Leg" component={Legs} />
        <Stack.Screen name="Thigh" component={Thigh} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="SearchProduct" component={SearchProduct} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="GoalScreen" component={GoalScreen} />
        <Stack.Screen name="GetGoal" component={GetGoalsScreen} />
        <Stack.Screen name="UpdateGoal" component={UpdateGoal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
