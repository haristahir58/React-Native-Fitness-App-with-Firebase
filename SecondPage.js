import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, CheckBox, TouchableOpacity, Button} from 'react-native';



const SecondPage = ({route}) => {
  const [checked, setChecked] = React.useState('');
  const [weight,setWeight]=React.useState(70);
  const [age,setAge]=React.useState(20);
  const [height,setHeight]=React.useState('');
  const [proteins, setProteins] = React.useState();
  const [carbs, setCarbs] = React.useState();
  const [fats, setFats] = React.useState();
  const { calories } = route.params;

useEffect(() => {
  setProteins(calories*0.03);
  setCarbs(calories*0.06);
  setFats(calories*0.01);
}, [calories])

  return (
    <View style={{backgroundColor: "black", flex:1}}>
      <View style={{alignItems:"center", backgroundColor: "#41454B", height: 110}}>
        <Text style={{color:"white", fontSize: 30,paddingTop:20}}>Diet Plan</Text>
      </View>

      <Text style={{color:"white", fontSize:30, paddingTop:20}}>Prescribed Plan:</Text>

      <View style={{alignItems:"center", margin:15,backgroundColor:"#41454B"}}>
        <Text style={{color:"white", fontSize:15, paddingTop:20}}>Intake this amount of Nutrients per day:</Text>
        
        <View style={{backgroundColor:"#252B34", width:270, padding:10, marginTop:20, marginBottom:20}}>
          <Text style={{color:"red", fontSize:20}}>Protein: {proteins} </Text>
        </View>
          
        <View style={{backgroundColor:"#252B34", width:270, padding:10, marginTop:20, marginBottom:20}}>
          <Text style={{color:"yellow", fontSize:20}}>Carbohydrate:{carbs}</Text>
        </View>

        <View style={{backgroundColor:"#252B34", width:270, padding:10, marginTop:20, marginBottom:20}}>
          <Text style={{color:"#50E91B", fontSize:20}}>Fat: {fats}</Text>
        </View>

        <View style={{backgroundColor:"#252B34", width:270, padding:10, marginTop:20, marginBottom:20}}>
          <Text style={{color:"#1BC1E9", fontSize:20}}>Calories: {calories}</Text>
        </View>
        

      </View>
    </View>
  );
}
export default SecondPage;