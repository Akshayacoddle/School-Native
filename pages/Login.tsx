import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import urlcalling from '../components/urlcalling';

type Users = {
  rollNumber: string;
  aadharNumber: string;
};

const image = {
  uri: 'https://i.pinimg.com/736x/c3/61/bd/c361bd9511a34b2ec0f93998574fbe9e.jpg',
};

function AdminLogIn() {
  const [data, setData] = useState<Users>({
    rollNumber: '',
    aadharNumber: '',
  });

  const handleChange = (name: string, value: string) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const navigation = useNavigation();

  const handleLogin = async () => {
    urlcalling(`/student/login`, 'POST', data).then(async data => {
      if (!data.success) {
        Alert.alert('Some issue occurred');
      } else {
        const token = JSON.stringify(data.jwtToken);
        const cleanedToken = token.replace(/['"]+/g, '');
        await AsyncStorage.setItem('jwttoken', cleanedToken);
        const storedToken = await AsyncStorage.getItem('jwttoken');
        console.log('Stored token:', storedToken);

        // navigation.navigate('Home');
        Alert.alert('Success');
      }
    });
    // try {
    //   // console.log('Attempting login with data:', data);
    //   const response = await fetch(`http://10.0.2.2:5001/student/login`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   console.log('Response status:', response.status);
    //   const responseData = await response.json();
    //   console.log('Response data:', responseData);

    //   if (responseData.success === true) {
    //     const token = JSON.stringify(responseData.jwtToken);
    //     const cleanedToken = token.replace(/['"]+/g, '');
    //     await AsyncStorage.setItem('jwttoken', cleanedToken);
    //     const storedToken = await AsyncStorage.getItem('jwttoken');
    //     console.log('Stored token:', storedToken);

    //     navigation.navigate('Home');
    //   } else {
    //     console.log('Invalid roll number or aadhar number');
    //     Alert.alert('Error', 'Invalid roll number or aadhar number');
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    //   Alert.alert('Error', 'Something went wrong. Please try again.');
    // }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.header}>{'Login'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Roll Number"
          keyboardType="numeric"
          onChangeText={value => handleChange('rollNumber', value)}
          value={data.rollNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Aadhar Number"
          keyboardType="numeric"
          onChangeText={value => handleChange('aadharNumber', value)}
          value={data.aadharNumber}
        />
        <TouchableWithoutFeedback onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={{fontSize: 20, color: 'white'}}>Log In</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={handleLogin}>
            <View style={styles.adminbutton}>
              <Text style={{fontSize: 20, color: 'gray'}}>Admin logIn</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleLogin}>
            <View style={styles.button}>
              <Text style={{fontSize: 20, color: 'white'}}>Signup</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    marginVertical: 18,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFBF00',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  adminbutton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F6E9B2',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
});

export default AdminLogIn;
