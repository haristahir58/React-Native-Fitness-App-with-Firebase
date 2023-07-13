import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';


const localImage = require('./assets/backgroundImage.jpg') 
 const logoImage = require('./assets/Logo.jpg')
export default function Wishlist ({navigation}) {
  return (
    <View>
      <ImageBackground
        source={localImage}
        style={{ justifyContent: 'center', width: 380, height: 720}}>
        <View>
          <Image
            source={logoImage}
            style={{
              resizeMode: 'contain',
              width: 60,
              marginLeft: 160,
              marginTop: -80
            }}
          />
        </View>

        <Text style={styles.text1}>Wish List</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text2}>Weign Protein</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              alert('Weigh Protein will be removed from Whish List');
            }}>
           <Text>
            Remove</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text2}>Serious Mass</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              alert('Serious Mass will be removed from Whish List');
            }}>
              <Text>
            Remove</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text2}>Lipo</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              alert('lipo will be removed from Whish List');
            }}>
           <Text>
            Remove</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity style={styles.button1}><Text>
            Back</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
          <Text>
          Place Order</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    color: 'white',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    paddingLeft: 15,
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    fontWeight: 'bold',
    borderRadius: 15,
    textAlign: 'center',
    margin: 8,
    padding: 8,
    color: 'white',
  },
  button1: {
    backgroundColor: 'blue',
    width: 100,
    fontWeight: 'bold',
    borderRadius: 15,
    textAlign: 'center',
    margin: 8,
    padding: 8,
    marginTop: 50,
    color: 'white',
  },
});
