import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button,ImageBackground,Image, } from 'react-native';

const localImage = require('./assets/backgroundImage.jpg') 
 const logoImage = require('./assets/Logo.jpg')

  export default function SearchProduct({navigation}) {
    const [checked, setChecked] = React.useState('');
  return (
    <View>
    <ImageBackground
        source={localImage}
        style={{ justifyContent: 'center', width: 380, height: 720}}>
        <View>
          <Image
            source={logoImage}
            style={{
              height: 60,
              width: 60,
              marginLeft: 160,
              marginBottom: 50
            }}
          />
        </View>
      <Text style={styles.text1}>Search Product</Text>

      <TextInput placeholder="Enter name of product" style={styles.input} />
      <TouchableOpacity style={styles.button}><Text style={styles.text2}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.text2} onPress={()=> navigation.navigate("Wishlist")}>WishList</Text>
      </TouchableOpacity>

    

</ImageBackground>

</View>
  );
}


const styles = StyleSheet.create({
  text1: {
    marginTop: 0,
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    color: 'white',
  },
  text2: {
    marginTop: 0,
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
  text3: {
    marginTop: 0,
    marginRight: 150,
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
  button: {
    borderRadius: 30,
    margin : 20,
    padding: 10,
    color: "white",
    backgroundColor: "blue",
    width: 120,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20
  },
  input: {
    color: "WHITE",
    borderBottomColor: "white",
    borderBottomWidth: 2.5,
    fontSize:20,
  },
});
