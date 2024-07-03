import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  aadharNumber: string;
  rollNumber: string;
}

const BASE = 'http://10.0.2.2:5001'; // Ensure your BASE URL is correct
console.log('inside url BASE', BASE);

const urlcalling = async (url: string, method: string, data?: any) => {
  try {
    const storedToken = await AsyncStorage.getItem('jwttoken');
    const response = await fetch(`${BASE}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + storedToken,
      },
      body: JSON.stringify(data),
    });
    // console.log('URL RESPONSE', response.status);

    // console.log(response.json());

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    // console.log('result', result);

    return result;
  } catch (error) {
    console.error('Error in urlcalling:', error);
    throw error;
  }
};

export default urlcalling;
