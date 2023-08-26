import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import socket from '../socketConfig';  // Import your socket instance

const FileSelection = () => {

  const initiateTransfer = () => {
    // Emit 'startTransfer' event
    socket.emit('startTransfer', { filename: 'someFile' });
    alert('File transfer initiated!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Select the file you want to transfer.</Text>
      <TouchableOpacity style={styles.button} onPress={initiateTransfer}>
        <Text style={styles.buttonText}>Select File</Text>
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

export default FileSelection;
