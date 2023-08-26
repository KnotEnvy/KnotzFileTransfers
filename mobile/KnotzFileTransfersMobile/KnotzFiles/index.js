import io from "socket.io-client";
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';  // Import the Login screen
import FileSelection from './screens/FileSelection';  // Import the File Selection screen
import TransferStatus from './screens/TransferStatus';  // Import the Transfer Status screen

const Stack = createNativeStackNavigator();

// Initialize Socket.io
const socket = io("http://localhost:3000");

const App = () => {
  // Use useEffect to manage the Socket.io connection lifecycle
  useEffect(() => {
    // Connect to the Socket.io server
    socket.connect();

    // Disconnect from the Socket.io server when the component is unmounted
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FileSelection" component={FileSelection} />
        <Stack.Screen name="TransferStatus" component={TransferStatus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
