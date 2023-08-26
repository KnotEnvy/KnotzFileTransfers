import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import socket from '../socketConfig';  // Import your socket instance

const Login = ({ navigation }) => {

  const checkDesktopLogin = () => {
    socket.emit('login', { username: 'someUsername' });  // Emit 'login' event
    // Simulate navigation to FileSelection screen for now
    navigation.navigate('FileSelection');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Please log in on your desktop application to proceed.</Text>
      <TouchableOpacity style={styles.button} onPress={checkDesktopLogin}>
        <Text style={styles.buttonText}>Check Login Status</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Login;
