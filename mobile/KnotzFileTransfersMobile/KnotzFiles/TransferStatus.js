import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import socket from '../socketConfig';  // Import your socket instance

const TransfersStatus = () => {

  useEffect(() => {
    socket.on('transferStatus', (status) => {
      // Update the transfer status in the state
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transfer Status</Text>
      <Text style={styles.detail}>File Name: {transfer.fileName}</Text>
      <Text style={styles.detail}>Size: {transfer.size}</Text>
      <Text style={styles.detail}>Progress: {transfer.progress}</Text>
      <Text style={styles.detail}>Status: {transfer.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default TransfersStatus;
