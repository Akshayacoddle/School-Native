import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Exam from './pages/Exam';
import Feedback from './pages/Feedback';
import Hallticket from './pages/Hallticket';
import TimeTable from './pages/TimeTable';

import {Provider} from 'react-redux';
import {store} from './redux/store';
import Result from './pages/Result';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="login">
          {/* <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="Home" component={Home} /> */}
          {/* <Stack.Screen name="Exam" component={Exam} /> */}
          {/* <Stack.Screen name="Feedback" component={Feedback} /> */}
          {/* <Stack.Screen name="Hallticket" component={Hallticket} /> */}
          {/* <Stack.Screen name="TimeTable" component={TimeTable} /> */}
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
